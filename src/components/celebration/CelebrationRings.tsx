
const CelebrationRings = () => {
  // Create 3 clean bubble rings that expand outward in sequence
  const rings = [
    // Ring 1: Starts immediately (0s)
    { size: 60, finalSize: 180, color: 'rgba(236, 72, 153, 0.6)', borderWidth: 2, opacity: 0.7, delay: 0, duration: 2.2 },
    
    // Ring 2: Starts after 0.8s
    { size: 80, finalSize: 240, color: 'rgba(244, 114, 182, 0.5)', borderWidth: 2, opacity: 0.6, delay: 0.8, duration: 2.4 },
    
    // Ring 3: Starts after 1.6s
    { size: 100, finalSize: 300, color: 'rgba(251, 146, 60, 0.4)', borderWidth: 1, opacity: 0.5, delay: 1.6, duration: 2.6 },
  ];

  return (
    <>
      <style>
        {`
          @keyframes bubbleExpand {
            0% { 
              transform: translate(-50%, -50%) scale(0.1); 
              opacity: 0; 
              border-width: 4px;
            }
            10% { 
              transform: translate(-50%, -50%) scale(0.3); 
              opacity: var(--ring-opacity); 
              border-width: 3px;
            }
            70% { 
              transform: translate(-50%, -50%) scale(0.9); 
              opacity: calc(var(--ring-opacity) * 0.8); 
              border-width: 2px;
            }
            100% { 
              transform: translate(-50%, -50%) scale(1); 
              opacity: 0; 
              border-width: 1px;
            }
          }
          
          .celebration-ring {
            animation: bubbleExpand var(--duration) cubic-bezier(0.2, 0.8, 0.3, 1) forwards;
            will-change: transform, opacity, border-width;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {rings.map((ring, index) => (
          <div 
            key={index}
            className="absolute celebration-ring rounded-full border-solid"
            style={{
              left: '50%',
              top: '50%',
              width: `${ring.finalSize}px`,
              height: `${ring.finalSize}px`,
              borderColor: ring.color,
              background: `radial-gradient(circle, ${ring.color.replace('0.', '0.1').replace('0.', '0.05')} 0%, transparent 70%)`,
              '--ring-opacity': ring.opacity,
              '--duration': `${ring.duration}s`,
              animationDelay: `${ring.delay}s`,
              zIndex: 55,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
};

export default CelebrationRings;
