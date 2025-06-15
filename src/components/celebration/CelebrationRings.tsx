
const CelebrationRings = () => {
  return (
    <>
      <style>
        {`
          @keyframes ringExpand {
            0% { 
              transform: translate(-50%, -50%) scale(0.1); 
              opacity: 0; 
            }
            15% { 
              transform: translate(-50%, -50%) scale(0.3); 
              opacity: 0.8; 
            }
            100% { 
              transform: translate(-50%, -50%) scale(1); 
              opacity: 0; 
            }
          }
          
          .celebration-ring {
            animation: ringExpand var(--duration) cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            will-change: transform, opacity;
            backface-visibility: hidden;
          }
        `}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Primary Ring - starts immediately */}
        <div 
          className="absolute celebration-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, rgba(236, 72, 153, 0.3) 30%, transparent 70%)',
            border: '2px solid rgba(236, 72, 153, 0.6)',
            boxShadow: '0 0 20px rgba(236, 72, 153, 0.4), inset 0 0 20px rgba(236, 72, 153, 0.2)',
            '--duration': '2.5s',
            animationDelay: '0s',
            zIndex: 55,
          } as React.CSSProperties}
        />
        
        {/* Secondary Ring - subtle delay for layered effect */}
        <div 
          className="absolute celebration-ring rounded-full"
          style={{
            left: '50%',
            top: '50%',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.08) 0%, rgba(244, 114, 182, 0.25) 25%, transparent 65%)',
            border: '1.5px solid rgba(244, 114, 182, 0.4)',
            boxShadow: '0 0 25px rgba(244, 114, 182, 0.3)',
            '--duration': '3s',
            animationDelay: '0.1s',
            zIndex: 54,
          } as React.CSSProperties}
        />
      </div>
    </>
  );
};

export default CelebrationRings;
