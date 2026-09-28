"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-2">
        {/* Breadcrumb or title could go here */}
        <h1 className="font-semibold text-slate-800 dark:text-white">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-9 h-9 p-0 rounded-full dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm">
          A
        </div>
      </div>
    </header>
  );
}
