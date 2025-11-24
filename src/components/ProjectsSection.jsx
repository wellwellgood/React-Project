import React from "react";
import { projects } from "../data/projects";

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-4">
      <SectionTitle label="PROJECTS" />

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group rounded-xl border border-slate-700/80 bg-slate-950/70 p-4 flex flex-col gap-3 hover:border-neon-cyan/80 hover:shadow-neon transition-all ease-in">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-50">
          {project.title}
        </h3>
        <span className="text-[10px] font-mono text-slate-500">
          {project.period}
        </span>
      </div>
      <div className="text-[11px] font-mono text-neon-pink/80">
        {project.role}
      </div>
      <p className="text-xs text-slate-200 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 mt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-600/80 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-200"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 text-[11px] font-mono">
        {project.links.demo && (
          <a
            href={project.links.demo}
            className="rounded-full border border-neon-cyan/70 px-3 py-1 text-[10px] text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            DEMO
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            className="rounded-full border border-slate-600 px-3 py-1 text-[10px] text-slate-200 hover:border-neon-pink hover:text-neon-pink transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        )}
      </div>
    </article>
  );
}

function SectionTitle({ label }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
      <span className="w-8 h-[1px] bg-neon-cyan/80" />
      <span>{label}</span>
    </div>
  );
}
