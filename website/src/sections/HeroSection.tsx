import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLenis } from '../lib/LenisContext';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { gsap, isReducedMotion } from '../lib/animation';

export const HeroSection: React.FC = () => {
  const { scrollTo } = useLenis();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [clickedCta, setClickedCta] = useState<string | null>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, delay: 0.1 }
      )
        .fromTo(
          manifestoRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.35'
        )
        .fromTo(
          ctaRef.current ? ctaRef.current.children : [],
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
          '-=0.25'
        )
        .fromTo(
          portraitRef.current,
          { opacity: 0, scale: 0.96, y: 20 },
          { opacity: 1, scale: 1, y: 0, duration: 0.75 },
          '-=0.45'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    setClickedCta(target);
    setTimeout(() => setClickedCta(null), 250);

    scrollTo(target, -80);
    window.history.pushState(null, '', target);
  };

  const { personal } = PORTFOLIO_DATA;

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Halftone subtle texture */}
      <div className="absolute inset-0 pointer-events-none opacity-15 bg-[radial-gradient(#e60012_1px,transparent_1px)] [background-size:18px_18px]" />

      {/* Editorial Header Meta */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[#242424] pb-4">
        <div className="flex items-center gap-2 sm:gap-3 font-label-sm text-[10px] sm:text-[11px] uppercase tracking-widest text-[#bdbdbd]">
          <span className="inline-block w-2 h-2 bg-[#e60012] shadow-[0_0_8px_rgba(230,0,18,0.8)]" />
          <span className="text-[#f1f0eb] font-bold">PORTFOLIO // 2025</span>
          <span className="text-[#444] hidden sm:inline">|</span>
          <span className="hidden sm:inline">{personal.institution.toUpperCase()}</span>
        </div>
        <div className="font-label-sm text-[10px] sm:text-[11px] tracking-widest uppercase text-[#bdbdbd]">
          COMPUTER SCIENCE &amp; ENGINEERING [AI &amp; DS]
        </div>
      </div>

      {/* Main Asymmetric Grid: Scales across Mobile, Tablet, Laptop, Large Desktop */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 lg:gap-14 items-center my-auto py-6 sm:py-8 lg:py-10">
        {/* Left Column: Typography & Manifesto (7 cols on lg/md, full on mobile) */}
        <div className="order-2 md:order-1 md:col-span-7 flex flex-col gap-5 sm:gap-6">
          {/* Sub-tagline badge */}
          <div className="flex items-center gap-2">
            <span className="bg-[#e60012] text-white font-label-sm text-[10px] uppercase font-bold px-2 py-0.5 tracking-widest shadow-[0_0_10px_rgba(230,0,18,0.4)]">
              FOCUS
            </span>
            <span className="font-label-sm text-[11px] sm:text-[12px] uppercase text-[#bdbdbd] tracking-wider truncate">
              {personal.focusBadge}
            </span>
          </div>

          {/* Large Japanese Editorial Headline with fluid clamp typography */}
          <div className="relative">
            <h1
              ref={titleRef}
              className="font-display-xl text-[54px] xs:text-[64px] sm:text-[80px] md:text-[76px] lg:text-[100px] xl:text-[118px] uppercase text-[#f1f0eb] leading-[0.88] tracking-tight break-words"
            >
              {personal.displayFirst}
              <br />
              <span
                className="text-[#e60012] hover:text-[#ff1a2b] transition-colors"
                style={{ textShadow: '0 0 28px rgba(230,0,18,0.35)' }}
              >
                {personal.displayLast}
              </span>
            </h1>
          </div>

          {/* Core Manifesto Statement */}
          <div ref={manifestoRef} className="border-l-2 border-[#e60012] pl-4 sm:pl-5 py-1">
            <p className="font-headline-sm text-[18px] sm:text-[22px] lg:text-[24px] text-[#f1f0eb] font-semibold leading-snug tracking-tight">
              "{personal.quote}"
            </p>
            <p className="font-body-md text-[14px] sm:text-[15px] lg:text-[16px] text-[#bdbdbd] mt-2.5 sm:mt-3 leading-relaxed max-w-xl">
              {personal.summary}
            </p>
          </div>

          {/* Primary Editorial Angular Action Buttons with tactile click response */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 pt-2"
          >
            <a
              className={`btn-crimson-angular px-6 sm:px-8 py-3.5 text-[15px] sm:text-[17px] tracking-wider gap-2.5 w-full sm:w-auto group ${
                clickedCta === '#projects'
                  ? 'scale-[0.97] shadow-[2px_2px_0px_#f1f0eb,3px_3px_0px_#e60012,0_0_28px_rgba(230,0,18,0.7)]'
                  : ''
              }`}
              href="#projects"
              onClick={(e) => handleScrollTo(e, '#projects')}
            >
              <span>Explore My Work</span>
              <ArrowDown
                size={19}
                className="transition-transform duration-200 group-hover:translate-y-0.5 group-active:translate-y-1.5"
              />
            </a>
            <a
              className={`btn-secondary-angular px-5 sm:px-6 py-3.5 text-[13px] tracking-wider gap-2 w-full sm:w-auto group ${
                clickedCta === '#contact'
                  ? 'scale-[0.97] border-[#ff1a2b] shadow-[2px_2px_0px_#e60012,0_0_20px_rgba(230,0,18,0.6)]'
                  : ''
              }`}
              href="#contact"
              onClick={(e) => handleScrollTo(e, '#contact')}
            >
              <span>Get in Touch</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-active:translate-x-1.5"
              />
            </a>
          </div>
        </div>

        {/* Right Column: Editorial Portrait Frame (5 cols on lg/md, centered on mobile) */}
        <div
          ref={portraitRef}
          className="order-1 md:order-2 md:col-span-5 relative flex justify-center items-center py-2 sm:py-4"
        >
          <div className="portrait-frame-container relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[360px] lg:max-w-[420px] mx-auto group">
            {/* Corner Halftone Decor */}
            <div className="absolute -top-3 -right-3 w-20 sm:w-28 h-20 sm:h-28 pointer-events-none opacity-40 bg-[radial-gradient(#e60012_1.5px,transparent_1.5px)] [background-size:8px_8px]" />
            <div className="absolute -bottom-2 -left-2 w-16 sm:w-24 h-16 sm:h-20 pointer-events-none opacity-30 bg-[radial-gradient(#e60012_1.5px,transparent_1.5px)] [background-size:8px_8px]" />

            {/* Red Depth Offset Plate with subtle hover glow illumination */}
            <div className="portrait-backdrop-plate absolute top-2 sm:top-3 -right-2 sm:-right-3 w-full h-full bg-[#e60012] border border-[#e60012] pointer-events-none -z-10" />

            {/* Left Vertical Spine Title (visible on tablet and up) */}
            <div
              className="absolute -left-6 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-2 pointer-events-none select-none"
              style={{
                writingMode: 'vertical-rl',
                transform: 'translateY(-50%) rotate(180deg)',
              }}
            >
              <span className="font-label-sm text-[10px] tracking-[0.25em] text-[#bdbdbd] uppercase">
                {personal.name.toUpperCase()}
              </span>
              <span className="w-6 h-px bg-[#3a3a3a]" />
              <span className="font-label-sm text-[9px] tracking-widest text-[#e60012] uppercase font-bold">
                PORTFOLIO
              </span>
            </div>

            {/* Editorial Card Container with subtle hover glow */}
            <div className="portrait-card relative bg-[#050505] border border-[#e60012] p-2 sm:p-2.5 shadow-[4px_4px_0px_#f1f0eb] sm:shadow-[6px_6px_0px_#f1f0eb]">
              {/* Register Crosses */}
              <div className="absolute -top-2 -left-2 text-[#e60012] font-mono text-[12px] leading-none pointer-events-none select-none group-hover:drop-shadow-[0_0_6px_rgba(230,0,18,0.8)] transition-all">
                +
              </div>
              <div className="absolute -top-2 -right-2 text-[#e60012] font-mono text-[12px] leading-none pointer-events-none select-none group-hover:drop-shadow-[0_0_6px_rgba(230,0,18,0.8)] transition-all">
                +
              </div>
              <div className="absolute -bottom-2 -left-2 text-[#e60012] font-mono text-[12px] leading-none pointer-events-none select-none group-hover:drop-shadow-[0_0_6px_rgba(230,0,18,0.8)] transition-all">
                +
              </div>
              <div className="absolute -bottom-2 -right-2 text-[#e60012] font-mono text-[12px] leading-none pointer-events-none select-none group-hover:drop-shadow-[0_0_6px_rgba(230,0,18,0.8)] transition-all">
                +
              </div>

              {/* Frame Top Bar */}
              <div className="flex items-center justify-between pb-2 px-1 border-b border-[#242424] mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-[#e60012] shadow-[0_0_6px_rgba(230,0,18,0.8)]" />
                  <span className="font-label-sm text-[10px] tracking-widest text-[#f1f0eb] font-mono font-bold uppercase">
                    01 / PORTRAIT
                  </span>
                </div>
                <span className="font-label-sm text-[10px] tracking-wider text-[#bdbdbd] font-mono uppercase">
                  {personal.edition}
                </span>
              </div>

              {/* Portrait Visual Container: anime protagonist illustration preserved verbatim */}
              <div className="relative border border-[#2e2e2e] p-1 bg-[#0e0e0e] group-hover:border-[#e60012]/60 transition-colors">
                <div className="relative w-full aspect-square overflow-hidden bg-[#050505]">
                  <img
                    src="/hero-protagonist.jpg"
                    alt="Aashray Biswal Character Illustration"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover object-top block"
                    loading="eager"
                  />
                </div>
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#e60012] pointer-events-none group-hover:drop-shadow-[0_0_4px_rgba(230,0,18,0.8)] transition-all" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#e60012] pointer-events-none group-hover:drop-shadow-[0_0_4px_rgba(230,0,18,0.8)] transition-all" />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#e60012] pointer-events-none group-hover:drop-shadow-[0_0_4px_rgba(230,0,18,0.8)] transition-all" />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#e60012] pointer-events-none group-hover:drop-shadow-[0_0_4px_rgba(230,0,18,0.8)] transition-all" />
              </div>

              {/* Frame Bottom Bar */}
              <div className="mt-2.5 pt-2 border-t border-[#e60012] flex items-center justify-between px-1">
                <span className="font-label-sm text-[9px] sm:text-[10px] tracking-[0.08em] sm:tracking-[0.12em] text-[#bdbdbd] font-mono uppercase truncate mr-2">
                  COMPUTER SCIENCE // AI &amp; DATA SCIENCE
                </span>
                <span className="font-label-sm text-[10px] text-[#e60012] font-mono font-bold shrink-0 drop-shadow-[0_0_6px_rgba(230,0,18,0.5)]">
                  [AB]
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker: responsive wrapping */}
      <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-[#242424] font-label-sm text-[10px] sm:text-[11px] text-[#bdbdbd] uppercase tracking-wider">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span>LOC: {personal.location.toUpperCase()}</span>
          <span className="text-[#3a3a3a]">/</span>
          <span className="text-[#f1f0eb]">
            {personal.institution.toUpperCase()} ({personal.timeline})
          </span>
        </div>
        <a
          className="nav-glow-link text-[#e60012] hover:text-[#ff1a2b] flex items-center gap-1 font-bold py-1 group select-none active:scale-95"
          href="#explore"
          onClick={(e) => handleScrollTo(e, '#explore')}
        >
          <span>VIEW INDEX DIRECTORY</span>
          <ArrowDown
            size={14}
            className="transition-transform group-hover:translate-y-0.5 group-active:translate-y-1.5"
          />
        </a>
      </div>
    </section>
  );
};
