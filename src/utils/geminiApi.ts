const { GoogleGenerativeAI } = require("@google/generative-ai");

export const generateGeminiApiResponse = async (prompt: string): Promise<string> => {
    const genAI = new GoogleGenerativeAI("AIzaSyB1zeLbcqA76hkZOfB07ytKyW3eDY3bpEE");
    const model = genAI.getGenerativeModel({ 
        model: "gemini-2.0-flash",
        generationConfig: {
            temperature: 0.7, 
            maxOutputTokens: 50 
        }
    });

    const result = await model.generateContent(prompt);
    const response = await result.response.text();
    
    return response.trim();
};
