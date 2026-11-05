import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { gsap, ScrollTrigger, isReducedMotion } from './animation';

interface LenisContextType {
  lenis: Lenis | null;
  scrollTo: (target: string | HTMLElement, offset?: number) => void;
  lockScroll: () => void;
  unlockScroll: () => void;
}

const LenisContext = createContext<LenisContextType>({
  lenis: null,
  scrollTo: () => {},
  lockScroll: () => {},
  unlockScroll: () => {},
});

export const useLenis = () => useContext(LenisContext);

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const scrollLockCountRef = useRef(0);

  useEffect(() => {
    // If reduced motion is preferred, use native scrolling behavior
    if (isReducedMotion()) {
      return;
    }

    // Initialize Lenis smooth scroll engine
    const instance = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 0.95,
      touchMultiplier: 1.0,
      infinite: false,
    });

    lenisRef.current = instance;
    setLenis(instance);

    // Sync Lenis scroll with GSAP ScrollTrigger
    instance.on('scroll', ScrollTrigger.update);

    // Synchronize GSAP ticker with Lenis frame loop
    const tickerCallback = (time: number) => {
      instance.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Initial ScrollTrigger refresh after DOM and images settle
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      clearTimeout(refreshTimer);
      gsap.ticker.remove(tickerCallback);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  const scrollTo = (target: string | HTMLElement, offset: number = -80) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset,
        duration: isReducedMotion() ? 0.01 : 1.1,
      });
    } else {
      // Fallback for native or reduced motion
      if (typeof target === 'string') {
        const el = document.querySelector(target);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY + offset;
          window.scrollTo({
            top,
            behavior: isReducedMotion() ? 'auto' : 'smooth',
          });
        }
      } else if (target instanceof HTMLElement) {
        const top = target.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({
          top,
          behavior: isReducedMotion() ? 'auto' : 'smooth',
        });
      }
    }
  };

  const lockScroll = () => {
    scrollLockCountRef.current += 1;
    if (scrollLockCountRef.current === 1) {
      if (lenisRef.current) {
        lenisRef.current.stop();
      }
      document.body.style.overflow = 'hidden';
    }
  };

  const unlockScroll = () => {
    scrollLockCountRef.current = Math.max(0, scrollLockCountRef.current - 1);
    if (scrollLockCountRef.current === 0) {
      if (lenisRef.current) {
        lenisRef.current.start();
      }
      document.body.style.overflow = '';
    }
  };

  return (
    <LenisContext.Provider value={{ lenis, scrollTo, lockScroll, unlockScroll }}>
      {children}
    </LenisContext.Provider>
  );
};

