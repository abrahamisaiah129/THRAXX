import type { Metadata } from "next";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Traxx",
  description: "Your Logistics. Under Control.",
};

import { PlatformSelectModal } from "@/components/modals/PlatformSelectModal";
import { SiteNavbar } from "@/components/layout/SiteNavbar";
import { FooterSection } from "@/components/landing/FooterSection";
import { FloatingContactButton } from "@/components/layout/FloatingContactButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SiteNavbar />
          <main className="flex-1">
            {children}
          </main>
          <FooterSection />
          <PlatformSelectModal />
          <FloatingContactButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
