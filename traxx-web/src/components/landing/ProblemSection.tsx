import { XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProblemSection() {
  const problems = [
    "No live vehicle visibility",
    "No proof of personal use",
    "No attendance audit trail",
    "No alert when something goes wrong",
    "No delivery assignment record",
  ];

  const stats = [
    { value: "5s", label: "GPS update interval" },
    { value: "100%", label: "Off-route trips logged" },
    { value: "3", label: "Manager · Rider · Customer apps" },
    { value: "0", label: "Flags cleared without review" },
  ];

  return (
    <section className="pt-20 md:pt-24 bg-white dark:bg-[#020817] text-slate-900 dark:text-white overflow-hidden border-b border-slate-100 dark:border-slate-800">
      
      {/* Top: Problem Grid */}
      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: copy */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
              You're paying for trips you <span className="text-blue-600 dark:text-blue-500">never authorized.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Most fleet owners in Nigeria pay riders a salary, cover fuel, and hand over a vehicle, with no way to enforce that working hours are used for company deliveries.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white border-l-4 border-blue-600 pl-4 py-1">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 rounded-md font-black text-[10px] text-white relative shadow-sm mr-2 align-middle -mt-1">
                TX
                <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-amber-500 rounded-full border border-white dark:border-slate-900"></span>
              </span>
              Traxx makes every movement visible, every deviation logged, and every anomaly flagged.
            </p>
          </div>

          {/* Right: Problem Card */}
          <div className="rounded-3xl border border-blue-100 dark:border-blue-900/30 bg-white dark:bg-slate-900 p-6 space-y-3 shadow-xl shadow-slate-200/50 dark:shadow-none">
            {problems.map((item) => (
              <div 
                key={item} 
                className="flex items-center gap-4 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 px-5 py-4"
              >
                 <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-500 shrink-0">
                   <XCircle className="w-5 h-5" />
                 </div>
                 <span className="text-lg font-semibold text-slate-900 dark:text-white">
                   {item}
                 </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: Stats Row (Full Width) */}
      <div className="w-full bg-blue-950 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-blue-200 uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
