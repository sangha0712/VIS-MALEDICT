import { GoogleGenAI, Chat } from "@google/genai";
import { Character } from '../types';

let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI) {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API_KEY is missing from environment variables");
      // In a real app we might handle this gracefully, but for now we log.
    }
    // Only initialize if key exists to avoid immediate crash if env is missing in dev
    if (apiKey) {
        genAI = new GoogleGenAI({ apiKey });
    }
  }
  return genAI;
};

export const createCharacterChat = (character: Character): Chat | null => {
  const ai = getGenAI();
  if (!ai) return null;

  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: character.systemInstruction,
      temperature: 0.9, // Higher creative freedom for roleplay
      topK: 40,
    },
  });
};
