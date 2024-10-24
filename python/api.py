from flask import Flask, request, jsonify
from scraper import Scraper
from ai_analyzer import AIAnalyzer
import threading
import queue

app = Flask(__name__)
scraper = Scraper()
ai_analyzer = AIAnalyzer()

# Queue for handling scraping tasks
scraping_queue = queue.Queue()

@app.route('/scrape', methods=['POST'])
def scrape():
    data = request.json
    query = data.get('query')
    location = data.get('location')
    
    if not query or not location:
        return jsonify({'error': 'Missing query or location'}), 400
    
    try:
        # Scrape both sources
        google_reviews = scraper.scrape_google_reviews(query, location)
        tripadvisor_results = scraper.scrape_tripadvisor(query, location)
        
        return jsonify({
            'google_reviews': google_reviews,
            'tripadvisor_results': tripadvisor_results
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    reviews = data.get('reviews')
    preferences = data.get('preferences')
    
    if not reviews or not preferences:
        return jsonify({'error': 'Missing reviews or preferences'}), 400
    
    try:
        # Analyze reviews
        analysis = ai_analyzer.analyze_reviews(reviews, preferences)
        
        # Generate recommendations
        recommendations = ai_analyzer.generate_recommendations(analysis, preferences)
        
        return jsonify({
            'analysis': analysis,
            'recommendations': recommendations
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)