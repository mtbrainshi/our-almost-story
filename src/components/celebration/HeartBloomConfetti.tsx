
interface HeartBloomConfettiProps {}

const HeartBloomConfetti = ({}: HeartBloomConfettiProps) => {
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];
  
  const generateHeartBloomLevels = () => {
    const allHearts = [];
    
    // Level 3: First Wave - Circular Burst (0.3s - 1.5s)
    // 50 hearts in perfect circle
    for (let i = 0; i < 50; i++) {
      const angle = (i * 360) / 50;
      const startRadius = 80;
      const endRadius = 600;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      allHearts.push({
        id: `bloom-wave1-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 28 + Math.random() * 8,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 10,
        level: 1,
        delay: '0.3s',
        duration: '1.2s',
        animationType: 'radialBurst'
      });
    }
    
    // Level 4: Second Wave - Delayed Ring with Wobble (1.0s - 2.5s)
    // 35 hearts in larger circle with wobble
    for (let i = 0; i < 35; i++) {
      const angle = (i * 360) / 35 + 10; // Slight offset
      const startRadius = 100;
      const endRadius = 700;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      allHearts.push({
        id: `bloom-wave2-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 26 + Math.random() * 6,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 15,
        level: 2,
        delay: '1.0s',
        duration: '1.5s',
        animationType: 'wobbleBurst'
      });
    }
    
    // Level 5: Third Wave - Floating Hearts (2.0s - 4.0s)
    // 25 hearts floating upward like balloons
    for (let i = 0; i < 25; i++) {
      const startX = (Math.random() - 0.5) * 400;
      const startY = 300 + Math.random() * 100;
      const endX = startX + (Math.random() - 0.5) * 200;
      const endY = -400;
      
      allHearts.push({
        id: `bloom-wave3-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 24 + Math.random() * 6,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 20,
        level: 3,
        delay: `${2.0 + Math.random() * 0.8}s`,
        duration: '2.0s',
        animationType: 'floatUp'
      });
    }
    
    return allHearts;
  };

  const allHearts = generateHeartBloomLevels();

  return (
    <>
      <style>
        {`
          @keyframes radialBurst {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.3) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.8));
            }
            15% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.15)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.15)) scale(1.2) rotate(calc(var(--wobble) * 0.3));
              opacity: 1;
              filter: drop-shadow(0 0 15px rgba(255, 20, 147, 1)) drop-shadow(0 0 25px rgba(255, 105, 180, 0.9));
            }
            50% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.6)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.6)) scale(1.1) rotate(calc(var(--wobble) * 0.7));
              opacity: 0.8;
              filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.7));
            }
            85% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.9)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.9)) scale(0.9) rotate(calc(var(--wobble) * 0.9));
              opacity: 0.4;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.4));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.7) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 3px rgba(255, 20, 147, 0.2));
            }
          }
          
          @keyframes wobbleBurst {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.4) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 8px rgba(244, 114, 182, 0.8));
            }
            20% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.2)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.2)) scale(1.15) rotate(calc(var(--wobble) * 0.5));
              opacity: 1;
              filter: drop-shadow(0 0 18px rgba(244, 114, 182, 1)) drop-shadow(0 0 30px rgba(251, 146, 60, 0.8));
            }
            60% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.7)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.7)) scale(1.0) rotate(calc(var(--wobble) * 0.8));
              opacity: 0.7;
              filter: drop-shadow(0 0 12px rgba(244, 114, 182, 0.6));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.8) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 4px rgba(244, 114, 182, 0.3));
            }
          }
          
          @keyframes floatUp {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.5) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 6px rgba(251, 146, 60, 0.7));
            }
            25% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.1)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.3)) scale(1.0) rotate(calc(var(--wobble) * 0.3));
              opacity: 0.9;
              filter: drop-shadow(0 0 12px rgba(251, 146, 60, 0.9));
            }
            75% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.7)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.8)) scale(0.9) rotate(calc(var(--wobble) * 0.7));
              opacity: 0.5;
              filter: drop-shadow(0 0 8px rgba(251, 146, 60, 0.5));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.6) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(251, 146, 60, 0.2));
            }
          }
          
          .heart-bloom-radial {
            animation: radialBurst var(--duration) cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
            will-change: transform, opacity, filter;
            backface-visibility: hidden;
          }
          
          .heart-bloom-wobble {
            animation: wobbleBurst var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            will-change: transform, opacity, filter;
            backface-visibility: hidden;
          }
          
          .heart-bloom-float {
            animation: floatUp var(--duration) cubic-bezier(0.19, 1, 0.22, 1) forwards;
            will-change: transform, opacity, filter;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {allHearts.map((heart) => (
          <div
            key={heart.id}
            className={`absolute ${
              heart.animationType === 'radialBurst' ? 'heart-bloom-radial' :
              heart.animationType === 'wobbleBurst' ? 'heart-bloom-wobble' :
              'heart-bloom-float'
            }`}
            style={{
              left: '50%',
              top: '50%',
              fontSize: `${heart.size}px`,
              '--start-x': `${heart.startX}px`,
              '--start-y': `${heart.startY}px`,
              '--end-x': `${heart.endX}px`,
              '--end-y': `${heart.endY}px`,
              '--wobble': `${heart.wobble}deg`,
              '--duration': heart.duration,
              animationDelay: heart.delay,
              zIndex: 65 - heart.level,
            } as React.CSSProperties}
          >
            {heart.emoji}
          </div>
        ))}
      </div>
    </>
  );
};

export default HeartBloomConfetti;
