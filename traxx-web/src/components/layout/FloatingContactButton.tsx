"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingContactButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl hover:bg-blue-700 hover:scale-105 transition-all duration-200 active:scale-95 group"
      aria-label="Contact Support"
    >
      <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
      {/* Optional Ping Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-20 group-hover:animate-ping"></span>
    </Link>
  );
}
