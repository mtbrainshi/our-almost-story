
interface ConfettiHeartsProps {}

const ConfettiHearts = ({}: ConfettiHeartsProps) => {
  // Generate hearts for confetti burst
  const generateConfettiHearts = () => {
    const hearts = [];
    const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞'];
    
    // Create 24 hearts in a circle pattern
    for (let i = 0; i < 24; i++) {
      const angle = (i * 360) / 24;
      const distance = 200 + Math.random() * 100;
      const size = 20 + Math.random() * 16;
      const delay = Math.random() * 0.3;
      
      hearts.push({
        id: i,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        delay
      });
    }
    
    return hearts;
  };

  const confettiHearts = generateConfettiHearts();

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {confettiHearts.map((heart) => {
        const endX = Math.cos((heart.angle * Math.PI) / 180) * heart.distance;
        const endY = Math.sin((heart.angle * Math.PI) / 180) * heart.distance;
        
        return (
          <div
            key={heart.id}
            className="absolute celebration-heart"
            style={{
              left: '50%',
              top: '50%',
              fontSize: `${heart.size}px`,
              filter: 'drop-shadow(0 0 8px rgba(255, 20, 147, 0.8))',
              animationDelay: `${heart.delay}s`,
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
