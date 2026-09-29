"use client";

import { useEffect, useState } from "react";
import { X, Globe } from "lucide-react";
import Link from "next/link";

export function PlatformSelectModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === "#start-trial") {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    // Check on mount
    handleHash();
    
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const closeModal = () => {
    // Remove hash without scrolling
    window.history.pushState(null, "", window.location.pathname + window.location.search);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 dark:bg-slate-950/60 backdrop-blur-sm" 
        onClick={closeModal}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3 no-underline text-slate-900 dark:text-white">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white relative shadow-md">
                TX
                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full border-2 border-white dark:border-slate-900 transition-colors"></div>
              </div>
              <span className="font-bold text-2xl tracking-tight transition-colors">
                Traxx
              </span>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
            Choose your platform
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
            Select where you want to use Traxx to continue your setup.
          </p>

          <div className="space-y-4">
            {/* Web Button */}
            <Link 
              href="/signup" 
              onClick={closeModal}
              className="flex items-center justify-center gap-3 w-full rounded-xl bg-blue-600 px-6 py-4 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-md shadow-blue-500/25 active:scale-95"
            >
              <Globe className="w-5 h-5" />
              Continue on Web
            </Link>

            {/* Mobile Buttons Container */}
            <div className="grid grid-cols-2 gap-4">
              {/* iOS Button */}
              <a 
                href="#ios"
                onClick={(e) => e.preventDefault()}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                iOS App
              </a>

              {/* Android Button */}
              <a 
                href="#android"
                onClick={(e) => e.preventDefault()}
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-[#3DDC84]">
                  <path d="M325.3 234.3c-6.5 0-11.8-5.3-11.8-11.8s5.3-11.8 11.8-11.8 11.8 5.3 11.8 11.8-5.3 11.8-11.8 11.8zm-138.6 0c-6.5 0-11.8-5.3-11.8-11.8s5.3-11.8 11.8-11.8 11.8 5.3 11.8 11.8-5.3 11.8-11.8 11.8zm219.8-71.1l29.7-51.5c1.3-2.3 .5-5.3-1.8-6.6-2.3-1.3-5.3-.5-6.6 1.8l-30.1 52.1C354.2 138.9 306.9 128 256 128s-98.2 10.9-141.7 30.9l-30.1-52.1c-1.3-2.3-4.3-3.1-6.6-1.8-2.3 1.3-3.1 4.3-1.8 6.6l29.7 51.5C45.4 204.6 0 287.6 0 384h512c0-96.4-45.4-179.4-105.5-220.8z"/>
                </svg>
                Android App
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
