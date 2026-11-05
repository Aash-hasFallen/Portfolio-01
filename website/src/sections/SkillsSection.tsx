import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { gsap, isReducedMotion } from '../lib/animation';

export const SkillsSection: React.FC = () => {
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
            stagger: 0.08,
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
      id="skills"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#0e0e0e] border-t-2 border-[#242424]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <SectionHeading
          badge="CAPABILITIES // 05"
          title="TECHNICAL SKILLS"
          meta="5 SPECIALISED DOMAINS"
        />

        {/* Layered 5-Category Catalog: 1 col on mobile, 2 col on sm, 3 on md, 5 on lg */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5"
        >
          {PORTFOLIO_DATA.skillCategories.map((cat) => {
            const isLast = cat.id === 'cloud-infra';
            return (
              <div
                key={cat.id}
                className={`panel-layered p-5 sm:p-6 flex flex-col justify-between ${
                  isLast ? 'sm:col-span-2 md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#242424] mb-4">
                    <span className="font-label-sm text-[11px] text-[#e60012] font-mono font-bold uppercase">
                      {cat.number} // {cat.codeName}
                    </span>
                    <span className="font-label-sm text-[10px] text-[#bdbdbd] font-mono uppercase">
                      {cat.categoryTag}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-[18px] sm:text-[20px] uppercase font-bold text-[#f1f0eb] mb-4">
                    {cat.title}
                  </h3>
                  <div className="space-y-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="interactive-glow-link bg-[#050505] p-2.5 border border-[#242424] flex items-center justify-between"
                      >
                        <span className="font-headline-sm text-[14px] sm:text-[15px] text-[#f1f0eb] uppercase font-semibold">
                          {skill.name}
                        </span>
                        <span
                          className={`font-label-sm text-[10px] font-mono ${
                            skill.highlight
                              ? 'text-[#e60012] font-bold'
                              : 'text-[#bdbdbd]'
                          }`}
                        >
                          {skill.tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

