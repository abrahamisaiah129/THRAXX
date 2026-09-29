export default function BlogPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-4xl mx-auto min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">Traxx Blog</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Insights on logistics, fleet intelligence, and scaling operations in Nigeria.
        </p>
      </div>
      <div className="grid gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all cursor-pointer group">
            <div className="text-sm font-bold text-blue-600 mb-3">PRODUCT UPDATE</div>
            <h2 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">How live tracking reduces operational chaos by 40%</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              A deep dive into why relying on phone calls and WhatsApp messages for dispatch is costing your business more than just time.
            </p>
            <div className="text-sm font-semibold text-slate-500">October 12, 2026 · 5 min read</div>
          </div>
        ))}
      </div>
    </div>
  );
}
