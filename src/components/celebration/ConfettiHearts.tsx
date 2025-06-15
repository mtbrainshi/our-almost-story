
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Enhanced heart emojis with sparkles and variety
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '✨', '🌟', '⭐', '💫'];
  
  // Wave 1: Immediate burst (24 hearts)
  const generateWave1Hearts = () => {
    const hearts = [];
    
    for (let i = 0; i < 24; i++) {
      const angle = (i * 360) / 24;
      const distance = 400 + Math.random() * 150;
      const size = 32 + Math.random() * 18;
      
      hearts.push({
        id: `wave1-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'wave1'
      });
    }
    
    return hearts;
  };

  // Wave 2: Secondary burst (18 hearts)
  const generateWave2Hearts = () => {
    const hearts = [];
    
    for (let i = 0; i < 18; i++) {
      const angle = (i * 360) / 18 + 10; // 10 degree offset
      const distance = 480 + Math.random() * 120;
      const size = 28 + Math.random() * 22;
      
      hearts.push({
        id: `wave2-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'wave2'
      });
    }
    
    return hearts;
  };

  // Wave 3: Final flourish (12 hearts)
  const generateWave3Hearts = () => {
    const hearts = [];
    
    for (let i = 0; i < 12; i++) {
      const angle = (i * 360) / 12 + 20; // 20 degree offset
      const distance = 550 + Math.random() * 150;
      const size = 36 + Math.random() * 24;
      
      hearts.push({
        id: `wave3-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'wave3'
      });
    }
    
    return hearts;
  };

  const wave1Hearts = generateWave1Hearts();
  const wave2Hearts = generateWave2Hearts();
  const wave3Hearts = generateWave3Hearts();
  const allHearts = [...wave1Hearts, ...wave2Hearts, ...wave3Hearts];

  return (
    <>
      <style>
        {allHearts.map((heart) => {
          const endX = Math.cos((heart.angle * Math.PI) / 180) * heart.distance;
          const endY = Math.sin((heart.angle * Math.PI) / 180) * heart.distance;
          const rotation = Math.random() * 360;
          
          // Wave-specific timing - significantly slowed down
          let animationDelay, duration, glowColor;
          
          switch (heart.type) {
            case 'wave1':
              animationDelay = '0s';
              duration = '4.0s'; // Increased from 2.5s
              glowColor = 'rgba(255, 20, 147, 0.9)';
              break;
            case 'wave2':
              animationDelay = '0.6s';
              duration = '4.5s'; // Increased from 2.8s
              glowColor = 'rgba(255, 105, 180, 0.8)';
              break;
            case 'wave3':
              animationDelay = '1.2s';
              duration = '5.0s'; // Increased from 3.0s
              glowColor = 'rgba(255, 215, 0, 0.9)';
              break;
            default:
              animationDelay = '0s';
              duration = '4.0s';
              glowColor = 'rgba(255, 20, 147, 0.9)';
          }
          
          return `
            @keyframes heartBurst-${heart.id} {
              0% { 
                transform: translate(-50%, -50%) scale(0) rotate(0deg);
                opacity: 0;
              }
              12% { 
                transform: translate(-50%, -50%) scale(0.3) rotate(${rotation * 0.15}deg);
                opacity: 0.6;
              }
              25% { 
                transform: translate(-50%, -50%) scale(1.2) rotate(${rotation * 0.3}deg);
                opacity: 1;
              }
              35% { 
                transform: translate(-50%, -50%) scale(1) rotate(${rotation * 0.4}deg);
                opacity: 1;
              }
              75% { 
                transform: translate(-50%, -50%) translateX(${endX * 0.7}px) translateY(${endY * 0.7}px) scale(0.95) rotate(${rotation * 0.8}deg);
                opacity: 0.9;
              }
              90% { 
                transform: translate(-50%, -50%) translateX(${endX * 0.9}px) translateY(${endY * 0.9}px) scale(0.8) rotate(${rotation * 0.9}deg);
                opacity: 0.6;
              }
              100% { 
                transform: translate(-50%, -50%) translateX(${endX}px) translateY(${endY}px) scale(0.6) rotate(${rotation}deg);
                opacity: 0;
              }
            }
            
            @keyframes heartPulse-${heart.id} {
              0%, 100% { filter: drop-shadow(0 0 15px ${glowColor}); }
              50% { filter: drop-shadow(0 0 25px ${glowColor}) drop-shadow(0 0 35px ${glowColor}); }
            }
            
            .heart-${heart.id} {
              animation: 
                heartBurst-${heart.id} ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
                heartPulse-${heart.id} 2.0s ease-in-out infinite;
              animation-delay: ${animationDelay}, ${animationDelay};
            }
          `;
        }).join('')}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {allHearts.map((heart) => (
          <div
            key={heart.id}
            className={`absolute heart-${heart.id}`}
            style={{
              left: '50%',
              top: '50%',
              fontSize: `${heart.size}px`,
              zIndex: heart.type === 'wave3' ? 60 : heart.type === 'wave2' ? 55 : 50,
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
