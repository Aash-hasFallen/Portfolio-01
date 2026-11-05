import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLenis } from '../lib/LenisContext';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { gsap, isReducedMotion } from '../lib/animation';

export const ExploreSection: React.FC = () => {
  const { scrollTo } = useLenis();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [pressedIndex, setPressedIndex] = useState<string | null>(null);

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
            duration: 0.6,
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

  const handleCardClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    num: string
  ) => {
    e.preventDefault();
    setPressedIndex(num);
    setTimeout(() => setPressedIndex(null), 250);

    scrollTo(href, -80);
    window.history.pushState(null, '', href);
  };

  return (
    <section
      ref={sectionRef}
      id="explore"
      className="w-full py-14 sm:py-16 px-4 sm:px-6 lg:px-12 bg-[#0e0e0e] border-t-2 border-[#242424]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        <SectionHeading
          badge="DIRECTORY // 02"
          title="EXPLORE"
          meta="Overview index of background, timeline, projects and contact channels."
        />

        {/* Layered Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {PORTFOLIO_DATA.exploreItems.map((item) => {
            const isPressed = pressedIndex === item.number;
            return (
              <a
                key={item.number}
                href={item.href}
                onClick={(e) => handleCardClick(e, item.href, item.number)}
                className={`group panel-layered p-5 sm:p-6 flex flex-col justify-between min-h-[160px] sm:min-h-[175px] focus:outline-none cursor-pointer transition-all duration-200 select-none ${
                  isPressed
                    ? 'scale-[0.98] border-[#e60012] shadow-[3px_3px_0px_#090909,4px_4px_0px_#e60012,0_0_22px_rgba(230,0,18,0.5)]'
                    : 'active:scale-[0.985] active:border-[#e60012]'
                }`}
                aria-label={`Jump to ${item.title} section`}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`font-display-xl text-[32px] sm:text-[36px] leading-none transition-all duration-200 ${
                      isPressed
                        ? 'text-[#ff1a2b] scale-105 drop-shadow-[0_0_14px_rgba(230,0,18,0.9)]'
                        : 'text-[#bdbdbd] group-hover:text-[#e60012] group-hover:drop-shadow-[0_0_12px_rgba(230,0,18,0.7)] group-active:scale-105'
                    }`}
                  >
                    {item.number}
                  </span>
                  <ArrowRight
                    size={22}
                    className={`transition-all duration-200 ${
                      isPressed
                        ? 'text-[#ff1a2b] translate-x-2 drop-shadow-[0_0_10px_rgba(230,0,18,0.9)]'
                        : 'text-[#bdbdbd] group-hover:text-[#e60012] group-hover:translate-x-1 group-active:translate-x-2 group-hover:drop-shadow-[0_0_8px_rgba(230,0,18,0.6)]'
                    }`}
                  />
                </div>
                <div className="mt-4">
                  <h3
                    className={`font-headline-sm text-[18px] sm:text-[20px] font-bold uppercase tracking-tight transition-colors duration-200 ${
                      isPressed
                        ? 'text-[#ff1a2b]'
                        : 'text-[#f1f0eb] group-hover:text-white'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="font-label-sm text-[11px] text-[#bdbdbd] uppercase mt-1">
                    {item.subtitle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
