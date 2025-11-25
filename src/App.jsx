import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="app-bg">
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:py-10">
        <div className="neon-shell border border-slate-700/70">
          <Header />

          <main className="px-4 pb-6 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10 space-y-12 sm:space-y-14">
            <section id="hero">
              <Hero />
            </section>

            <div className="section-divider" />

            <section id="about">
              <About />
            </section>

            <div className="section-divider" />

            <section id="skills">
              <Skills />
            </section>

            <div className="section-divider" />

            <section id="projects">
              <ProjectsSection />
            </section>

            <div className="section-divider" />

            <section id="contact">
              <Contact />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
