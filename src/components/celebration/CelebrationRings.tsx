
const CelebrationRings = () => {
  // Generate gentle ring data
  const rings = [
    { size: 8, delay: 0, color: 'pink-500', border: 3, duration: '3.0s' },
    { size: 20, delay: 0.2, color: 'rose-500', border: 3, duration: '3.2s' },
    { size: 40, delay: 0.4, color: 'red-500', border: 2, duration: '3.4s' },
    { size: 64, delay: 0.6, color: 'pink-400', border: 2, duration: '3.6s' },
    { size: 80, delay: 0.8, color: 'rose-300', border: 2, duration: '3.8s' },
    { size: 96, delay: 1.0, color: 'pink-200', border: 1, duration: '4.0s' }
  ];

  return (
    <>
      <style>
        {rings.map((ring, index) => `
          @keyframes gentleRingExpand-${index} {
            0% { 
              transform: scale(0) rotate(0deg); 
              opacity: 0; 
              border-color: rgb(236 72 153);
            }
            20% { 
              transform: scale(0.3) rotate(20deg); 
              opacity: 0.8; 
              border-color: rgb(244 114 182);
            }
            40% { 
              transform: scale(0.6) rotate(40deg); 
              opacity: 1; 
              border-color: rgb(251 146 60);
            }
            60% { 
              transform: scale(0.8) rotate(80deg); 
              opacity: 0.9; 
              border-color: rgb(168 85 247);
            }
            80% { 
              transform: scale(0.95) rotate(120deg); 
              opacity: 0.6; 
              border-color: rgb(34 197 94);
            }
            100% { 
              transform: scale(1) rotate(180deg); 
              opacity: 0; 
              border-color: rgb(236 72 153);
            }
          }
          
          @keyframes gentleRingPulse-${index} {
            0%, 100% { 
              opacity: 0.6; 
              filter: blur(0px) brightness(1);
            }
            50% { 
              opacity: 0.9; 
              filter: blur(0.5px) brightness(1.1);
            }
          }
          
          .celebration-ring-${index} {
            animation: 
              gentleRingExpand-${index} ${ring.duration} cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
              gentleRingPulse-${index} 2.5s ease-in-out infinite;
            animation-delay: ${ring.delay}s, ${ring.delay + 0.3}s;
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
