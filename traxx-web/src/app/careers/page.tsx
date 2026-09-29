"use client";

import { ArrowRight, MapPin, Building, Clock, UploadCloud, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { CTASection } from "@/components/landing/CTASection";

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    { id: "frontend-eng", title: "Senior Frontend Engineer", dept: "Engineering", location: "Lagos, Nigeria", type: "Remote" },
    { id: "pmm", title: "Product Marketing Manager", dept: "Marketing", location: "Lagos, Nigeria", type: "Hybrid" },
    { id: "csm", title: "Customer Success Lead", dept: "Operations", location: "Nigeria", type: "Remote" }
  ];

  return (
    <div className="bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-50 min-h-screen">
      {/* 1. HERO */}
      <section className="pt-32 pb-24 px-6 max-w-5xl mx-auto text-center border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Join the <span className="text-blue-600">Mission.</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          We are building the operating system for physical logistics in Africa. Come help us eliminate the chaos and give fleet managers their sanity back.
        </p>
      </section>

      {/* 2. WHY WORK HERE */}
      <section className="py-24 px-6 max-w-6xl mx-auto border-b border-slate-200 dark:border-slate-800">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6">How we work.</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              We move fast, we talk to customers every day, and we prefer shipping over meetings. Our team is small, high-agency, and distributed across Nigeria.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <span><strong>No bureaucracy.</strong> If you see a problem, fix it. We don't do endless approvals.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <span><strong>Direct impact.</strong> Your work immediately affects how hundreds of businesses run their daily operations.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 shrink-0" />
                <span><strong>Remote-first.</strong> Work from where you work best, though we occasionally meet up in Lagos.</span>
              </li>
            </ul>
          </div>
          <div className="bg-slate-100 dark:bg-slate-900 aspect-square md:aspect-[4/3] rounded-[2.5rem] flex items-center justify-center p-8 text-center border border-slate-200 dark:border-slate-800">
            <span className="text-slate-400 font-medium">Team Image Placeholder</span>
          </div>
        </div>
      </section>

      {/* 3. OPEN ROLES & APPLICATION FORM */}
      <section className="py-24 px-6 max-w-4xl mx-auto" id="open-roles">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4">Open Roles</h2>
        </div>

        {!selectedRole ? (
          <div className="grid gap-4">
            {roles.map((role) => (
              <div 
                key={role.id} 
                onClick={() => setSelectedRole(role.id)}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors cursor-pointer"
              >
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{role.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-500">
                    <span className="flex items-center gap-1.5"><Building className="w-4 h-4" /> {role.dept}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {role.location}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {role.type}</span>
                  </div>
                </div>
                <div className="w-12 h-12 bg-white dark:bg-slate-950 rounded-full flex items-center justify-center border border-slate-200 dark:border-slate-800 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all shrink-0">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 md:p-12 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-300">
            <button 
              onClick={() => setSelectedRole(null)}
              className="text-sm font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white mb-8 flex items-center gap-2"
            >
              &larr; Back to all roles
            </button>
            <div className="mb-10 pb-10 border-b border-slate-200 dark:border-slate-800">
              <h3 className="text-3xl font-extrabold mb-4">{roles.find(r => r.id === selectedRole)?.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Please fill out the application form below. Your application will be sent directly to our hiring team inbox. We aim to respond to all applicants within 3 business days.
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Phone Number <span className="text-red-500">*</span></label>
                  <input type="tel" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">LinkedIn / Portfolio URL <span className="text-red-500">*</span></label>
                  <input type="url" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">Upload CV/Resume (PDF/DOCX) <span className="text-red-500">*</span></label>
                <div className="border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl p-8 text-center hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors cursor-pointer">
                  <UploadCloud className="w-8 h-8 text-slate-400 mx-auto mb-3" />
                  <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-slate-500 mt-1">Max file size: 5MB</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">Short Message (Optional)</label>
                <textarea rows={4} placeholder="Anything else we should know?" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input type="checkbox" id="ndpr" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                <label htmlFor="ndpr" className="text-sm text-slate-600 dark:text-slate-400">
                  I consent to the collection and processing of my personal data for recruitment purposes in accordance with NDPR guidelines and the <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                </label>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-lg font-bold">Submit Application</Button>
            </form>
          </div>
        )}
      </section>

      {/* CTA BANNER */}
      <CTASection />
    </div>
  );
}
