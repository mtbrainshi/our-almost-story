
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Enhanced heart emojis with more variety
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '🌹', '💐'];
  
  // Generate beautiful circular outward motion
  const generateCircularConfetti = (waveIndex: number, heartCount: number, initialRadius: number) => {
    const hearts = [];
    
    for (let i = 0; i < heartCount; i++) {
      const angle = (i * 360) / heartCount;
      const size = 42 + Math.random() * 28; // Much bigger hearts
      const finalDistance = 400 + Math.random() * 300; // Longer travel distance
      const rotationSpeed = 80 + Math.random() * 120; // Much slower rotation
      const opacity = 0.8 + Math.random() * 0.2;
      
      // Calculate positions
      const startX = Math.cos((angle * Math.PI) / 180) * initialRadius;
      const startY = Math.sin((angle * Math.PI) / 180) * initialRadius;
      const endX = Math.cos((angle * Math.PI) / 180) * finalDistance;
      const endY = Math.sin((angle * Math.PI) / 180) * finalDistance + 200; // Gentle fall
      
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
        delay: waveIndex * 2.0 + (i * 0.15) // Much slower staggering
      });
    }
    
    return hearts;
  };

  // Create multiple waves with different circular arrangements
  const wave1 = generateCircularConfetti(1, 12, 30);   // Inner circle - fewer hearts
  const wave2 = generateCircularConfetti(2, 16, 50);   // Middle circle  
  const wave3 = generateCircularConfetti(3, 20, 70);   // Outer circle
  
  const allHearts = [...wave1, ...wave2, ...wave3];

  return (
    <>
      <style>
        {allHearts.map((heart) => `
          @keyframes circularBurst-${heart.id} {
            0% { 
              transform: translate(-50%, -50%) translateX(${heart.startX}px) translateY(${heart.startY}px) scale(0.2) rotate(0deg);
              opacity: 0;
            }
            20% { 
              transform: translate(-50%, -50%) translateX(${heart.startX}px) translateY(${heart.startY}px) scale(1.2) rotate(${heart.rotationSpeed * 0.2}deg);
              opacity: ${heart.opacity};
            }
            40% { 
              transform: translate(-50%, -50%) translateX(${heart.startX + (heart.endX - heart.startX) * 0.2}px) translateY(${heart.startY + (heart.endY - heart.startY) * 0.15}px) scale(1.1) rotate(${heart.rotationSpeed * 0.4}deg);
              opacity: ${heart.opacity};
            }
            60% { 
              transform: translate(-50%, -50%) translateX(${heart.startX + (heart.endX - heart.startX) * 0.5}px) translateY(${heart.startY + (heart.endY - heart.startY) * 0.4}px) scale(1.0) rotate(${heart.rotationSpeed * 0.6}deg);
              opacity: ${heart.opacity * 0.9};
            }
            80% { 
              transform: translate(-50%, -50%) translateX(${heart.startX + (heart.endX - heart.startX) * 0.8}px) translateY(${heart.startY + (heart.endY - heart.startY) * 0.7}px) scale(0.8) rotate(${heart.rotationSpeed * 0.8}deg);
              opacity: ${heart.opacity * 0.6};
            }
            100% { 
              transform: translate(-50%, -50%) translateX(${heart.endX}px) translateY(${heart.endY}px) scale(0.3) rotate(${heart.rotationSpeed}deg);
              opacity: 0;
            }
          }
          
          @keyframes heartGlow-${heart.id} {
            0%, 100% { 
              filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.7)) brightness(1);
            }
            50% { 
              filter: drop-shadow(0 0 20px rgba(255, 20, 147, 0.9)) brightness(1.2);
            }
          }
          
          .confetti-${heart.id} {
            animation: 
              circularBurst-${heart.id} 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
              heartGlow-${heart.id} 4s ease-in-out infinite;
            animation-delay: ${heart.delay}s, ${heart.delay + 1}s;
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
