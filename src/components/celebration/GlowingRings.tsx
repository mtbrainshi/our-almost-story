
const GlowingRings = () => {
  return (
    <>
      <style>
        {`
          @keyframes celebrationRingGlow {
            0% { 
              transform: translate(-50%, -50%) scale(0.3); 
              opacity: 0; 
            }
            20% {
              transform: translate(-50%, -50%) scale(1.0);
              opacity: 0.8;
            }
            100% { 
              transform: translate(-50%, -50%) scale(4.0); 
              opacity: 0; 
            }
          }
          
          .celebration-glow-ring {
            animation: celebrationRingGlow var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            will-change: transform, opacity;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Ring 1 - starts with celebration */}
        <div 
          className="absolute celebration-glow-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.08) 0%, rgba(236, 72, 153, 0.25) 30%, transparent 70%)',
            border: '2px solid rgba(236, 72, 153, 0.5)',
            boxShadow: '0 0 30px rgba(236, 72, 153, 0.4)',
            '--duration': '3.0s',
            animationDelay: '0.5s',
            zIndex: 52,
          } as React.CSSProperties}
        />
        
        {/* Ring 2 - delayed */}
        <div 
          className="absolute celebration-glow-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.06) 0%, rgba(244, 114, 182, 0.2) 25%, transparent 65%)',
            border: '1.5px solid rgba(244, 114, 182, 0.4)',
            boxShadow: '0 0 35px rgba(244, 114, 182, 0.3)',
            '--duration': '3.5s',
            animationDelay: '2.0s',
            zIndex: 51,
          } as React.CSSProperties}
        />
        
        {/* Ring 3 - final ring */}
        <div 
          className="absolute celebration-glow-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.04) 0%, rgba(251, 146, 60, 0.15) 20%, transparent 60%)',
            border: '1px solid rgba(251, 146, 60, 0.3)',
            boxShadow: '0 0 40px rgba(251, 146, 60, 0.25)',
            '--duration': '4.0s',
            animationDelay: '4.0s',
            zIndex: 50,
          } as React.CSSProperties}
        />
      </div>
    </>
  );
};

export default GlowingRings;
