import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="space-y-4 pb-2 sm:pb-0">
      <SectionTitle label="CONTACT" />
      <div className="grid gap-4 sm:grid-cols-[1.4fr,1fr]">
        <div className="space-y-2 text-sm text-slate-200">
          <p>
            협업, 피드백, 사이드 프로젝트 제안 모두 환영합니다. 간단한 메일이나
            DM으로 연락 주세요.
          </p>
        </div>
        <div className="space-y-2 text-xs font-mono text-slate-300">
          <div className="flex justify-between">
            <span className="text-slate-500">EMAIL</span>
            <a
              href="mailto:159pko@naver.com"
              className="text-neon-cyan hover:underline"
            >
              159pko@naver.com
            </a>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">GITHUB</span>
            <a
              href="https://github.com/wellwellgood"
              target="_blank"
              rel="noreferrer"
              className="text-neon-cyan hover:underline"
            >
              https://github.com/wellwellgood
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ label }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
      <span className="w-8 h-[1px] bg-neon-purple/80" />
      <span>{label}</span>
    </div>
  );
}
