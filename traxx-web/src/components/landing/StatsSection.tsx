export function StatsSection() {
  const stats = [
    { value: "5s", label: "GPS update interval" },
    { value: "95%+", label: "Flag detection rate" },
    { value: "3", label: "Products, one platform" },
    { value: "0", label: "Auto approvals. Ever." },
  ];

  return (
    <section className="py-20 md:py-24 px-6 max-w-[1000px] mx-auto bg-white dark:bg-[#020817]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-4xl md:text-5xl font-black text-blue-600 dark:text-blue-500 mb-2">
              {stat.value}
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
