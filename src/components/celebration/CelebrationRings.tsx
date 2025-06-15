
const CelebrationRings = () => {
  // Create rings that appear in levels to match hearts
  const rings = [
    // Level 1 rings (start immediately)
    { size: 80, finalSize: 200, color: 'rgb(236 72 153)', borderWidth: 3, opacity: 0.8, delay: 0 },
    { size: 100, finalSize: 250, color: 'rgb(244 114 182)', borderWidth: 2, opacity: 0.6, delay: 0.3 },
    
    // Level 2 rings (start after 1.5s)
    { size: 100, finalSize: 280, color: 'rgb(251 146 60)', borderWidth: 2, opacity: 0.5, delay: 1.5 },
    { size: 120, finalSize: 320, color: 'rgb(236 72 153)', borderWidth: 2, opacity: 0.4, delay: 1.8 },
    
    // Level 3 rings (start after 3s)
    { size: 120, finalSize: 350, color: 'rgb(244 114 182)', borderWidth: 1, opacity: 0.3, delay: 3 },
  ];

  return (
    <>
      <style>
        {`
          @keyframes ringExpandSlow {
            0% { 
              transform: translate(-50%, -50%) scale(0.2); 
              opacity: 0; 
            }
            15% { 
              transform: translate(-50%, -50%) scale(0.4); 
              opacity: var(--ring-opacity); 
            }
            85% { 
              transform: translate(-50%, -50%) scale(0.95); 
              opacity: calc(var(--ring-opacity) * 0.7); 
            }
            100% { 
              transform: translate(-50%, -50%) scale(1); 
              opacity: 0; 
            }
          }
          
          .celebration-ring {
            animation: ringExpandSlow 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            will-change: transform, opacity;
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
              borderWidth: `${ring.borderWidth}px`,
              borderColor: ring.color,
              '--ring-opacity': ring.opacity,
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
