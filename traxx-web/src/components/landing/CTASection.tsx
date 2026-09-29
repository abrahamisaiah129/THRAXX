import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function CTASection() {
  const wavePattern = `data:image/svg+xml,%3Csvg width='120' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q 30 0 60 20 T 120 20' fill='none' stroke='%2360a5fa' stroke-width='8' opacity='0.3'/%3E%3Cpath d='M0 40 Q 30 20 60 40 T 120 40' fill='none' stroke='%231e3a8a' stroke-width='8' opacity='0.3'/%3E%3C/svg%3E`;

  return (
    <section 
      className="relative py-20 md:py-24 bg-blue-900 text-white px-6 overflow-hidden border-t border-blue-800"
      style={{ backgroundImage: `url("${wavePattern}")`, backgroundSize: '120px 40px' }}
    >
      <div className="absolute inset-0 bg-blue-950/70" />
      
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">
          See your whole fleet clearly, in one walkthrough.
        </h2>
        <p className="text-lg text-blue-100 mb-10 leading-relaxed font-medium">
          Twenty minutes with a real member of the Traxx team, on a call time
          that works for you. No pressure, no commitment.
        </p>

        <div className="bg-blue-900/60 backdrop-blur-md border border-blue-500/30 p-8 rounded-2xl max-w-xl mx-auto shadow-2xl">
          <h3 className="text-xl font-bold mb-2">
            Ready to see your fleet clearly for the first time?
          </h3>
          <p className="text-blue-200 mb-8 font-medium text-sm">
            Get set up in under 3 minutes. No setup fees. No annual contracts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="lg"
                className="w-full text-blue-600 font-bold"
              >
                Book a Walkthrough
              </Button>
            </Link>
            <Link href="#start-trial" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full bg-slate-900 text-white hover:bg-slate-800 shadow-none"
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
