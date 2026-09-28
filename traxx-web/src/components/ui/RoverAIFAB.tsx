"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";

const AI_NAME = "Rover";

export function RoverAIFAB() {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 left-6 z-[200] animate-in zoom-in fade-in duration-300">
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-transparent rounded-full w-16 h-16 flex items-center justify-center transition-all hover:scale-110 active:scale-95 border-none cursor-pointer group relative overflow-visible drop-shadow-xl"
          aria-label={`Open ${AI_NAME} AI`}
        >
          <img src="/aiSvg/thraxx-ai-rover-default.svg" alt="Rover AI" className="w-14 h-14 object-contain group-hover:-translate-y-1 transition-transform duration-300" />
          <span className="absolute top-1 right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 border-2 border-white dark:border-slate-900"></span>
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-24 left-6 z-[200] animate-in slide-in-from-bottom-4 fade-in duration-300 w-[90vw] max-w-[380px]">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center overflow-hidden">
                <img src="/aiSvg/thraxx-ai-rover-default.svg" alt="Rover AI" className="w-7 h-7 object-contain" />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">{AI_NAME}</h3>
              <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Online</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full transition-colors cursor-pointer border-none bg-transparent"
          >
            <X className="w-4 h-4 text-slate-500" />
          </button>
        </div>
        
        {/* Chat Area */}
        <div className="p-5 h-[280px] flex flex-col justify-end bg-slate-50 dark:bg-[#020817]/50">
          <div className="bg-white dark:bg-slate-800 p-3.5 rounded-2xl rounded-tl-sm shadow-sm border border-slate-100 dark:border-slate-700 w-[85%] mb-2">
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Hello! I&apos;m {AI_NAME}. I can analyze your fleet data, identify route deviations, or summarize yesterday&apos;s shift. What do you need?
            </p>
          </div>
        </div>
        
        {/* Input Area */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="relative flex items-center">
            <input 
              autoFocus
              type="text" 
              placeholder="Type your message..." 
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-full py-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 placeholder:text-slate-400" 
            />
            <button className="absolute right-1.5 w-9 h-9 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-white transition-colors cursor-pointer border-none shadow-sm">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
