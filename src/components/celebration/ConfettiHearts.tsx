
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Only pink/red heart emojis as specified
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];
  
  // Create 72 hearts in a perfect circle (60-80 range as specified)
  const generateHeartBurst = () => {
    const hearts = [];
    const heartCount = 72;
    const startRadius = 90; // Tight circle around modal as specified
    const endRadius = 350; // Final distance for beautiful spread
    
    for (let i = 0; i < heartCount; i++) {
      const angle = (i * 360) / heartCount; // Evenly distributed
      const size = 20 + Math.random() * 10; // 20-30px range as specified
      const rotationDirection = Math.random() > 0.5 ? 1 : -1;
      const wobbleAmount = 3 + Math.random() * 4; // Subtle ±5° wobble
      
      // Calculate positions using trigonometry
      const startX = Math.cos((angle * Math.PI) / 180) * startRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * startRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * endRadius;
      const endY = Math.sin((angle * Math.PI) / 180) * endRadius;
      
      hearts.push({
        id: `heart-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size,
        startX,
        startY,
        endX,
        endY,
        wobble: wobbleAmount * rotationDirection,
        opacity: 0.9 + Math.random() * 0.1
      });
    }
    
    return hearts;
  };

  const hearts = generateHeartBurst();

  return (
    <>
      <style>
        {`
          @keyframes heartBurst {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.8) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.6));
            }
            30% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.3)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.3)) scale(1.2) rotate(calc(var(--wobble) * 0.5));
              opacity: 1;
              filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.8)) drop-shadow(0 0 20px rgba(255, 105, 180, 0.5));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(1) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 6px rgba(255, 20, 147, 0.4));
            }
          }
          
          .confetti-heart {
            animation: heartBurst 1.5s cubic-bezier(0.3, -0.5, 0.7, 1.5) forwards;
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
