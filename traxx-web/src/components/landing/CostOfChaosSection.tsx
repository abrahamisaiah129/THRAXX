import { CheckCircle2, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CostOfChaosSection() {
  const without = [
    "Customers calling to ask where their order is",
    "No record of where a vehicle actually went",
    "Riders operating with no real accountability",
    "Your day reconstructed from memory and chat scroll",
    "Disputes you cannot actually settle",
  ];

  const withTraxx = [
    "Customers watch their own delivery arrive",
    "Every trip logged, verifiable, on record",
    "Every rider and vehicle accounted for",
    "A daily report waiting for you",
    "Answers ready the moment a dispute comes up",
  ];

  return (
    <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4 text-slate-900 dark:text-white">
            Running on social messaging costs more than it looks like.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Most fleet owners do not see the leak until they stop it.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-6 md:gap-0">
          {/* WITHOUT — muted, flat, pushed back */}
          <div className="relative rounded-3xl md:rounded-r-none bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 opacity-90">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-wide mb-6">
              <XCircle className="w-4 h-4" /> Without Traxx
            </span>
            <ul className="space-y-4">
              {without.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-500 dark:text-slate-400 text-sm">
                  <XCircle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                  <span className="line-through decoration-slate-300 dark:decoration-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WITH — bold, elevated, scaled up slightly, floats above */}
          <div className="relative rounded-3xl md:rounded-l-none bg-white dark:bg-slate-950 border border-blue-100 dark:border-blue-900/40 shadow-2xl shadow-blue-900/10 p-8 md:p-10 md:scale-[1.04] z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 uppercase tracking-wide mb-6">
              <CheckCircle2 className="w-4 h-4" /> With Traxx
            </span>
            <ul className="space-y-4">
              {withTraxx.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-900 dark:text-slate-100 text-sm font-bold">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Floating divider badge */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-blue-600 text-white items-center justify-center font-black text-sm shadow-xl ring-4 ring-slate-50 dark:ring-slate-900/50">
            VS
          </div>
        </div>
      </div>
    </section>
  );
}
