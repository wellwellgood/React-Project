import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app-bg">
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
        <div className="neon-shell border border-slate-700/70">
          {/* 상단 HUD 형식 헤더 */}
          <Header />

          <main className="px-4 pb-6 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10 space-y-12 sm:space-y-14">
            <Hero />
            <div className="section-divider" />
            <About />
            <div className="section-divider" />
            <Skills />
            <div className="section-divider" />
            <ProjectsSection />
            <div className="section-divider" />
            <Contact />
          </main>
        </div>
      </div>
    </div>
  );
}
