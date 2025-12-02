// src/components/FolderSwiper.jsx
import React, { useState, useRef } from "react";
import "./FolderSwiper.css";

export default function FolderSwiper({ items = [], renderItem }) {
  // 1. Hook 최상단 선언
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  // [추가] 카드가 날아가는 방향 상태 (null | 'left' | 'right')
  const [exitDirection, setExitDirection] = useState(null);

  const [isFlipped, setIsFlipped] = useState(false);
  const startXRef = useRef(null);
  const didDragRef = useRef(false);

  const safeItems = Array.isArray(items) ? items : [];
  const total = safeItems.length;

  if (total === 0) return null;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  const getClientX = (e) => ("touches" in e ? e.touches[0].clientX : e.clientX);

  const handlePointerDown = (e) => {
    // 애니메이션 중일 때는 클릭 방지
    if (exitDirection) return;
    // setIsFlipped(true);
    startXRef.current = getClientX(e);
    didDragRef.current = false;
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!isDragging || startXRef.current == null || exitDirection) return;
    const currentX = getClientX(e);
    const delta = currentX - startXRef.current;
    if (Math.abs(delta) > 5) {
      didDragRef.current = true;
    }
    setDragX(delta);
  };

  const handlePointerUp = () => {
    if (!isDragging) return;

    const threshold = 100; // 민감도 조절 (너무 쉽게 넘어가지 않게)

    // [수정] 왼쪽으로 넘김 (Next)
    if (dragX <= -threshold) {
      setExitDirection("left"); // 1. 날아가는 상태 설정
      setTimeout(() => {
        next(); // 2. 애니메이션 시간(300ms) 후 데이터 변경
        setExitDirection(null); // 3. 상태 초기화
        setDragX(0);
      }, 300);
    }
    // [수정] 오른쪽으로 넘김 (Prev)
    else if (dragX >= threshold) {
      setExitDirection("right");
      setTimeout(() => {
        prev();
        setExitDirection(null);
        setDragX(0);
      }, 300);
    }
    // [수정] 원위치 복귀
    else {
      setDragX(0);
    }

    setIsDragging(false);
    startXRef.current = null;
  };

  // 인덱스 계산
  const topIndex = index;
  const midIndex = (index + 1) % total;
  const backIndex = (index + 2) % total;

  const current = safeItems[topIndex];
  // 스타일 계산 함수
  const getTopCardStyle = () => {
    // 1. 날아가는 애니메이션 중일 때
    if (exitDirection === "left") {
      return {
        transform: `translate3d(-150%, 0, 0) rotateZ(-20deg)`,
        opacity: 0,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      };
    }
    if (exitDirection === "right") {
      return {
        transform: `translate3d(150%, 0, 0) rotateZ(20deg)`,
        opacity: 0,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      };
    }

    // 2. 드래그 중일 때 (즉각 반응, transition 없음)
    if (isDragging) {
      return {
        transform: `translate3d(${dragX}px, ${
          Math.abs(dragX) * 0.05
        }px, 0) rotateZ(${dragX * 0.05}deg)`,
        cursor: "grabbing",
        transition: "none", // 드래그 중에는 딜레이 없음
      };
    }

    // 3. 기본 상태 (원위치 복귀 시 부드럽게)
    return {
      transform: "translate3d(0, 0, 0) rotateZ(-2deg)", // 기본 살짝 기울기
      transition: "transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)",
      cursor: "grab",
    };
  };

  return (
    <div className="folder-swiper" onMouseLeave={handlePointerUp}>
      <div
        className="folder-swiper-inner"
        onTouchStart={handlePointerDown}
        onTouchMove={handlePointerMove}
        onTouchEnd={handlePointerUp}
        onMouseDown={handlePointerDown}
        onMouseMove={handlePointerMove}
        onMouseUp={handlePointerUp}
      >
        {/* 뒤 카드 */}
        <div className="folder-card folder-card-back">
          {renderItem(safeItems[backIndex], backIndex)}
        </div>

        {/* 중간 카드 */}
        <div className="folder-card folder-card-mid">
          {renderItem(safeItems[midIndex], midIndex)}
        </div>

        {/* 앞 카드 (움직이는 카드) */}
        <div
          className={`folder-card folder-card-top ${
            isFlipped ? "is-flipped" : ""
          }`}
          style={getTopCardStyle()}
          onClick={() => {
            // 1) 지금 드래그 중이었거나, 실제로 움직였으면 플립 막기
            if (isDragging || didDragRef.current || exitDirection) return;

            // 2) 멈춰 있는 상태에서만 앞/뒤 토글
            setIsFlipped((prev) => !prev);
          }} // 클릭 시 플립
        >
          <div className="card-flip-inner">
            {/* 앞면 */}
            <div className="card-face card-face-front">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 16px",
                  border: "1px solid rgba(255, 255, 255, 1)",
                  borderRadius: "12px 12px 0 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 1)",
                  background: "#050816",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgb(255, 95, 86)",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgb(255, 189, 46)",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgb(39, 201, 63)",
                  }}
                />
              </div>

              {renderItem(safeItems[topIndex], topIndex)}
            </div>

            {/* 뒷면 – 내용은 예시, 알아서 커스텀하면 됨 */}
            <div
              className="card-face card-face-back"
              style={
                current?.background
                  ? {
                      background: current.background,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {
                      // background: "#050816",
                    }
              }
            ></div>
          </div>
        </div>
      </div>
      <div className="folder-swiper-info" draggable={false}>
        <p className="user-select: none;" draggable={false}>클릭 및 드래그를 해보시기 바랍니다</p>
      </div>
    </div>
  );
}
