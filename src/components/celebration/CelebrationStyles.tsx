
const CelebrationStyles = () => {
  return (
    <style>{`
      @keyframes ringExpand {
        0% { transform: scale(0); opacity: 1; }
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
        10% { transform: translate(-2px, -2px); }
        20% { transform: translate(2px, -2px); }
        30% { transform: translate(-2px, 2px); }
        40% { transform: translate(2px, 2px); }
        50% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, -2px); }
        70% { transform: translate(-2px, 2px); }
        80% { transform: translate(2px, 2px); }
        90% { transform: translate(-2px, 0); }
      }
      
      @keyframes modalPulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
      }
      
      @keyframes celebrationBounce {
        0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
        40% { transform: translateY(-10px); }
        60% { transform: translateY(-5px); }
      }
      
      .celebration-ring {
        animation: ringExpand 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }
      
      .celebration-shake {
        animation: screenShake 0.5s ease-in-out;
      }
      
      .celebration-modal {
        animation: modalPulse 3s ease-in-out infinite;
      }
      
      .celebration-bounce {
        animation: celebrationBounce 1.4s ease-in-out infinite;
      }
    `}</style>
  );
};

export default CelebrationStyles;
