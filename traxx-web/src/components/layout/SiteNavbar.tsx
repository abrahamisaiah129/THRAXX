"use client";

import Link from "next/link";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/Button";

export function SiteNavbar() {
  const { theme, setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 dark:bg-[#020817]/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-10 py-10 max-md:px-6 max-md:py-5">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 no-underline transition-transform active:scale-[0.97] duration-200 ease-out"
          aria-label="Traxx Home"
        >
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center font-black text-xl text-white relative shadow-md">
            TX
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-500 rounded-full border-2 border-white dark:border-slate-900 transition-colors"></div>
          </div>
          <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white transition-colors">
            Traxx
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
          >
            Home
          </Link>
          <Link
            href="/architecture"
            className="text-sm font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
          >
            Architecture
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
          >
            Solutions
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
          >
            Pricing
          </Link>
          <Link
            href="/blogs"
            className="text-sm font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
          >
            Blog
          </Link>
          <Link
            href="/careers"
            className="text-sm font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
          >
            Careers
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
          >
            Contact
          </Link>
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-5">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-[0.97] ease-out border-0 bg-transparent"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 ease-out dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 ease-out dark:rotate-0 dark:scale-100" />
            </button>
          )}
          {/* <Link
            href="/login"
            className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors active:scale-[0.97] ease-out"
          >
            Sign In */}
          {/* </Link> */}
          {/* <Link > */}
          <a
            href="#start-trial"
            className="inline-flex justify-center items-center gap-2 rounded-xl border border-blue-600 dark:border-slate-200 bg-blue-600 dark:bg-white px-6 py-3.5 text-sm font-semibold text-white dark:text-slate-900 hover:bg-blue-700 dark:hover:bg-slate-100 hover:border-blue-700 dark:hover:border-slate-300 transition-all active:scale-95"
          >
            Start Free Trial
          </a>
          {/* </Link> */}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 flex items-center justify-center rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-[0.97] ease-out border-0 bg-transparent"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 ease-out dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 ease-out dark:rotate-0 dark:scale-100" />
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-900 dark:text-white transition-transform active:scale-[0.97] ease-out cursor-pointer border-0 bg-transparent hover:scale-105 duration-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute left-0 right-0 top-full flex w-full flex-col items-stretch justify-start gap-0 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-[#020817]/95 px-6 pb-6 pt-4 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-[opacity,transform,visibility] duration-200 ease-out md:hidden ${
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2.5 opacity-0"
        }`}
      >
        <div className="text-xs font-bold uppercase tracking-[1.5px] text-blue-600 mb-2 mt-2">
          Explore
        </div>
        <Link
          href="/"
          className="py-3 text-base font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 no-underline transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
        >
          Home
        </Link>
        <Link
          href="/architecture"
          className="py-3 text-base font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 no-underline transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
        >
          Architecture
        </Link>
        <Link
          href="/solutions"
          className="py-3 text-base font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 no-underline transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
        >
          Solutions
        </Link>
        <Link
          href="/pricing"
          className="py-3 text-base font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 no-underline transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
        >
          Pricing
        </Link>
        <Link
          href="/blogs"
          className="py-3 text-base font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 no-underline transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
        >
          Blog
        </Link>
        <Link
          href="/careers"
          className="py-3 text-base font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 no-underline transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
        >
          Careers
        </Link>
        <Link
          href="/contact"
          className="py-3 text-base font-semibold tracking-[-0.02em] text-slate-600 dark:text-slate-300 no-underline transition-colors hover:text-slate-900 dark:hover:text-white active:scale-[0.97] ease-out"
        >
          Contact
        </Link>

        <div className="text-xs font-bold uppercase tracking-[1.5px] text-blue-600 mb-2 mt-4">
          Account
        </div>

        {/* <Link href="/login" className="mt-5 w-full"> */}
        {/* <Button className="w-full justify-center py-3 transition-transform">
          </Button> */}
        <a
          href="/login"
          className="inline-flex justify-center items-center gap-2 rounded-xl border border-blue-600 dark:border-slate-200 bg-blue-600 dark:bg-white px-6 py-3.5 text-sm font-semibold text-white dark:text-slate-900 hover:bg-blue-700 dark:hover:bg-slate-100 hover:border-blue-700 dark:hover:border-slate-300 transition-all active:scale-95"
        >
          Sign in
        </a>
        {/* </Link> */}
      </div>
    </nav>
  );
}
