import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { useLenis } from '../lib/LenisContext';
import { Mail, ArrowRight, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from '../components/SocialIcons';
import { gsap, isReducedMotion } from '../lib/animation';

export const ContactSection: React.FC = () => {
  const { scrollTo } = useLenis();
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [backToTopPressed, setBackToTopPressed] = useState(false);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          once: true,
        },
      });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }
      ).fromTo(
        cardsRef.current ? cardsRef.current.children : [],
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out' },
        '-=0.3'
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setBackToTopPressed(true);
    setTimeout(() => setBackToTopPressed(false), 300);

    scrollTo('#intro', -80);
    window.history.pushState(null, '', '#intro');
  };

  const getSocialIcon = (name: string) => {
    switch (name.toUpperCase()) {
      case 'GITHUB':
        return (
          <GithubIcon
            size={18}
            className="transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
          />
        );
      case 'LINKEDIN':
        return (
          <LinkedinIcon
            size={18}
            className="transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
          />
        );
      case 'KAGGLE':
        return (
          <KaggleIcon
            size={18}
            className="transition-transform duration-200 group-hover:scale-110 group-active:scale-95"
          />
        );
      default:
        return null;
    }
  };

  const { contact } = PORTFOLIO_DATA;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#0e0e0e] border-t-2 border-[#242424]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 border-b border-[#242424] pb-4">
          <span className="bg-[#e60012] text-white px-2.5 py-1 font-label-sm text-[11px] font-bold uppercase font-mono shadow-[0_0_8px_rgba(230,0,18,0.5)]">
            07 // CONTACT
          </span>
          <span className="font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono">
            GET IN TOUCH
          </span>
        </div>

        {/* Large Bold Callout with fluid responsiveness */}
        <div ref={headlineRef}>
          <h2 className="font-headline-lg text-[38px] sm:text-[60px] md:text-[72px] lg:text-[88px] uppercase text-[#f1f0eb] leading-[0.92] tracking-tight">
            LET'S MAKE
            <br />
            <span
              className="text-[#e60012]"
              style={{ textShadow: '0 0 24px rgba(230,0,18,0.35)' }}
            >
              SOMETHING
            </span>
            <br />
            INTERESTING.
          </h2>
          <p className="font-body-md text-[15px] sm:text-[17px] lg:text-[19px] text-[#bdbdbd] max-w-xl mt-4 sm:mt-6 leading-relaxed">
            Have an interesting idea, project or opportunity? I'd love to hear about it.
          </p>
        </div>

        {/* Layered Contact Interaction Grid: 1 col on mobile/tablet, 12-col on lg */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
        >
          {/* Direct Email Primary CTA (7 cols on lg, full on mobile/tablet) */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#333333] p-6 sm:p-8 lg:p-10 shadow-[4px_4px_0px_0px_#090909,6px_6px_0px_0px_#e60012] sm:shadow-[6px_6px_0px_0px_#090909,8px_8px_0px_0px_#e60012] relative hover:border-[#e60012] hover:shadow-[6px_6px_0px_0px_#090909,8px_8px_0px_0px_#e60012,0_0_24px_rgba(230,0,18,0.25)] transition-all duration-300">
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#e60012]" />
            <span className="font-label-sm text-[11px] text-[#e60012] uppercase font-mono font-bold block mb-2">
              PRIMARY CHANNEL
            </span>
            <h3 className="font-headline-sm text-[20px] sm:text-[22px] lg:text-[24px] uppercase font-bold text-[#f1f0eb] mb-5 sm:mb-6">
              Direct Email Inquiries
            </h3>
            <a
              className="btn-crimson-angular w-full p-4 sm:p-5 text-[15px] sm:text-[17px] lg:text-[19px] flex items-center justify-between group focus:outline-none"
              href={contact.mailto}
            >
              <span className="flex items-center gap-2.5 sm:gap-3 truncate">
                <Mail size={22} className="shrink-0 transition-transform duration-200 group-hover:scale-110 group-active:scale-95" />
                <span className="truncate">Email Me // {contact.email}</span>
              </span>
              <ArrowRight
                size={20}
                className="shrink-0 ml-2 transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-2"
              />
            </a>
            {/* Exact Caution Notice */}
            <p className="font-label-sm text-[10px] sm:text-[11px] text-[#bdbdbd] font-mono mt-4 uppercase tracking-wider">
              NOTICE // ALTERNATE INBOX — USED TO DIVERT TRAFFIC FROM PRIMARY EMAIL.
            </p>
          </div>

          {/* Social Profiles & Links (5 cols on lg, full on mobile/tablet) */}
          <div className="lg:col-span-5 panel-layered p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h4 className="font-headline-sm text-[17px] sm:text-[18px] uppercase font-bold text-[#f1f0eb] pb-3 border-b border-[#242424] mb-4">
                PROFILES &amp; CODE
              </h4>
              <div className="space-y-3">
                {contact.socials.map((social) => (
                  <a
                    key={social.name}
                    className="interactive-glow-link flex items-center justify-between p-3.5 bg-[#050505] border border-[#242424] hover:text-[#e60012] group min-h-[44px] focus:outline-none"
                    href={social.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Open ${social.name} profile in new tab`}
                  >
                    <span className="flex items-center gap-2.5 font-headline-sm text-[15px] uppercase font-bold text-[#f1f0eb] group-hover:text-[#e60012] transition-colors">
                      {getSocialIcon(social.name)}
                      {social.name}
                    </span>
                    <span className="font-label-sm text-[11px] text-[#bdbdbd] font-mono group-hover:text-[#e60012] group-hover:translate-x-1 group-active:translate-x-2 transition-transform">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#242424] flex items-center justify-between">
              <span className="font-label-sm text-[11px] text-[#bdbdbd] font-mono">
                LOCATION: INDIA
              </span>
              <a
                className={`nav-glow-link font-label-sm text-[11px] uppercase font-mono font-bold flex items-center gap-1 min-h-[44px] group focus:outline-none transition-all duration-150 ${
                  backToTopPressed
                    ? 'text-[#ff1a2b] scale-90 drop-shadow-[0_0_12px_rgba(230,0,18,0.9)]'
                    : 'text-[#e60012]'
                }`}
                href="#intro"
                onClick={handleBackToTop}
                aria-label="Back to top of page"
              >
                <span>BACK TO TOP</span>
                <ArrowUp
                  size={14}
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-active:-translate-y-1.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
