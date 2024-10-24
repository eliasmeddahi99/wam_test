import Joi from 'joi';

export const validateUrl = (req, res, next) => {
  const schema = Joi.object({
    url: Joi.string().uri().required()
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export const validateAIRequest = (req, res, next) => {
  const schema = Joi.object({
    text: Joi.string().max(1000),
    prompt: Joi.string().max(1000)
  }).xor('text', 'prompt');

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};