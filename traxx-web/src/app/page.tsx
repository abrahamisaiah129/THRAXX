import { HeroSection } from "@/components/landing/HeroSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { GettingStartedSection } from "@/components/landing/GettingStartedSection";
import { CapabilitiesSection } from "@/components/landing/CapabilitiesSection";
import { CostOfChaosSection } from "@/components/landing/CostOfChaosSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-50 font-sans">
      <HeroSection />
      <ProblemSection />
      <GettingStartedSection />
      <CapabilitiesSection />
      <CostOfChaosSection />
      <UseCasesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
