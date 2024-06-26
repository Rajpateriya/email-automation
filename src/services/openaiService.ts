import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export const analyzeEmailContent = async (content: string) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Classify the following email content: ${content}\n\nLabels: Interested, Not Interested, More Information`,
    maxTokens: 60,
  });

  return response.data.choices[0].text.trim();
};

export const generateEmailReply = async (content: string) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `Generate an appropriate reply for the following email content: ${content}`,
    maxTokens: 150,
  });

  return response.data.choices[0].text.trim();
};
