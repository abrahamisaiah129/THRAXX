import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      q: "What is Traxx?",
      a: "Traxx is a fleet intelligence platform that gives Nigerian businesses live visibility into their riders and vehicles, with automated flagging when something looks off.",
    },
    {
      q: "Do riders need a special phone or device?",
      a: "No. The Traxx Rider App works on any standard Android or iOS smartphone. As long as they have the app installed and location services enabled, you have full visibility.",
    },
    {
      q: "What happens if a rider loses data or network signal?",
      a: "Traxx automatically caches the GPS data locally on the rider's phone. The moment they re-enter a coverage zone, all the offline data syncs instantly, leaving no gaps in your audit trail.",
    },
    {
      q: "How does the tracking actually work?",
      a: "Each vehicle or rider device reports its location every 5 seconds. That feed powers the live map, the replay history, and the flag detection engine.",
    },
    {
      q: "How much does it cost?",
      a: "Pricing is simple: you pay per active rider or vehicle, billed monthly through Paystack. Check our Pricing page for the full breakdown—no hidden setup fees, no annual lock-ins.",
    },
    {
      q: "How do my customers get the tracking link?",
      a: "A tracking link is generated automatically for each delivery and can be shared by SMS, WhatsApp, or natively embedded into your own order confirmation flow.",
    },
    {
      q: "Is Traxx available outside Lagos?",
      a: "Absolutely. Traxx works anywhere in Nigeria with GPS and mobile network coverage, supporting fleets across all 36 states and the FCT.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-blue-50 dark:bg-blue-950/20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-slate-900 dark:text-white">
            Plain answers, no jargon.
          </h2>
        </div>

        <div className="rounded-[2rem] bg-white dark:bg-[#020817] shadow-xl shadow-blue-900/5 dark:shadow-none px-8 md:px-10 border border-blue-100 dark:border-slate-800">
          {faqs.map((item, i) => (
            <details
              key={item.q}
              className={`group py-6 ${i !== faqs.length - 1 ? "border-b border-slate-100 dark:border-slate-800" : ""}`}
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                  {item.q}
                </span>
                <ChevronDown className="w-5 h-5 text-blue-600 dark:text-blue-500 shrink-0 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
