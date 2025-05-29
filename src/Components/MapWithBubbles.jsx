import React from 'react';
import '../Style/MapWithBubbles.css';

const mapWidth = 800;
const mapHeight = 850;

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
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        aspectRatio: `${mapWidth} / ${mapHeight}`,
        margin: '0 auto',
        backgroundColor: '#222222',
        borderRadius: '12px',
        overflow: 'hidden'
      }}
    >
      <img
        src="/images/지도.png"
        alt="지도"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
      {Object.entries(employmentData).map(([region, { x, y, rate }]) => {
        const leftPercent = (x / mapWidth) * 100;
        const topPercent = (y / mapHeight) * 100;
        const sizeVW = Math.min((rate / 100) * 6, 6); // 최대 6vw 제한

        return (
          <div
            key={region}
            style={{
              position: 'absolute',
              left: `${leftPercent}%`,
              top: `${topPercent}%`,
              width: `${sizeVW}vw`,
              height: `${sizeVW}vw`,
              backgroundColor: '#FFA500', // 주황색
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 'clamp(10px, 1.5vw, 14px)',
              textAlign: 'center',
              pointerEvents: 'none',
            }}
          >
            {region}
            <br />
            {rate.toFixed(1)}%
          </div>
        );
      })}
    </div>
  );
}