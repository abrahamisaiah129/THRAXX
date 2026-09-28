"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Building2, Truck, User, ShieldCheck, CreditCard, Lock } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Step = 1 | 2 | 3;

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1);

  // Form State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    companyName: "",
    state: "",
    fleetSize: "",
    vehicleType: "",
    agreedToTos: false,
  });

  const updateForm = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3) as Step);
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1) as Step);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      nextStep();
    } else {
      // Final submit logic here
      console.log("Submit registration", formData);
      // Redirect to dashboard (mock)
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col md:flex-row font-sans">
      
      {/* Left Column: Branding / Info */}
      <div className="hidden md:flex flex-col justify-between w-[40%] max-w-[500px] bg-blue-600 p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <Link href="/" className="text-2xl font-black tracking-tighter text-white inline-block mb-16">
            Traxx.
          </Link>
          
          <h1 className="text-4xl font-black mb-6 leading-tight">
            Your Logistics.<br/>Under Control.
          </h1>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed max-w-sm">
            Join hundreds of Nigerian businesses getting live visibility and stopping ghost rides instantly.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-blue-50 font-medium">
              <ShieldCheck className="w-5 h-5 text-blue-200" />
              NDPR Compliant
            </div>
            <div className="flex items-center gap-3 text-blue-50 font-medium">
              <CreditCard className="w-5 h-5 text-blue-200" />
              Paystack Secured
            </div>
            <div className="flex items-center gap-3 text-blue-50 font-medium">
              <Lock className="w-5 h-5 text-blue-200" />
              SSL Encrypted
            </div>
            <div className="flex items-center gap-3 text-blue-50 font-medium">
              <Building2 className="w-5 h-5 text-blue-200" />
              CAC Registered
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-16">
          <p className="text-sm text-blue-200">
            Trusted by the fastest-growing fleets in Lagos and beyond.
          </p>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-20 relative overflow-y-auto">
        <Link href="/" className="md:hidden text-2xl font-black tracking-tighter text-blue-600 dark:text-blue-500 mb-8">
          Traxx.
        </Link>

        <div className="w-full max-w-md mx-auto">
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Step {step} of 3</div>
              <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {step === 1 && "Account"}
                {step === 2 && "Company"}
                {step === 3 && "Fleet"}
              </div>
            </div>
            <div className="flex gap-2">
              <div className={`h-1.5 flex-1 rounded-full ${step >= 1 ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'} transition-colors duration-300`}></div>
              <div className={`h-1.5 flex-1 rounded-full ${step >= 2 ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'} transition-colors duration-300`}></div>
              <div className={`h-1.5 flex-1 rounded-full ${step >= 3 ? 'bg-blue-600' : 'bg-slate-200 dark:bg-slate-800'} transition-colors duration-300`}></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="relative min-h-[400px]">
            
            {/* STEP 1: Account */}
            {step === 1 && (
              <div className="animate-in slide-in-from-right-4 fade-in duration-300">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    <User className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Create your account</h2>
                  <p className="text-slate-500 dark:text-slate-400">This will be your primary admin login.</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Name</label>
                    <input 
                      required autoFocus
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => updateForm("fullName", e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Work Email</label>
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => updateForm("email", e.target.value)}
                      placeholder="jane@company.com"
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Password</label>
                    <input 
                      required minLength={8}
                      type="password" 
                      value={formData.password}
                      onChange={(e) => updateForm("password", e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: Company */}
            {step === 2 && (
              <div className="animate-in slide-in-from-right-4 fade-in duration-300">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center text-indigo-600 mb-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Company Details</h2>
                  <p className="text-slate-500 dark:text-slate-400">Tell us about your business.</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Company Name</label>
                    <input 
                      required autoFocus
                      type="text" 
                      value={formData.companyName}
                      onChange={(e) => updateForm("companyName", e.target.value)}
                      placeholder="Acme Logistics Ltd."
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">State of Operation</label>
                    <select 
                      required
                      value={formData.state}
                      onChange={(e) => updateForm("state", e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow appearance-none"
                    >
                      <option value="" disabled>Select a State...</option>
                      <option value="Lagos">Lagos</option>
                      <option value="Abuja">Abuja</option>
                      <option value="Rivers">Rivers</option>
                      <option value="Kano">Kano</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Fleet */}
            {step === 3 && (
              <div className="animate-in slide-in-from-right-4 fade-in duration-300">
                <div className="mb-8">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 mb-4">
                    <Truck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Fleet Overview</h2>
                  <p className="text-slate-500 dark:text-slate-400">Let&apos;s set up your workspace.</p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Fleet Size</label>
                    <select 
                      required autoFocus
                      value={formData.fleetSize}
                      onChange={(e) => updateForm("fleetSize", e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow appearance-none"
                    >
                      <option value="" disabled>Select size...</option>
                      <option value="1-5">1 - 5 Vehicles</option>
                      <option value="6-20">6 - 20 Vehicles</option>
                      <option value="21-50">21 - 50 Vehicles</option>
                      <option value="50+">50+ Vehicles</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Primary Vehicle Type</label>
                    <select 
                      required
                      value={formData.vehicleType}
                      onChange={(e) => updateForm("vehicleType", e.target.value)}
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-shadow appearance-none"
                    >
                      <option value="" disabled>Select type...</option>
                      <option value="Motorcycles">Motorcycles (Bikes)</option>
                      <option value="Cars">Cars / Sedans</option>
                      <option value="Vans">Vans / Mini-trucks</option>
                      <option value="Heavy Trucks">Heavy Trucks</option>
                    </select>
                  </div>

                  <div className="pt-4 flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="tos"
                      required
                      checked={formData.agreedToTos}
                      onChange={(e) => updateForm("agreedToTos", e.target.checked)}
                      className="mt-1 w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 dark:border-slate-700"
                    />
                    <label htmlFor="tos" className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      I agree to the <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="absolute bottom-0 left-0 w-full pt-8 flex items-center justify-between">
              {step > 1 ? (
                <button 
                  type="button" 
                  onClick={prevStep}
                  className="flex items-center text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" /> Back
                </button>
              ) : (
                <div /> // Spacer
              )}

              <Button type="submit" size="lg" className="rounded-full px-8">
                {step === 3 ? "Complete Setup" : "Continue"}
                {step < 3 && <ArrowRight className="w-4 h-4 ml-1.5" />}
              </Button>
            </div>
            
          </form>

          <p className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
            Already have an account? <Link href="/login" className="font-bold text-blue-600 dark:text-blue-400 hover:underline">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
