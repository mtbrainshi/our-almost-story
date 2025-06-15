
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Enhanced heart emojis with more variety
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '✨', '🌟', '⭐', '💫', '🎆', '🎇'];
  const balloonEmojis = ['🎈', '🟥', '🟧', '🟨', '🟩', '🟦', '🟪'];
  const sparkleEmojis = ['✨', '🌟', '⭐', '💫', '🎆', '🎇', '💥'];
  
  // Wave 1: Explosive Burst (20 hearts) - Fast and impactful
  const generateWave1Hearts = () => {
    const hearts = [];
    
    for (let i = 0; i < 20; i++) {
      const angle = (i * 360) / 20;
      const distance = 350 + Math.random() * 100;
      const size = 28 + Math.random() * 16;
      
      hearts.push({
        id: `wave1-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'explosive'
      });
    }
    
    return hearts;
  };

  // Wave 2: Shooting Stars (12 hearts) - Fast streaks with trails
  const generateShootingStars = () => {
    const stars = [];
    
    for (let i = 0; i < 12; i++) {
      const angle = Math.random() * 360;
      const distance = 600 + Math.random() * 200;
      const size = 32 + Math.random() * 20;
      
      stars.push({
        id: `star-${i}`,
        emoji: sparkleEmojis[i % sparkleEmojis.length],
        angle,
        distance,
        size,
        type: 'shooting'
      });
    }
    
    return stars;
  };

  // Wave 3: Spiral Hearts (16 hearts) - Beautiful curves
  const generateSpiralHearts = () => {
    const hearts = [];
    
    for (let i = 0; i < 16; i++) {
      const angle = (i * 360) / 16;
      const distance = 400 + Math.random() * 150;
      const size = 30 + Math.random() * 18;
      
      hearts.push({
        id: `spiral-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'spiral'
      });
    }
    
    return hearts;
  };

  // Wave 4: Floating Balloons (8 balloons) - Slow rise
  const generateFloatingBalloons = () => {
    const balloons = [];
    
    for (let i = 0; i < 8; i++) {
      const angle = (i * 360) / 8 + 22.5; // Offset for spacing
      const distance = 300 + Math.random() * 100;
      const size = 36 + Math.random() * 24;
      
      balloons.push({
        id: `balloon-${i}`,
        emoji: balloonEmojis[i % balloonEmojis.length],
        angle,
        distance,
        size,
        type: 'balloon'
      });
    }
    
    return balloons;
  };

  // Wave 5: Bouncing Hearts (10 hearts) - Screen edge bouncing
  const generateBouncingHearts = () => {
    const hearts = [];
    
    for (let i = 0; i < 10; i++) {
      const angle = (i * 360) / 10 + 18; // Offset
      const distance = 500 + Math.random() * 150;
      const size = 34 + Math.random() * 20;
      
      hearts.push({
        id: `bounce-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'bouncing'
      });
    }
    
    return hearts;
  };

  const wave1Hearts = generateWave1Hearts();
  const shootingStars = generateShootingStars();
  const spiralHearts = generateSpiralHearts();
  const floatingBalloons = generateFloatingBalloons();
  const bouncingHearts = generateBouncingHearts();
  const allConfetti = [...wave1Hearts, ...shootingStars, ...spiralHearts, ...floatingBalloons, ...bouncingHearts];

  return (
    <>
      <style>
        {allConfetti.map((item) => {
          const endX = Math.cos((item.angle * Math.PI) / 180) * item.distance;
          const endY = Math.sin((item.angle * Math.PI) / 180) * item.distance;
          const rotation = Math.random() * 720; // More rotation
          
          // Type-specific animations
          let animationDelay, duration, glowColor, animationType;
          
          switch (item.type) {
            case 'explosive':
              animationDelay = '0s';
              duration = '1.8s'; // Fast explosive burst
              glowColor = 'rgba(255, 20, 147, 1)';
              animationType = 'explosive';
              break;
            case 'shooting':
              animationDelay = `${0.3 + Math.random() * 0.4}s`;
              duration = '1.2s'; // Very fast shooting stars
              glowColor = 'rgba(255, 215, 0, 1)';
              animationType = 'shooting';
              break;
            case 'spiral':
              animationDelay = `${0.6 + Math.random() * 0.3}s`;
              duration = '2.5s'; // Graceful spirals
              glowColor = 'rgba(255, 105, 180, 0.9)';
              animationType = 'spiral';
              break;
            case 'balloon':
              animationDelay = `${1.0 + Math.random() * 0.5}s`;
              duration = '4.0s'; // Slow floating
              glowColor = 'rgba(138, 43, 226, 0.8)';
              animationType = 'balloon';
              break;
            case 'bouncing':
              animationDelay = `${1.5 + Math.random() * 0.8}s`;
              duration = '3.5s'; // Bouncing action
              glowColor = 'rgba(255, 69, 0, 0.9)';
              animationType = 'bouncing';
              break;
            default:
              animationDelay = '0s';
              duration = '2.0s';
              glowColor = 'rgba(255, 20, 147, 0.9)';
              animationType = 'explosive';
          }
          
          return `
            @keyframes ${animationType}Motion-${item.id} {
              ${item.type === 'explosive' ? `
                0% { 
                  transform: translate(-50%, -50%) scale(0) rotate(0deg);
                  opacity: 0;
                }
                15% { 
                  transform: translate(-50%, -50%) scale(1.4) rotate(${rotation * 0.2}deg);
                  opacity: 1;
                }
                30% { 
                  transform: translate(-50%, -50%) scale(1) rotate(${rotation * 0.4}deg);
                  opacity: 1;
                }
                85% { 
                  transform: translate(-50%, -50%) translateX(${endX * 0.9}px) translateY(${endY * 0.9}px) scale(0.8) rotate(${rotation * 0.9}deg);
                  opacity: 0.7;
                }
                100% { 
                  transform: translate(-50%, -50%) translateX(${endX}px) translateY(${endY}px) scale(0.4) rotate(${rotation}deg);
                  opacity: 0;
                }
              ` : item.type === 'shooting' ? `
                0% { 
                  transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
                  opacity: 0;
                }
                10% { 
                  transform: translate(-50%, -50%) scale(1.2) rotate(${rotation * 0.3}deg);
                  opacity: 1;
                }
                100% { 
                  transform: translate(-50%, -50%) translateX(${endX * 1.5}px) translateY(${endY * 1.5}px) scale(0.2) rotate(${rotation}deg);
                  opacity: 0;
                }
              ` : item.type === 'spiral' ? `
                0% { 
                  transform: translate(-50%, -50%) scale(0) rotate(0deg);
                  opacity: 0;
                }
                20% { 
                  transform: translate(-50%, -50%) scale(1.1) rotate(${rotation * 0.2}deg);
                  opacity: 1;
                }
                50% { 
                  transform: translate(-50%, -50%) translateX(${endX * 0.3}px) translateY(${endY * 0.3}px) scale(1) rotate(${rotation * 0.5}deg);
                  opacity: 1;
                }
                80% { 
                  transform: translate(-50%, -50%) translateX(${endX * 0.8}px) translateY(${endY * 0.8}px) scale(0.9) rotate(${rotation * 0.8}deg);
                  opacity: 0.8;
                }
                100% { 
                  transform: translate(-50%, -50%) translateX(${endX}px) translateY(${endY}px) scale(0.5) rotate(${rotation}deg);
                  opacity: 0;
                }
              ` : item.type === 'balloon' ? `
                0% { 
                  transform: translate(-50%, -50%) scale(0.5) rotate(0deg);
                  opacity: 0;
                }
                25% { 
                  transform: translate(-50%, -50%) scale(1.1) rotate(${rotation * 0.1}deg);
                  opacity: 1;
                }
                75% { 
                  transform: translate(-50%, -50%) translateX(${endX * 0.5}px) translateY(${endY * -0.8}px) scale(1) rotate(${rotation * 0.3}deg);
                  opacity: 0.9;
                }
                100% { 
                  transform: translate(-50%, -50%) translateX(${endX * 0.3}px) translateY(${endY * -1.2}px) scale(0.8) rotate(${rotation * 0.4}deg);
                  opacity: 0;
                }
              ` : `
                0% { 
                  transform: translate(-50%, -50%) scale(0) rotate(0deg);
                  opacity: 0;
                }
                20% { 
                  transform: translate(-50%, -50%) scale(1.3) rotate(${rotation * 0.2}deg);
                  opacity: 1;
                }
                40% { 
                  transform: translate(-50%, -50%) translateX(${endX * 0.6}px) translateY(${endY * 0.6}px) scale(1.1) rotate(${rotation * 0.4}deg);
                  opacity: 1;
                }
                60% { 
                  transform: translate(-50%, -50%) translateX(${endX * 0.4}px) translateY(${endY * 0.8}px) scale(1.2) rotate(${rotation * 0.6}deg);
                  opacity: 1;
                }
                80% { 
                  transform: translate(-50%, -50%) translateX(${endX * 0.8}px) translateY(${endY * 0.4}px) scale(1) rotate(${rotation * 0.8}deg);
                  opacity: 0.8;
                }
                100% { 
                  transform: translate(-50%, -50%) translateX(${endX}px) translateY(${endY}px) scale(0.6) rotate(${rotation}deg);
                  opacity: 0;
                }
              `}
            }
            
            @keyframes dynamicGlow-${item.id} {
              0%, 100% { 
                filter: drop-shadow(0 0 15px ${glowColor}) brightness(1); 
              }
              25% { 
                filter: drop-shadow(0 0 30px ${glowColor}) drop-shadow(0 0 40px ${glowColor}) brightness(1.3); 
              }
              50% { 
                filter: drop-shadow(0 0 25px ${glowColor}) brightness(1.1); 
              }
              75% { 
                filter: drop-shadow(0 0 35px ${glowColor}) drop-shadow(0 0 45px ${glowColor}) brightness(1.2); 
              }
            }
            
            @keyframes sizemorph-${item.id} {
              0%, 100% { transform: scale(1); }
              33% { transform: scale(1.15); }
              66% { transform: scale(0.9); }
            }
            
            .confetti-${item.id} {
              animation: 
                ${animationType}Motion-${item.id} ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
                dynamicGlow-${item.id} 1.5s ease-in-out infinite,
                sizemorph-${item.id} 2.2s ease-in-out infinite;
              animation-delay: ${animationDelay}, ${animationDelay}, ${parseFloat(animationDelay) + 0.3}s;
            }
          `;
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
              zIndex: item.type === 'shooting' ? 65 : item.type === 'bouncing' ? 60 : item.type === 'spiral' ? 55 : 50,
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
