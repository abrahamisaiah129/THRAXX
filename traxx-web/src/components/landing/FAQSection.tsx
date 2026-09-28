import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "What is Traxx?",
      a: "Traxx is a fleet intelligence platform that gives Nigerian businesses live visibility into their riders and vehicles, with automated flagging when something looks off.",
    },
    {
      q: "How does the tracking actually work?",
      a: "Each vehicle or rider device reports its location every 5 seconds. That feed powers the live map, the replay history, and the flag detection engine.",
    },
    {
      q: "How much does it cost?",
      a: "Pricing is per active rider or vehicle, billed monthly through Paystack. No setup fees, no annual contract.",
    },
    {
      q: "How do my customers get the tracking link?",
      a: "A tracking link is generated automatically for each delivery and can be shared by SMS, WhatsApp, or your own order confirmation flow.",
    },
    {
      q: "Is Traxx available outside Lagos?",
      a: "Yes — Traxx works anywhere in Nigeria with GPS and mobile network coverage, across all 36 states and the FCT.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/50 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Plain answers, no jargon.
          </h2>
        </div>

        <div className="rounded-2xl bg-white dark:bg-slate-950 shadow-sm px-6 border border-slate-100 dark:border-slate-800/50">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className={`group py-5 ${i !== faqs.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-bold text-slate-800 dark:text-slate-200">
                  {item.q}
                </span>
                <ChevronDown className="w-5 h-5 text-slate-400 dark:text-slate-500 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
