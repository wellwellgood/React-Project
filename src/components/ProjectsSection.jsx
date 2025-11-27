// src/components/ProjectsSection.jsx
import React from "react";
import { projects } from "../data/projects";
import FolderSwiper from "./FolderSwiper";

export default function ProjectsSection() {
  // projects 가 undefined 여도 안전
  const baseProjects = Array.isArray(projects) ? projects : [];
  const displayProjects = [...baseProjects];

  // 최소 3개 유지
  while (displayProjects.length < 3) {
    displayProjects.push({
      title: "Coming Soon",
      period: "2025",
      role: "진행 중인 프로젝트",
      description: "새로운 프로젝트를 준비 중입니다.",
      tech: ["TBD"],
      links: {},
      isPlaceholder: true,
    });
  }

  return (
    <section id="projects" className="space-y-4">
      <SectionTitle label="PROJECTS" />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FolderSwiper
          items={displayProjects.slice(0, 6)}
          renderItem={(project) => <ProjectCard project={project} />}
        />
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const baseClasses =
    "h-full w-full rounded-b border p-5 flex flex-col gap-3 transition-colors duration-300 bg-transparent";

    const bgClass = project.bgClass || "bg-transparent";
  const textColor = project.textColor || "";

  if (project.isPlaceholder) {
    return (
      <article
        className={`${baseClasses} ${bgClass} border-slate-700/50 items-center justify-center opacity-60`}
        style={{ color: textColor }}
      >
        <div className="text-4xl mb-2">🚧</div>
        <h3 className="text-base font-bold text-center">{project.title}</h3>
        <p className="text-xs text-center leading-relaxed">
          {project.description}
        </p>
      </article>
    );
  }

  return (
    <article
      className={`${baseClasses} ${bgClass} hover:border-neon-cyan/80 hover:shadow-neon`}
    >
      <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <h3
          className="text-base font-bold text-slate-50"
          style={{ color: textColor }}
        >
          {project.title}
        </h3>
        <span className="text-[15px] font-mono text-neon-cyan/100">
          {project.period}
        </span>
      </div>

      <div className="text-xl text-neon-pink/100">{project.role}</div>

      <p className="text-s leading-relaxed flex-grow"
      style={{color: project.textColor,}}>
        {project.description}
      </p>

      {/* tech 없으면 빈 배열로 처리해서 length 에러 방지 */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
        {(project.tech ?? []).map((t) => (
          <span
            key={t}
            className="rounded-full border border-slate-600/60 bg-slate-900/50 px-2 py-0.5 text-[10px] text-slate-300"
            style={{ color: textColor }}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 text-[11px] font-mono">
        {project.links?.demo && (
          <a
            href={project.links.demo}
            className="flex-1 text-center rounded-md border border-neon-cyan/100 py-1.5 text-neon-cyan hover:bg-neon-cyan/50 transition-colors"
            style={{ color: textColor }}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            DEMO
          </a>
        )}
        {project.links?.github && (
          <a
            href={project.links.github}
            className="flex-1 text-center rounded-md border border-slate-600 py-1.5 text-slate-900 hover:border-neon-pink/100 hover:text-neon-pink/100 transition-colors"
            style={{ color: textColor }}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
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
    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-6">
      <span className="w-8 h-[1px] bg-neon-cyan/80" />
      <span>{label}</span>
    </div>
  );
}
