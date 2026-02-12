import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const SommelierChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userText,
        config: {
          systemInstruction: `
            You are the Devil Dip Sommelier, a world-class coffee expert for the brand Devil Dip (owned by S&N Enterprises). 
            Your tone is premium, professional, inspiring, and concise. 
            Brand values: Momentum, Focus, Discipline.
            
            RULES:
            1. Never make medical claims.
            2. Never suggest health benefits for treating diseases.
            3. If asked about health, focus on the 'coffee experience' and 'smooth focus'.
            4. Keep answers under 3 sentences.
            5. Always maintain a premium aesthetic in your words.
            6. If asked about ingredients, mention premium coffee and L-theanine as part of a refined blend.
          `
        }
      });

      setMessages(prev => [...prev, { role: 'bot', text: response.text || "The brew is momentarily quiet. Please try again." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'bot', text: "Error connecting to the Sommelier." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-[#141414] border border-zinc-800 w-80 md:w-96 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-[#C6A75E] p-4 flex justify-between items-center text-[#111111]">
            <div className="flex items-center gap-2">
               <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
               <span className="text-xs font-black uppercase tracking-widest">Sommelier Chat</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 space-y-4 scrollbar-hide">
            {messages.length === 0 && (
              <p className="text-zinc-600 text-xs italic text-center pt-10 font-medium">Ask our Sommelier about the Devil Dip experience...</p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm font-medium leading-relaxed ${
                  m.role === 'user' ? 'bg-[#3B2A26] text-warm-cream' : 'bg-zinc-800 text-zinc-300'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                  <div className="bg-zinc-800 px-4 py-2 rounded-2xl animate-pulse">
                     <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Brewing...</span>
                  </div>
               </div>
            )}
          </div>
          
          <div className="p-4 border-t border-zinc-800">
            <div className="flex gap-2">
              <input 
                type="text"
                placeholder="Message sommelier..."
                className="flex-1 bg-[#0F0F0F] border border-zinc-800 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#C6A75E] transition-colors"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend} className="bg-[#C6A75E] text-[#111111] p-2 rounded-full transition-transform hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9-2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-[#C6A75E] text-[#111111] p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SommelierChat;