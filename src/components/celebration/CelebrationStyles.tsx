
const CelebrationStyles = () => {
  return (
    <style>{`
      @keyframes gentleScreenShake {
        0%, 100% { transform: translate(0) rotate(0deg); }
        10% { transform: translate(-0.5px, -0.5px) rotate(-0.1deg); }
        20% { transform: translate(0.5px, -0.5px) rotate(0.1deg); }
        30% { transform: translate(-0.5px, 0.5px) rotate(-0.05deg); }
        40% { transform: translate(0.5px, 0.5px) rotate(0.05deg); }
        50% { transform: translate(-0.3px, -0.3px) rotate(-0.03deg); }
        60% { transform: translate(0.3px, -0.3px) rotate(0.03deg); }
        70% { transform: translate(-0.3px, 0.3px) rotate(-0.02deg); }
        80% { transform: translate(0.3px, 0.3px) rotate(0.02deg); }
        90% { transform: translate(-0.1px, -0.1px) rotate(-0.01deg); }
      }
      
      @keyframes modalSoftGlow {
        0%, 100% { 
          transform: scale(1); 
          filter: brightness(1) saturate(1);
          box-shadow: 0 0 30px rgba(255, 20, 147, 0.3);
        }
        50% { 
          transform: scale(1.01); 
          filter: brightness(1.03) saturate(1.05);
          box-shadow: 0 0 40px rgba(255, 20, 147, 0.4);
        }
      }
      
      @keyframes softBounce {
        0%, 20%, 50%, 80%, 100% { 
          transform: translateY(0) scale(1); 
        }
        40% { 
          transform: translateY(-3px) scale(1.02); 
        }
      }
      
      @keyframes gentleHeartbeat {
        0%, 100% { 
          transform: scale(1);
          filter: drop-shadow(0 0 15px rgba(255, 20, 147, 0.7));
        }
        50% { 
          transform: scale(1.03);
          filter: drop-shadow(0 0 20px rgba(255, 20, 147, 0.9)) drop-shadow(0 0 30px rgba(255, 105, 180, 0.7));
        }
      }
      
      .celebration-shake {
        animation: gentleScreenShake 1s ease-out;
      }
      
      .celebration-modal {
        animation: modalSoftGlow 4s ease-in-out infinite;
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
      
      /* GPU Acceleration for smooth performance */
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
