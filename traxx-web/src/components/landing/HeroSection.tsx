import React from "react";
import { ArrowRight, Globe, Apple, Smartphone, ShieldCheck, Clock, UserCheck, CreditCard } from "lucide-react";

const trustPartners = [
  { name: "Web", icon: Globe },
  { name: "IOS", icon: Apple },
  { name: "ANDROID", icon: Smartphone },
  { name: "NDPR Compliant", icon: ShieldCheck },
  { name: "Live 24 hours a day", icon: Clock },
  { name: "KYC Verified Riders", icon: UserCheck },
  { name: "Paystack Billing", icon: CreditCard },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#020817] pt-16 lg:pt-24 pb-0 text-slate-900 dark:text-slate-100 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Copy & Action */}
          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Time To Keep Your Logistics
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                Under Control
              </span>
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
              Traxx gives Nigerian businesses live GPS visibility, automated
              flag detection, and a complete audit trail for every vehicle on
              their payroll.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="#start-trial"
                className="inline-flex justify-center items-center gap-2 rounded-xl border border-blue-600 dark:border-slate-200 bg-blue-600 dark:bg-white px-6 py-3.5 text-sm font-semibold text-white dark:text-slate-900 hover:bg-blue-700 dark:hover:bg-slate-100 hover:border-blue-700 dark:hover:border-slate-300 transition-all active:scale-95 w-fit"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* RIGHT: Visual */}
          <div className="lg:col-span-6 relative flex items-center justify-center mt-8 lg:mt-0 lg:-ml-4">

            {/* Visual Container */}
            <div className="relative w-full max-w-[700px] flex justify-center group scale-95 lg:scale-100 xl:scale-105 transition-all duration-700 z-10 pb-4">
              <img
                src="/images/hero-dashboard.png"
                alt="Traxx dashboard and tracking"
                className="w-full h-auto max-h-[500px] object-cover rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Trust Banner */}
      <div className="border-t border-blue-900 bg-blue-950 overflow-hidden py-5 flex mt-2">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-16 px-8 w-max">
          {/* Duplicate the array to create a seamless infinite scroll loop */}
          {[...trustPartners, ...trustPartners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 rounded-xl bg-blue-900 overflow-hidden flex-shrink-0 flex items-center justify-center shadow-inner">
                <partner.icon className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="text-sm font-extrabold tracking-tight text-white">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
