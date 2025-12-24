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
    "h-auto w-auto rounded-b p-3 flex flex-col gap-2 transition-colors duration-300 bg-transparent";

  const bgClass = project.bgClass || "bg-transparent";
  // textColor 는 Tailwind 클래스 문자열로 사용 (예: "text-black", "text-neon-cyan")
  const textClass = project.textColor || "";

  if (project.isPlaceholder) {
    return (
      <article
        className={`${baseClasses} ${bgClass} ${textClass} h-auto items-center justify-center opacity-60 border-2`}
      >
        <div className="text-4xl mb-2">🚧</div>
        <h3 className="text-base font-bold text-center">{project.title}</h3>
        <p className="text-m text-center leading-relaxed">
          {project.Role}
          {project.Environment}
        </p>
      </article>
    );
  }

  return (
    <article
      className={`${baseClasses} ${bgClass} hover:border-neon-cyan/80 hover:shadow-neon flex justify-between`}
    >
      {/* 프로젝트 이름 */}
      <div className="flex items-center justify-between gap-2 border-b  pb-3">
        <h3 className={`text-base font-bold ${textClass || "text-slate-50"}`}>
          {project.role}
        </h3>
        <span className="text-[16px] font-mono text-neon-yellow/100">
          {project.period}
        </span>
      </div>
      {/* 역할 및 환경 */}
      <div className="flex items-center justify-between gap-2 border-b  pb-3">
        <h3>
          {project.Role}
        </h3>
        {project.Environment}
      </div>
      {/* 프로젝트 설명 */}
      <div className="text-xl font-bold text-neon-cyan/90  border-neon-cyan/50 p-1 rounded-xl text-left">{project.title}</div>
      <p
        className={`text-ms leading-relaxed flex-grow ${textClass || ""}`}
      >
        {project.description}
      </p>

      {/* 기술 */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
        {(project.tech ?? []).map((t) => (
          <span
            key={t}
            className={`rounded-full border border-slate-600/60 bg-slate-900/50 px-2 py-2 text-[14px] font-bold${textClass || "text-slate-300"
              }`}
          >
            {t}
          </span>
        ))}
      </div>
      {/* 링크 */}
      <div className="mt-3 flex items-center gap-2 text-[12px] font-bold">
        {project.links?.demo && (
          <a
            href={project.links.demo}
            className={`flex-1 text-center rounded-md border border-neon-cyan/100 py-1.5 hover:bg-neon-cyan/90 hover:text-hud-bg transition-colors ${textClass || "text-neon-cyan"
              }`}
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
            className={`flex-1 text-center rounded-md border border-neon-pink/100 py-1.5 hover:border-neon-pink/50 hover:bg-neon-pink/90  ${textClass || "text-neon-pink"
              }`}
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
