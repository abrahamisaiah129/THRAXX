import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function PricingPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">Simple, transparent pricing</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Pay only for the active riders and vehicles you track. No hidden fees. No annual lock-ins.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="p-8 md:p-10 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Pay As You Go</h2>
            <p className="text-slate-600 dark:text-slate-400">Perfect for growing fleets.</p>
          </div>
          <div className="mb-8">
            <span className="text-5xl font-black">₦4,500</span>
            <span className="text-slate-500 font-medium"> / asset / month</span>
          </div>
          <ul className="space-y-4 mb-8">
            {[
              "Real-time GPS Tracking",
              "Automated Delay Alerts",
              "Historical Route Replay",
              "Unlimited Admin Seats",
              "Email & Chat Support"
            ].map(feature => (
              <li key={feature} className="flex items-center gap-3 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 shadow-none py-6 text-lg rounded-xl">Start Free Trial</Button>
        </div>

        <div className="p-8 md:p-10 rounded-[2rem] bg-blue-600 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <div className="text-9xl font-black">TX</div>
          </div>
          <div className="relative z-10">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2 text-white">Enterprise</h2>
              <p className="text-blue-100">For fleets with 100+ vehicles.</p>
            </div>
            <div className="mb-8">
              <span className="text-5xl font-black text-white">Custom</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Everything in Pay As You Go",
                "Custom API Integrations",
                "Dedicated Success Manager",
                "Custom Reporting",
                "SLA Guarantees"
              ].map(feature => (
                <li key={feature} className="flex items-center gap-3 font-medium text-blue-50">
                  <CheckCircle2 className="w-5 h-5 text-white shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-white text-blue-600 hover:bg-slate-50 shadow-none py-6 text-lg rounded-xl">Contact Sales</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
