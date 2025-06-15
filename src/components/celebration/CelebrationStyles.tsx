
const CelebrationStyles = () => {
  return (
    <style>{`
      @keyframes epicScreenShake {
        0%, 100% { transform: translate(0) rotate(0deg); }
        2% { transform: translate(-3px, -2px) rotate(-0.8deg); }
        4% { transform: translate(3px, -3px) rotate(0.8deg); }
        6% { transform: translate(-2px, 3px) rotate(-0.6deg); }
        8% { transform: translate(2px, 2px) rotate(0.6deg); }
        10% { transform: translate(-3px, -1px) rotate(-0.4deg); }
        12% { transform: translate(3px, -2px) rotate(0.4deg); }
        14% { transform: translate(-1px, 2px) rotate(-0.3deg); }
        16% { transform: translate(2px, 3px) rotate(0.3deg); }
        18% { transform: translate(-2px, -2px) rotate(-0.2deg); }
        20% { transform: translate(2px, 1px) rotate(0.2deg); }
        22% { transform: translate(-1px, 2px) rotate(-0.15deg); }
        24% { transform: translate(1px, -1px) rotate(0.15deg); }
        26% { transform: translate(-1px, 1px) rotate(-0.1deg); }
        28% { transform: translate(1px, -1px) rotate(0.1deg); }
        30% { transform: translate(-0.5px, 0.5px) rotate(-0.05deg); }
        32% { transform: translate(0.5px, -0.5px) rotate(0.05deg); }
        34% { transform: translate(-0.5px, -0.5px) rotate(-0.03deg); }
        36% { transform: translate(0.5px, 0.5px) rotate(0.03deg); }
        38% { transform: translate(-0.3px, 0) rotate(-0.02deg); }
        40% { transform: translate(0.3px, 0) rotate(0.02deg); }
        42% { transform: translate(-0.2px, 0.2px) rotate(-0.01deg); }
        44% { transform: translate(0.2px, -0.2px) rotate(0.01deg); }
        50% { transform: translate(0) rotate(0deg); }
      }
      
      @keyframes modalMegaPulse {
        0%, 100% { 
          transform: scale(1) rotate(0deg); 
          filter: brightness(1) saturate(1) hue-rotate(0deg);
        }
        15% { 
          transform: scale(1.02) rotate(1deg); 
          filter: brightness(1.1) saturate(1.2) hue-rotate(10deg);
        }
        30% { 
          transform: scale(1.04) rotate(-1deg); 
          filter: brightness(1.2) saturate(1.4) hue-rotate(-10deg);
        }
        45% { 
          transform: scale(1.03) rotate(0.5deg); 
          filter: brightness(1.15) saturate(1.3) hue-rotate(5deg);
        }
        60% { 
          transform: scale(1.05) rotate(-0.5deg); 
          filter: brightness(1.25) saturate(1.5) hue-rotate(-5deg);
        }
        75% { 
          transform: scale(1.02) rotate(0.3deg); 
          filter: brightness(1.1) saturate(1.2) hue-rotate(3deg);
        }
      }
      
      @keyframes epicBounce {
        0%, 20%, 50%, 80%, 100% { 
          transform: translateY(0) scale(1) rotate(0deg); 
        }
        10% { 
          transform: translateY(-8px) scale(1.05) rotate(-2deg); 
        }
        30% { 
          transform: translateY(-15px) scale(1.1) rotate(2deg); 
        }
        40% { 
          transform: translateY(-12px) scale(1.08) rotate(-1deg); 
        }
        60% { 
          transform: translateY(-8px) scale(1.05) rotate(1deg); 
        }
        70% { 
          transform: translateY(-4px) scale(1.03) rotate(-0.5deg); 
        }
      }
      
      @keyframes heartbeatPulse {
        0%, 100% { 
          transform: scale(1);
          filter: drop-shadow(0 0 20px rgba(255, 20, 147, 0.8));
        }
        25% { 
          transform: scale(1.15);
          filter: drop-shadow(0 0 30px rgba(255, 20, 147, 1)) drop-shadow(0 0 40px rgba(255, 105, 180, 0.8));
        }
        50% { 
          transform: scale(1.3);
          filter: drop-shadow(0 0 35px rgba(255, 20, 147, 1.2)) drop-shadow(0 0 50px rgba(255, 105, 180, 1));
        }
        75% { 
          transform: scale(1.15);
          filter: drop-shadow(0 0 30px rgba(255, 20, 147, 1)) drop-shadow(0 0 40px rgba(255, 105, 180, 0.8));
        }
      }
      
      @keyframes backgroundShimmer {
        0% { 
          background: radial-gradient(circle at 20% 20%, rgba(255, 20, 147, 0.1) 0%, transparent 50%);
        }
        25% { 
          background: radial-gradient(circle at 80% 30%, rgba(255, 105, 180, 0.15) 0%, transparent 50%);
        }
        50% { 
          background: radial-gradient(circle at 50% 80%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
        }
        75% { 
          background: radial-gradient(circle at 30% 70%, rgba(138, 43, 226, 0.12) 0%, transparent 50%);
        }
        100% { 
          background: radial-gradient(circle at 20% 20%, rgba(255, 20, 147, 0.1) 0%, transparent 50%);
        }
      }
      
      .celebration-shake {
        animation: epicScreenShake 3.5s cubic-bezier(0.4, 0, 0.6, 1);
      }
      
      .celebration-modal {
        animation: modalMegaPulse 2.5s ease-in-out infinite;
      }
      
      .celebration-bounce {
        animation: epicBounce 1.5s ease-in-out infinite;
      }
      
      .celebration-mega-heart {
        animation: 
          epicBounce 1.5s ease-in-out infinite,
          heartbeatPulse 2s ease-in-out infinite,
          modalMegaPulse 3s ease-in-out infinite;
        filter: drop-shadow(0 0 25px rgba(255, 20, 147, 1)) drop-shadow(0 0 35px rgba(255, 105, 180, 0.8));
      }
      
      .celebration-background-shimmer {
        animation: backgroundShimmer 4s ease-in-out infinite;
      }
      
      /* GPU Acceleration for better performance */
      .celebration-ring,
      .celebration-shake,
      .celebration-modal,
      .celebration-bounce,
      .celebration-mega-heart,
      [class*="confetti-"] {
        will-change: transform, opacity, filter;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
    `}</style>
  );
};

export default CelebrationStyles;
