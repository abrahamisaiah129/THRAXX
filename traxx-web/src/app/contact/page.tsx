"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, AlertCircle, CheckCircle2, ChevronRight, UploadCloud } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [topic, setTopic] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<{ ref: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTopic(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const honeypot = formData.get("bot_field");
    if (honeypot) {
      // Bot detected, silently succeed
      setIsSubmitting(false);
      setSuccessData({ ref: "TRX-B0T" });
      return;
    }

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      businessName: formData.get("businessName"),
      topic: formData.get("topic"),
      message: formData.get("message"),
      priority: formData.get("priority"),
      riderCount: formData.get("riderCount"),
      branchCount: formData.get("branchCount"),
      accountEmail: formData.get("accountEmail"),
      tripId: formData.get("tripId"),
    };

    try {
      const res = await fetch("/api/crm/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit request.");

      setSuccessData({ ref: data.referenceNumber });
    } catch (err: any) {
      setError("We encountered an issue submitting your form. Please email us at contact@traxx.ng or reach out via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-50 min-h-screen">
      {/* 1. HERO */}
      <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center border-b border-slate-200 dark:border-slate-800">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Tell us what you are <span className="text-blue-600">trying to fix.</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
          Whether you need a full enterprise rollout or just have a quick question about a ghost ride, we are here. <strong className="text-slate-900 dark:text-white">We reply within one business day.</strong>
        </p>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* DIRECT CHANNELS (LEFT COLUMN) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold mb-8">Direct Channels</h2>
              <div className="space-y-6">
                <a href="mailto:contact@traxx.ng" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold">Email Us</span>
                    <span className="text-slate-600 dark:text-slate-400">contact@traxx.ng</span>
                  </div>
                </a>
                
                <a href="https://wa.me/2348154225462" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold">WhatsApp Support</span>
                    <span className="text-slate-600 dark:text-slate-400">Click to chat</span>
                  </div>
                </a>

                <a href="tel:+2348154225462" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-bold">Call Us</span>
                    <span className="text-slate-600 dark:text-slate-400">+234 815 422 5462</span>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Location</h3>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-bold">Headquartered in Lagos</p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-1 leading-relaxed">
                    Traxx operates cloud infrastructure serving fleets across all 36 states and the FCT.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM (RIGHT COLUMN) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 md:p-12 shadow-xl">
              
              {successData ? (
                <div className="text-center py-12 animate-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-extrabold mb-4">Received.</h3>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                    Your reference number is <strong className="text-slate-900 dark:text-white">{successData.ref}</strong>.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mb-8">
                    We have logged your request securely. A confirmation email is on its way, and our team will respond within one business day.
                  </p>
                  <Button onClick={() => setSuccessData(null)} variant="outline" className="px-8 rounded-xl font-bold">Submit another request</Button>
                </div>
              ) : topic === "Careers" ? (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold mb-4">Looking to join the team?</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8">
                    We manage all job applications through our dedicated careers portal to ensure they reach the hiring team directly.
                  </p>
                  <Link href="/careers">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 font-bold">View Open Roles</Button>
                  </Link>
                  <button onClick={() => setTopic("")} className="block mt-6 text-sm text-slate-500 mx-auto font-medium hover:text-slate-900 dark:hover:text-white">
                    Go back
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-xl text-red-700 dark:text-red-400 text-sm font-medium flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0" /> {error}
                    </div>
                  )}

                  {/* Honeypot */}
                  <input type="text" name="bot_field" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="space-y-2">
                    <label className="text-sm font-bold">What is this about? <span className="text-red-500">*</span></label>
                    <select name="topic" required value={topic} onChange={handleTopicChange} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none font-medium">
                      <option value="" disabled>Select a topic...</option>
                      <option value="General enquiry">General enquiry</option>
                      <option value="Request a demo">Request a demo</option>
                      <option value="Pricing question">Pricing question</option>
                      <option value="Existing account support">Existing account support</option>
                      <option value="Complaint">Complaint</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Careers">Careers</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Full Name <span className="text-red-500">*</span></label>
                      <input type="text" name="name" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" name="email" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Phone Number <span className="text-red-500">*</span></label>
                      <input type="tel" name="phone" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold">Business Name <span className="text-red-500">*</span></label>
                      <input type="text" name="businessName" required className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  {/* CONDITIONAL FIELDS */}
                  {(topic === "Existing account support" || topic === "Complaint") && (
                    <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-6 animate-in slide-in-from-top-2 duration-200">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Fleet Account Email</label>
                          <input type="email" name="accountEmail" placeholder="If different from above" className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Priority <span className="text-red-500">*</span></label>
                          <select name="priority" required className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="Low">Low</option>
                            <option value="Medium">Medium</option>
                            <option value="High">High</option>
                            <option value="Urgent">Urgent</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Trip / Assignment ID</label>
                          <input type="text" name="tripId" placeholder="e.g. TRP-1094" className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold">Screenshot</label>
                          <div className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-500 text-sm flex items-center gap-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                            <UploadCloud className="w-4 h-4" /> Upload image
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(topic === "Pricing question" || topic === "Request a demo") && (
                    <div className="grid md:grid-cols-2 gap-6 animate-in slide-in-from-top-2 duration-200">
                      <div className="space-y-2">
                        <label className="text-sm font-bold">Approx. Rider Count</label>
                        <select name="riderCount" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option value="1-5">1 - 5 Riders (Freemium)</option>
                          <option value="6-20">6 - 20 Riders (Growth)</option>
                          <option value="21+">21+ Riders (Enterprise)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold">Number of Branches</label>
                        <input type="number" name="branchCount" min="1" defaultValue="1" className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-bold">Message <span className="text-red-500">*</span></label>
                    <textarea name="message" required rows={4} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <input type="checkbox" id="ndpr-contact" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                    <label htmlFor="ndpr-contact" className="text-sm text-slate-600 dark:text-slate-400">
                      I consent to the processing of my personal data in accordance with NDPR guidelines and the <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
                    </label>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-lg font-bold shadow-none disabled:opacity-70 disabled:cursor-not-allowed">
                    {isSubmitting ? "Sending Securely..." : "Submit Request"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
