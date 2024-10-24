import express from 'express';
import { scrapeGoogleReviews, scrapeTripAdvisor } from '../services/scraper.js';

export const scrapingRouter = express.Router();

scrapingRouter.post('/google', async (req, res) => {
  try {
    const { query, location } = req.body;
    const results = await scrapeGoogleReviews(query, location);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

scrapingRouter.post('/tripadvisor', async (req, res) => {
  try {
    const { query, location } = req.body;
    const results = await scrapeTripAdvisor(query, location);
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});