import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function analyzeReviews(reviews, userPreferences) {
  try {
    const prompt = `
      Analyze these reviews and user preferences:
      Reviews: ${JSON.stringify(reviews)}
      User Preferences: ${JSON.stringify(userPreferences)}
      
      Provide a detailed analysis of how well this place matches the user's preferences.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an expert at analyzing reviews and matching places to user preferences." },
        { role: "user", content: prompt }
      ]
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
}

export async function generateRecommendations(userPreferences, location) {
  try {
    const prompt = `
      Generate personalized recommendations for:
      Location: ${location}
      User Preferences: ${JSON.stringify(userPreferences)}
      
      Provide detailed recommendations with explanations.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are an expert at recommending places based on user preferences." },
        { role: "user", content: prompt }
      ]
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
}