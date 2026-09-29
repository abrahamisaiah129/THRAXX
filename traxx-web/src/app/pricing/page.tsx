import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">Built around your fleet size.</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Traxx pricing is based purely on your active rider count. Free for small teams, one flat rate for growing fleets, and custom plans for large operations. No hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Freemium */}
        <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-full mb-4">1 to 5 riders</span>
            <h2 className="text-2xl font-bold mb-2">Freemium</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Perfect for new businesses testing the waters.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-black">Free</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            {[
              "Real-time GPS Tracking",
              "Automated Delay Alerts",
              "Unlimited Admins",
              "Customer Tracking Links"
            ].map(feature => (
              <li key={feature} className="flex items-start gap-3 font-medium text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 shadow-none py-6 rounded-xl font-bold">Start Free</Button>
        </div>

        {/* Growth */}
        <div className="p-8 rounded-[2rem] bg-blue-600 text-white shadow-xl relative overflow-hidden flex flex-col scale-105 z-10 border-4 border-blue-500/20">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
             <div className="text-9xl font-black">TX</div>
          </div>
          <div className="relative z-10 mb-6">
            <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">6 to 20 riders</span>
            <h2 className="text-2xl font-bold mb-2 text-white">Growth</h2>
            <p className="text-blue-100 text-sm">One flat rate for growing teams.</p>
          </div>
          <div className="relative z-10 mb-2">
            <span className="text-5xl font-black text-white">₦15,000</span>
            <span className="text-blue-200 font-medium ml-2">/ month</span>
          </div>
          <p className="text-blue-200 text-xs font-medium mb-8 relative z-10">Flat rate for anywhere between 6 and 20 riders.</p>
          
          <ul className="space-y-4 mb-10 flex-1 relative z-10">
            <li className="flex items-start gap-3 font-medium text-sm text-blue-50">
              <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
              <span><strong className="text-white">Everything in Freemium</strong>, plus:</span>
            </li>
            {[
              "Historical Route Replay",
              "Advanced Analytics",
              "Priority Email Support"
            ].map(feature => (
              <li key={feature} className="flex items-start gap-3 font-medium text-sm text-blue-100">
                <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="relative z-10 w-full bg-white text-blue-600 hover:bg-blue-50 shadow-none py-6 rounded-xl font-bold">Get Started</Button>
        </div>

        {/* Enterprise */}
        <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-full mb-4">21+ riders</span>
            <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">For fleets across multiple branches.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-black">Custom</span>
          </div>
          <ul className="space-y-4 mb-10 flex-1">
            <li className="flex items-start gap-3 font-medium text-sm text-slate-700 dark:text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
              <span><strong className="text-slate-900 dark:text-white">Everything in Growth</strong>, plus:</span>
            </li>
            {[
              "Unlimited Riders & Branches",
              "Custom API Integrations",
              "Dedicated Account Manager",
              "Custom Reporting & SLAs"
            ].map(feature => (
              <li key={feature} className="flex items-start gap-3 font-medium text-sm text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-none py-6 rounded-xl font-bold">Contact Sales</Button>
        </div>
      </div>
    </div>
  );
}
