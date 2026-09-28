import { ShieldCheck, CreditCard, Lock, Building2 } from "lucide-react";

export function TrustBanner() {
  // A clean, thick wavy pattern using light blue and dark blue
  const wavePattern = `data:image/svg+xml,%3Csvg width='120' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 30 0 60 20 T 120 20' fill='none' stroke='%2360a5fa' stroke-width='8' opacity='0.3'/%3E%3Cpath d='M0 40 Q 30 20 60 40 T 120 40' fill='none' stroke='%231e3a8a' stroke-width='8' opacity='0.3'/%3E%3C/svg%3E`;

  return (
    <section 
      className="relative bg-blue-900 border-t border-blue-800 py-20 overflow-hidden"
      style={{ backgroundImage: `url("${wavePattern}")`, backgroundSize: '120px 40px' }}
    >
      {/* Dark overlay to ensure text remains highly readable over the pattern */}
      <div className="absolute inset-0 bg-blue-950/70" />

      <div className="relative z-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-blue-200 mb-8">
          Trusted, Secured, and Fully Compliant
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 items-center">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-blue-400" />
            <span className="font-bold text-white text-sm md:text-base tracking-tight">NDPR Compliant</span>
          </div>
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-blue-400" />
            <span className="font-bold text-white text-sm md:text-base tracking-tight">Paystack Secured</span>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="w-6 h-6 text-blue-400" />
            <span className="font-bold text-white text-sm md:text-base tracking-tight">SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-3">
            <Building2 className="w-6 h-6 text-blue-400" />
            <span className="font-bold text-white text-sm md:text-base tracking-tight">CAC Registered</span>
          </div>
        </div>
      </div>
    </section>
  );
}
