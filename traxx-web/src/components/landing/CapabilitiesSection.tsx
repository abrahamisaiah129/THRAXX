import { Map, Flag, History, Clock, LineChart, Scale } from "lucide-react";

export function CapabilitiesSection() {
  const features = [
    {
      title: "Live Fleet Map",
      desc: "See every rider and vehicle in real time, no refresh needed.",
      icon: Map,
    },
    {
      title: "Automated Flag Detection",
      desc: "Deviations and idle time get flagged the moment they happen.",
      icon: Flag,
    },
    {
      title: "GPS Replay & Audit Trail",
      desc: "Reconstruct any trip, any day, in a few clicks.",
      icon: History,
    },
    {
      title: "Shift Management & Sign Off",
      desc: "Clock-ins, clock-outs, and approvals in one place.",
      icon: Clock,
    },
    {
      title: "Rider Scorecards",
      desc: "Objective performance data, not gut feeling.",
      icon: LineChart,
    },
    {
      title: "Fair Flagging Engine",
      desc: "Rules-based, consistent, and explainable to riders.",
      icon: Scale,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-[#020817] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white max-w-3xl mx-auto">
            Built for the way Nigerian fleets actually work.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We do not just show you where your vehicles are. We help you stay
            in control of what is happening.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-8 rounded-[2rem] bg-slate-900 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group border border-slate-800"
            >
              {/* Wavy Background SVG */}
              <div className="absolute inset-x-0 bottom-0 text-slate-800 opacity-50 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                <svg viewBox="0 0 1440 320" className="w-full h-auto translate-y-1" preserveAspectRatio="none">
                  <path fill="currentColor" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center mb-6 shadow-inner border border-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {f.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
