
import { useEffect, useState } from "react";

interface CelebrationEffectsProps {
  showCelebration: boolean;
  celebrationPhase: number;
  onCelebrationEnd: () => void;
}

const CelebrationEffects = ({ showCelebration, celebrationPhase, onCelebrationEnd }: CelebrationEffectsProps) => {
  // Generate circular burst positions for hearts
  const generateBurstPositions = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * 2 * Math.PI;
      const radius = 120 + Math.random() * 80; // Random radius between 120-200px
      const burstX = Math.cos(angle) * radius;
      const burstY = Math.sin(angle) * radius;
      const rotation = angle * (180 / Math.PI) + Math.random() * 180;
      
      return {
        burstX,
        burstY,
        rotation,
        delay: (i % 8) * 0.1, // Staggered bursts
        scale: 0.8 + Math.random() * 0.6, // Varied sizes
      };
    });
  };

  // Generate curved arc trajectories
  const generateArcPositions = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const baseAngle = (i / count) * 2 * Math.PI;
      const arcMidX = Math.cos(baseAngle) * (80 + Math.random() * 40);
      const arcMidY = Math.sin(baseAngle) * (60 + Math.random() * 40) - 60;
      const arcEndX = Math.cos(baseAngle + 0.5) * (150 + Math.random() * 100);
      const arcEndY = Math.sin(baseAngle + 0.5) * (100 + Math.random() * 80) + 50;
      
      return {
        arcMidX,
        arcMidY,
        arcEndX,
        arcEndY,
        delay: (i % 6) * 0.2,
        duration: 2.5 + Math.random() * 1.5,
      };
    });
  };

  // Generate spiral positions
  const generateSpiralPositions = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const spiralAngle = (i / count) * 720; // 2 full rotations
      const spiralRadius = 30 + (i / count) * 120;
      
      return {
        spiralAngle,
        spiralRadius,
        delay: i * 0.15,
        direction: i % 2 === 0 ? 1 : -1, // Alternate spiral directions
      };
    });
  };

  const burstPositions = generateBurstPositions(20);
  const arcPositions = generateArcPositions(16);
  const spiralPositions = generateSpiralPositions(12);

  useEffect(() => {
    if (showCelebration) {
      // Auto-hide after 8 seconds
      const timer = setTimeout(() => {
        onCelebrationEnd();
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  if (!showCelebration) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Dreamy Glass Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-rose-100/30 to-orange-100/35 backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 via-transparent to-yellow-100/20" />
      </div>
      
      {/* Multiple expanding rings for depth */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-pink-400/70 rounded-full animate-expand-ring" />
        <div className="absolute w-28 h-28 border-2 border-rose-400/50 rounded-full animate-expand-ring" style={{animationDelay: '0.2s'}} />
        <div className="absolute w-40 h-40 border-2 border-orange-400/40 rounded-full animate-expand-ring" style={{animationDelay: '0.4s'}} />
        <div className="absolute w-52 h-52 border border-purple-300/30 rounded-full animate-expand-ring" style={{animationDelay: '0.6s'}} />
      </div>
      
      {/* PHASE 1: Circular Burst Hearts */}
      {celebrationPhase >= 1 && (
        <div className="absolute inset-0 flex items-center justify-center">
          {burstPositions.map((pos, i) => (
            <div
              key={`burst-${i}`}
              className="absolute animate-heart-burst"
              style={{
                left: '50%',
                top: '50%',
                '--burst-x': `${pos.burstX}px`,
                '--burst-y': `${pos.burstY}px`,
                '--burst-rotation': `${pos.rotation}deg`,
                animationDelay: `${pos.delay}s`,
                fontSize: `${16 + pos.scale * 8}px`,
                zIndex: Math.floor(pos.scale * 10),
              } as React.CSSProperties}
            >
              {['💕', '💖', '💗', '❤️', '💝', '💘'][i % 6]}
            </div>
          ))}
        </div>
      )}
      
      {/* PHASE 2: Curved Arc Trajectories */}
      {celebrationPhase >= 2 && (
        <div className="absolute inset-0 flex items-center justify-center">
          {arcPositions.map((pos, i) => (
            <div
              key={`arc-${i}`}
              className="absolute animate-heart-arc"
              style={{
                left: '50%',
                top: '50%',
                '--arc-mid-x': `${pos.arcMidX}px`,
                '--arc-mid-y': `${pos.arcMidY}px`,
                '--arc-end-x': `${pos.arcEndX}px`,
                '--arc-end-y': `${pos.arcEndY}px`,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`,
                fontSize: `${14 + (i % 3) * 3}px`,
              } as React.CSSProperties}
            >
              {['💕', '💖', '💗'][i % 3]}
            </div>
          ))}
        </div>
      )}
      
      {/* PHASE 3: Spiral Hearts */}
      {celebrationPhase >= 3 && (
        <div className="absolute inset-0 flex items-center justify-center">
          {spiralPositions.map((pos, i) => (
            <div
              key={`spiral-${i}`}
              className="absolute animate-heart-spiral"
              style={{
                left: '50%',
                top: '50%',
                '--spiral-angle': `${pos.spiralAngle * pos.direction}deg`,
                animationDelay: `${pos.delay}s`,
                fontSize: `${12 + (i % 4) * 2}px`,
                transform: `scale(${0.8 + (i % 3) * 0.2})`,
              } as React.CSSProperties}
            >
              {['💖', '🌸', '✨'][i % 3]}
            </div>
          ))}
        </div>
      )}
      
      {/* PHASE 4: Gentle Floating Elements */}
      {celebrationPhase >= 4 && [...Array(8)].map((_, i) => (
        <div
          key={`roses-${i}`}
          className="absolute animate-heart-float"
          style={{
            left: `${25 + (i % 4) * 15}%`,
            top: `${45 + (i < 4 ? 0 : 25)}%`,
            animationDelay: `${(i % 4) * 0.4}s`,
            animationDuration: `3.5s`,
            fontSize: `18px`,
          }}
        >
          🌹
        </div>
      ))}
      
      {/* SUCCESS MODAL with enhanced romantic design */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative max-w-md mx-auto">
          {/* Enhanced glass background with multiple layers */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-xl rounded-3xl border border-white/70 shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 via-rose-50/40 to-orange-50/50 rounded-3xl" />
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-br from-pink-200/30 via-rose-200/20 to-orange-200/25 rounded-3xl blur-xl" />
          
          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            <div className="text-6xl mb-6 animate-heart-pulse-gentle">💖</div>
            
            <h1 className="font-playfair text-4xl italic text-rose-800 font-bold mb-4">
              You said YES! 💕
            </h1>
            <p className="font-playfair text-xl italic text-rose-700 mb-3">
              Thank you for saying yes!
            </p>
            <p className="font-poppins text-lg text-rose-600 mb-8 leading-relaxed">
              This makes me so incredibly happy! ✨
              <br />
              <span className="text-sm italic text-rose-500">I can't wait to hear from you...</span>
            </p>
            
            <div className="mt-8">
              <p className="font-poppins text-sm text-rose-600 mb-4">
                Taking you to leave a message...
              </p>
              <div className="flex justify-center space-x-2">
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrationEffects;
