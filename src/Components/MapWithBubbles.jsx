import React, { useEffect, useRef, useState } from 'react';
import '../Style/MapWithBubbles.css';

const employmentData = {
  서울: { x: 480, y: 210, rate: 70.02 },
  인천: { x: 440, y: 230, rate: 70.68 },
  경기: { x: 510, y: 280, rate: 68.54 },
  강원: { x: 620, y: 220, rate: 68.95 },
  충북: { x: 550, y: 370, rate: 68.22 },
  충남: { x: 480, y: 390, rate: 68.17 },
  대전: { x: 500, y: 410, rate: 70.51 },
  세종: { x: 500, y: 390, rate: 73.62 },
  전북: { x: 470, y: 500, rate: 67.41 },
  전남: { x: 420, y: 580, rate: 65.70 },
  광주: { x: 440, y: 550, rate: 68.83 },
  경북: { x: 600, y: 360, rate: 66.17 },
  대구: { x: 610, y: 420, rate: 66.84 },
  경남: { x: 600, y: 510, rate: 67.22 },
  부산: { x: 640, y: 540, rate: 63.36 },
  울산: { x: 620, y: 500, rate: 65.58 },
  제주: { x: 440, y: 700, rate: 67.17 }
};

export default function MapWithBubbles() {
  const containerRef = useRef(null);
  const [containerPos, setContainerPos] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const rect = containerRef.current.getBoundingClientRect();
    setContainerPos({
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    });
  }, []);

  return (
    <div className="map-container" ref={containerRef}>
      <img src="/images/지도.png" alt="지도" className="map-image" />
      {Object.entries(employmentData).map(([region, { x, y, rate }]) => (
        <div
          key={region}
          className="bubble"
          style={{
            left: `${x - 180}px`,   // ✅ 전체적으로 왼쪽으로 20px 이동
            top: `${y}px`,
            width: `${rate * 0.8}px`,   // ✅ 버블 크기 축소
            height: `${rate * 0.8}px`,
          }}
        >
          <span className="tooltip">{region}: {rate.toFixed(1)}%</span>
        </div>
      ))}
    </div>
  );
}