export function UseCasesSection() {
  const useCases = [
    {
      title: "01 · Accountability",
      desc: "Stop paying for ghost rides and fuel you did not authorise.",
    },
    {
      title: "02 · Evidence",
      desc: "Build an HR-ready disciplinary record without lifting a pen.",
    },
    {
      title: "03 · Operations",
      desc: "Manage deliveries, sign-offs, and shifts from one screen.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-[#020817] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
            Every fleet problem, finally solved.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="border-l-4 border-blue-600 pl-6 py-2"
            >
              <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                {useCase.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                {useCase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
