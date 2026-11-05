import React, { useEffect, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { gsap, isReducedMotion } from '../lib/animation';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current.children,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 85%',
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#050505] border-t-2 border-[#e60012]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <SectionHeading
          badge="02 // ABOUT"
          title="ABOUT ME"
          meta="PROFILE &amp; PERSPECTIVE"
        />

        {/* Layered Dark Architectural Panels: Responsive 12-col grid */}
        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
        >
          {/* Left: Statement / Bio Block (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            <div className="relative bg-[#141414] border border-[#e0e0e0]/40 p-6 sm:p-8 lg:p-10 shadow-[4px_4px_0px_#e60012] sm:shadow-[6px_6px_0px_#e60012] hover:border-[#e60012] hover:shadow-[6px_6px_0px_#e60012,0_0_20px_rgba(230,0,18,0.25)] transition-all duration-300">
              {/* Crimson Accent Tag */}
              <div className="absolute top-0 right-0 bg-[#e60012] text-white font-mono text-[9px] sm:text-[10px] px-2.5 py-0.5 uppercase tracking-widest font-bold shadow-[0_0_8px_rgba(230,0,18,0.5)]">
                OVERVIEW
              </div>
              <span className="font-label-sm text-[11px] text-[#e60012] uppercase font-bold tracking-widest block mb-3 sm:mb-4 font-mono">
                // PROFILE
              </span>
              <blockquote className="font-headline-sm text-[18px] sm:text-[22px] lg:text-[25px] font-medium text-[#f1f0eb] leading-relaxed">
                "{personal.aboutQuote}"
              </blockquote>
              <div className="mt-6 pt-4 border-t border-[#333333] flex flex-wrap items-center justify-between gap-2 font-label-sm text-[11px] sm:text-[12px] font-mono text-[#bdbdbd] uppercase">
                <span className="text-[#f1f0eb] font-bold">— {personal.name}</span>
                <span className="text-[#e60012] font-semibold drop-shadow-[0_0_6px_rgba(230,0,18,0.4)]">
                  CSE (AI &amp; DS)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="panel-layered p-5">
                <span className="font-label-sm text-[10px] text-[#e60012] uppercase font-mono block mb-1">
                  {personal.aboutDiscipline.number}
                </span>
                <h3 className="font-headline-sm text-[16px] uppercase font-bold text-[#f1f0eb]">
                  {personal.aboutDiscipline.title}
                </h3>
                <p className="font-body-md text-[13px] text-[#bdbdbd] mt-2 leading-relaxed">
                  {personal.aboutDiscipline.desc}
                </p>
              </div>
              <div className="panel-layered p-5">
                <span className="font-label-sm text-[10px] text-[#e60012] uppercase font-mono block mb-1">
                  {personal.aboutApproach.number}
                </span>
                <h3 className="font-headline-sm text-[16px] uppercase font-bold text-[#f1f0eb]">
                  {personal.aboutApproach.title}
                </h3>
                <p className="font-body-md text-[13px] text-[#bdbdbd] mt-2 leading-relaxed">
                  {personal.aboutApproach.desc}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Academic Details & Philosophy (5 cols) */}
          <div className="lg:col-span-5 panel-layered p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#242424] pb-4 mb-6">
                <span className="font-headline-sm text-[17px] sm:text-[18px] uppercase font-bold text-[#f1f0eb]">
                  ACADEMIC BACKGROUND
                </span>
                <span className="font-label-sm text-[10px] bg-[#e60012] text-white px-2 py-0.5 uppercase font-mono font-bold shadow-[0_0_8px_rgba(230,0,18,0.5)]">
                  CURRENT
                </span>
              </div>
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <span className="font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono block">
                    DEGREE
                  </span>
                  <p className="font-headline-sm text-[17px] sm:text-[18px] font-bold text-[#f1f0eb] mt-1">
                    {personal.degree}
                  </p>
                  <p className="font-label-sm text-[12px] text-[#e60012] uppercase font-mono mt-1">
                    Specialisation: {personal.degreeSpecialization}
                  </p>
                </div>
                <div>
                  <span className="font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono block">
                    INSTITUTION
                  </span>
                  <p className="font-headline-sm text-[17px] sm:text-[18px] font-bold text-[#f1f0eb] mt-1">
                    {personal.institution}
                  </p>
                  <p className="font-body-md text-[13px] text-[#bdbdbd] mt-1">
                    Vadodara, Gujarat, India
                  </p>
                </div>
                <div>
                  <span className="font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono block">
                    TIMELINE
                  </span>
                  <p className="font-label-md text-[13px] sm:text-[14px] text-[#f1f0eb] font-mono mt-1">
                    {personal.timeline}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-8 pt-6 border-t border-[#242424]">
              <p className="font-body-md text-[13px] text-[#bdbdbd] leading-relaxed">
                {personal.closingNote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

