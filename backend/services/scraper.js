import puppeteer from 'puppeteer';

export async function scrapeGoogleReviews(query, location) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  try {
    // Google Maps search URL
    await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(query)}+${encodeURIComponent(location)}`);
    
    // Wait for results to load
    await page.waitForSelector('.section-result');
    
    // Extract data
    const results = await page.evaluate(() => {
      const items = document.querySelectorAll('.section-result');
      return Array.from(items).map(item => ({
        name: item.querySelector('.section-result-title')?.textContent,
        rating: item.querySelector('.section-result-rating')?.textContent,
        reviews: item.querySelector('.section-result-num-reviews')?.textContent,
        address: item.querySelector('.section-result-location')?.textContent,
      }));
    });
    
    return results;
  } finally {
    await browser.close();
  }
}

export async function scrapeTripAdvisor(query, location) {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  
  try {
    // TripAdvisor search URL
    await page.goto(`https://www.tripadvisor.com/Search?q=${encodeURIComponent(query)}+${encodeURIComponent(location)}`);
    
    // Wait for results to load
    await page.waitForSelector('.result-title');
    
    // Extract data
    const results = await page.evaluate(() => {
      const items = document.querySelectorAll('.result-item');
      return Array.from(items).map(item => ({
        name: item.querySelector('.result-title')?.textContent,
        rating: item.querySelector('.ui_bubble_rating')?.getAttribute('alt'),
        reviews: item.querySelector('.review-count')?.textContent,
        description: item.querySelector('.description')?.textContent,
      }));
    });
    
    return results;
  } finally {
    await browser.close();
  }
}