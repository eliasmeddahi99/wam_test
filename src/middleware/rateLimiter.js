import { RateLimiterMemory } from 'rate-limiter-flexible';

const rateLimiterOptions = {
  points: 10, // Number of points
  duration: 1, // Per second
};

const rateLimiterMemory = new RateLimiterMemory(rateLimiterOptions);

export const rateLimiter = async (req, res, next) => {
  try {
    await rateLimiterMemory.consume(req.ip);
    next();
  } catch (error) {
    res.status(429).json({ error: 'Too Many Requests' });
  }
};