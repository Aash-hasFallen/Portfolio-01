import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { gsap, isReducedMotion } from '../lib/animation';

export const ExperimentsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gridRef.current,
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
      id="experiments"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#050505] border-t-2 border-[#e60012]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <SectionHeading
          badge="CREATIVE SANDBOX // 06"
          title="EXPERIMENTS"
          meta="Personal prototypes, creative coding, and speculative proofs-of-concept."
        />

        {/* Layered Experiment Panels: 1 col on mobile, 3 on md+ with hover glow */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
        >
          {PORTFOLIO_DATA.experiments.map((exp) => (
            <div
              key={exp.id}
              className="panel-layered p-5 sm:p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#242424] mb-3">
                  <span className="font-label-sm text-[11px] text-[#e60012] font-mono uppercase group-hover:drop-shadow-[0_0_6px_rgba(230,0,18,0.6)]">
                    {exp.code}
                  </span>
                  <span className="font-label-sm text-[10px] bg-[#1a1a1a] text-[#f1f0eb] border border-[#333333] px-2 py-0.5 uppercase font-mono group-hover:border-[#e60012]/40 transition-colors">
                    {exp.type}
                  </span>
                </div>
                <h3 className="font-headline-sm text-[17px] sm:text-[18px] uppercase font-bold text-[#f1f0eb] group-hover:text-white transition-colors">
                  {exp.title}
                </h3>
                <p className="font-body-md text-[13px] text-[#bdbdbd] mt-2 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#242424] flex items-center justify-between font-label-sm text-[11px] text-[#bdbdbd] font-mono">
                <span>{exp.stack}</span>
                <span className="text-[#e60012] font-bold group-hover:drop-shadow-[0_0_6px_rgba(230,0,18,0.5)]">
                  {exp.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

