import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { useLenis } from '../lib/LenisContext';
import { gsap, isReducedMotion } from '../lib/animation';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  triggerRef,
}) => {
  const [activeProject, setActiveProject] = useState<Project | null>(project);
  const backdropRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isClosingRef = useRef<boolean>(false);
  const activeTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const { lockScroll, unlockScroll } = useLenis();

  // Sync active project state
  useEffect(() => {
    if (project) {
      setActiveProject(project);
    }
  }, [project]);

  // Entrance animation when isOpen becomes true
  useEffect(() => {
    if (!isOpen || !activeProject) return;

    isClosingRef.current = false;
    lockScroll();

    if (isReducedMotion()) {
      closeButtonRef.current?.focus();
      return;
    }

    // Kill any active timeline
    if (activeTimelineRef.current) {
      activeTimelineRef.current.kill();
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: () => {
        closeButtonRef.current?.focus();
      },
    });

    activeTimelineRef.current = tl;

    // 1. Reveal Backdrop with smooth opacity
    tl.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3 }
    )
      // 2. Animate modal panel (opacity, scale 0.96 -> 1, y: 16 -> 0)
      .fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.96, y: 16 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45 },
        '-=0.18'
      )
      // 3. Project title & category badge appear first
      .fromTo(
        headerRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.35 },
        '-=0.25'
      )
      // 4. Description appears
      .fromTo(
        descRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.32 },
        '-=0.2'
      )
      // 5. Tech tags appear with a controlled stagger
      .fromTo(
        tagsRef.current ? tagsRef.current.children : [],
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.22, stagger: 0.05 },
        '-=0.15'
      )
      // 6. Action links and footer appear
      .fromTo(
        [actionsRef.current, footerRef.current].filter(Boolean),
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.28, stagger: 0.08 },
        '-=0.1'
      );

    return () => {
      if (activeTimelineRef.current) {
        activeTimelineRef.current.kill();
      }
    };
  }, [isOpen, activeProject, lockScroll]);

  // Clean exit animation handler
  const handleRequestClose = () => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    if (isReducedMotion()) {
      unlockScroll();
      isClosingRef.current = false;
      if (triggerRef?.current) {
        triggerRef.current.focus();
      }
      onClose();
      return;
    }

    if (activeTimelineRef.current) {
      activeTimelineRef.current.kill();
    }

    const exitTl = gsap.timeline({
      onComplete: () => {
        isClosingRef.current = false;
        unlockScroll();
        if (triggerRef?.current) {
          triggerRef.current.focus();
        }
        onClose();
      },
    });

    activeTimelineRef.current = exitTl;

    // Fade out inner content smoothly
    exitTl
      .to(
        [
          headerRef.current,
          descRef.current,
          tagsRef.current,
          actionsRef.current,
          footerRef.current,
        ].filter(Boolean),
        { opacity: 0, duration: 0.15, ease: 'power2.in' }
      )
      // Panel scales down slightly and moves down
      .to(
        cardRef.current,
        { opacity: 0, scale: 0.96, y: 12, duration: 0.22, ease: 'power2.in' },
        '-=0.08'
      )
      // Backdrop dissolves
      .to(
        backdropRef.current,
        { opacity: 0, duration: 0.22, ease: 'power2.in' },
        '-=0.16'
      );
  };

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && !isClosingRef.current) {
        handleRequestClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  if (!isOpen && !isClosingRef.current) return null;
  if (!activeProject) return null;

  return (
    <div
      ref={backdropRef}
      id="project-modal"
      className="fixed inset-0 z-50 bg-[#050505]/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleRequestClose}
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-xl bg-[#141414] border-2 border-[#e60012] p-5 sm:p-8 shadow-[6px_6px_0px_#f1f0eb,0_0_30px_rgba(230,0,18,0.3)] sm:shadow-[8px_8px_0px_#f1f0eb,0_0_35px_rgba(230,0,18,0.3)] flex flex-col gap-5 sm:gap-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        {/* Header */}
        <div
          ref={headerRef}
          className="flex items-start justify-between border-b border-[#242424] pb-4"
        >
          <div>
            <span
              className="font-label-sm text-[10px] bg-[#e60012] text-white px-2 py-0.5 uppercase font-mono font-bold shadow-[0_0_8px_rgba(230,0,18,0.6)]"
              id="modal-badge"
            >
              {activeProject.badge || activeProject.category}
            </span>
            <h3
              className="font-headline-sm text-[20px] sm:text-[24px] uppercase font-bold text-[#f1f0eb] mt-2 tracking-tight"
              id="modal-title"
            >
              {activeProject.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            aria-label="Close modal"
            className="group bg-[#242424] text-[#f1f0eb] hover:bg-[#e60012] hover:text-white hover:shadow-[0_0_12px_rgba(230,0,18,0.6)] active:scale-90 min-w-[36px] min-h-[36px] flex items-center justify-center font-bold text-[18px] transition-all duration-200 leading-none focus:outline-none"
            onClick={handleRequestClose}
          >
            <X
              size={18}
              className="transition-transform duration-300 ease-out group-hover:rotate-90"
            />
          </button>
        </div>

        {/* Detailed Overview */}
        <div ref={descRef}>
          <span className="font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono block mb-2">
            // OVERVIEW &amp; IMPLEMENTATION
          </span>
          <p
            className="font-body-md text-[14px] sm:text-[15px] text-[#f1f0eb] leading-relaxed"
            id="modal-desc"
          >
            {activeProject.detailedDescription}
          </p>
        </div>

        {/* Technologies Used */}
        <div ref={tagsRef}>
          <span className="font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono block mb-2">
            TECHNOLOGIES USED:
          </span>
          <div className="flex flex-wrap gap-1.5" id="modal-tags">
            {activeProject.tags.map((tag) => (
              <span
                key={tag}
                className="bg-[#050505] font-label-sm text-[11px] text-[#f1f0eb] px-2.5 py-1 border border-[#242424] font-mono hover:border-[#e60012] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* External links if available */}
        {activeProject.repoUrl && (
          <div ref={actionsRef} className="pt-2">
            <span className="font-label-sm text-[11px] text-[#bdbdbd] uppercase font-mono block mb-2">
              CODE REPOSITORY:
            </span>
            <a
              href={activeProject.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-glow-link inline-flex items-center gap-2 bg-[#050505] border border-[#333333] hover:border-[#e60012] px-3 py-1.5 font-label-sm text-[11px] text-[#f1f0eb] hover:text-[#e60012] transition-all group"
            >
              <GithubIcon size={14} />
              <span>github.com/Aash-hasFallen</span>
              <ExternalLink
                size={12}
                className="group-hover:translate-x-0.5 group-active:translate-x-1 transition-transform"
              />
            </a>
          </div>
        )}

        {/* Footer Actions */}
        <div
          ref={footerRef}
          className="pt-4 border-t border-[#242424] flex flex-wrap items-center justify-between gap-3"
        >
          <span className="font-label-sm text-[10px] sm:text-[11px] text-[#bdbdbd] font-mono">
            AASHRAY BISWAL PORTFOLIO
          </span>
          <button
            className="btn-crimson-angular text-[13px] px-6 py-2 uppercase font-bold tracking-wider"
            onClick={handleRequestClose}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
