import { Package, Truck, Pizza, Factory } from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">Built for physical operations.</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          From cold-chain delivery to local dispatch, Traxx adapts to your specific operational constraints.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            icon: Package,
            title: "Last-Mile Delivery",
            desc: "Prevent SLA breaches before they happen with live tracking links for customers and automated delay alerts for your dispatch team."
          },
          {
            icon: Truck,
            title: "Long-Haul Logistics",
            desc: "Track trucks across interstate routes. Cash offline GPS data locally and sync instantly when entering coverage zones."
          },
          {
            icon: Pizza,
            title: "Food & Q-Commerce",
            desc: "Every minute counts. Identify exactly which rider is slacking and which routes are causing consistent delays."
          },
          {
            icon: Factory,
            title: "Distributors & FMCG",
            desc: "Ensure your goods actually reach the retailer. Monitor unauthorized stops and route deviations in real-time."
          }
        ].map((solution) => (
          <div key={solution.title} className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <solution.icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {solution.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
