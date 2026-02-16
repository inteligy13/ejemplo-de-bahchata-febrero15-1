import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateRomanticPoem = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Escribe una breve estrofa poética (máximo 30 palabras) sobre por qué bailar bachata es bueno para el alma y el amor. Que sea inspiradora, romántica y mencione la conexión o el abrazo.",
      config: {
        temperature: 0.9,
        maxOutputTokens: 100,
      }
    });

    return response.text || "En el abrazo de la bachata, el mundo se detiene y solo nuestros latidos marcan el tiempo.";
  } catch (error) {
    console.error("Error generating poem:", error);
    return "La bachata es el refugio donde dos almas encuentran la paz bailando al mismo compás.";
  }
};