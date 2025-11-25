import React from "react";
import { projects } from "../data/projects";
import { CardSwap, Card } from "../Libraly/CardSwap";

export default function ProjectsSection() {
  const labels = ["Smooth", "Reliable", "Customizable"];

  // 최소 3개의 카드 보장
  const displayProjects = [...projects];

  // 프로젝트가 3개 미만이면 플레이스홀더 추가
  while (displayProjects.length < 3) {
    displayProjects.push({
      title: "Coming Soon",
      period: "2025",
      role: "진행 중인 프로젝트",
      description: "새로운 프로젝트를 준비 중입니다. 곧 공개될 예정입니다!",
      tech: ["React", "TBD"],
      links: {},
      isPlaceholder: true,
    });
  }

  return (
    <section id="projects" className="space-y-4">
      <SectionTitle label="PROJECTS" />

      <CardSwap>
        {projects.slice(0, 3).map((project, index) => (
          <Card key={project.title} label={labels[index]}>
            <ProjectCard project={project} />
          </Card>
        ))}
      </CardSwap>
    </section>
  );
}

function ProjectCard({ project }) {
  // 플레이스홀더 카드인 경우
  if (project.isPlaceholder) {
    return (
      <article className="group rounded-xl border border-slate-700/50 bg-slate-950/50 p-4 flex flex-col gap-3 items-center justify-center h-full opacity-60">
        <div className="text-4xl mb-2">🚧</div>
        <h3 className="text-sm font-semibold text-slate-50">{project.title}</h3>
        <p className="text-xs text-slate-400 text-center leading-relaxed">
          {project.description}
        </p>
      </article>
    );
  }

  // 일반 프로젝트 카드
  return (
    <article className="group rounded-xl border border-slate-700/80 bg-slate-950/70 p-4 flex flex-col gap-3 hover:border-neon-cyan/80 hover:shadow-neon transition-all ease-in transition-transform hover:-translate-y-2">
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-50">{project.title}</h3>
        <span className="text-[10px] font-mono text-slate-500 text-[12px]">
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
