from transformers import pipeline
import torch
from sentence_transformers import SentenceTransformer, util

class AIAnalyzer:
    def __init__(self):
        self.sentiment_analyzer = pipeline("sentiment-analysis")
        self.text_classifier = pipeline("zero-shot-classification")
        self.embedding_model = SentenceTransformer('all-MiniLM-L6-v2')

    def analyze_reviews(self, reviews, preferences):
        results = []
        
        for review in reviews:
            # Analyze sentiment
            sentiment = self.sentiment_analyzer(review['text'])[0]
            
            # Check if review matches user preferences
            preference_scores = self.check_preferences(review['text'], preferences)
            
            result = {
                'review': review['text'],
                'sentiment': sentiment['label'],
                'confidence': sentiment['score'],
                'preference_match': preference_scores
            }
            results.append(result)
        
        return results

    def check_preferences(self, text, preferences):
        # Convert preferences to classification labels
        labels = list(preferences.keys())
        
        # Perform zero-shot classification
        classification = self.text_classifier(text, labels)
        
        return dict(zip(classification['labels'], classification['scores']))

    def generate_recommendations(self, analyzed_reviews, preferences):
        # Calculate overall scores
        recommendations = []
        
        for place, reviews in analyzed_reviews.items():
            score = self.calculate_recommendation_score(reviews, preferences)
            recommendations.append({
                'place': place,
                'score': score,
                'matching_preferences': self.get_matching_preferences(reviews, preferences)
            })
        
        # Sort by score
        recommendations.sort(key=lambda x: x['score'], reverse=True)
        return recommendations[:5]  # Return top 5 recommendations

    def calculate_recommendation_score(self, reviews, preferences):
        total_score = 0
        for review in reviews:
            # Weight by sentiment
            sentiment_weight = 1.5 if review['sentiment'] == 'POSITIVE' else 0.5
            
            # Calculate preference match score
            pref_score = sum(review['preference_match'].values()) / len(review['preference_match'])
            
            total_score += sentiment_weight * pref_score * review['confidence']
        
        return total_score / len(reviews)

    def get_matching_preferences(self, reviews, preferences):
        matching = {}
        for pref in preferences:
            scores = [r['preference_match'].get(pref, 0) for r in reviews]
            matching[pref] = sum(scores) / len(scores)
        return matching