
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Only pink/red heart emojis as specified
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];
  
  // Create hearts in 3 levels with reduced counts and proper timing
  const generateLevelHearts = () => {
    const hearts = [];
    
    // Level 1: Inner circle - 12 hearts (starts 0.2s after ring 1)
    const level1Count = 12;
    const level1Radius = 50;
    const level1EndRadius = 180;
    
    for (let i = 0; i < level1Count; i++) {
      const angle = (i * 360) / level1Count;
      const size = 24 + Math.random() * 4; // 24-28px
      const rotationDirection = Math.random() > 0.5 ? 1 : -1;
      const wobbleAmount = 1 + Math.random() * 2; // Gentle ±2° wobble
      
      const startX = Math.cos((angle * Math.PI) / 180) * level1Radius;
      const startY = Math.sin((angle * Math.PI) / 180) * level1Radius;
      const endX = Math.cos((angle * Math.PI) / 180) * level1EndRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * level1EndRadius;
      
      hearts.push({
        id: `heart-level1-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size,
        startX,
        startY,
        endX,
        endY,
        wobble: wobbleAmount * rotationDirection,
        opacity: 0.9 + Math.random() * 0.1,
        level: 1,
        delay: 0.2
      });
    }
    
    // Level 2: Middle circle - 10 hearts (starts 1.0s after ring 2)
    const level2Count = 10;
    const level2Radius = 70;
    const level2EndRadius = 240;
    
    for (let i = 0; i < level2Count; i++) {
      const angle = (i * 360) / level2Count;
      const size = 22 + Math.random() * 4; // 22-26px
      const rotationDirection = Math.random() > 0.5 ? 1 : -1;
      const wobbleAmount = 1 + Math.random() * 2;
      
      const startX = Math.cos((angle * Math.PI) / 180) * level2Radius;
      const startY = Math.sin((angle * Math.PI) / 180) * level2Radius;
      const endX = Math.cos((angle * Math.PI) / 180) * level2EndRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * level2EndRadius;
      
      hearts.push({
        id: `heart-level2-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size,
        startX,
        startY,
        endX,
        endY,
        wobble: wobbleAmount * rotationDirection,
        opacity: 0.8 + Math.random() * 0.2,
        level: 2,
        delay: 1.0
      });
    }
    
    // Level 3: Outer circle - 8 hearts (starts 1.8s after ring 3)
    const level3Count = 8;
    const level3Radius = 90;
    const level3EndRadius = 300;
    
    for (let i = 0; i < level3Count; i++) {
      const angle = (i * 360) / level3Count;
      const size = 20 + Math.random() * 4; // 20-24px
      const rotationDirection = Math.random() > 0.5 ? 1 : -1;
      const wobbleAmount = 1 + Math.random() * 2;
      
      const startX = Math.cos((angle * Math.PI) / 180) * level3Radius;
      const startY = Math.sin((angle * Math.PI) / 180) * level3Radius;
      const endX = Math.cos((angle * Math.PI) / 180) * level3EndRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * level3EndRadius;
      
      hearts.push({
        id: `heart-level3-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size,
        startX,
        startY,
        endX,
        endY,
        wobble: wobbleAmount * rotationDirection,
        opacity: 0.7 + Math.random() * 0.2,
        level: 3,
        delay: 1.8
      });
    }
    
    return hearts;
  };

  const hearts = generateLevelHearts();

  return (
    <>
      <style>
        {`
          @keyframes heartBurst {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.2) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 6px rgba(255, 20, 147, 0.4));
            }
            25% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.3)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.3)) scale(1.1) rotate(calc(var(--wobble) * 0.4));
              opacity: 1;
              filter: drop-shadow(0 0 10px rgba(255, 20, 147, 0.7)) drop-shadow(0 0 18px rgba(255, 105, 180, 0.4));
            }
            80% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.95)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.95)) scale(0.9) rotate(calc(var(--wobble) * 0.9));
              opacity: 0.7;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.5));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.6) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 4px rgba(255, 20, 147, 0.2));
            }
          }
          
          .confetti-heart {
            animation: heartBurst 2.8s ease-out forwards;
            will-change: transform, opacity, filter;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute confetti-heart"
            style={{
              left: '50%',
              top: '50%',
              fontSize: `${heart.size}px`,
              '--start-x': `${heart.startX}px`,
              '--start-y': `${heart.startY}px`,
              '--end-x': `${heart.endX}px`,
              '--end-y': `${heart.endY}px`,
              '--wobble': `${heart.wobble}deg`,
              animationDelay: `${heart.delay}s`,
              zIndex: 60,
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
