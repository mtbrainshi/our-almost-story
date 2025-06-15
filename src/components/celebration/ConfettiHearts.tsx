
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];
  
  const generateSequentialHeartLevels = () => {
    const levels = [];
    
    // Level 1: First wave - 8 hearts, completes journey in 2s
    const level1Hearts = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i * 360) / 8;
      const startRadius = 60;
      const endRadius = 500;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      level1Hearts.push({
        id: `level1-heart-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 28 + Math.random() * 4,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 15,
        level: 1,
        delay: '0.5s', // After rings start
        duration: '2s'
      });
    }
    
    // Level 2: Second wave - 10 hearts, starts after level 1 completes
    const level2Hearts = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i * 360) / 10 + 18;
      const startRadius = 70;
      const endRadius = 600;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      level2Hearts.push({
        id: `level2-heart-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 26 + Math.random() * 4,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 20,
        level: 2,
        delay: '2.7s', // After level 1 completes (0.5s + 2s + 0.2s gap)
        duration: '2.2s'
      });
    }
    
    // Level 3: Third wave - 12 hearts, starts after level 2 completes
    const level3Hearts = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i * 360) / 12 + 15;
      const startRadius = 80;
      const endRadius = 700;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      level3Hearts.push({
        id: `level3-heart-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 24 + Math.random() * 4,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 25,
        level: 3,
        delay: '5.1s', // After level 2 completes (2.7s + 2.2s + 0.2s gap)
        duration: '2.5s'
      });
    }
    
    return [...level1Hearts, ...level2Hearts, ...level3Hearts];
  };

  const allHearts = generateSequentialHeartLevels();

  return (
    <>
      <style>
        {`
          @keyframes sequentialHeartBurst {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.3) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.6));
            }
            10% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.1)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.1)) scale(1.1) rotate(calc(var(--wobble) * 0.2));
              opacity: 1;
              filter: drop-shadow(0 0 15px rgba(255, 20, 147, 1)) drop-shadow(0 0 20px rgba(255, 105, 180, 0.8));
            }
            30% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.4)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.4)) scale(1) rotate(calc(var(--wobble) * 0.6));
              opacity: 0.9;
              filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.8));
            }
            60% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.75)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.75)) scale(0.85) rotate(calc(var(--wobble) * 0.8));
              opacity: 0.6;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.5));
            }
            85% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.95)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.95)) scale(0.7) rotate(calc(var(--wobble) * 0.9));
              opacity: 0.3;
              filter: drop-shadow(0 0 5px rgba(255, 20, 147, 0.3));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.5) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(255, 20, 147, 0.1));
            }
          }
          
          .sequential-heart {
            animation: sequentialHeartBurst var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            will-change: transform, opacity, filter;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {allHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute sequential-heart"
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
              zIndex: 60 - heart.level,
            } as React.CSSProperties}
          >
            {heart.emoji}
          </div>
        ))}
      </div>
    </>
  );
};

export default ConfettiHearts;
