
const CelebrationRings = () => {
  // Create 3 synchronized rings as specified
  const rings = [
    { size: 100, finalSize: 300, color: 'rgb(236 72 153)', borderWidth: 3, opacity: 0.8 },
    { size: 120, finalSize: 350, color: 'rgb(244 114 182)', borderWidth: 2, opacity: 0.6 },
    { size: 140, finalSize: 400, color: 'rgb(251 146 60)', borderWidth: 2, opacity: 0.4 }
  ];

  return (
    <>
      <style>
        {`
          @keyframes ringExpand {
            0% { 
              transform: translate(-50%, -50%) scale(0.3); 
              opacity: 0; 
            }
            20% { 
              transform: translate(-50%, -50%) scale(0.6); 
              opacity: var(--ring-opacity); 
            }
            100% { 
              transform: translate(-50%, -50%) scale(1); 
              opacity: 0; 
            }
          }
          
          .celebration-ring {
            animation: ringExpand 1.5s cubic-bezier(0.3, -0.5, 0.7, 1.5) forwards;
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
              zIndex: 55,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
};

export default CelebrationRings;
