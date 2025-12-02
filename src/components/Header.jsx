import React from "react";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // 헤더 높이
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const menuItems = [
    { id: "hero", label: "HOME" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <header
      className="px-4 pt-4 pb-3 sm:px-8 sm:pt-5 sm:pb-4 border-b border-slate-700/70 flex items-center justify-between gap-4 overflow-hidden"
    >
      {/* Left Info */}
      <div className="flex items-center gap-3">
        <div className="neon-dot" />
        <div>
          <div className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
            FRONTEND / PORTFOLIO
          </div>
          <div className="font-pixel text-[10px] text-neon-cyan mt-1">
            김기윤 / 1997.04.23
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="hidden sm:flex items-center gap-6 text-[14px] font-mono">
        {menuItems.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="
              relative inline-block
              text-slate-300
              transition-all duration-300

              hover:text-neon-cyan

              before:content-['['] after:content-[']']
              before:absolute after:absolute
              before:opacity-0 after:opacity-0

              before:transition-all after:transition-all
              before:duration-300 after:duration-300

              before:translate-x-2 after:-translate-x-2
              hover:before:opacity-100 hover:after:opacity-100
              hover:before:translate-x-0 hover:after:translate-x-0

              before:-left-3 after:-right-3
            "
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  );
}
