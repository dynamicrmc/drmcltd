import { GoogleGenAI } from "@google/genai";
import { SYSTEM_PROMPT } from '../constants';

const apiKey = process.env.API_KEY || '';

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client && apiKey) {
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const generateChatResponse = async (
  userMessage: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const ai = getClient();
    if (!ai) {
      return "I'm currently unable to connect to the AI service. Please ensure the API key is configured.";
    }

    // Convert history to format expected by Chat (if keeping context is needed, though sendMessage handles internal history if using Chat object).
    // For this stateless call approach, we will just use a fresh chat or simple generateContent for single turn,
    // BUT for a better experience, we use a Chat session.
    // However, to keep it simple in this architecture, we will use generateContent with system instruction.
    
    // Using gemini-3-pro-preview for high quality reasoning
    const modelId = "gemini-3-pro-preview";

    const response = await ai.models.generateContent({
      model: modelId,
      contents: [
        ...history.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_PROMPT,
      }
    });

    return response.text || "I apologize, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting right now. Please try again later or contact our support directly.";
  }
};