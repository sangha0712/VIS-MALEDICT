import { GoogleGenAI, Chat } from "@google/genai";
import { Character } from '../types';

let genAI: GoogleGenAI | null = null;

const getGenAI = () => {
  if (!genAI) {
    // Guideline: API key must be obtained exclusively from process.env.API_KEY and used directly.
    // Guideline: Assume the variable is pre-configured and valid.
    genAI = new GoogleGenAI({ apiKey: process.env.API_KEY });
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