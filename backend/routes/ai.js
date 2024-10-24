import express from 'express';
import { analyzeReviews, generateRecommendations } from '../services/ai.js';

export const aiRouter = express.Router();

aiRouter.post('/analyze', async (req, res) => {
  try {
    const { reviews, userPreferences } = req.body;
    const analysis = await analyzeReviews(reviews, userPreferences);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

aiRouter.post('/recommend', async (req, res) => {
  try {
    const { userPreferences, location } = req.body;
    const recommendations = await generateRecommendations(userPreferences, location);
    res.json(recommendations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});