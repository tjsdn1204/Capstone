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
      setFrame(prev => (prev + 1) % imageFrames.length); // 반복되도록 수정
    }, 500); // 0.5초 간격

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '800px',
      aspectRatio: '1 / 1',
      margin: '0 auto',
      overflow: 'hidden',
      backgroundColor: '#222222',
      borderRadius: '12px'
    }}>
      <img
        src={imageFrames[frame]}
        alt={`지도 프레임 ${frame + 1}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
      />
    </div>
  );
}
