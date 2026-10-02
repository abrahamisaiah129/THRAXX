import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CostOfChaosSection } from "@/components/landing/CostOfChaosSection";
import { CTASection } from "@/components/landing/CTASection";

export default function PricingPage() {
  return (
    <div className="bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-50 min-h-screen">
      <div className="h-[56px] md:h-[80px] w-full bg-white dark:bg-[#020817]"></div>
      
      <div className="pt-16 pb-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">Built around your fleet size.</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Traxx pricing is based purely on your active rider count. Free for small teams, one flat rate for growing fleets, and custom plans for large operations. No hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Freemium */}
        <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col mt-4 md:mt-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4">1 to 5 riders</span>
            <h2 className="text-2xl font-bold mb-2">Freemium</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Perfect for new businesses testing the waters.</p>
          </div>
          <div className="mb-8 flex items-baseline gap-2">
            <span className="text-5xl font-black">Free</span>
            <span className="text-slate-500 font-medium text-sm">/ Forever</span>
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
          <Button variant="secondary" size="lg" className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 border-none shadow-none font-bold">Start Free</Button>
        </div>

        {/* Growth (Middle Card) */}
        <div className="p-8 rounded-[2rem] bg-[#0b1736] shadow-2xl relative overflow-visible flex flex-col scale-105 z-10 border border-blue-900">
          <div className="absolute -top-3 right-8 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg z-20">
            Most Popular
          </div>
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/30 via-blue-400/5 to-transparent blur-3xl pointer-events-none rounded-tr-[2rem]" />
          
          <div className="relative z-10 mb-6 mt-4">
            <h2 className="text-2xl font-bold mb-2 text-white">Growth</h2>
            <p className="text-blue-200/80 text-sm">All compliance & transaction rails.</p>
          </div>
          <div className="relative z-10 mb-2 flex items-baseline gap-2">
            <span className="text-5xl font-black text-white">₦15,000</span>
            <span className="text-blue-200/60 font-medium text-sm">/ Monthly</span>
          </div>
          <p className="text-blue-200/60 text-xs font-medium mb-8 relative z-10 border-b border-blue-800/50 pb-4">Flat rate for anywhere between 6 and 20 riders.</p>
          
          <ul className="space-y-4 mb-10 flex-1 relative z-10">
            <li className="flex items-start gap-3 font-medium text-sm text-blue-100">
              <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
              <span><strong className="text-white">Everything in Freemium</strong>, plus:</span>
            </li>
            {[
              "Historical Route Replay",
              "Advanced Analytics",
              "Priority Email Support"
            ].map(feature => (
              <li key={feature} className="flex items-start gap-3 font-medium text-sm text-blue-100/80">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Button size="lg" className="relative z-10 w-full bg-blue-600 hover:bg-blue-500 text-white border-none shadow-lg font-bold">Get Started</Button>
        </div>

        {/* Enterprise */}
        <div className="p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col mt-4 md:mt-8">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider rounded-full mb-4">21+ riders</span>
            <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm">Tailored for institutions and large fleets.</p>
          </div>
          <div className="mb-8 flex items-baseline gap-2">
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
          <Button variant="secondary" size="lg" className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 border-none shadow-none font-bold">Contact Sales</Button>
        </div>
      </div>

      {/* Notes & Trust Row */}
      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-slate-500 text-sm font-medium mb-12">Rider count is based on active riders on your account, not seats you have paid for. Growing past a tier does not cut you off. You choose when to upgrade.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-slate-200 dark:border-slate-800">
          <div><h4 className="font-bold text-sm mb-1">No hidden fees</h4><p className="text-xs text-slate-500">The price you see is what you pay.</p></div>
          <div><h4 className="font-bold text-sm mb-1">Data stays yours</h4><p className="text-xs text-slate-500">Fully NDPR compliant.</p></div>
          <div><h4 className="font-bold text-sm mb-1">Cancel anytime</h4><p className="text-xs text-slate-500">No lock-in contracts.</p></div>
          <div><h4 className="font-bold text-sm mb-1">Set up in minutes</h4><p className="text-xs text-slate-500">No sales calls required.</p></div>
        </div>
      </div>

      </div>
      
      {/* Why teams upgrade */}
      <CostOfChaosSection />

      {/* FAQ */}
      <section className="py-24 mt-12">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">Pricing FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Do I need a card to start on Freemium?", a: "No. Freemium never asks for payment details. You only add a payment method when you choose to upgrade to Growth." },
              { q: "What happens if I add a 6th rider?", a: "Your 6th rider will be added to the system seamlessly. We will simply let you know it is time to move to the Growth plan, and you choose when to upgrade." },
              { q: "Can I move from Growth back down to Freemium?", a: "Yes. If your active rider count drops back to 5 or below, you can switch back to the Freemium tier at the end of your billing cycle." },
              { q: "How does payment work?", a: "Growth is billed monthly through Paystack, so you can pay with a debit card, bank transfer, or USSD. Enterprise billing is arranged directly with our sales team." },
              { q: "Are there long-term contracts?", a: "Freemium and Growth have no lock-in contract. Cancel whenever you like. Enterprise plans include a custom SLA and support agreement." },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl cursor-pointer border border-slate-200 dark:border-slate-800 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-medium">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <CTASection />
    </div>
  );
}
