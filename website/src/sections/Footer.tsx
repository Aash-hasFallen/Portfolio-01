import React, { useState } from 'react';
import { useLenis } from '../lib/LenisContext';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { scrollTo } = useLenis();
  const [topPressed, setTopPressed] = useState(false);

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setTopPressed(true);
    setTimeout(() => setTopPressed(false), 300);

    scrollTo('#intro', -80);
    window.history.pushState(null, '', '#intro');
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-[#242424] py-8 sm:py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-[#e60012] shrink-0 shadow-[0_0_8px_rgba(230,0,18,0.8)]" />
          <span className="font-label-sm text-[11px] sm:text-[12px] text-[#bdbdbd] uppercase font-mono">
            © 2025 AASHRAY BISWAL. ALL RIGHTS RESERVED.
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="font-label-sm text-[11px] text-[#666] uppercase font-mono">
            PARUL UNIVERSITY
          </span>
          <a
            className={`nav-glow-link font-label-sm text-[12px] uppercase font-mono font-bold transition-all duration-150 min-h-[44px] flex items-center group focus:outline-none select-none ${
              topPressed
                ? 'text-[#ff1a2b] scale-90 drop-shadow-[0_0_12px_rgba(230,0,18,0.9)]'
                : 'text-[#f1f0eb] hover:text-[#e60012]'
            }`}
            href="#intro"
            onClick={handleBackToTop}
            aria-label="Back to top"
          >
            <span>TOP</span>
            <ArrowUp
              size={14}
              className="ml-1 transition-transform duration-200 group-hover:-translate-y-0.5 group-active:-translate-y-1.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
