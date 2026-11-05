import React, { useState, useEffect } from 'react';
import { useLenis } from '../lib/LenisContext';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'intro', label: '01 Home', mobileLabel: 'HOME', number: '01' },
  { id: 'about', label: '02 About', mobileLabel: 'ABOUT', number: '02' },
  { id: 'experience', label: '03 Experience', mobileLabel: 'EXPERIENCE', number: '03' },
  { id: 'projects', label: '04 Projects', mobileLabel: 'SELECTED PROJECTS', number: '04' },
  { id: 'skills', label: '05 Skills', mobileLabel: 'TECHNICAL SKILLS', number: '05' },
  { id: 'experiments', label: '06 Experiments', mobileLabel: 'EXPERIMENTS', number: '06' },
  { id: 'contact', label: '07 Contact', mobileLabel: 'CONTACT', number: '07', isCta: true },
];

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [clickedId, setClickedId] = useState<string | null>(null);
  const { scrollTo, lockScroll, unlockScroll } = useLenis();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setClickedId(targetId);
    setTimeout(() => setClickedId(null), 300);

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      unlockScroll();
    }
    scrollTo(`#${targetId}`, -80);
    // Update hash without jumping
    window.history.pushState(null, '', `#${targetId}`);
  };

  const toggleMobileNav = () => {
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
      lockScroll();
    } else {
      setMobileMenuOpen(false);
      unlockScroll();
    }
  };

  const closeMobileNav = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      unlockScroll();
    }
  };

  // Close mobile nav on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        closeMobileNav();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile nav on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        closeMobileNav();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-md border-b border-[#242424]">
        <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-4">
          {/* Brand / Logotype */}
          <a
            className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none select-none active:scale-95 transition-transform duration-150"
            href="#intro"
            onClick={(e) => handleNavClick(e, 'intro')}
            aria-label="Aashray Biswal - Return to top"
          >
            <div className="bg-[#e60012] text-white px-3 sm:px-3.5 py-1.5 -skew-x-6 font-display-xl text-[17px] sm:text-[19px] tracking-wider transition-all duration-300 group-hover:skew-x-0 group-hover:shadow-[0_0_18px_rgba(230,0,18,0.6)] group-active:shadow-[0_0_24px_rgba(230,0,18,0.9)] shadow-[2px_2px_0px_#f1f0eb]">
              <span className="inline-block skew-x-6 group-hover:skew-x-0 tracking-wide uppercase">
                AASHRAY BISWAL
              </span>
            </div>
            <span className="hidden md:inline font-label-sm text-[11px] tracking-[0.2em] text-[#bdbdbd] uppercase font-mono border-l border-[#2e2e2e] pl-3 group-hover:text-[#f1f0eb] transition-colors">
              AI &amp; DATA SCIENCE
            </span>
          </a>

          {/* Clean Editorial Navigation (Desktop & Laptop) */}
          <nav
            className="hidden lg:flex items-center gap-1 font-label-sm text-[11px] tracking-wider uppercase"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const isJustClicked = clickedId === item.id;

              if (item.isCta) {
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="ml-2 btn-crimson-angular px-4 py-1.5 text-[12px] tracking-widest min-h-[36px]"
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`nav-glow-link px-3 py-2 text-[#bdbdbd] transition-all relative ${
                    isJustClicked
                      ? 'text-[#ff1a2b] font-bold border-b-2 border-[#e60012] scale-95'
                      : isActive
                      ? 'text-[#e60012] font-bold border-b-2 border-[#e60012] shadow-[0_2px_8px_rgba(230,0,18,0.4)]'
                      : 'hover:border-b-2 hover:border-[#e60012] hover:text-[#f1f0eb]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Mobile / Tablet Navigation Quick Buttons */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              className="btn-crimson-angular text-[11px] px-3.5 py-1.5 uppercase tracking-wider min-h-[38px]"
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              Contact
            </a>
            <button
              id="mobile-menu-btn"
              aria-controls="mobile-nav-drawer"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 bg-[#141414] border border-[#333333] text-[#f1f0eb] hover:border-[#e60012] hover:text-[#e60012] hover:shadow-[0_0_12px_rgba(230,0,18,0.3)] active:scale-90 active:border-[#e60012] active:shadow-[0_0_16px_rgba(230,0,18,0.5)] transition-all duration-150 focus:outline-none"
              onClick={toggleMobileNav}
            >
              <div
                className={`transition-transform duration-300 ease-out ${
                  mobileMenuOpen ? 'rotate-90' : 'rotate-0'
                }`}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen / Slide Down Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-x-0 top-20 bottom-0 bg-[#050505]/98 border-t border-[#242424] lg:hidden flex flex-col justify-between p-6 sm:p-8 backdrop-blur-xl z-50 overflow-y-auto animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col gap-2 border-b border-[#242424] pb-6">
            <span className="font-label-sm text-[10px] text-[#e60012] uppercase tracking-[0.2em] font-mono font-bold">
              // NAVIGATION INDEX
            </span>
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              const isContact = item.id === 'contact';
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`mobile-nav-link nav-glow-link flex items-center justify-between py-3 border-b border-[#1f1f1f] text-[18px] font-headline-sm uppercase font-bold transition-all duration-150 active:scale-[0.98] active:translate-x-1 ${
                    isContact
                      ? 'text-[#e60012]'
                      : isActive
                      ? 'text-[#e60012]'
                      : 'text-[#f1f0eb]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-[12px] text-[#e60012]">
                      {item.number}
                    </span>
                    {item.mobileLabel}
                  </span>
                  {isContact ? (
                    <Mail size={18} />
                  ) : (
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1 group-active:translate-x-2"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3 font-label-sm text-[11px] font-mono text-[#bdbdbd]">
            <div className="flex items-center justify-between">
              <span>PARUL UNIVERSITY (2025–2029)</span>
              <span className="text-[#e60012] font-bold">[ONLINE]</span>
            </div>
            <a
              className="w-full btn-crimson-angular py-3 text-[13px] tracking-wider text-center"
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              GET IN TOUCH →
            </a>
          </div>
        </div>
      )}
    </>
  );
};
