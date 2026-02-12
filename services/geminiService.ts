/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import { GoogleGenAI } from "@google/genai";

/**
 * Basic assistant interface for the Sommelier.
 * Uses gemini-3-flash-preview for fast, helpful interactions.
 */
export const askSommelier = async (prompt: string): Promise<string> => {
  // Use the standard GoogleGenAI initialization format
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the Devil Dip Sommelier. Keep responses focused on premium coffee rituals, momentum, and discipline. No medical claims."
      }
    });
    return response.text || "The brew is momentarily quiet.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "I'm experiencing a temporary disconnection from the roast.";
  }
};
