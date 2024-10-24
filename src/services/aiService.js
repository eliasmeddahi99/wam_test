import axios from 'axios';

const PYTHON_API_URL = 'http://localhost:5000';

export class AIService {
  async scrapeAndAnalyze(query, location, preferences) {
    try {
      // First, scrape the data
      const scrapeResponse = await axios.post(`${PYTHON_API_URL}/scrape`, {
        query,
        location
      });

      const { google_reviews, tripadvisor_results } = scrapeResponse.data;

      // Then, analyze the data
      const analysisResponse = await axios.post(`${PYTHON_API_URL}/analyze`, {
        reviews: [...google_reviews, ...tripadvisor_results.map(r => ({ text: r.description }))],
        preferences
      });

      return {
        scraped_data: {
          google_reviews,
          tripadvisor_results
        },
        analysis: analysisResponse.data
      };
    } catch (error) {
      console.error('Error in scraping and analysis:', error);
      throw error;
    }
  }

  async getRecommendations(location, preferences) {
    try {
      // Get recommendations based on location and preferences
      const response = await axios.post(`${PYTHON_API_URL}/analyze`, {
        location,
        preferences
      });

      return response.data.recommendations;
    } catch (error) {
      console.error('Error getting recommendations:', error);
      throw error;
    }
  }
}

export const aiService = new AIService();