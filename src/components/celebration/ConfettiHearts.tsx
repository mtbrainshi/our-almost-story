
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Generate primary burst hearts (24 hearts in perfect circle)
  const generatePrimaryHearts = () => {
    const hearts = [];
    const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞'];
    
    for (let i = 0; i < 24; i++) {
      const angle = (i * 360) / 24;
      const distance = 250 + Math.random() * 50;
      const size = 22 + Math.random() * 8;
      
      hearts.push({
        id: `primary-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'primary'
      });
    }
    
    return hearts;
  };

  // Generate secondary wave hearts (18 hearts, slightly offset)
  const generateSecondaryHearts = () => {
    const hearts = [];
    const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞'];
    
    for (let i = 0; i < 18; i++) {
      const angle = (i * 360) / 18 + 10; // 10 degree offset from primary
      const distance = 300 + Math.random() * 80;
      const size = 18 + Math.random() * 10;
      
      hearts.push({
        id: `secondary-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        type: 'secondary'
      });
    }
    
    return hearts;
  };

  const primaryHearts = generatePrimaryHearts();
  const secondaryHearts = generateSecondaryHearts();
  const allHearts = [...primaryHearts, ...secondaryHearts];

  return (
    <>
      <style>
        {allHearts.map((heart) => {
          const endX = Math.cos((heart.angle * Math.PI) / 180) * heart.distance;
          const endY = Math.sin((heart.angle * Math.PI) / 180) * heart.distance;
          const animationDelay = heart.type === 'secondary' ? '0.3s' : '0s';
          const duration = heart.type === 'secondary' ? '1.2s' : '1.0s';
          
          return `
            @keyframes heartBurst-${heart.id} {
              0% { 
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
              }
              15% { 
                transform: translate(-50%, -50%) scale(1.1);
                opacity: 1;
              }
              100% { 
                transform: translate(-50%, -50%) translateX(${endX}px) translateY(${endY}px) scale(0.7);
                opacity: 0;
              }
            }
            .heart-${heart.id} {
              animation: heartBurst-${heart.id} ${duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
              animation-delay: ${animationDelay};
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
              filter: 'drop-shadow(0 0 8px rgba(255, 20, 147, 0.8))',
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
