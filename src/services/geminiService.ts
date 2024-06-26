import axios from 'axios';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://api.gemini.com/v1';

export const analyzeEmailContent = async (content: string): Promise<string> => {
  const response = await axios.post(
    `${GEMINI_API_URL}/analyze`,
    { content },
    {
      headers: {
        'Authorization': `Bearer ${GEMINI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.label; // Adjust based on actual API response structure
};

export const generateEmailReply = async (content: string): Promise<string> => {
  const response = await axios.post(
    `${GEMINI_API_URL}/generate-reply`,
    { content },
    {
      headers: {
        'Authorization': `Bearer ${GEMINI_API_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );

  return response.data.reply; // Adjust based on actual API response structure
};
