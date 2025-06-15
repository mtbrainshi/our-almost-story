
const HeartBloomConfetti = () => {
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘'];
  
  const generateEnhancedHeartWaves = () => {
    const allHearts = [];
    
    // Wave 1: Initial burst - 15 hearts in perfect circle
    for (let i = 0; i < 15; i++) {
      const angle = (i * 360) / 15;
      const startRadius = 60;
      const endRadius = 450;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      allHearts.push({
        id: `wave1-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 32 + Math.random() * 8,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 12,
        delay: '1.2s',
        duration: '2.8s'
      });
    }
    
    // Wave 2: Secondary burst - 20 hearts in larger circle
    for (let i = 0; i < 20; i++) {
      const angle = (i * 360) / 20 + 9; // Slight offset
      const startRadius = 85;
      const endRadius = 550;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      allHearts.push({
        id: `wave2-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 28 + Math.random() * 6,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 15,
        delay: '3.5s',
        duration: '3.2s'
      });
    }
    
    // Wave 3: Final floating hearts - 12 hearts floating upward
    for (let i = 0; i < 12; i++) {
      const startX = (Math.random() - 0.5) * 300;
      const startY = 120 + Math.random() * 80;
      const endX = startX + (Math.random() - 0.5) * 150;
      const endY = -400;
      
      allHearts.push({
        id: `wave3-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 26 + Math.random() * 6,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 20,
        delay: `${6.0 + i * 0.15}s`,
        duration: '2.5s'
      });
    }
    
    return allHearts;
  };

  const allHearts = generateEnhancedHeartWaves();

  return (
    <>
      <style>
        {`
          @keyframes enhancedHeartBurst {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.2) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 10px rgba(255, 20, 147, 0.8));
            }
            15% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.1)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.1)) scale(1.2) rotate(calc(var(--wobble) * 0.3));
              opacity: 1;
              filter: drop-shadow(0 0 15px rgba(255, 20, 147, 1)) drop-shadow(0 0 25px rgba(255, 105, 180, 0.8));
            }
            40% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.4)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.4)) scale(1.0) rotate(calc(var(--wobble) * 0.6));
              opacity: 0.9;
              filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.7));
            }
            70% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.75)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.75)) scale(0.8) rotate(calc(var(--wobble) * 0.8));
              opacity: 0.6;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.4));
            }
            90% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.95)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.95)) scale(0.6) rotate(calc(var(--wobble) * 0.9));
              opacity: 0.2;
              filter: drop-shadow(0 0 4px rgba(255, 20, 147, 0.2));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.4) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(255, 20, 147, 0.1));
            }
          }
          
          .enhanced-heart {
            animation: enhancedHeartBurst var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            will-change: transform, opacity, filter;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {allHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute enhanced-heart"
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
              zIndex: 58,
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
