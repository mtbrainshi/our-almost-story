
const HeartBloomConfetti = () => {
  const heartEmojis = ['💕', '💖', '💗', '❤️'];
  
  const generateGentleHeartWaves = () => {
    const allHearts = [];
    
    // Wave 1: First gentle circle - only 12 hearts
    for (let i = 0; i < 12; i++) {
      const angle = (i * 360) / 12;
      const startRadius = 80;
      const endRadius = 400;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      allHearts.push({
        id: `wave1-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 28,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 8,
        delay: '1.0s', // Start after rings begin
        duration: '2.5s' // Slower, gentler movement
      });
    }
    
    // Wave 2: Second gentle circle - only 16 hearts
    for (let i = 0; i < 16; i++) {
      const angle = (i * 360) / 16 + 11.25; // Offset from first wave
      const startRadius = 90;
      const endRadius = 500;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      allHearts.push({
        id: `wave2-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 26,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 10,
        delay: '3.0s', // Start after first wave settles
        duration: '2.8s'
      });
    }
    
    // Wave 3: Final floating hearts - only 8 hearts floating upward
    for (let i = 0; i < 8; i++) {
      const startX = (Math.random() - 0.5) * 200;
      const startY = 100 + Math.random() * 50;
      const endX = startX + (Math.random() - 0.5) * 100;
      const endY = -300;
      
      allHearts.push({
        id: `wave3-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 24,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 15,
        delay: `${5.0 + i * 0.2}s`, // Staggered floating
        duration: '2.0s'
      });
    }
    
    return allHearts;
  };

  const allHearts = generateGentleHeartWaves();

  return (
    <>
      <style>
        {`
          @keyframes gentleHeartBurst {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.4) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 5px rgba(255, 20, 147, 0.4));
            }
            15% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.1)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.1)) scale(1.0) rotate(calc(var(--wobble) * 0.3));
              opacity: 1;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.6));
            }
            50% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.5)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.5)) scale(0.9) rotate(calc(var(--wobble) * 0.7));
              opacity: 0.8;
              filter: drop-shadow(0 0 6px rgba(255, 20, 147, 0.4));
            }
            85% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.9)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.9)) scale(0.7) rotate(calc(var(--wobble) * 0.9));
              opacity: 0.3;
              filter: drop-shadow(0 0 3px rgba(255, 20, 147, 0.2));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.5) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 1px rgba(255, 20, 147, 0.1));
            }
          }
          
          .gentle-heart {
            animation: gentleHeartBurst var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            will-change: transform, opacity, filter;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {allHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute gentle-heart"
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
