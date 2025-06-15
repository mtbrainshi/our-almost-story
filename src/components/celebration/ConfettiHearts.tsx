
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Enhanced heart emojis with more variety
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '✨', '🌟', '⭐', '💫'];
  const sparkleEmojis = ['✨', '🌟', '⭐', '💫'];
  
  // Wave 1: Gentle Burst (16 hearts) - Soft and romantic
  const generateWave1Hearts = () => {
    const hearts = [];
    
    for (let i = 0; i < 16; i++) {
      const angle = (i * 360) / 16;
      const distance = 280 + Math.random() * 80;
      const size = 24 + Math.random() * 12;
      
      hearts.push({
        id: `wave1-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'gentle'
      });
    }
    
    return hearts;
  };

  // Wave 2: Floating Hearts (12 hearts) - Slow and dreamy
  const generateFloatingHearts = () => {
    const hearts = [];
    
    for (let i = 0; i < 12; i++) {
      const angle = (i * 360) / 12 + 15; // Offset
      const distance = 350 + Math.random() * 100;
      const size = 28 + Math.random() * 16;
      
      hearts.push({
        id: `float-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'floating'
      });
    }
    
    return hearts;
  };

  // Wave 3: Sparkle Hearts (10 hearts) - Twinkling effect
  const generateSparkleHearts = () => {
    const hearts = [];
    
    for (let i = 0; i < 10; i++) {
      const angle = (i * 360) / 10 + 30; // Offset
      const distance = 400 + Math.random() * 120;
      const size = 26 + Math.random() * 14;
      
      hearts.push({
        id: `sparkle-${i}`,
        emoji: sparkleEmojis[i % sparkleEmojis.length],
        angle,
        distance,
        size,
        type: 'sparkle'
      });
    }
    
    return hearts;
  };

  const wave1Hearts = generateWave1Hearts();
  const floatingHearts = generateFloatingHearts();
  const sparkleHearts = generateSparkleHearts();
  const allConfetti = [...wave1Hearts, ...floatingHearts, ...sparkleHearts];

  return (
    <>
      <style>
        {allConfetti.map((item) => {
          const endX = Math.cos((item.angle * Math.PI) / 180) * item.distance;
          const endY = Math.sin((item.angle * Math.PI) / 180) * item.distance;
          const rotation = Math.random() * 360 + 180; // Gentle rotation
          
          // Type-specific gentle animations
          let animationDelay, duration, glowColor;
          
          switch (item.type) {
            case 'gentle':
              animationDelay = `${Math.random() * 0.5}s`;
              duration = '3.5s'; // Gentle timing
              glowColor = 'rgba(255, 20, 147, 0.8)';
              break;
            case 'floating':
              animationDelay = `${0.8 + Math.random() * 0.6}s`;
              duration = '4.2s'; // Slower floating
              glowColor = 'rgba(255, 105, 180, 0.7)';
              break;
            case 'sparkle':
              animationDelay = `${1.5 + Math.random() * 0.8}s`;
              duration = '4.8s'; // Slowest sparkles
              glowColor = 'rgba(255, 215, 0, 0.9)';
              break;
            default:
              animationDelay = '0s';
              duration = '3.5s';
              glowColor = 'rgba(255, 20, 147, 0.8)';
          }
          
          return `
            @keyframes gentleMotion-${item.id} {
              0% { 
                transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
                opacity: 0;
              }
              10% { 
                transform: translate(-50%, -50%) scale(0.8) rotate(${rotation * 0.1}deg);
                opacity: 0.7;
              }
              25% { 
                transform: translate(-50%, -50%) scale(1) rotate(${rotation * 0.25}deg);
                opacity: 1;
              }
              50% { 
                transform: translate(-50%, -50%) translateX(${endX * 0.4}px) translateY(${endY * 0.4}px) scale(1) rotate(${rotation * 0.5}deg);
                opacity: 1;
              }
              75% { 
                transform: translate(-50%, -50%) translateX(${endX * 0.75}px) translateY(${endY * 0.75}px) scale(0.9) rotate(${rotation * 0.75}deg);
                opacity: 0.8;
              }
              90% { 
                transform: translate(-50%, -50%) translateX(${endX * 0.95}px) translateY(${endY * 0.95}px) scale(0.7) rotate(${rotation * 0.9}deg);
                opacity: 0.4;
              }
              100% { 
                transform: translate(-50%, -50%) translateX(${endX}px) translateY(${endY}px) scale(0.5) rotate(${rotation}deg);
                opacity: 0;
              }
            }
            
            @keyframes gentleGlow-${item.id} {
              0%, 100% { 
                filter: drop-shadow(0 0 8px ${glowColor}) brightness(1); 
              }
              33% { 
                filter: drop-shadow(0 0 15px ${glowColor}) brightness(1.1); 
              }
              66% { 
                filter: drop-shadow(0 0 12px ${glowColor}) brightness(1.05); 
              }
            }
            
            @keyframes gentlePulse-${item.id} {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
            
            .confetti-${item.id} {
              animation: 
                gentleMotion-${item.id} ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
                gentleGlow-${item.id} 2.5s ease-in-out infinite,
                gentlePulse-${item.id} 3s ease-in-out infinite;
              animation-delay: ${animationDelay}, ${animationDelay}, ${parseFloat(animationDelay) + 0.5}s;
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
              zIndex: 50,
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
