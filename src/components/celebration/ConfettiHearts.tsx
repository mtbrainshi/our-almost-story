interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];
  const sparkleEmojis = ['✨', '⭐', '🌟', '💫', '🎇', '🌠'];
  const flowerEmojis = ['🌸', '🌹', '♥️', '🌻', '💗', '🌷'];
  const waveEmojis = ['🌊', '🌀', '🎉', '🥳', '🫧', '🎊', '💥', '💫'];
  
  const generateSequentialHeartLevels = () => {
    const levels = [];
    
    // Level 1: First wave - 8 hearts, completes journey in 2s
    const level1Hearts = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i * 360) / 8;      const startRadius = 60;
      const endRadius = 400;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
        level1Hearts.push({
        id: `level1-heart-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 32 + Math.random() * 8,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 20,
        level: 1,
        delay: '0s',
        duration: '3.5s',
        pulseScale: 1.2 + Math.random() * 0.3
      });
    }
    
    // Level 2: Sparkles and small hearts wave - 12 elements
    const level2Hearts = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i * 360) / 12 + 15;      const startRadius = 80;
      const endRadius = 500;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      const useSparkle = Math.random() > 0.6;
      level2Hearts.push({
        id: `level2-element-${i}`,
        emoji: useSparkle 
          ? sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)]
          : heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: useSparkle ? (24 + Math.random() * 4) : (28 + Math.random() * 6),
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 25,
        level: 2,        delay: '1.2s',
        duration: '4s',
        pulseScale: useSparkle ? (1.4 + Math.random() * 0.4) : (1.2 + Math.random() * 0.3)
      });
    }
    
    // Level 3: Flower and heart mix - 10 elements, wider spread
    const level3Hearts = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i * 360) / 10 + 30;      const startRadius = 100;
      const endRadius = 600;
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      const useFlower = Math.random() > 0.7;
      level3Hearts.push({
        id: `level3-element-${i}`,
        emoji: useFlower 
          ? flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)]
          : heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 30 + Math.random() * 8,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 30,
        level: 3,        delay: '2.5s',
        duration: '4.5s',
        pulseScale: 1.3 + Math.random() * 0.3
      });
    }
    
    // Level 4: Final sparkling wave - 14 elements, mixture of all
    const level4Hearts = [];
    for (let i = 0; i < 14; i++) {
      const angle = (i * 360) / 14;
      const startRadius = 120;
      const endRadius = 700;
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      const emojiType = Math.random();
      const emoji = emojiType > 0.6 
        ? heartEmojis[Math.floor(Math.random() * heartEmojis.length)]
        : emojiType > 0.3 
          ? sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)]
          : flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      level4Hearts.push({
        id: `level4-element-${i}`,
        emoji,
        size: 26 + Math.random() * 10,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 35,
        level: 4,
        delay: '4s',
        duration: '5s',
        pulseScale: 1.25 + Math.random() * 0.35
      });
    }
    // Level 5: Advanced wave/party layer - 16 elements, strong outward effect
    const level5Waves = [];
    for (let i = 0; i < 16; i++) {
      const angle = (i * 360) / 16 + 12;
      const startRadius = 160;
      const endRadius = 950;
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      level5Waves.push({
        id: `level5-wave-${i}`,
        emoji: waveEmojis[Math.floor(Math.random() * waveEmojis.length)],
        size: 34 + Math.random() * 12,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 50,
        level: 5,
        delay: '6s',
        duration: '4s',
        pulseScale: 1.4 + Math.random() * 0.4
      });
    }
    return [
      ...level1Hearts,
      ...level2Hearts,
      ...level3Hearts,
      ...level4Hearts,
      ...level5Waves
    ];
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
