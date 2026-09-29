"use client";

import { CheckCircle2, UserPlus, Bike, Map, Play, PlayCircle } from "lucide-react";
import { useEffect, useRef } from "react";

export function GettingStartedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !scrollContainerRef.current) return;
      
      if (window.innerWidth < 768) {
        scrollContainerRef.current.style.transform = `none`;
        return;
      }
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const stickyHeight = window.innerHeight;
      
      const scrollableDistance = height - stickyHeight;
      let scrollProgress = 0;
      
      if (top <= 0) {
        scrollProgress = Math.min(1, Math.abs(top) / scrollableDistance);
      }
      
      const maxTranslate = scrollContainerRef.current.scrollWidth - window.innerWidth;
      
      if (maxTranslate > 0) {
        scrollContainerRef.current.style.transform = `translateX(-${scrollProgress * maxTranslate}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const stages = [
    {
      num: "▶",
      icon: PlayCircle,
      title: "Onboarding Walkthrough",
      desc: "",
      mock: (
        <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden group flex items-center justify-center border-4 border-slate-800 shadow-xl cursor-pointer">
           <img src="/images/hero-dashboard.png" className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity group-hover:opacity-40" alt="Video thumbnail" />
           <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-2xl">
             <Play className="w-8 h-8 fill-white ml-1" />
           </div>
        </div>
      )
    },
    {
      num: "01",
      icon: UserPlus,
      title: "Create Account",
      desc: "",
      mock: (
        <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
           <img src="/images/hero-dashboard.png" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Create Account Step" />
        </div>
      )
    },
    {
      num: "02",
      icon: Bike,
      title: "Add Rider",
      desc: "",
      mock: (
        <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
           <img src="/images/hero-dashboard.png" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Add Rider Step" />
        </div>
      )
    },
    {
      num: "03",
      icon: Map,
      title: "Track",
      desc: "",
      mock: (
         <div className="relative w-full aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-800">
           <img src="/images/hero-dashboard.png" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Track Step" />
        </div>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="relative md:h-[300vh] bg-blue-50 dark:bg-blue-950/20 py-16 md:py-0">
      
      {/* Sticky viewport container */}
      <div className="md:sticky md:top-0 md:h-screen w-full md:overflow-hidden flex flex-col md:flex-row md:items-center">
        
        {/* Floating Pinned Text Overlay */}
        <div className="relative md:absolute md:inset-y-0 md:left-0 w-full md:w-[45%] lg:w-[40%] bg-transparent md:bg-blue-50 md:dark:bg-[#020817] z-20 flex flex-col justify-center px-6 lg:pl-16 mb-12 md:mb-0 pointer-events-none">
          <div className="max-w-md pointer-events-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900 dark:text-white">
              Up and running in three simple steps.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              No IT team required. We've broken our onboarding down into 3 lightweight steps. Set it up between deliveries, not instead of them.
            </p>
            <div className="inline-flex items-center gap-3 text-sm font-bold text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-900 px-4 py-2.5 rounded-lg shadow-sm border border-blue-100 dark:border-slate-800">
              <CheckCircle2 className="w-5 h-5" />
              Takes under 3 minutes
            </div>
          </div>
        </div>

        {/* Horizontal Moving Stages */}
        <div 
          ref={scrollContainerRef}
          className="flex flex-col md:flex-row md:flex-nowrap md:items-center will-change-transform md:pl-[45vw] lg:pl-[40vw] md:pr-[10vw] gap-12 md:gap-0"
        >
          {stages.map((stage, idx) => (
            <div 
              key={stage.num}
              className="w-full md:w-[55vw] lg:w-[60vw] shrink-0 bg-transparent relative group px-6 lg:px-12 md:py-12"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                  <stage.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white flex-1">
                  {stage.title}
                </h3>
                {stage.num !== "▶" && (
                    <div className="text-xs font-black text-blue-600/50 dark:text-blue-400/50 uppercase tracking-widest">
                      STEP {stage.num}
                    </div>
                )}
              </div>
              
              <div className="pl-0 md:pl-16">
                {stage.desc && (
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-base md:text-lg">
                    {stage.desc}
                  </p>
                )}

                {/* Wireframe Mockup Area */}
                <div className="w-full bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-6 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 hover:shadow-lg">
                  {stage.mock}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
