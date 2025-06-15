
const GlowingRings = () => {
  return (
    <>
      <style>
        {`
          @keyframes gentleRingGlow {
            0% { 
              transform: translate(-50%, -50%) scale(0.9); 
              opacity: 0; 
            }
            20% {
              transform: translate(-50%, -50%) scale(1.1);
              opacity: 0.6;
            }
            100% { 
              transform: translate(-50%, -50%) scale(3.5); 
              opacity: 0; 
            }
          }
          
          .gentle-ring {
            animation: gentleRingGlow var(--duration) cubic-bezier(0.19, 1, 0.22, 1) forwards;
            will-change: transform, opacity;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {/* First Ring - slow and gentle */}
        <div 
          className="absolute gentle-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.04) 0%, rgba(236, 72, 153, 0.15) 40%, transparent 80%)',
            border: '1px solid rgba(236, 72, 153, 0.3)',
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.2)',
            '--duration': '4.0s', // Much slower
            animationDelay: '0.3s',
            zIndex: 52,
          } as React.CSSProperties}
        />
        
        {/* Second Ring - slower and more subtle */}
        <div 
          className="absolute gentle-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '260px',
            height: '260px',
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.02) 0%, rgba(244, 114, 182, 0.1) 35%, transparent 75%)',
            border: '0.5px solid rgba(244, 114, 182, 0.2)',
            boxShadow: '0 0 25px rgba(244, 114, 182, 0.15)',
            '--duration': '4.5s', // Even slower
            animationDelay: '2.5s',
            zIndex: 51,
          } as React.CSSProperties}
        />
      </div>
    </>
  );
};

export default GlowingRings;
