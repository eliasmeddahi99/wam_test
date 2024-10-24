import cheerio from 'cheerio';
import axios from 'axios';
import { logger } from '../utils/logger.js';
import { ScrapedData } from '../models/scrapedData.js';

export class WebScraper {
  async scrapeWebsite(url) {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      
      const data = {
        title: $('title').text(),
        description: $('meta[name="description"]').attr('content'),
        headings: $('h1, h2').map((_, el) => $(el).text()).get(),
        links: $('a').map((_, el) => ({
          text: $(el).text(),
          href: $(el).attr('href')
        })).get()
      };

      await ScrapedData.create({
        url,
        data,
        scrapedAt: new Date()
      });

      return data;
    } catch (error) {
      logger.error('Scraping error:', error);
      throw new Error('Failed to scrape website');
    }
  }
}

export const scraper = new WebScraper();