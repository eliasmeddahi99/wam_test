import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import json
import time

class Scraper:
    def __init__(self):
        chrome_options = Options()
        chrome_options.add_argument("--headless")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        self.driver = webdriver.Chrome(options=chrome_options)

    def scrape_google_reviews(self, query, location):
        try:
            search_url = f"https://www.google.com/maps/search/{query}+{location}"
            self.driver.get(search_url)
            
            # Wait for results to load
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "section-result"))
            )
            
            # Click to expand reviews
            reviews_button = self.driver.find_element(By.CSS_SELECTOR, "[aria-label='Reviews']")
            reviews_button.click()
            time.sleep(2)  # Wait for reviews to load
            
            # Extract reviews
            reviews = []
            review_elements = self.driver.find_elements(By.CLASS_NAME, "section-review-content")
            
            for element in review_elements[:10]:  # Get first 10 reviews
                review = {
                    'text': element.find_element(By.CLASS_NAME, "section-review-text").text,
                    'rating': element.find_element(By.CLASS_NAME, "section-review-stars").get_attribute("aria-label"),
                    'date': element.find_element(By.CLASS_NAME, "section-review-date").text
                }
                reviews.append(review)
            
            return reviews
            
        except Exception as e:
            print(f"Error scraping Google reviews: {str(e)}")
            return []

    def scrape_tripadvisor(self, query, location):
        try:
            search_url = f"https://www.tripadvisor.com/Search?q={query}+{location}"
            self.driver.get(search_url)
            
            # Wait for results to load
            WebDriverWait(self.driver, 10).until(
                EC.presence_of_element_located((By.CLASS_NAME, "result-title"))
            )
            
            # Extract basic information
            results = []
            result_elements = self.driver.find_elements(By.CLASS_NAME, "result-item")
            
            for element in result_elements[:5]:  # Get first 5 results
                result = {
                    'name': element.find_element(By.CLASS_NAME, "result-title").text,
                    'rating': element.find_element(By.CLASS_NAME, "ui_bubble_rating").get_attribute("alt"),
                    'reviews': element.find_element(By.CLASS_NAME, "review-count").text,
                    'description': element.find_element(By.CLASS_NAME, "description").text
                }
                results.append(result)
            
            return results
            
        except Exception as e:
            print(f"Error scraping TripAdvisor: {str(e)}")
            return []

    def __del__(self):
        self.driver.quit()