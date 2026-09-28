import { Shield, FileText, LayoutDashboard } from "lucide-react";

export function UseCasesSection() {
  const useCases = [
    {
      step: "01",
      title: "Accountability",
      desc: "Stop paying for ghost rides and fuel you did not authorise.",
      icon: Shield,
    },
    {
      step: "02",
      title: "Evidence",
      desc: "Build an HR-ready disciplinary record without lifting a pen.",
      icon: FileText,
    },
    {
      step: "03",
      title: "Operations",
      desc: "Manage deliveries, sign-offs, and shifts from one screen.",
      icon: LayoutDashboard,
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-white dark:bg-[#020817] px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white max-w-3xl mx-auto">
            Every fleet problem, finally solved.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Three core pillars designed to put you back in control of your logistics operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {useCases.map((useCase) => (
            <div
              key={useCase.title}
              className="relative p-8 rounded-[2rem] bg-blue-950 border border-blue-900/50 shadow-xl flex flex-col h-full group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-xl bg-blue-900/50 text-blue-400 flex items-center justify-center ring-1 ring-blue-800/50">
                  <useCase.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-bold text-blue-400/80 tracking-widest">
                  {useCase.step}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {useCase.title}
              </h3>
              <p className="text-base text-blue-100/80 leading-relaxed font-medium">
                {useCase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
