import React from "react";

export default function About() {
  return (
    <section id="about" className="space-y-3">
      <SectionTitle label="ABOUT" />

      <p className="text-sm sm:text-[15px] leading-relaxed text-slate-200">
        지도·HUD·레트로 게임 UI에 꽂힌 프론트엔드 지망 웹 기획·제작 견습생
        김기윤입니다.{" "}
        <span className="text-neon-pink">즉각적인 피드백이 있는 화면</span>을
        React와 Tailwind를 중심으로 네온 HUD + 아케이드 감성의 웹을 만들고,
        실험으로 끝나는 것이 아니라 실제 서비스로 배포하여 “굴러가는 화면”을
        완성하는 데 집중하고 있습니다. 에러 로그와 빌드 과정을 분석하는 걸
        즐기며, 지도를 보면 언제나 HUD를 먼저 떠올리는 타입입니다. 무엇이든
        만들기 시작하면 리팩토링과 패키징, 배포까지 마무리해야 직성이 풀립니다.
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
