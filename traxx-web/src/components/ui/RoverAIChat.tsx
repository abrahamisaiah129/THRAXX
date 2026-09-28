"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const AI_NAME = "Rover";

export function RoverAIChat() {
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: `Hello! I'm ${AI_NAME}. I can analyze your fleet data, identify route deviations, or summarize yesterday's shift. What do you need?` }
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput("");
    setIsThinking(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: "I'm analyzing the fleet data you requested. Let me pull up the latest metrics on route deviations." }]);
      setIsThinking(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
      
      {/* Header */}
      <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center overflow-hidden transition-all duration-500">
              {isThinking ? (
                <img src="/aiSvg/thraxx-ai-rover-thinking.svg" alt="Rover Thinking" className="w-8 h-8 object-contain scale-75 animate-pulse" />
              ) : (
                <img src="/aiSvg/thraxx-ai-rover-default.svg" alt="Rover AI" className="w-8 h-8 object-contain" />
              )}
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white">{AI_NAME} Intelligence</h3>
            <p className="text-xs text-slate-500 font-medium">
              {isThinking ? "Thinking..." : "Online and monitoring"}
            </p>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-slate-50/50 dark:bg-[#020817]/50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`p-4 rounded-2xl max-w-[85%] text-sm leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-sm shadow-sm' 
                : 'bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-tl-sm shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isThinking && (
          <div className="flex justify-start">
            <div className="p-4 rounded-2xl rounded-tl-sm bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <form onSubmit={handleSend} className="relative flex items-center">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isThinking}
            placeholder={`Ask ${AI_NAME} to run a report...`} 
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-3.5 pl-5 pr-14 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-slate-900 dark:text-slate-100 disabled:opacity-50 transition-all" 
          />
          <button 
            type="submit"
            disabled={!input.trim() || isThinking}
            className="absolute right-1.5 w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 disabled:dark:bg-blue-900/50 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer border-none shadow-sm"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>

    </div>
  );
}
