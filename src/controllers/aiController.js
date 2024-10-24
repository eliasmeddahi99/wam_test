import { aiService } from '../services/aiService.js';
import { logger } from '../utils/logger.js';

export const analyzeText = async (req, res, next) => {
  try {
    const { text } = req.body;
    const analysis = await aiService.analyzeText(text);
    res.json({ analysis });
  } catch (error) {
    next(error);
  }
};

export const generateImage = async (req, res, next) => {
  try {
    const { prompt } = req.body;
    const imageUrl = await aiService.generateImage(prompt);
    res.json({ imageUrl });
  } catch (error) {
    next(error);
  }
};