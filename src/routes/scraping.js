import express from 'express';
import { scrapeWebsite, getScrapedData } from '../controllers/scrapingController.js';
import { validateUrl } from '../middleware/validators.js';

export const router = express.Router();

router.post('/scrape', validateUrl, scrapeWebsite);
router.get('/data', getScrapedData);