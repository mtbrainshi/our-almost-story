
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];
  
  const generateHearts = () => {
    const hearts = [];
    const totalHearts = 16; // Perfect circle of hearts
    const startRadius = 60; // Circle around the modal card
    const endRadius = 280; // Final position
    
    for (let i = 0; i < totalHearts; i++) {
      const angle = (i * 360) / totalHearts;
      const size = 26 + Math.random() * 6; // 26-32px for good visibility
      const gentleWobble = (Math.random() - 0.5) * 15; // ±7.5° gentle tilt
      
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
        wobble: gentleWobble,
        opacity: 0.9 + Math.random() * 0.1,
      });
    }
    
    return hearts;
  };

  const hearts = generateHearts();

  return (
    <>
      <style>
        {`
          @keyframes heartCelebration {
            0% { 
              transform: translate(-50%, -50%) translateX(var(--start-x)) translateY(var(--start-y)) scale(0.3) rotate(0deg);
              opacity: 0;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.6));
            }
            20% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.2)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.2)) scale(1.1) rotate(calc(var(--wobble) * 0.3));
              opacity: 1;
              filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.8)) drop-shadow(0 0 20px rgba(255, 105, 180, 0.6));
            }
            70% { 
              transform: translate(-50%, -50%) translateX(calc(var(--start-x) + (var(--end-x) - var(--start-x)) * 0.85)) translateY(calc(var(--start-y) + (var(--end-y) - var(--start-y)) * 0.85)) scale(0.95) rotate(calc(var(--wobble) * 0.8));
              opacity: 0.8;
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.5));
            }
            100% { 
              transform: translate(-50%, -50%) translateX(var(--end-x)) translateY(var(--end-y)) scale(0.7) rotate(var(--wobble));
              opacity: 0;
              filter: drop-shadow(0 0 4px rgba(255, 20, 147, 0.2));
            }
          }
          
          .confetti-heart {
            animation: heartCelebration 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
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
              animationDelay: '0.5s', // Hearts start right after rings begin
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
