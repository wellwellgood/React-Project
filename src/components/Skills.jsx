import React from "react";

const skillGroups = [
  {
    label: "CORE",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    label: "FRONTEND",
    items: ["React", "Vite", "Next.js (기본)", "Tailwind CSS"],
  },
  {
    label: "STATE / DATA",
    items: ["Zustand", "React Query (기본)", "Context API"],
  },
  {
    label: "ETC",
    items: ["Netlify / Vercel", "Photoshop", "Git / GitHub"],
  },
  {
    label: "BACKEND / DEPLOY",
    items: ["Render", "NETLIFY", "NEON"],
  },
  {
    label: "SHOPINGMALL",
    items: ["카페24", "SHOPIFY", "NAVER SMART STORE"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-4">
      <SectionTitle label="SKILLS" />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-slate-700/70 bg-slate-950/60 p-4"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[11px] font-mono text-slate-400">
                {group.label}
              </div>
              <div className="h-[1px] w-10 bg-slate-700" />
            </div>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-neon-cyan/80" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ label }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
      <span className="w-8 h-[1px] bg-neon-yellow/80" />
      <span>{label}</span>
    </div>
  );
}
