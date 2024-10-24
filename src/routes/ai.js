import express from 'express';
import { analyzeText, generateImage } from '../controllers/aiController.js';
import { validateAIRequest } from '../middleware/validators.js';

export const router = express.Router();

router.post('/analyze', validateAIRequest, analyzeText);
router.post('/generate-image', validateAIRequest, generateImage);