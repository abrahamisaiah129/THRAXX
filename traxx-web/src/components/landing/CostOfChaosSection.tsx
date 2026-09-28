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
      "Your day, already reconstructed for you",
      "Answers ready the moment a dispute comes up",
    ];

  return (
    <section className="py-20 md:py-24 bg-blue-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white leading-[1.1]">
            Running on social messaging costs more than it looks like.
          </h2>
          <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
            Most fleet owners do not see the leak until they stop it.
          </p>
        </div>

        <div className="relative grid md:grid-cols-2 gap-10 md:gap-0 items-stretch">
          {/* WITHOUT — muted, flat, pushed back */}
          <div className="relative h-full rounded-3xl md:rounded-r-none bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-10 opacity-90 flex flex-col">
            <span className="inline-flex items-center text-xs font-bold text-red-500 uppercase tracking-wide mb-6">
              Without Traxx
            </span>
            <ul className="space-y-5">
              {without.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-500 dark:text-slate-400 text-sm pl-4 border-l-2 border-red-200 dark:border-red-900/50">
                  <XCircle className="w-4 h-4 text-red-400/70 shrink-0 mt-0.5" />
                  <span className="line-through decoration-slate-300 dark:decoration-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WITH — bold, elevated, scaled up slightly, floats above */}
          <div className="relative h-full rounded-3xl md:rounded-l-none bg-white dark:bg-slate-950 border border-blue-100 dark:border-blue-900/40 shadow-2xl shadow-blue-900/10 p-8 md:p-10 md:scale-[1.04] z-10 flex flex-col">
            
            {/* Floating divider badge */}
            <div className="absolute left-1/2 -top-5 md:top-1/2 md:-left-7 -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2 z-20 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-sm shadow-xl ring-8 ring-blue-950 md:ring-slate-50 md:dark:ring-slate-950">
              VS
            </div>

            <span className="inline-flex items-center text-xs font-bold text-blue-600 uppercase tracking-wide mb-6">
              With Traxx
            </span>
            <ul className="space-y-5">
              {withTraxx.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-900 dark:text-slate-100 text-sm font-bold pl-4 border-l-2 border-blue-200 dark:border-blue-800">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
