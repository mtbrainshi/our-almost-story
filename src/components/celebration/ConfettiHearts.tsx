
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Enhanced heart emojis with more variety
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '🌹', '💐'];
  
  // Generate beautiful circular outward motion
  const generateCircularConfetti = (waveIndex: number, heartCount: number, initialRadius: number) => {
    const hearts = [];
    
    for (let i = 0; i < heartCount; i++) {
      const angle = (i * 360) / heartCount;
      const size = 32 + Math.random() * 20; // Bigger hearts
      const finalDistance = 300 + Math.random() * 200; // How far they travel
      const rotationSpeed = 120 + Math.random() * 180; // Slower rotation
      const opacity = 0.8 + Math.random() * 0.2;
      
      // Calculate positions
      const startX = Math.cos((angle * Math.PI) / 180) * initialRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * initialRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * finalDistance;
      const endY = Math.sin((angle * Math.PI) / 180) * finalDistance + 150; // Gentle fall
      
      hearts.push({
        id: `heart-${waveIndex}-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        angle,
        size,
        opacity,
        rotationSpeed,
        startX,
        startY,
        endX,
        endY,
        wave: waveIndex,
        delay: waveIndex * 1.2 + (i * 0.08) // Much slower staggering
      });
    }
    
    return hearts;
  };

  // Create multiple waves with different circular arrangements
  const wave1 = generateCircularConfetti(1, 16, 40);   // Inner circle
  const wave2 = generateCircularConfetti(2, 20, 60);   // Middle circle  
  const wave3 = generateCircularConfetti(3, 24, 80);   // Outer circle
  
  const allHearts = [...wave1, ...wave2, ...wave3];

  return (
    <>
      <style>
        {allHearts.map((heart) => `
          @keyframes circularBurst-${heart.id} {
            0% { 
              transform: translate(-50%, -50%) translateX(${heart.startX}px) translateY(${heart.startY}px) scale(0.3) rotate(0deg);
              opacity: 0;
            }
            15% { 
              transform: translate(-50%, -50%) translateX(${heart.startX}px) translateY(${heart.startY}px) scale(1.1) rotate(${heart.rotationSpeed * 0.15}deg);
              opacity: ${heart.opacity};
            }
            35% { 
              transform: translate(-50%, -50%) translateX(${heart.startX + (heart.endX - heart.startX) * 0.3}px) translateY(${heart.startY + (heart.endY - heart.startY) * 0.2}px) scale(1) rotate(${heart.rotationSpeed * 0.35}deg);
              opacity: ${heart.opacity};
            }
            65% { 
              transform: translate(-50%, -50%) translateX(${heart.startX + (heart.endX - heart.startX) * 0.7}px) translateY(${heart.startY + (heart.endY - heart.startY) * 0.5}px) scale(0.9) rotate(${heart.rotationSpeed * 0.65}deg);
              opacity: ${heart.opacity * 0.8};
            }
            85% { 
              transform: translate(-50%, -50%) translateX(${heart.startX + (heart.endX - heart.startX) * 0.9}px) translateY(${heart.startY + (heart.endY - heart.startY) * 0.8}px) scale(0.7) rotate(${heart.rotationSpeed * 0.85}deg);
              opacity: ${heart.opacity * 0.5};
            }
            100% { 
              transform: translate(-50%, -50%) translateX(${heart.endX}px) translateY(${heart.endY}px) scale(0.4) rotate(${heart.rotationSpeed}deg);
              opacity: 0;
            }
          }
          
          @keyframes heartGlow-${heart.id} {
            0%, 100% { 
              filter: drop-shadow(0 0 8px rgba(255, 20, 147, 0.6)) brightness(1);
            }
            50% { 
              filter: drop-shadow(0 0 16px rgba(255, 20, 147, 0.8)) brightness(1.1);
            }
          }
          
          .confetti-${heart.id} {
            animation: 
              circularBurst-${heart.id} 6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
              heartGlow-${heart.id} 3s ease-in-out infinite;
            animation-delay: ${heart.delay}s, ${heart.delay + 0.5}s;
          }
        `).join('')}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {allHearts.map((heart) => (
          <div
            key={heart.id}
            className={`absolute confetti-${heart.id}`}
            style={{
              left: '50%',
              top: '50%',
              fontSize: `${heart.size}px`,
              zIndex: 50 + heart.wave,
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>
    </>
  );
};

export default ConfettiHearts;
