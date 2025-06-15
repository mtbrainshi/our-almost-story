
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];
  
  const generateHeartLevels = () => {
    const levels = [];
    
    // Level 1: Inner circle - 8 hearts, shorter distance
    const level1Hearts = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i * 360) / 8;
      const startRadius = 80;
      const endRadius = 450; // Much further outward
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      level1Hearts.push({
        id: `level1-heart-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 28 + Math.random() * 4,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 20,
        opacity: 0.95,
        level: 1,
        delay: '0.3s' // Right after first ring starts
      });
    }
    
    // Level 2: Middle circle - 10 hearts, medium distance
    const level2Hearts = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i * 360) / 10 + 18; // Offset for better distribution
      const startRadius = 90;
      const endRadius = 550; // Even further
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      level2Hearts.push({
        id: `level2-heart-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 26 + Math.random() * 4,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 25,
        opacity: 0.9,
        level: 2,
        delay: '1.1s' // Right after second ring starts
      });
    }
    
    // Level 3: Outer circle - 12 hearts, longest distance
    const level3Hearts = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i * 360) / 12 + 15; // Different offset
      const startRadius = 100;
      const endRadius = 650; // Furthest outward
      
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      level3Hearts.push({
        id: `level3-heart-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 24 + Math.random() * 4,
        startX, startY, endX, endY,
        wobble: (Math.random() - 0.5) * 30,
        opacity: 0.85,
        level: 3,
        delay: '1.9s' // Right after third ring starts
      });
    }
    
    return [...level1Hearts, ...level2Hearts, ...level3Hearts];
  };

  const allHearts = generateHeartLevels();

  return (
    <>
      <style>
        {`
          @keyframes heartLevelBurst {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.2) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 10px rgba(255, 20, 147, 0.8));
            }
            15% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.15)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.15)) scale(1.2) rotate(calc(var(--wobble) * 0.2));
              opacity: 1;
              filter: drop-shadow(0 0 15px rgba(255, 20, 147, 1)) drop-shadow(0 0 25px rgba(255, 105, 180, 0.8));
            }
            35% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.4)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.4)) scale(1.05) rotate(calc(var(--wobble) * 0.5));
              opacity: 0.95;
              filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.7));
            }
            65% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.75)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.75)) scale(0.9) rotate(calc(var(--wobble) * 0.8));
              opacity: 0.7;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.5));
            }
            85% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.92)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.92)) scale(0.75) rotate(calc(var(--wobble) * 0.9));
              opacity: 0.4;
              filter: drop-shadow(0 0 5px rgba(255, 20, 147, 0.3));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.6) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 2px rgba(255, 20, 147, 0.1));
            }
          }
          
          .confetti-heart-level {
            animation: heartLevelBurst 4.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            will-change: transform, opacity, filter;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {allHearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute confetti-heart-level"
            style={{
              left: '50%',
              top: '50%',
              fontSize: `${heart.size}px`,
              '--start-x': `${heart.startX}px`,
              '--start-y': `${heart.startY}px`,
              '--end-x': `${heart.endX}px`,
              '--end-y': `${heart.endY}px`,
              '--wobble': `${heart.wobble}deg`,
              animationDelay: heart.delay,
              zIndex: 60 - heart.level, // Level 1 on top
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
