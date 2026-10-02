import { FileCheck, Receipt, Clock, Bell, UserCheck, Shield, CheckCircle2, ChevronRight, Check, Pill, Map, Layers, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CostOfChaosSection } from "@/components/landing/CostOfChaosSection";
import { CTASection } from "@/components/landing/CTASection";

export default function SolutionsPage() {
  const problems = [
    {
      icon: Shield,
      title: "Accountability",
      desc: "Stop ghost rides and unauthorised fuel use. Automated flags detect unassigned movement and route deviation, recorded in a live flag log."
    },
    {
      icon: FileCheck,
      title: "Evidence",
      desc: "Maintain an HR-ready disciplinary record. Every flag gets GPS coordinates and timestamps. Export to PDF in two clicks. Track rider scorecards."
    },
    {
      icon: Clock,
      title: "Operations",
      desc: "Create assignments on the web that appear instantly on the rider's phone. Tap to approve sign-offs. Proximity-based assignment available."
    },
    {
      icon: Bell,
      title: "Customer Experience",
      desc: "Send live tracking links via WhatsApp, SMS, or email. End the constant 'where is my order' calls with dated, transparent delivery proof."
    },
    {
      icon: UserCheck,
      title: "Payroll & Shifts",
      desc: "Riders clock in via the app. Strict, explicit sign-off approvals (no auto-approvals). Verifiable shift logs make payroll disputes a thing of the past."
    }
  ];

  const businessTypes = [
    { title: "Last-Mile & Couriers", desc: "SLA management. Know exactly where the delay happened and who was responsible.", icon: Map },
    { title: "Food & Grocery", desc: "Every minute counts. Spot idle riders before the food gets cold and the customer complains.", icon: Store },
    { title: "E-Commerce Fulfilment", desc: "High volume, high stakes. Automate customer tracking links and cut support tickets in half.", icon: Receipt },
    { title: "Pharma & Healthcare", desc: "Critical deliveries require a flawless audit trail. Timestamped routes and tamper-proof logs.", icon: Pill },
    { title: "Multi-Branch Operators", desc: "Centralised visibility. Manage 100+ riders across 5 different city hubs from a single dashboard.", icon: Layers }
  ];

  return (
    <div className="bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-50 min-h-screen">
      {/* 1. HERO */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Every fleet problem, <br className="hidden md:block" />
          <span className="text-blue-600">finally solved.</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          Pick your problem, see the fix. Traxx maps directly to the operational bottlenecks holding your business back.
        </p>
      </section>

      {/* 2. PROBLEM TABS (CARDS) */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white max-w-3xl mx-auto">How we handle the chaos.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((prob, i) => (
              <div key={i} className="bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 transition-colors">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <prob.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{prob.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{prob.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BY BUSINESS TYPE */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Built for your industry.</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">Whatever you move, Traxx tracks it.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessTypes.map((biz, i) => (
            <div key={i} className="flex gap-4 p-6 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-900">
              <div className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-700 dark:text-slate-300 shrink-0">
                <biz.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold mb-2">{biz.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{biz.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BY FLEET SIZE */}
      <section className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12">Scales exactly as you do.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/pricing" className="block p-8 rounded-[2rem] bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors group text-left">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">1–5 Riders</span>
              <h3 className="text-2xl font-bold mb-2">Freemium</h3>
              <p className="text-slate-400 text-sm mb-6 group-hover:text-slate-300 transition-colors">Start small, pay nothing. All the core tracking you need to establish order.</p>
              <span className="text-blue-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">View plan <ChevronRight className="w-4 h-4" /></span>
            </Link>
            <Link href="/pricing" className="block p-8 rounded-[2rem] bg-blue-600 border border-blue-500 hover:bg-blue-500 transition-colors group text-left shadow-xl shadow-blue-900/50">
              <span className="text-sm font-bold text-blue-200 uppercase tracking-widest block mb-4">6–20 Riders</span>
              <h3 className="text-2xl font-bold mb-2 text-white">Growth</h3>
              <p className="text-blue-100 text-sm mb-6">One flat rate. Automated flags and priority support as your operations scale.</p>
              <span className="text-white font-bold flex items-center gap-2 group-hover:gap-3 transition-all">View plan <ChevronRight className="w-4 h-4" /></span>
            </Link>
            <Link href="/pricing" className="block p-8 rounded-[2rem] bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors group text-left">
              <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-4">21+ Riders</span>
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-6 group-hover:text-slate-300 transition-colors">Unlimited branches, API integrations, and a dedicated account manager.</p>
              <span className="text-blue-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">View plan <ChevronRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. COMPARISON COMPONENT */}
      <CostOfChaosSection />

      {/* 6. HOW IT WORKS (3 STEPS) */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Onboarding is instant.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center px-4">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 text-blue-600 rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6">1</div>
            <h3 className="font-bold text-xl mb-3">Add your fleet</h3>
            <p className="text-slate-600 dark:text-slate-400">Invite riders via SMS. They tap the link, install the lightweight app, and sign in.</p>
          </div>
          <div className="text-center px-4 relative">
            <div className="hidden md:block absolute top-8 -left-[20%] w-[40%] h-[2px] bg-slate-200 dark:bg-slate-800"></div>
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900 text-blue-600 rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6">2</div>
            <h3 className="font-bold text-xl mb-3">Watch it move</h3>
            <p className="text-slate-600 dark:text-slate-400">The dashboard lights up instantly. You now have a live 5-second pulse on every asset.</p>
            <div className="hidden md:block absolute top-8 -right-[20%] w-[40%] h-[2px] bg-slate-200 dark:bg-slate-800"></div>
          </div>
          <div className="text-center px-4">
            <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-black text-2xl mx-auto mb-6 shadow-lg shadow-blue-500/30">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-3">Never explain a delay</h3>
            <p className="text-slate-600 dark:text-slate-400">Automated flags catch deviations, and customers track their own orders.</p>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-blue-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Solutions FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Does this work for intra-city dispatch?", a: "Yes. Traxx is highly optimised for tight intra-city logistics like food delivery and last-mile couriers where every minute counts." },
              { q: "Can I use Traxx for interstate trucking?", a: "Absolutely. Our offline caching ensures that even when trucks hit dead zones on the highway, their GPS data is saved and synced later." },
              { q: "How do customers get the tracking link?", a: "You can generate a secure link from the dashboard and share it via WhatsApp, SMS, or email. The link opens in any standard browser." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-slate-950 p-6 rounded-2xl cursor-pointer border border-slate-200 dark:border-slate-800 shadow-sm [&_summary::-webkit-details-marker]:hidden">
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
