import { useEffect, useRef } from 'react';
import { gsap, isReducedMotion } from '../lib/animation';

interface UseScrollRevealOptions {
  trigger?: string | HTMLElement | null;
  start?: string;
  y?: number;
  duration?: number;
  stagger?: number;
  delay?: number;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
  options: UseScrollRevealOptions = {}
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isReducedMotion()) return;

    const {
      trigger,
      start = 'top 85%',
      y = 20,
      duration = 0.65,
      stagger = 0.08,
      delay = 0,
      once = true,
    } = options;

    const ctx = gsap.context(() => {
      // Find animatable targets inside container or animate the container itself
      const targets = el.querySelectorAll('[data-reveal-child]');
      const animateTarget = targets.length > 0 ? targets : el;

      gsap.fromTo(
        animateTarget,
        {
          opacity: 0,
          y,
        },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger: targets.length > 0 ? stagger : 0,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: trigger ? trigger : el,
            start,
            once,
          },
        }
      );
    }, el);

    return () => {
      ctx.revert();
    };
  }, [options]);

  return ref;
}
