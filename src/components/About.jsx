import React from "react";

export default function About() {
  return (
    <section id="about" className="space-y-3">
      <SectionTitle label="ABOUT" />

      <p className="text-sm sm:text-[15px] leading-relaxed text-slate-200">
        지도·HUD·레트로 게임 UI에 강한 관심을 가진 프론트엔드 지망 웹 기획·제작
        견습생
        <span className="text-neon-pink font-bold text-4xl">김기윤</span>입니다.
        React와 Tailwind를 중심으로 즉각적인 피드백이 있는 인터랙티브한 화면을
        구현하며, 네온 HUD와 아케이드 감성을 현대적인 웹 인터페이스로 풀어내는
        작업에 집중하고 있습니다. 아이디어나 실험에 그치지 않고, 실제 서비스
        환경에 배포 가능한 수준까지 완성하는 것을 목표로 합니다. 에러 로그와
        빌드 과정을 분석하며 문제를 해결하는 과정을 즐기고, 개발을 시작하면
        리팩토링, 패키징, 배포까지 끝내야 비로소 작업이 완료되었다고 생각하는
        타입입니다.
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
