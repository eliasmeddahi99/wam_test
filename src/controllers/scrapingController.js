import { scraper } from '../services/scraper.js';
import { ScrapedData } from '../models/scrapedData.js';
import { logger } from '../utils/logger.js';

export const scrapeWebsite = async (req, res, next) => {
  try {
    const { url } = req.body;
    const data = await scraper.scrapeWebsite(url);
    res.json(data);
  } catch (error) {
    next(error);
  }
};

export const getScrapedData = async (req, res, next) => {
  try {
    const data = await ScrapedData.find()
      .sort({ scrapedAt: -1 })
      .limit(10);
    res.json(data);
  } catch (error) {
    next(error);
  }
};