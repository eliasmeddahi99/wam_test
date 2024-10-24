import mongoose from 'mongoose';

const scrapedDataSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
    index: true
  },
  data: {
    type: Object,
    required: true
  },
  scrapedAt: {
    type: Date,
    default: Date.now
  }
});

export const ScrapedData = mongoose.model('ScrapedData', scrapedDataSchema);