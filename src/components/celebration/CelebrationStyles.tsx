
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
          transform: translate(-50%, -50%) translate(var(--end-x), var(--end-y)) scale(0.6);
          opacity: 0;
        }
      }
      
      @keyframes heartBurstSecondary {
        0% { 
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
        }
        15% { 
          transform: translate(-50%, -50%) scale(1.1);
          opacity: 1;
        }
        100% { 
          transform: translate(-50%, -50%) translate(var(--end-x), var(--end-y)) scale(0.5);
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
      
      .celebration-ring {
        animation: ringExpand 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }
      
      .celebration-heart-primary {
        animation: heartBurst 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
      }
      
      .celebration-heart-secondary {
        animation: heartBurstSecondary 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        animation-delay: 0.1s;
      }
      
      .celebration-shake {
        animation: screenShake 0.5s ease-in-out;
      }
      
      .celebration-modal {
        animation: modalPulse 3s ease-in-out infinite;
      }
    `}</style>
  );
};

export default CelebrationStyles;
