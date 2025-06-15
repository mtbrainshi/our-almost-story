
const CelebrationStyles = () => {
  return (
    <style>{`
      @keyframes gentleScreenShake {
        0%, 100% { transform: translate(0) rotate(0deg); }
        10% { transform: translate(-1px, -1px) rotate(-0.2deg); }
        20% { transform: translate(1px, -1px) rotate(0.2deg); }
        30% { transform: translate(-1px, 1px) rotate(-0.1deg); }
        40% { transform: translate(1px, 1px) rotate(0.1deg); }
        50% { transform: translate(-0.5px, -0.5px) rotate(-0.05deg); }
        60% { transform: translate(0.5px, -0.5px) rotate(0.05deg); }
        70% { transform: translate(-0.5px, 0.5px) rotate(-0.03deg); }
        80% { transform: translate(0.5px, 0.5px) rotate(0.03deg); }
        90% { transform: translate(-0.2px, -0.2px) rotate(-0.01deg); }
      }
      
      @keyframes modalGentlePulse {
        0%, 100% { 
          transform: scale(1) rotate(0deg); 
          filter: brightness(1) saturate(1);
        }
        50% { 
          transform: scale(1.02) rotate(0deg); 
          filter: brightness(1.05) saturate(1.1);
        }
      }
      
      @keyframes softBounce {
        0%, 20%, 50%, 80%, 100% { 
          transform: translateY(0) scale(1); 
        }
        40% { 
          transform: translateY(-4px) scale(1.03); 
        }
      }
      
      @keyframes gentleHeartbeat {
        0%, 100% { 
          transform: scale(1);
          filter: drop-shadow(0 0 10px rgba(255, 20, 147, 0.6));
        }
        50% { 
          transform: scale(1.05);
          filter: drop-shadow(0 0 20px rgba(255, 20, 147, 0.8)) drop-shadow(0 0 30px rgba(255, 105, 180, 0.6));
        }
      }
      
      @keyframes subtleBackgroundShimmer {
        0% { 
          background: radial-gradient(circle at 30% 30%, rgba(255, 20, 147, 0.05) 0%, transparent 50%);
        }
        50% { 
          background: radial-gradient(circle at 70% 70%, rgba(255, 105, 180, 0.08) 0%, transparent 50%);
        }
        100% { 
          background: radial-gradient(circle at 30% 30%, rgba(255, 20, 147, 0.05) 0%, transparent 50%);
        }
      }
      
      .celebration-shake {
        animation: gentleScreenShake 1.5s ease-out;
      }
      
      .celebration-modal {
        animation: modalGentlePulse 3s ease-in-out infinite;
      }
      
      .celebration-bounce {
        animation: softBounce 2s ease-in-out infinite;
      }
      
      .celebration-mega-heart {
        animation: 
          softBounce 2s ease-in-out infinite,
          gentleHeartbeat 2.5s ease-in-out infinite;
        filter: drop-shadow(0 0 15px rgba(255, 20, 147, 0.8)) drop-shadow(0 0 25px rgba(255, 105, 180, 0.6));
      }
      
      .celebration-background-shimmer {
        animation: subtleBackgroundShimmer 6s ease-in-out infinite;
      }
      
      /* GPU Acceleration for better performance */
      .celebration-ring,
      .celebration-shake,
      .celebration-modal,
      .celebration-bounce,
      .celebration-mega-heart,
      .confetti-heart {
        will-change: transform, opacity, filter;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
    `}</style>
  );
};

export default CelebrationStyles;
