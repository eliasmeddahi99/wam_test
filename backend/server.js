import express from 'express';
import cors from 'cors';
import { scrapingRouter } from './routes/scraping.js';
import { aiRouter } from './routes/ai.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/scraping', scrapingRouter);
app.use('/api/ai', aiRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});