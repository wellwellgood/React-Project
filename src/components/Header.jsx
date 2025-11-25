import React from "react";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // 헤더 높이
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({ 
        top: elementPosition, 
        behavior: 'smooth' 
      });
    }
  };

  return (
    <header className="px-4 pt-4 pb-3 sm:px-8 sm:pt-5 sm:pb-4 border-b border-slate-700/70 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="neon-dot" />
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
            FRONTEND / ARCADE
          </div>
          <div className="font-pixel text-[10px] text-neon-cyan mt-1">
            김기윤 / PORTFOLIO
          </div>
        </div>
      </div>

      <nav className="hidden sm:flex items-center gap-4 text-[11px] font-mono text-slate-300">
        <button 
          onClick={() => scrollToSection('hero')} 
          className="hover:text-neon-cyan transition-colors"
        >
          HOME
        </button>
        <button 
          onClick={() => scrollToSection('projects')} 
          className="hover:text-neon-cyan transition-colors"
        >
          PROJECTS
        </button>
        <button 
          onClick={() => scrollToSection('skills')} 
          className="hover:text-neon-cyan transition-colors"
        >
          SKILLS
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="hover:text-neon-cyan transition-colors"
        >
          CONTACT
        </button>
      </nav>
    </header>
  );
}