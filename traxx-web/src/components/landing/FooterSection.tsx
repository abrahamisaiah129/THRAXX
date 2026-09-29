import Link from "next/link";
import { ShieldCheck, CreditCard, Lock, Landmark } from "lucide-react";

export function FooterSection() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xs text-white">
                TX
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                Traxx
              </span>
            </div>
            <p className="text-slate-300 font-medium mb-6 max-w-sm">
              Fleet Intelligence Platform for businesses across Nigeria.
            </p>
            <div className="space-y-1 text-sm mb-8">
              <p>contact@traxx.ng · +234 815 422 5462</p>
              <p>Serving all 36 states and the FCT</p>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs uppercase tracking-wide text-slate-500 font-medium mt-4">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-white" strokeWidth={3} /> NDPR Compliant</span>
              <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-white" strokeWidth={3} /> Paystack Secured</span>
              <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-white" strokeWidth={3} /> SSL Encrypted</span>
              <span className="flex items-center gap-1.5"><Landmark className="w-4 h-4 text-white" strokeWidth={3} /> CAC Registered</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#start-trial" className="hover:text-white transition-colors">
                  Web Dashboard
                </Link>
              </li>
              <li>
                <Link href="#start-trial" className="hover:text-white transition-colors">
                  Rider App
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  System Status
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider text-sm uppercase">
              Company & Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/architecture" className="hover:text-white transition-colors">Architecture</Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">Help Centre</Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800 text-xs">
          <div className="flex flex-wrap gap-4">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Traxx Technologies Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
