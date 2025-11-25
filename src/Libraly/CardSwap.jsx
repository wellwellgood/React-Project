import React, { useState } from "react";

// CardSwap 컴포넌트
export function CardSwap({ children }) {
  const items = React.Children.toArray(children);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto"
      style={{ height: "500px", perspective: "1500px" }}
    >
      {items.map((child, index) => {
        const offset = (index - activeIndex + items.length) % items.length;
        const isActive = offset === 0;

        return (
          <div
            key={index}
            onClick={isActive ? handleNext : undefined}
            style={{
              position: "absolute",
              width: "85%",
              height: "85%",
              left: "50%",
              top: "50%",
              transformStyle: "preserve-3d",
              transform: `
                translate(-50%, -50%)
                rotateX(${isActive ? 0 : 15}deg)
                rotateY(${offset * -8}deg)
                rotateZ(${offset * 4}deg)
                translateY(${offset * -30}px)
                translateX(${offset * -40}px)
                translateZ(${offset * -150}px)
                scale(${1 - offset * 0.08})
              `,
              opacity: 1 - offset * 0.2,
              filter: `blur(${offset * 0.5}px)`,
              transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
              cursor: isActive ? "pointer" : "default",
              zIndex: items.length - offset,
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            {child}
          </div>
        );
      })}

      {/* 하단 인디케이터 */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex
                ? "bg-cyan-400 w-6"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Card 컴포넌트
export function Card({ label, children }) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "20px",
        background: "rgba(15, 23, 42, 0.9)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        boxShadow:
          "0 30px 60px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4)",
      }}
    >
      {/* 헤더 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "16px 20px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          background: "rgba(255, 255, 255, 0.02)",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#ff5f56",
          }}
        />
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#ffbd2e",
          }}
        />
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#27c93f",
          }}
        />
        <span
          style={{
            marginLeft: "auto",
            fontSize: "13px",
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: "500",
          }}
        >
          {label}
        </span>
      </div>

      {/* 바디 */}
      <div
        style={{
          flex: 1,
          padding: "32px",
          color: "white",
          overflow: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

// 데모
export default function Demo() {
  const projects = [
    {
      title: "Snake HUD Arcade",
      year: "2025",
      subtitle: "독소 게임 플랫폼 쿨가 및 출시작",
      description:
        "8bit 스타일 스네이크 게임을 HUD 느낌으로 구현한 미니 게임. 점수/레벨정보/포지스 제어 등 UX 디테일에 집중.",
      tags: ["React", "Custom Canvas", "Audio", "HUD UI"],
    },
    {
      title: "Portfolio Website",
      year: "2025",
      subtitle: "개인 포트폴리오 사이트",
      description:
        "React와 3D 효과를 활용한 인터랙티브 포트폴리오. 레트로 아케이드 테마로 제작.",
      tags: ["React", "CSS 3D", "Responsive", "Animation"],
    },
    {
      title: "E-Commerce Dashboard",
      year: "2024",
      subtitle: "관리자 대시보드 시스템",
      description:
        "실시간 데이터 시각화와 사용자 관리 기능을 갖춘 어드민 페이지.",
      tags: ["React", "Chart.js", "Firebase", "Material UI"],
    },
  ];

  const labels = ["Smooth", "Reliable", "Customizable"];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0f172a, #1e293b)",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            color: "white",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Projects
        </h2>

        <CardSwap>
          {projects.map((project, index) => (
            <Card key={project.title} label={labels[index]}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      color: "white",
                      margin: 0,
                    }}
                  >
                    {project.title}
                  </h3>
                  <span
                    style={{
                      fontSize: "14px",
                      color: "rgba(255, 255, 255, 0.5)",
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                <div style={{ fontSize: "14px", color: "#ec4899" }}>
                  {project.subtitle}
                </div>

                <p
                  style={{
                    fontSize: "15px",
                    color: "rgba(255, 255, 255, 0.8)",
                    lineHeight: "1.6",
                  }}
                >
                  {project.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginTop: "8px",
                  }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "6px 12px",
                        fontSize: "12px",
                        borderRadius: "20px",
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "rgba(255, 255, 255, 0.9)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{ display: "flex", gap: "12px", marginTop: "16px" }}
                >
                  <button
                    style={{
                      padding: "8px 20px",
                      fontSize: "12px",
                      borderRadius: "20px",
                      background: "transparent",
                      border: "1px solid #06b6d4",
                      color: "#06b6d4",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    DEMO
                  </button>
                  <button
                    style={{
                      padding: "8px 20px",
                      fontSize: "12px",
                      borderRadius: "20px",
                      background: "transparent",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      color: "white",
                      cursor: "pointer",
                      transition: "all 0.3s",
                    }}
                  >
                    GITHUB
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </CardSwap>

        <p
          style={{
            textAlign: "center",
            color: "rgba(255, 255, 255, 0.5)",
            marginTop: "40px",
            fontSize: "14px",
          }}
        >
          💡 카드를 클릭하거나 하단 인디케이터를 클릭해서 전환하세요
        </p>
      </div>
    </div>
  );
}
