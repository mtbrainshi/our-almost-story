import React, { useEffect, useState } from 'react';

const SPARKLE_COUNT = 18;
const SPARKLE_COLORS = [
  '#fffbe6', '#ffe066', '#ffd700', '#ffb700', '#fff', '#ffeedd', '#ffecb3', '#fff8dc', '#fff', '#ffe4e1'
];

const SparkleBurst: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      width: 0,
      height: 0,
      zIndex: 100,
      pointerEvents: 'none',
    }}>
      {Array.from({ length: SPARKLE_COUNT }).map((_, i) => {
        const angle = (i * 360) / SPARKLE_COUNT;
        const distance = 90 + Math.random() * 30;
        const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
        const delay = Math.random() * 0.2;
        return (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 16px 4px ${color}`,
              opacity: 0.85,
              transform: `translate(-50%, -50%) rotate(${angle}deg)`,
              animation: `sparkle-burst 0.9s cubic-bezier(0.4,0,0.2,1) ${delay}s both`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes sparkle-burst {
          0% { opacity: 0.7; transform: scale(0.2) translate(-50%, -50%) rotate(var(--angle,0deg)); }
          60% { opacity: 1; transform: scale(1.1) translate(-50%, -50%) rotate(var(--angle,0deg)) translateY(-80px); }
          100% { opacity: 0; transform: scale(0.7) translate(-50%, -50%) rotate(var(--angle,0deg)) translateY(-${110 + Math.random() * 30}px); }
        }
      `}</style>
    </div>
  );
};

export default SparkleBurst;
