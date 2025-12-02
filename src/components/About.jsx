import React from "react";

export default function About() {
  return (
    <section id="about" className="space-y-3">
      <SectionTitle label="ABOUT" />

      <p className="text-sm sm:text-[15px] leading-relaxed text-slate-200">
        HUD 스타일 UI, 지도 기반 서비스, 미니 게임처럼{" "}
        <span className="text-neon-pink">즉각적인 피드백이 있는 화면</span>을
        만드는 걸 좋아합니다. React를 중심으로 상태 관리, API 연동, 배포까지 한
        번에 다루며, 실사용에 가까운 프로토타입을 빠르게 만드는 역량에 집중하고
        있습니다.
      </p>
    </section>
  );
}

function SectionTitle({ label }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
      <span className="w-8 h-[1px] bg-neon-pink/70" />
      <span>{label}</span>
    </div>
  );
}
