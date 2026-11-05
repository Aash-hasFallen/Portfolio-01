import React, { useState, useEffect, useRef } from 'react';
import { LenisProvider } from './lib/LenisContext';
import { RegisterMarks } from './components/RegisterMarks';
import { Header } from './components/Header';
import { HeroSection } from './sections/HeroSection';
import { ExploreSection } from './sections/ExploreSection';
import { AboutSection } from './sections/AboutSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperimentsSection } from './sections/ExperimentsSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './sections/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/portfolioData';

export const AppContent: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('intro');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const modalTriggerRef = useRef<HTMLElement | null>(null);

  // Section Observer for active navigation highlighting
  useEffect(() => {
    const sectionIds = [
      'intro',
      'explore',
      'about',
      'experience',
      'projects',
      'skills',
      'experiments',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSelectProject = (
    project: Project,
    triggerRef: React.RefObject<HTMLButtonElement | null>
  ) => {
    modalTriggerRef.current = triggerRef.current;
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#050505] text-[#f1f0eb] min-h-screen relative selection:bg-[#e60012] selection:text-white antialiased overflow-x-hidden">
      {/* Subtle Editorial Outer Register Marks */}
      <RegisterMarks />

      {/* Editorial Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="w-full pt-20">
        <HeroSection />
        <ExploreSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection onSelectProject={handleSelectProject} />
        <SkillsSection />
        <ExperimentsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Accessible Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        triggerRef={modalTriggerRef}
      />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LenisProvider>
      <AppContent />
    </LenisProvider>
  );
};

export default App;

