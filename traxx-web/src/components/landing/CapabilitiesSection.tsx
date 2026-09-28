import { Activity } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CapabilitiesSection() {
  const features = [
    {
      title: "Live Fleet Map",
      desc: "See every rider and vehicle in real time, no refresh needed.",
    },
    {
      title: "Automated Flag Detection",
      desc: "Deviations and idle time get flagged the moment they happen.",
    },
    {
      title: "GPS Replay & Audit Trail",
      desc: "Reconstruct any trip, any day, in a few clicks.",
    },
    {
      title: "Shift Management & Sign Off",
      desc: "Clock-ins, clock-outs, and approvals in one place.",
    },
    {
      title: "Rider Scorecards",
      desc: "Objective performance data, not gut feeling.",
    },
    {
      title: "Fair Flagging Engine",
      desc: "Rules-based, consistent, and explainable to riders.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-[#020817] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-4">
            Platform Capabilities
          </h3>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
            Built for the way Nigerian fleets actually work.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We do not just show you where your vehicles are. We help you stay
            in control of what is happening.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                {f.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
