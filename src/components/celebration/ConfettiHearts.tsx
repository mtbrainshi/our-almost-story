
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Enhanced heart emojis with varied colors and sparkles
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞'];
  const sparkleEmojis = ['✨', '🌟', '⭐', '💫'];
  
  // Generate circular burst patterns with physics
  const generateCircularBurst = (wave: number, heartCount: number, burstRadius: number) => {
    const hearts = [];
    
    for (let i = 0; i < heartCount; i++) {
      const angle = (i * 360) / heartCount + (wave * 15); // Offset each wave
      const distance = burstRadius + Math.random() * 60;
      const size = 20 + Math.random() * 16;
      const rotationSpeed = 180 + Math.random() * 360;
      const fallSpeed = 0.3 + Math.random() * 0.4;
      const opacity = 0.7 + Math.random() * 0.3;
      
      // Calculate curved trajectory points
      const midX = Math.cos((angle * Math.PI) / 180) * (distance * 0.6);
      const midY = Math.sin((angle * Math.PI) / 180) * (distance * 0.6) - 50; // Arc upward
      const endX = Math.cos((angle * Math.PI) / 180) * distance;
      const endY = Math.sin((angle * Math.PI) / 180) * distance + 200; // Fall down with gravity
      
      hearts.push({
        id: `burst-${wave}-${i}`,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        angle,
        size,
        opacity,
        rotationSpeed,
        fallSpeed,
        trajectory: {
          startX: 0,
          startY: 0,
          midX,
          midY,
          endX,
          endY
        },
        wave,
        delay: wave * 0.4 + (i * 0.05) // Stagger within burst
      });
    }
    
    return hearts;
  };

  // Generate sparkle effects
  const generateSparkles = (count: number) => {
    const sparkles = [];
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * 360;
      const distance = 100 + Math.random() * 200;
      const size = 16 + Math.random() * 8;
      const floatHeight = -100 - Math.random() * 150;
      
      sparkles.push({
        id: `sparkle-${i}`,
        emoji: sparkleEmojis[Math.floor(Math.random() * sparkleEmojis.length)],
        angle,
        distance,
        size,
        floatHeight,
        delay: Math.random() * 2
      });
    }
    
    return sparkles;
  };

  // Create multiple burst waves
  const wave1Hearts = generateCircularBurst(1, 12, 180); // First burst
  const wave2Hearts = generateCircularBurst(2, 16, 240); // Second burst
  const wave3Hearts = generateCircularBurst(3, 10, 300); // Third burst
  const sparkleEffects = generateSparkles(8);
  
  const allConfetti = [...wave1Hearts, ...wave2Hearts, ...wave3Hearts, ...sparkleEffects];

  return (
    <>
      <style>
        {allConfetti.map((item) => {
          if (item.id.includes('sparkle')) {
            // Sparkle floating animation
            const floatX = Math.cos((item.angle * Math.PI) / 180) * item.distance;
            const floatY = Math.sin((item.angle * Math.PI) / 180) * item.distance;
            
            return `
              @keyframes sparkleFloat-${item.id} {
                0% { 
                  transform: translate(-50%, -50%) translateY(0px) scale(0) rotate(0deg);
                  opacity: 0;
                }
                20% { 
                  transform: translate(-50%, -50%) translateY(-20px) scale(1) rotate(90deg);
                  opacity: 1;
                }
                80% { 
                  transform: translate(-50%, -50%) translateX(${floatX}px) translateY(${item.floatHeight}px) scale(1) rotate(450deg);
                  opacity: 1;
                }
                100% { 
                  transform: translate(-50%, -50%) translateX(${floatX}px) translateY(${item.floatHeight - 50}px) scale(0.3) rotate(540deg);
                  opacity: 0;
                }
              }
              
              @keyframes sparkleGlow-${item.id} {
                0%, 100% { filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.8)) brightness(1); }
                50% { filter: drop-shadow(0 0 16px rgba(255, 215, 0, 1)) brightness(1.3); }
              }
              
              .confetti-${item.id} {
                animation: 
                  sparkleFloat-${item.id} 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
                  sparkleGlow-${item.id} 2s ease-in-out infinite;
                animation-delay: ${item.delay}s, ${item.delay + 0.5}s;
              }
            `;
          } else {
            // Heart burst with curved trajectory and physics
            const { trajectory, rotationSpeed, fallSpeed } = item;
            
            return `
              @keyframes heartBurst-${item.id} {
                0% { 
                  transform: translate(-50%, -50%) scale(0) rotate(0deg);
                  opacity: 0;
                }
                15% { 
                  transform: translate(-50%, -50%) scale(1.2) rotate(${rotationSpeed * 0.15}deg);
                  opacity: ${item.opacity};
                }
                30% { 
                  transform: translate(-50%, -50%) translateX(${trajectory.midX}px) translateY(${trajectory.midY}px) scale(1) rotate(${rotationSpeed * 0.3}deg);
                  opacity: ${item.opacity};
                }
                70% { 
                  transform: translate(-50%, -50%) translateX(${trajectory.endX * 0.8}px) translateY(${trajectory.endY * 0.6}px) scale(0.9) rotate(${rotationSpeed * 0.7}deg);
                  opacity: ${item.opacity * 0.8};
                }
                90% { 
                  transform: translate(-50%, -50%) translateX(${trajectory.endX}px) translateY(${trajectory.endY * 0.9}px) scale(0.7) rotate(${rotationSpeed}deg);
                  opacity: ${item.opacity * 0.4};
                }
                100% { 
                  transform: translate(-50%, -50%) translateX(${trajectory.endX}px) translateY(${trajectory.endY}px) scale(0.3) rotate(${rotationSpeed + 180}deg);
                  opacity: 0;
                }
              }
              
              @keyframes heartGlow-${item.id} {
                0%, 100% { 
                  filter: drop-shadow(0 0 6px rgba(255, 20, 147, 0.6)) brightness(1);
                }
                50% { 
                  filter: drop-shadow(0 0 12px rgba(255, 20, 147, 0.9)) brightness(1.1);
                }
              }
              
              @keyframes heartPulse-${item.id} {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
              }
              
              .confetti-${item.id} {
                animation: 
                  heartBurst-${item.id} ${4.5 + item.fallSpeed}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
                  heartGlow-${item.id} 2s ease-in-out infinite,
                  heartPulse-${item.id} 3s ease-in-out infinite;
                animation-delay: ${item.delay}s, ${item.delay + 0.3}s, ${item.delay + 0.8}s;
              }
            `;
          }
        }).join('')}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {allConfetti.map((item) => (
          <div
            key={item.id}
            className={`absolute confetti-${item.id}`}
            style={{
              left: '50%',
              top: '50%',
              fontSize: `${item.size}px`,
              zIndex: 50 + (item.wave || 0),
              opacity: item.opacity || 1,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>
    </>
  );
};

export default ConfettiHearts;
