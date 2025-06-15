
const CelebrationStyles = () => {
  return (
    <style>{`
      @keyframes ringExpand {
        0% { transform: scale(0); opacity: 1; }
        20% { transform: scale(0.2); opacity: 0.9; }
        40% { transform: scale(0.5); opacity: 0.8; }
        70% { transform: scale(0.8); opacity: 0.5; }
        100% { transform: scale(1); opacity: 0; }
      }
      
      @keyframes heartBurst {
        0% { 
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
        }
        20% { 
          transform: translate(-50%, -50%) scale(1.2);
          opacity: 1;
        }
        100% { 
          opacity: 0;
        }
      }
      
      @keyframes screenShake {
        0%, 100% { transform: translate(0); }
        5% { transform: translate(-2px, -1px) rotate(-0.5deg); }
        10% { transform: translate(2px, -2px) rotate(0.5deg); }
        15% { transform: translate(-1px, 2px) rotate(-0.3deg); }
        20% { transform: translate(1px, 1px) rotate(0.3deg); }
        25% { transform: translate(-2px, -1px) rotate(-0.2deg); }
        30% { transform: translate(2px, -1px) rotate(0.2deg); }
        35% { transform: translate(-1px, 1px) rotate(-0.1deg); }
        40% { transform: translate(1px, 2px) rotate(0.1deg); }
        45% { transform: translate(-1px, -1px) rotate(-0.05deg); }
        50% { transform: translate(1px, 0px) rotate(0.05deg); }
        55% { transform: translate(-1px, 1px) rotate(-0.03deg); }
        60% { transform: translate(1px, -1px) rotate(0.03deg); }
        65% { transform: translate(-0.5px, 0.5px) rotate(-0.02deg); }
        70% { transform: translate(0.5px, -0.5px) rotate(0.02deg); }
        75% { transform: translate(-0.5px, -0.5px) rotate(-0.01deg); }
        80% { transform: translate(0.5px, 0.5px) rotate(0.01deg); }
        85% { transform: translate(-0.3px, 0) rotate(0deg); }
        90% { transform: translate(0.3px, 0) rotate(0deg); }
        95% { transform: translate(-0.1px, 0) rotate(0deg); }
      }
      
      @keyframes modalPulse {
        0%, 100% { transform: scale(1); filter: brightness(1); }
        25% { transform: scale(1.01); filter: brightness(1.05); }
        50% { transform: scale(1.02); filter: brightness(1.1); }
        75% { transform: scale(1.01); filter: brightness(1.05); }
      }
      
      @keyframes celebrationBounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-12px); }
        60% { transform: translateY(-6px); }
      }
      
      @keyframes ringPulse {
        0%, 100% { opacity: 0.8; }
        50% { opacity: 1; }
      }
      
      .celebration-ring {
        animation: 
          ringExpand 3.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
          ringPulse 2.0s ease-in-out infinite;
      }
      
      .celebration-shake {
        animation: screenShake 2.5s cubic-bezier(0.4, 0, 0.6, 1);
      }
      
      .celebration-modal {
        animation: modalPulse 4s ease-in-out infinite;
      }
      
      .celebration-bounce {
        animation: celebrationBounce 1.8s ease-in-out infinite;
      }
      
      .celebration-mega-heart {
        animation: 
          celebrationBounce 1.8s ease-in-out infinite,
          modalPulse 3s ease-in-out infinite;
        filter: drop-shadow(0 0 20px rgba(255, 20, 147, 0.8));
      }
    `}</style>
  );
};

export default CelebrationStyles;
