import React, { useEffect, useState } from 'react';

const imageFrames = [
  '/images/지도1.png',
  '/images/지도2.png',
  '/images/지도3.png',
  '/images/지도4.png',
  '/images/지도5.png'
];

export default function ScrollDisappearingMap() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame(prev => {
        if (prev < imageFrames.length - 1) return prev + 1;
        return prev; // 마지막 프레임에서 멈춤
      });
    }, 700); // 0.5초마다 프레임 전환

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      aspectRatio: '1 / 1',
      margin: '0 auto',
      overflow: 'hidden'
    }}>
      <img
        src={imageFrames[frame]}
        alt={`지도 프레임 ${frame + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }}
      />
    </div>
  );
}
