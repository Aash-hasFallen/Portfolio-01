import React, { useEffect, useRef, useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { SectionHeading } from '../components/SectionHeading';
import { ArrowRight } from 'lucide-react';
import { gsap, isReducedMotion } from '../lib/animation';

interface ProjectsSectionProps {
  onSelectProject: (project: Project, triggerRef: React.RefObject<HTMLButtonElement | null>) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeBtnIndex, setActiveBtnIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12,
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

  const handleButtonClick = (
    project: Project,
    index: number
  ) => {
    setActiveBtnIndex(index);
    setTimeout(() => setActiveBtnIndex(null), 250);
    onSelectProject(project, { current: buttonRefs.current[index] });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#050505] border-t-2 border-[#e60012]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        <SectionHeading
          badge="PORTFOLIO // 04"
          title="SELECTED PROJECTS"
          meta="3 FEATURED WORKS"
        />

        {/* Projects Grid: 1 col on mobile, 2 on tablet, 3 on desktop with soft crimson hover glow & subtle lift */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const isLastOnTablet = index === 2;
            const isClicked = activeBtnIndex === index;

            return (
              <div
                key={project.id}
                className={`panel-project p-6 sm:p-7 flex flex-col justify-between group ${
                  isLastOnTablet ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#242424] mb-4">
                    <span className="font-label-sm text-[11px] text-[#e60012] font-mono font-bold uppercase drop-shadow-[0_0_6px_rgba(230,0,18,0.5)]">
                      {project.number} // PROJECT
                    </span>
                    <span className="font-label-sm text-[10px] bg-[#1a1a1a] text-[#f1f0eb] border border-[#333333] px-2 py-0.5 uppercase font-mono group-hover:border-[#e60012]/40 transition-colors">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-[20px] sm:text-[22px] uppercase font-bold text-[#f1f0eb] group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body-md text-[14px] text-[#bdbdbd] mt-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-[#242424]">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => {
                      const isHighlighted =
                        tag === 'LLM Integration' ||
                        tag === 'OpenCV' ||
                        tag === 'MediaPipe' ||
                        tag === 'R';
                      return (
                        <span
                          key={tag}
                          className={`bg-[#050505] font-label-sm text-[11px] px-2 py-1 font-mono border transition-colors ${
                            isHighlighted
                              ? 'text-[#e60012] border-[#e60012]/40 font-bold'
                              : 'text-[#bdbdbd] border-[#333333]'
                          }`}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <button
                    ref={(el) => {
                      buttonRefs.current[index] = el;
                    }}
                    className={`w-full btn-crimson-angular py-3 text-[14px] tracking-wider flex items-center justify-center gap-2 focus:outline-none transition-all duration-150 ${
                      isClicked
                        ? 'scale-[0.97] shadow-[2px_2px_0px_#f1f0eb,3px_3px_0px_#e60012,0_0_28px_rgba(230,0,18,0.7)]'
                        : ''
                    }`}
                    onClick={() => handleButtonClick(project, index)}
                    aria-haspopup="dialog"
                    aria-label={`View details for ${project.title}`}
                  >
                    <span>View Project</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-2"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
