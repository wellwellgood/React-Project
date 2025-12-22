import React from "react";
// import img from "../img/header img.png";
import img from "../img/img.png";

export default function Hero() {
  // 헤더 높이만큼 오프셋 주는 스크롤 함수
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80; // 헤더 높이(px)에 맞게 조정 (예: 64, 72 등)
    const rect = el.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="
        relative w-full
        
        flex justify-between items-center
        overflow-visible
        h-[480px]
        bg-no-repeat
        rounded-xl
        mt-6
      "
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="relative z-10 flex flex-col gap-5 max-w-xl ms-7">
        <div className="flex flex-col gap-4">
          <div className=" left-0 sm:top-5 sm:left-0 inline-flex items-center gap-2 text-[10px] font-mono text-slate-400 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan animate-neonFlash" />
            <span>ONLINE</span>
            <span className="text-slate-600">/</span>
            <span>v1.1.12</span>
          </div>
          <div>
            <h1
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-hud-bg/100 flex flex-col"
              style={{
                textShadow: `
                -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px  1px 0 #fff,
                1px  1px 0 #fff
              `,
              }}
            >
              문제를 빠르게 재현하고 원인을 분리해 해결하는 데 강점있는{" "}
              <span
                className="text-neon-cyan"
                style={{
                  textShadow: "none",
                }}
              >
                Frontend Developer
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-neon-white max-w-xl font-bold text-stroke-2 text-stroke-neon-cyan">
              코드 작성보다 결과물로 실제 사용이 가능한지 확인하고,
              단순 구현보단, 에러 로그·렌더링 결과·배포 환경을
              기준으로 문제를 분석해 “돌아가는 화면”까지 책임지는 프론트엔드
              지향 개발자입니다.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* VIEW PROJECTS 버튼 */}
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="inline-flex items-center gap-2 rounded-full border border-neon-cyan/60 bg-slate-900/60 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-neon-cyan shadow-neon hover:bg-slate-900/90 transition-colors"
          >
            VIEW PROJECTS
          </button>

          {/* CONTACT 버튼 */}
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/50 px-4 py-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-200 hover:border-neon-pink hover:shadow-neon hover:shadow-pink-900/80 hover:text-neon-pink transition-colors"
          >
            CONTACT
          </button>
        </div>
      </div>

      {/* <img
        src={img}
        className="
      w-100% h-100%
      object-contain
      opacity-100
      drop-shadow-[0_0_20px_rgba(0,255,255,0.35)]
      absolute
      reliteve
    "
      /> */}
    </section>
  );
}
