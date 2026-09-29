import { Warehouse, Truck, Store, Home, Radio, Activity, Lock, Share2 } from "lucide-react";

export default function ArchitecturePage() {
  const journey = [
    {
      icon: Warehouse,
      title: "1. The Warehouse",
      desc: "Goods are loaded. Dispatch connects the driver to the Traxx system via a simple link or the Rider App.",
    },
    {
      icon: Truck,
      title: "2. The Long Haul",
      desc: "Moving across state lines. Traxx tracks the asset in real-time, instantly flagging route deviations or unauthorized stops.",
    },
    {
      icon: Store,
      title: "3. Distribution Center",
      desc: "Arrival logged automatically. Goods are transferred to last-mile riders. Handoff is recorded with precise timestamp and location.",
    },
    {
      icon: Home,
      title: "4. The Consumer",
      desc: "Customer tracks the live delivery via a Traxx web link. No 'where are you?' calls to your support team.",
    }
  ];

  return (
    <div className="bg-[#020817] text-white min-h-screen">
      {/* Hero Section */}
      <div className="pt-32 pb-24 px-6 text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8">
          <Activity className="w-4 h-4" /> Traxx Architecture
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          One system. <br />
          <span className="text-blue-500">The entire journey.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Logistics is deeply fragmented. A single package can change hands three times before it reaches the consumer. Traxx is the continuous intelligence layer that sits above the chaos, acting as your single source of truth.
        </p>
      </div>

      {/* The Journey Section */}
      <div className="py-24 px-6 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {journey.map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connecting Line (Desktop) */}
                {idx !== journey.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-full h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                )}
                
                <div className="bg-slate-950 border border-slate-800 p-8 rounded-[2rem] h-full relative z-10 group hover:border-blue-500/50 transition-colors">
                  <div className="w-16 h-16 bg-blue-950 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-blue-900/20">
                    <step.icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The Traxx Overlay */}
      <div className="py-32 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-16">
          The One-Time Service Layer
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="p-8 bg-blue-950/20 border border-blue-900/30 rounded-3xl">
            <Radio className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Persistent Tracking</h3>
            <p className="text-blue-200/70">Whether it's a 10-ton truck or a dispatch motorcycle, the asset is actively pinged every 5 seconds without draining the battery.</p>
          </div>
          <div className="p-8 bg-blue-950/20 border border-blue-900/30 rounded-3xl">
            <Lock className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Tamper-Proof Ledger</h3>
            <p className="text-blue-200/70">GPS data is cached offline if signal drops and instantly synced back to the server once connection returns. No missing miles.</p>
          </div>
          <div className="p-8 bg-blue-950/20 border border-blue-900/30 rounded-3xl">
            <Share2 className="w-8 h-8 text-blue-400 mb-6" />
            <h3 className="text-xl font-bold mb-3">Unified Visibility</h3>
            <p className="text-blue-200/70">All hands—managers, merchants, and end consumers—look at the exact same data source in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
