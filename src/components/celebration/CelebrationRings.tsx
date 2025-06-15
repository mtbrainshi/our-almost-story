
const CelebrationRings = () => {
  // Generate dynamic ring data
  const rings = [
    { size: 8, delay: 0, color: 'pink-500', border: 4, duration: '2.8s' },
    { size: 20, delay: 0.15, color: 'rose-500', border: 4, duration: '3.0s' },
    { size: 40, delay: 0.3, color: 'red-500', border: 3, duration: '3.2s' },
    { size: 64, delay: 0.45, color: 'pink-400', border: 3, duration: '3.4s' },
    { size: 80, delay: 0.6, color: 'rose-300', border: 2, duration: '3.6s' },
    { size: 96, delay: 0.75, color: 'pink-200', border: 2, duration: '3.8s' },
    { size: 128, delay: 0.9, color: 'rose-100', border: 1, duration: '4.0s' },
    { size: 160, delay: 1.05, color: 'pink-100', border: 1, duration: '4.2s' }
  ];

  return (
    <>
      <style>
        {rings.map((ring, index) => `
          @keyframes dynamicRingExpand-${index} {
            0% { 
              transform: scale(0) rotate(0deg); 
              opacity: 0; 
              border-color: rgb(236 72 153);
            }
            15% { 
              transform: scale(0.3) rotate(45deg); 
              opacity: 0.9; 
              border-color: rgb(244 114 182);
            }
            30% { 
              transform: scale(0.6) rotate(90deg); 
              opacity: 1; 
              border-color: rgb(251 146 60);
            }
            50% { 
              transform: scale(0.8) rotate(180deg); 
              opacity: 0.8; 
              border-color: rgb(168 85 247);
            }
            70% { 
              transform: scale(0.95) rotate(270deg); 
              opacity: 0.6; 
              border-color: rgb(34 197 94);
            }
            85% { 
              transform: scale(1.02) rotate(315deg); 
              opacity: 0.4; 
              border-color: rgb(59 130 246);
            }
            100% { 
              transform: scale(1) rotate(360deg); 
              opacity: 0; 
              border-color: rgb(236 72 153);
            }
          }
          
          @keyframes ringPulseEnhanced-${index} {
            0%, 100% { 
              opacity: 0.7; 
              filter: blur(0px) brightness(1);
            }
            25% { 
              opacity: 1; 
              filter: blur(1px) brightness(1.2);
            }
            50% { 
              opacity: 0.9; 
              filter: blur(0.5px) brightness(1.1);
            }
            75% { 
              opacity: 1.1; 
              filter: blur(1.5px) brightness(1.3);
            }
          }
          
          .celebration-ring-${index} {
            animation: 
              dynamicRingExpand-${index} ${ring.duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
              ringPulseEnhanced-${index} 1.8s ease-in-out infinite;
            animation-delay: ${ring.delay}s, ${ring.delay + 0.2}s;
          }
        `).join('')}
      </style>
      
      <div className="absolute inset-0 flex items-center justify-center">
        {rings.map((ring, index) => (
          <div 
            key={index}
            className={`absolute w-${ring.size} h-${ring.size} border-${ring.border} border-${ring.color} rounded-full celebration-ring-${index}`}
          />
        ))}
      </div>
    </>
  );
};

export default CelebrationRings;
