import { ArrowRight, Smartphone, Cloud, MonitorSmartphone, Share2, Activity, ShieldAlert, FileSearch, ShieldCheck, Database, Server, HelpCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ArchitecturePage() {
  const wavePattern = `data:image/svg+xml,%3Csvg width='120' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 30 0 60 20 T 120 20' fill='none' stroke='%2360a5fa' stroke-width='8' opacity='0.3'/%3E%3Cpath d='M0 40 Q 30 20 60 40 T 120 40' fill='none' stroke='%231e3a8a' stroke-width='8' opacity='0.3'/%3E%3C/svg%3E`;

  return (
    <div className="bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-50 min-h-screen pb-24">
      {/* Spacer for fixed transparent navbar */}
      <div className="h-[72px] md:h-[96px] w-full bg-white dark:bg-[#020817]"></div>

      {/* 1. HERO */}
      <section 
        className="relative pt-12 pb-20 px-6 bg-blue-900 text-white overflow-hidden"
        style={{ backgroundImage: `url("${wavePattern}")`, backgroundSize: '120px 40px' }}
      >
        <div className="absolute inset-0 bg-blue-950/80" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            How Traxx works under the hood.
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-10">
            One platform, three products, built from the ground up for Nigerian roads and networks.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#start-trial">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold px-8 !text-blue-600 border-none">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto font-bold px-8 bg-transparent text-white border-2 border-white/50 hover:border-white hover:bg-white/10">
                Book a Walkthrough
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PLATFORM OVERVIEW DIAGRAM */}
      <section className="py-24 px-6 bg-blue-50 dark:bg-blue-950/20 w-full border-y border-blue-100 dark:border-blue-900/30">
        <div className="max-w-6xl mx-auto bg-[#0b1736] border border-blue-900/50 rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-16">The Traxx Ecosystem</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative">
            
            {/* Desktop Connectors */}
            <div className="hidden md:block absolute top-1/2 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-blue-500 via-amber-400 to-blue-500 opacity-40 -translate-y-1/2"></div>
            
            {/* Step 1 */}
            <div className="bg-blue-950/50 backdrop-blur p-6 rounded-2xl border border-blue-900/50 shadow-sm relative z-10 w-full md:w-64">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-400 mb-4 mx-auto">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2 text-white">Rider App (PWA)</h3>
              <p className="text-sm text-blue-200/70">Reports GPS every 5s. Receives assignments & status updates.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-blue-600 p-6 rounded-2xl shadow-xl shadow-blue-500/20 relative z-10 w-full md:w-72 scale-105 border-4 border-blue-500/30">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white mb-4 mx-auto backdrop-blur-sm">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-white mb-2">Traxx Cloud</h3>
              <p className="text-sm text-blue-100">Processes signals, evaluates rules, flags deviations instantly.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-blue-950/50 backdrop-blur p-6 rounded-2xl border border-blue-900/50 shadow-sm relative z-10 w-full md:w-64">
              <div className="w-12 h-12 bg-blue-900/50 rounded-xl flex items-center justify-center text-blue-400 mb-4 mx-auto">
                <MonitorSmartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold mb-2 text-white">Visibility</h3>
              <p className="text-sm text-blue-200/70">Fleet manager dashboard & public customer tracking links.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE THREE PRODUCTS */}
      <section className="py-24 px-6 bg-blue-900 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-white max-w-3xl mx-auto">
              Three products, one source of truth.
            </h2>
            <div className="relative w-full max-w-[900px] mx-auto mt-12 mb-16 transition-all duration-700 z-10">
              <img
                src="/images/hero-dashboard.png"
                alt="Traxx dashboard and tracking"
                className="w-full h-auto object-cover rounded-[2rem] border border-blue-800 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            <div className="relative p-8 rounded-[2rem] bg-blue-50 border border-blue-100 shadow-xl flex flex-col h-full group hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">Fleet Manager Dashboard</h3>
              <p className="text-base text-blue-900/80 leading-relaxed font-medium">The command center. View the live map, manage riders, create assignments, track shifts, handle billing, and configure fleet-wide settings.</p>
            </div>
            <div className="relative p-8 rounded-[2rem] bg-blue-50 border border-blue-100 shadow-xl flex flex-col h-full group hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">Rider App</h3>
              <p className="text-base text-blue-900/80 leading-relaxed font-medium">A lightweight PWA for drivers. Handles deliveries, transmits live GPS data, sends status updates, and strictly manages shift sign-offs.</p>
            </div>
            <div className="relative p-8 rounded-[2rem] bg-blue-50 border border-blue-100 shadow-xl flex flex-col h-full group hover:-translate-y-1 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-blue-950">Customer Tracking Page</h3>
              <p className="text-base text-blue-900/80 leading-relaxed font-medium">A frictionless tracking link opened directly in the browser. No app download required for your customers to see exactly where their delivery is.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 & 5. PIPELINE & FLAG ENGINE */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-8 text-slate-900 dark:text-white leading-[1.1]">Real-time tracking, evaluated instantly.</h2>
            <div className="space-y-6">
              {[
                "Phone reports exact GPS position every 5 seconds.",
                "Data is plotted on the live map with a colour-coded status (on trip, idle, flagged, offline).",
                "The Flag Engine evaluates the movement against active assignments.",
                "Dashboard and manager notifications update instantly."
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 flex items-center justify-center font-bold shrink-0">{i + 1}</div>
                  <p className="font-medium text-slate-700 dark:text-slate-300 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0b1736] p-8 rounded-[2rem] border border-blue-900/50 shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-6 text-amber-400">Flag Detection Engine</h3>
            <p className="text-blue-100/80 mb-6">
              Traxx automatically detects operational anomalies with a 95%+ accuracy rate.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-400" /> Route deviation</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-400" /> Unassigned movement</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-400" /> Prolonged idle alerts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-400" /> Unauthorised disengagement</li>
            </ul>
            <div className="p-4 bg-blue-950 rounded-xl border border-blue-800 text-sm font-medium text-blue-200">
              <strong>Fair Flagging:</strong> The engine differentiates between genuine traffic stops and actual idle violations.
            </div>
          </div>
        </div>
      </section>

      {/* 6, 7 & 8. DATA, SECURITY, RELIABILITY */}
      <section className="py-24 px-6 bg-black w-full text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#0b1736] rounded-[2rem] border border-blue-900/50 shadow-xl">
            <FileSearch className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-3">Data & Audit Trail</h3>
            <p className="text-blue-100/80 text-sm mb-4">Every trip is timestamped. Export logs via PDF/CSV with two clicks. Visual GPS route replay available for post-trip review.</p>
            <p className="text-sm font-bold text-white">90-day GPS retention.</p>
          </div>
          <div className="p-8 bg-[#0b1736] rounded-[2rem] border border-blue-900/50 shadow-xl">
            <ShieldCheck className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
            <p className="text-blue-100/80 text-sm mb-4">Role-based access enforced server-side. Encrypted delivery records at every plan level. All riders are KYC-verified.</p>
            <div className="flex gap-2 text-xs font-bold uppercase text-blue-300 mt-auto">
              <span className="px-2 py-1 bg-blue-900/50 text-blue-200 rounded">NDPR Compliant</span>
              <span className="px-2 py-1 bg-blue-900/50 text-blue-200 rounded">SSL Encrypted</span>
            </div>
          </div>
          <div className="p-8 bg-[#0b1736] rounded-[2rem] border border-blue-900/50 shadow-xl">
            <Activity className="w-10 h-10 text-white mb-6" />
            <h3 className="text-xl font-bold mb-3">Offline Reliability</h3>
            <p className="text-blue-100/80 text-sm">When network drops, the Rider App caches GPS coordinates locally. Once connection returns, data syncs seamlessly to the cloud. No missing miles.</p>
          </div>
        </div>
      </section>

      {/* 9. INTEGRATIONS */}
      <section 
        className="relative py-24 px-6 text-center bg-blue-900 text-white overflow-hidden w-full"
        style={{ backgroundImage: `url("${wavePattern}")`, backgroundSize: '120px 40px' }}
      >
        <div className="absolute inset-0 bg-blue-950/80" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-12">Seamless Integrations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-blue-900/50 backdrop-blur text-blue-100 border border-blue-800 rounded-full font-bold shadow-sm">Paystack Billing</span>
            <span className="px-6 py-3 bg-blue-900/50 backdrop-blur text-blue-100 border border-blue-800 rounded-full font-bold shadow-sm">WhatsApp / SMS / Email Links</span>
            <span className="px-6 py-3 bg-blue-900/50 backdrop-blur text-blue-100 border border-blue-800 rounded-full font-bold shadow-sm">Google Maps</span>
            <span className="px-6 py-3 bg-[#0b1736] text-white border border-blue-700 rounded-full font-bold shadow-xl flex items-center gap-2">API Access <span className="px-2 py-0.5 bg-blue-600 text-white text-[10px] rounded uppercase tracking-wider">Enterprise Soon</span></span>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 bg-blue-50 dark:bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">Technical FAQ</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "How often does location update?", a: "The Rider App transmits GPS coordinates to our servers every 5 seconds while a shift is active." },
              { q: "Where is data stored and for how long?", a: "All operational data is stored securely in our cloud infrastructure. Full GPS traces are retained for 90 days for audit and replay purposes." },
              { q: "Do customers need an app?", a: "No. Customers receive a secure tracking link via SMS, Email, or WhatsApp that opens instantly in any mobile browser." },
              { q: "What happens with poor network?", a: "The Rider App continues to record GPS data locally on the device when signal drops. The cached data is pushed to the server the moment connectivity is restored." },
              { q: "Who can see what?", a: "Access is strictly role-based (Manager, Admin, Rider). Managers see the full fleet. Riders only see their own active assignments." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white dark:bg-slate-950 p-6 rounded-2xl cursor-pointer border border-slate-200 dark:border-slate-800 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between font-bold text-lg text-slate-900 dark:text-white">
                  {faq.q}
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
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

      {/* 11. CTA */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div 
          className="bg-blue-900 rounded-[3rem] p-12 text-center text-white shadow-2xl relative overflow-hidden border border-blue-800"
          style={{ backgroundImage: `url("${wavePattern}")`, backgroundSize: '120px 40px' }}
        >
          <div className="absolute inset-0 bg-blue-950/80" />
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none z-10">
             <div className="text-9xl font-black">TX</div>
          </div>
          <div className="relative z-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Ready to see it in action?</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 font-medium">Set up your fleet in minutes and watch the data flow.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="#start-trial">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto font-bold px-8 !text-blue-600 border-none">Start Free Trial</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-blue-800 text-white hover:bg-blue-700 border border-blue-600 font-bold px-8">Book a Walkthrough</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
