import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto min-h-screen">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">Join the Mission</h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          We are building the operating system for physical logistics in Africa. Come help us eliminate the chaos.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Open Roles</h2>
        <div className="grid gap-4">
          {[
            { title: "Senior Frontend Engineer", dept: "Engineering", type: "Remote (Lagos)" },
            { title: "Product Marketing Manager", dept: "Marketing", type: "Hybrid (Lagos)" },
            { title: "Customer Success Lead", dept: "Operations", type: "Remote (Nigeria)" }
          ].map((job) => (
            <div key={job.title} className="group flex items-center justify-between p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-600 transition-colors cursor-pointer">
              <div>
                <h3 className="text-lg font-bold mb-1">{job.title}</h3>
                <div className="flex gap-4 text-sm font-medium text-slate-500">
                  <span>{job.dept}</span>
                  <span>·</span>
                  <span>{job.type}</span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
