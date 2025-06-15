
const GlowingRings = () => {
  return (
    <>
      <style>
        {`
          @keyframes ringGlow {
            0% { 
              transform: translate(-50%, -50%) scale(0.8); 
              opacity: 0; 
            }
            15% {
              transform: translate(-50%, -50%) scale(1.0);
              opacity: 0.8;
            }
            100% { 
              transform: translate(-50%, -50%) scale(4.0); 
              opacity: 0; 
            }
          }
          
          .glowing-ring {
            animation: ringGlow var(--duration) cubic-bezier(0.19, 1, 0.22, 1) forwards;
            will-change: transform, opacity;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Ring 1 - appears immediately with modal */}
        <div 
          className="absolute glowing-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, rgba(236, 72, 153, 0.2) 40%, transparent 80%)',
            border: '1px solid rgba(236, 72, 153, 0.4)',
            boxShadow: '0 0 30px rgba(236, 72, 153, 0.3)',
            '--duration': '3.0s',
            animationDelay: '0.1s',
            zIndex: 52,
          } as React.CSSProperties}
        />
        
        {/* Ring 2 - appears after short delay */}
        <div 
          className="absolute glowing-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.03) 0%, rgba(244, 114, 182, 0.15) 35%, transparent 75%)',
            border: '0.5px solid rgba(244, 114, 182, 0.3)',
            boxShadow: '0 0 40px rgba(244, 114, 182, 0.25)',
            '--duration': '3.5s',
            animationDelay: '0.8s',
            zIndex: 51,
          } as React.CSSProperties}
        />
      </div>
    </>
  );
};

export default GlowingRings;
