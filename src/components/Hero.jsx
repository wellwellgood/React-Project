import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="pt-4 sm:pt-6 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 text-[10px] font-mono text-slate-400">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-neon" />
          <span>ONLINE</span>
          <span className="text-slate-600">/</span>
          <span>v1.0.0</span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-50">
            지도·HUD·아케이드 게임을 좋아하는{" "}
            <span className="text-neon-cyan">Frontend Developer</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            React, HUD UI, 미니게임, 지도 서비스 같은 인터랙티브한 화면을 만드는
            걸 즐깁니다. 프로토타입부터 배포까지, 눈에 보이는 부분을 끝까지
            가져갑니다.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/60 bg-slate-900/60 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-neon-cyan shadow-neon hover:bg-slate-900/90 transition-colors"
        >
          VIEW PROJECTS
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/50 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-200 hover:border-neon-pink hover: shadow-neon hover:shdow-pink-900/80 hover:text-neon-pink transition-colors"
        >
          CONTACT
        </a>
      </div>
    </section>
  );
}
