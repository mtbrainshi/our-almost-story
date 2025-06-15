
import { useEffect } from "react";

interface CelebrationEffectsProps {
  showCelebration: boolean;
  celebrationPhase: number;
  onCelebrationEnd: () => void;
}

const CelebrationEffects = ({ showCelebration, celebrationPhase, onCelebrationEnd }: CelebrationEffectsProps) => {
  console.log("CelebrationEffects rendered:", { showCelebration, celebrationPhase });

  useEffect(() => {
    if (showCelebration) {
      console.log("Starting celebration timer");
      const timer = setTimeout(() => {
        console.log("Celebration ended");
        onCelebrationEnd();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  if (!showCelebration) {
    console.log("Celebration not showing");
    return null;
  }

  console.log("Rendering celebration with confetti");

  // Generate hearts for confetti burst
  const generateConfettiHearts = () => {
    const hearts = [];
    const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞'];
    
    // Create 24 hearts in a circle pattern
    for (let i = 0; i < 24; i++) {
      const angle = (i * 360) / 24;
      const distance = 200 + Math.random() * 100;
      const size = 20 + Math.random() * 16;
      const delay = Math.random() * 0.3;
      
      hearts.push({
        id: i,
        emoji: heartEmojis[i % heartEmojis.length],
        angle,
        distance,
        size,
        delay
      });
    }
    
    return hearts;
  };

  const confettiHearts = generateConfettiHearts();

  return (
    <>
      {/* CSS Animations */}
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
        
        @keyframes modalPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes heartMega {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
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
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
          40%, 43% { transform: translate3d(0,-15px,0); }
          70% { transform: translate3d(0,-7px,0); }
          90% { transform: translate3d(0,-2px,0); }
        }
        
        .celebration-ring {
          animation: ringExpand 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .celebration-heart {
          animation: heartBurst 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }
        
        .celebration-shake {
          animation: screenShake 0.5s ease-in-out;
        }
        
        .celebration-modal {
          animation: modalPulse 3s ease-in-out infinite;
        }
        
        .celebration-mega-heart {
          animation: heartMega 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .celebration-bounce {
          animation: bounce 1s infinite;
        }
      `}</style>

      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/70 via-rose-100/60 to-red-100/65 backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-100/50 via-transparent to-yellow-100/40" />
        </div>
        
        {/* Screen shake container */}
        <div className="absolute inset-0 celebration-shake">
          
          {/* Expanding rings from center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-pink-500 rounded-full celebration-ring" />
            <div className="absolute w-16 h-16 border-4 border-rose-500 rounded-full celebration-ring" style={{animationDelay: '0.1s'}} />
            <div className="absolute w-32 h-32 border-2 border-red-500 rounded-full celebration-ring" style={{animationDelay: '0.2s'}} />
            <div className="absolute w-48 h-48 border-2 border-pink-400 rounded-full celebration-ring" style={{animationDelay: '0.3s'}} />
            <div className="absolute w-64 h-64 border border-rose-300 rounded-full celebration-ring" style={{animationDelay: '0.4s'}} />
          </div>

          {/* Confetti Hearts */}
          <div className="absolute inset-0 flex items-center justify-center">
            {confettiHearts.map((heart) => {
              const endX = Math.cos((heart.angle * Math.PI) / 180) * heart.distance;
              const endY = Math.sin((heart.angle * Math.PI) / 180) * heart.distance;
              
              return (
                <div
                  key={heart.id}
                  className="absolute celebration-heart"
                  style={{
                    left: '50%',
                    top: '50%',
                    fontSize: `${heart.size}px`,
                    filter: 'drop-shadow(0 0 8px rgba(255, 20, 147, 0.8))',
                    animationDelay: `${heart.delay}s`,
                    '--end-x': `${endX}px`,
                    '--end-y': `${endY}px`,
                  } as React.CSSProperties}
                >
                  {heart.emoji}
                </div>
              );
            })}
          </div>

        </div>
        
        {/* SUCCESS MODAL */}
        <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
          <div className="relative max-w-md mx-auto">
            {/* Glass background with pulsing effect */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/90 shadow-2xl celebration-modal" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-rose-50/60 to-red-50/70 rounded-3xl" />
            
            {/* Glowing effects */}
            <div className="absolute -inset-6 bg-gradient-to-br from-pink-300/40 via-rose-300/30 to-red-300/35 rounded-3xl blur-3xl opacity-60" />
            <div className="absolute -inset-3 bg-gradient-to-br from-pink-400/25 via-rose-400/20 to-red-400/30 rounded-3xl blur-xl opacity-50" />
            
            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              <div className="text-7xl mb-6 celebration-mega-heart">💖</div>
              
              <h1 className="font-playfair text-4xl italic text-rose-800 font-bold mb-4">
                You said YES! 💕
              </h1>
              <p className="font-playfair text-xl italic text-rose-700 mb-3">
                Thank you for saying yes!
              </p>
              <p className="font-poppins text-lg text-rose-600 mb-8 leading-relaxed">
                This makes me so incredibly happy! ✨
                <br />
                <span className="text-sm italic text-rose-500">I can't wait to hear from you...</span>
              </p>
              
              <div className="mt-8">
                <p className="font-poppins text-sm text-rose-600 mb-4">
                  Taking you to leave a message...
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full celebration-bounce"></div>
                  <div className="w-2 h-2 bg-rose-400 rounded-full celebration-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-rose-400 rounded-full celebration-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CelebrationEffects;
