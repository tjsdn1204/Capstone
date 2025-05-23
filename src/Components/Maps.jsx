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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollRatio = scrollTop / docHeight;
      const index = Math.floor(scrollRatio * imageFrames.length);
      setFrame(Math.min(index, imageFrames.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <img
        src={imageFrames[frame]}
        alt={`지도 단계 ${frame + 1}`}
        style={{
          width: '100%',
          maxWidth: '800px',
          transition: 'opacity 0.6s ease-in-out',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
        }}
      />
      {/* 빈 영역 확보용 */}
      <div style={{ height: '300vh' }} />
    </div>
  );
}
