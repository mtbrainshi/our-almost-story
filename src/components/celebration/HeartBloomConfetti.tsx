const HeartBloomConfetti = () => {
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞'];
  
  const generateEnhancedHeartWaves = () => {
    const allHearts = [];
    
    // Wave 1: Initial burst - 15 hearts in perfect circle
    for (let i = 0; i < 15; i++) {
      const angle = (i * 360) / 15;
      const startRadius = 40;
      const endRadius = 600;
      
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
        delay: '0.1s',
        duration: '2s'
      });
    }
    
    // Wave 2: Secondary burst - 20 hearts in larger circle
    for (let i = 0; i < 20; i++) {
      const angle = (i * 360) / 20 + 9;
      const startRadius = 60;
      const endRadius = 700;
      
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
        delay: '1.4s',
        duration: '2.2s'
      });
    }
    
    // Wave 3: Final spread wave - 15 hearts in wider circle
    for (let i = 0; i < 15; i++) {
      const angle = (i * 360) / 15 + 15;
      const startRadius = 50;
      const endRadius = 750;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      allHearts.push({
        id: `wave3-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 30 + Math.random() * 8,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 18,
        delay: '2.8s',
        duration: '2.4s'
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
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.3) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 10px rgba(255, 20, 147, 0.8));
            }
            20% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.2)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.2)) scale(1.1) rotate(calc(var(--wobble) * 0.3));
              opacity: 1;
              filter: drop-shadow(0 0 15px rgba(255, 20, 147, 1));
            }
            50% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.5)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.5)) scale(0.95) rotate(calc(var(--wobble) * 0.6));
              opacity: 0.9;
              filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.7));
            }
            80% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.8)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.8)) scale(0.8) rotate(calc(var(--wobble) * 0.8));
              opacity: 0.5;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.5));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.5) rotate(var(--wobble));
              opacity: 0;
              filter: none;
            }
          }
          
          .enhanced-heart {
            animation: enhancedHeartBurst var(--duration) cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
            will-change: transform, opacity;
            backface-visibility: hidden;
            transform-origin: center center;
            pointer-events: none;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
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
