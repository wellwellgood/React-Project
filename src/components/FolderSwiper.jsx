// src/components/FolderSwiper.jsx
import React, { useState, useRef } from "react";
import "./FolderSwiper.css";

export default function FolderSwiper({ items = [], renderItem }) {
  const [index, setIndex] = useState(0);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
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
    if (exitDirection) return;
    startXRef.current = getClientX(e);
    didDragRef.current = false;
    setIsDragging(true);
    document.body.style.overscrollBehaviorY = "none";
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

    const threshold = 100;

    if (dragX <= -threshold) {
      setExitDirection("left");
      setTimeout(() => {
        next();
        setExitDirection(null);
        setDragX(0);
      }, 300);
    } else if (dragX >= threshold) {
      setExitDirection("right");
      setTimeout(() => {
        prev();
        setExitDirection(null);
        setDragX(0);
      }, 300);
    } else {
      // 실패 드래그 → 제자리로
      setDragX(0);
    }

    setIsDragging(false);
    startXRef.current = null;
    document.body.style.overscrollBehaviorY = "auto";
  };

  const topIndex = index;
  const midIndex = (index + 1) % total;
  const backIndex = (index + 2) % total;

  const current = safeItems[topIndex];

  // 크기 설정
  const BASE_SCALE = 0.9;
  const DRAG_SCALE = 0.8;
  const BASE_OFFSET_Y = 20;

  const getTopCardStyle = () => {
    if (exitDirection === "left") {
      return {
        transform: `translate3d(-150%, ${BASE_OFFSET_Y}px, 0) scale(${BASE_SCALE}) rotateZ(-20deg)`,
        opacity: 0,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      };
    }

    if (exitDirection === "right") {
      return {
        transform: `translate3d(150%, ${BASE_OFFSET_Y}px, 0) scale(${BASE_SCALE}) rotateZ(20deg)`,
        opacity: 0,
        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
      };
    }

    // 드래그 중일 때만 작게
    if (isDragging) {
      return {
        transform: `translate3d(${dragX}px, ${
          BASE_OFFSET_Y + Math.abs(dragX) * 0.05
        }px, 0) scale(${DRAG_SCALE}) rotateZ(${dragX * 0.05}deg)`,
        cursor: "grabbing",
        transition: "none",
      };
    }

    // 기본 상태
    return {
      transform: `translate3d(0, ${BASE_OFFSET_Y}px, 0) scale(${BASE_SCALE}) rotateZ(-3deg)`,
      cursor: "grab",
      transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
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

        {/* 앞 카드 */}
        <div
          className={`folder-card folder-card-top ${
            isFlipped ? "is-flipped" : ""
          }`}
          style={getTopCardStyle()}
          onClick={() => {
            if (isDragging || didDragRef.current || exitDirection) return;
            setIsFlipped((prev) => !prev);
          }}
        >
          <div className="card-flip-inner">
            {/* 앞면 */}
            <div className="card-face card-face-front">
              {/* 맥OS 창 상단 바 */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 16px",
                  border: "1px solid rgba(255, 255, 255, 1)",
                  borderRadius: "12px 12px 0 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 1)",
                  background: "#e0e0e0",
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgb(255, 95, 86)",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgb(255, 189, 46)",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                  }}
                />
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: "rgb(39, 201, 63)",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                  }}
                />
              </div>

              {renderItem(safeItems[topIndex], topIndex)}
            </div>

            {/* 뒷면 */}
            <div
              className="card-face card-face-back"
              style={
                current?.background
                  ? {
                      background: current.background,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }
                  : {}
              }
            />
          </div>
        </div>
      </div>

      <div className="folder-swiper-info" draggable={false}>
        <p draggable={false}>클릭 또는 드래그해서 넘겨보세요</p>
      </div>
    </div>
  );
}
