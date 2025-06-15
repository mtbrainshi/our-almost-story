
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
    <div className="absolute inset-0 flex items-center justify-center">
      {allHearts.map((heart) => {
        const endX = Math.cos((heart.angle * Math.PI) / 180) * heart.distance;
        const endY = Math.sin((heart.angle * Math.PI) / 180) * heart.distance;
        
        return (
          <div
            key={heart.id}
            className={`absolute ${
              heart.type === 'primary' 
                ? 'celebration-heart-primary' 
                : 'celebration-heart-secondary'
            }`}
            style={{
              left: '50%',
              top: '50%',
              fontSize: `${heart.size}px`,
              filter: 'drop-shadow(0 0 8px rgba(255, 20, 147, 0.8))',
              '--end-x': `${endX}px`,
              '--end-y': `${endY}px`,
            } as React.CSSProperties}
          >
            {heart.emoji}
          </div>
        );
      })}
    </div>
  );
};

export default ConfettiHearts;
