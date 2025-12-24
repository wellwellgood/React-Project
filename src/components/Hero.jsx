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
              className="text-2xl sm:text-3xl lg:text-2xl font-bold tracking-tight text-hud-bg/100 flex flex-col"
              style={{
                textShadow: `
                -1px -1px 0 #fff,
                1px -1px 0 #fff,
                -1px  1px 0 #fff,
                1px  1px 0 #fff
              `,
              }}
            >
              UI 인터랙션과 화면 완성도를 끝까지 책임지는
              프론트엔드 · 웹 퍼블리셔 지망 개발자{" "}
              <span
                className="text-neon-cyan text-4xl"
                style={{
                  textShadow: "none",
                }}
              >
                김기윤 <span className="">입니다.</span>
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base text-neon-white max-w-xl font-bold text-stroke-2 text-stroke-neon-cyan">
              React와 Vanilla JS를 기반으로
              CSS 애니메이션, 인터랙션, 반응형 UI를 구현하고
              실제 배포까지 연결되는 화면을 만드는 데 집중하고 있습니다.
            </p>
          </div>
          <span className="flex flex-col gap-2">
            <p className="text-xs font-bold ring-1  w-fit border rounded-full p-1 border-neon-purple text-neon-purple">keywords</p>
            <p className="text-xs rounded-full p-1 border-neon-pink ring-2 w-fit bg-neon-blue/40"> HTML · CSS · JavaScript · React · UI Animation · Responsive · Deploy</p>
          </span>
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
