import React from "react";

export default function About() {
  return (
    <section id="about" className="space-y-3">
      <SectionTitle label="ABOUT" />

      <p className="text-sm sm:text-[15px] leading-relaxed text-slate-200">
        저는 화면을 단순히 “보이게 만드는 것”이 아니라,
        사용자의 입력과 흐름에 따라 의도대로 반응하는 UI를 만드는 데 집중해 왔습니다.
        {/* <span className="text-neon-pink font-bold text-4xl">김기윤</span>입니다. */}
        CSS 애니메이션과 JavaScript 인터랙션을 활용한 화면 구현을 주력으로 하며,
        드래그·호버·전환 효과와 같은 사용자 경험 요소를 직접 설계하고 구현합니다.

        실험으로 끝나는 작업보다, 실제 서비스 환경에서 동작하도록
        배포·유지까지 완료하는 것을 중요하게 생각합니다.
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
