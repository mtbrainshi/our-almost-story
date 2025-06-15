
const GlowingRings = () => {
  return (
    <>
      <style>
        {`
          @keyframes gentleRingGlow {
            0% { 
              transform: translate(-50%, -50%) scale(0.8); 
              opacity: 0; 
            }
            15% {
              transform: translate(-50%, -50%) scale(1.2);
              opacity: 0.7;
            }
            100% { 
              transform: translate(-50%, -50%) scale(8.0); 
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
        {/* First Ring - starts immediately */}
        <div 
          className="absolute gentle-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, rgba(236, 72, 153, 0.2) 30%, transparent 70%)',
            border: '1.5px solid rgba(236, 72, 153, 0.4)',
            boxShadow: '0 0 25px rgba(236, 72, 153, 0.3)',
            '--duration': '5.0s',
            animationDelay: '0.2s',
            zIndex: 52,
          } as React.CSSProperties}
        />
        
        {/* Second Ring - slightly delayed */}
        <div 
          className="absolute gentle-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '220px',
            height: '220px',
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.03) 0%, rgba(244, 114, 182, 0.15) 25%, transparent 65%)',
            border: '1px solid rgba(244, 114, 182, 0.3)',
            boxShadow: '0 0 30px rgba(244, 114, 182, 0.25)',
            '--duration': '5.5s',
            animationDelay: '1.2s',
            zIndex: 51,
          } as React.CSSProperties}
        />
        
        {/* Third Ring - more delayed, goes furthest */}
        <div 
          className="absolute gentle-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '280px',
            height: '280px',
            background: 'radial-gradient(circle, rgba(219, 39, 119, 0.02) 0%, rgba(219, 39, 119, 0.12) 20%, transparent 60%)',
            border: '0.8px solid rgba(219, 39, 119, 0.25)',
            boxShadow: '0 0 35px rgba(219, 39, 119, 0.2)',
            '--duration': '6.0s',
            animationDelay: '2.8s',
            zIndex: 50,
          } as React.CSSProperties}
        />
      </div>
    </>
  );
};

export default GlowingRings;
