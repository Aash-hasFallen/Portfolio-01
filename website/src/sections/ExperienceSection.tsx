import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { gsap, isReducedMotion } from '../lib/animation';

export const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (listRef.current) {
        gsap.fromTo(
          listRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: listRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#0e0e0e] border-t-2 border-[#242424]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <SectionHeading
          badge="TIMELINE // 03"
          title="EXPERIENCE &amp; EDUCATION"
          meta="ACADEMIC &amp; CO-CURRICULAR LOG"
        />

        {/* Layered Timeline Containers */}
        <div ref={listRef} className="space-y-6">
          {PORTFOLIO_DATA.experiences.map((item) => {
            if (item.highlight) {
              return (
                <div
                  key={item.id}
                  className="relative bg-[#141414] border-l-4 border-[#e60012] border-y border-r border-[#333333] p-5 sm:p-6 lg:p-8 shadow-[5px_5px_0px_#090909] hover:border-r-[#e60012] hover:border-y-[#e60012]/60 hover:shadow-[5px_5px_0px_#090909,0_0_18px_rgba(230,0,18,0.2)] transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                    <div>
                      <span className="font-label-sm text-[11px] text-[#e60012] uppercase font-mono font-bold tracking-wider block mb-1">
                        {item.tag}
                      </span>
                      <h3 className="font-headline-sm text-[22px] sm:text-[26px] lg:text-[28px] uppercase font-bold text-[#f1f0eb]">
                        {item.title}
                      </h3>
                      <p className="font-body-md text-[15px] sm:text-[16px] text-[#f1f0eb] font-medium mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0 mt-1 sm:mt-0">
                      <span className="font-label-md text-[12px] sm:text-[13px] text-[#f1f0eb] font-mono bg-[#050505] px-3 py-1 border border-[#e60012] inline-block shadow-[2px_2px_0px_#f1f0eb] whitespace-nowrap hover:shadow-[0_0_10px_rgba(230,0,18,0.6)] transition-shadow">
                        {item.period}
                      </span>
                      <span className="block font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono mt-1">
                        {item.status}
                      </span>
                    </div>
                  </div>
                  <p className="font-body-md text-[14px] sm:text-[15px] text-[#bdbdbd] leading-relaxed max-w-4xl">
                    {item.description}
                  </p>
                </div>
              );
            }

            return (
              <div key={item.id} className="panel-layered p-5 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                  <div>
                    <span className="font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono block mb-1">
                      {item.tag}
                    </span>
                    <h3 className="font-headline-sm text-[20px] sm:text-[24px] uppercase font-bold text-[#f1f0eb]">
                      {item.title}
                    </h3>
                    <p className="font-body-md text-[14px] sm:text-[15px] text-[#bdbdbd] mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="shrink-0 mt-1 sm:mt-0">
                    <span className="font-label-md text-[12px] sm:text-[13px] text-[#bdbdbd] font-mono bg-[#050505] px-3 py-1 border border-[#333333] inline-block whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                </div>
                <p className="font-body-md text-[14px] text-[#bdbdbd] leading-relaxed max-w-4xl">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

