import React, { useEffect, useState } from "react";

const SPARKLE_COUNT = 12;
const SPARKLE_COLORS = [
  "#fffbe6", "#ffe066", "#ffd700", "#fff", "#ffeedd", "#fff8dc", "#ffe4e1"
];

const CelebrationSparkleOverlay: React.FC = () => {
  const [show, setShow] = useState(true);
  const [sparkles] = useState(() =>
    Array.from({ length: SPARKLE_COUNT }).map((_, i) => {
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const size = 18 + Math.random() * 16;
      const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
      const delay = Math.random() * 2;
      return { left, top, size, color, delay };
    })
  );

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div style={{
      position: "fixed",
      left: 0,
      top: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 60,
      pointerEvents: "none",
    }}>
      {sparkles.map((sparkle, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
            borderRadius: "50%",
            background: sparkle.color,
            opacity: 0.7,
            filter: `blur(1.5px) drop-shadow(0 0 8px ${sparkle.color})`,
            animation: `sparkle-float 2.2s ease-in-out ${sparkle.delay}s both`,
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes sparkle-float {
          0% { opacity: 0; transform: scale(0.7) translateY(0); }
          20% { opacity: 0.8; }
          60% { opacity: 1; transform: scale(1.1) translateY(-12px); }
          100% { opacity: 0; transform: scale(0.7) translateY(-32px); }
        }
      `}</style>
    </div>
  );
};

export default CelebrationSparkleOverlay;
