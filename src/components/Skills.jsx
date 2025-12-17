import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 800, // 애니메이션 시간 (ms)
      offset: 100, // 언제부터 시작할지 (px)
      once: true, // 스크롤 내려갔다 올라와도 한 번만 실행
      delay: 300,
    });
  }, []);

  return (
    <section id="skills" className="space-y-4">
      <SectionTitle label="SKILLS" />

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            id="skills"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-offset="200"
            key={group.label}
            className="rounded-xl border border-slate-100 bg-slate-950/60 p-4
            hover:ring-4 ring-neon-pink/100 transition hover:border-neon-pink"
          >
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[14px] font-mono text-slate-400">
                {group.label}
              </div>
              <div className="h-[1px] w-10 bg-slate-100" />
            </div>
            <ul className="space-y-1.5 text-xs text-slate-200">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-[5px] w-[5px] rounded-full bg-neon-yellow/50" />
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
