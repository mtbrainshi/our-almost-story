import { useEffect } from "react";

interface CelebrationEffectsProps {
  showCelebration: boolean;
  celebrationPhase: number;
  onCelebrationEnd: () => void;
}

const CelebrationEffects = ({ showCelebration, celebrationPhase, onCelebrationEnd }: CelebrationEffectsProps) => {
  console.log("CelebrationEffects rendered:", { showCelebration, celebrationPhase });

  // Heart emojis for maximum impact
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];

  // 8 directions for heart burst
  const directions = [
    { name: 'up', x: 0, y: -200 },
    { name: 'up-right', x: 150, y: -150 },
    { name: 'right', x: 200, y: 0 },
    { name: 'down-right', x: 150, y: 150 },
    { name: 'down', x: 0, y: 200 },
    { name: 'down-left', x: -150, y: 150 },
    { name: 'left', x: -200, y: 0 },
    { name: 'up-left', x: -150, y: -150 }
  ];

  // Generate hearts with inline animations that will definitely work
  const generateHearts = (count: number, delayOffset: number = 0) => {
    return Array.from({ length: count }, (_, i) => {
      const direction = directions[i % directions.length];
      return {
        id: `heart-${delayOffset}-${i}`,
        emoji: heartEmojis[i % heartEmojis.length],
        direction,
        size: 28 + (i % 4) * 6,
        delay: delayOffset + (i * 0.02) // Slight stagger within each wave
      };
    });
  };

  const primaryHearts = generateHearts(16, 0);
  const secondaryHearts = generateHearts(12, 0.1);

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

  // CSS animations as strings
  const ringAnimation = `
    @keyframes ringBurst {
      0% { transform: scale(0); opacity: 1; }
      100% { transform: scale(1); opacity: 0; }
    }
  `;

  const heartBurstAnimation = (x: number, y: number) => `
    @keyframes heartBurst${x}${y} {
      0% { 
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
      }
      20% { 
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 1;
      }
      100% { 
        transform: translate(${x}px, ${y}px) scale(0.8);
        opacity: 0;
      }
    }
  `;

  if (!showCelebration) {
    console.log("Celebration not showing");
    return null;
  }

  console.log("Rendering celebration with", primaryHearts.length, "primary hearts and", secondaryHearts.length, "secondary hearts");

  return (
    <>
      {/* Inject CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          ${ringAnimation}
          ${directions.map(dir => heartBurstAnimation(dir.x, dir.y)).join('\n')}
          
          .celebration-ring {
            animation: ringBurst 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          }
          
          .celebration-shake {
            animation: shake 0.4s ease-in-out;
          }
          
          @keyframes shake {
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
        `
      }} />

      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 via-rose-100/50 to-red-100/55 backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-100/40 via-transparent to-yellow-100/30" />
        </div>
        
        {/* Screen shake */}
        <div className="absolute inset-0 celebration-shake">
          
          {/* Expanding rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-pink-500/90 rounded-full celebration-ring" />
            <div className="absolute w-24 h-24 border-[3px] border-rose-500/80 rounded-full celebration-ring" style={{animationDelay: '0.05s'}} />
            <div className="absolute w-40 h-40 border-2 border-red-500/70 rounded-full celebration-ring" style={{animationDelay: '0.1s'}} />
            <div className="absolute w-64 h-64 border-2 border-pink-400/60 rounded-full celebration-ring" style={{animationDelay: '0.15s'}} />
            <div className="absolute w-80 h-80 border border-rose-300/50 rounded-full celebration-ring" style={{animationDelay: '0.2s'}} />
          </div>

          {/* Primary Hearts */}
          <div className="absolute inset-0 flex items-center justify-center">
            {primaryHearts.map((heart) => (
              <div
                key={heart.id}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  fontSize: `${heart.size}px`,
                  filter: 'drop-shadow(0 0 12px rgba(255, 20, 147, 0.9))',
                  animation: `heartBurst${heart.direction.x}${heart.direction.y} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`,
                  animationDelay: `${heart.delay}s`,
                  zIndex: 10,
                }}
              >
                {heart.emoji}
              </div>
            ))}
          </div>

          {/* Secondary Hearts */}
          <div className="absolute inset-0 flex items-center justify-center">
            {secondaryHearts.map((heart) => (
              <div
                key={heart.id}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  fontSize: `${heart.size}px`,
                  filter: 'drop-shadow(0 0 8px rgba(255, 105, 180, 0.8))',
                  animation: `heartBurst${heart.direction.x}${heart.direction.y} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`,
                  animationDelay: `${heart.delay}s`,
                  zIndex: 9,
                }}
              >
                {heart.emoji}
              </div>
            ))}
          </div>

        </div>
        
        {/* SUCCESS MODAL */}
        <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
          <div className="relative max-w-md mx-auto">
            {/* Enhanced glass background with pulsing effect */}
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/90 shadow-2xl" style={{
              animation: 'modalBreathe 3s ease-in-out infinite'
            }} />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-rose-50/60 to-red-50/70 rounded-3xl" />
            
            {/* Multi-layered glow effect */}
            <div className="absolute -inset-6 bg-gradient-to-br from-pink-300/50 via-rose-300/40 to-red-300/45 rounded-3xl blur-3xl" style={{
              animation: 'heartGlow 2s ease-in-out infinite'
            }} />
            <div className="absolute -inset-3 bg-gradient-to-br from-pink-400/30 via-rose-400/25 to-red-400/35 rounded-3xl blur-xl" style={{
              animation: 'heartGlow 1.5s ease-in-out infinite'
            }} />
            
            {/* Content */}
            <div className="relative z-10 p-8 text-center">
              <div className="text-7xl mb-6" style={{
                animation: 'heartMega 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
              }}>💖</div>
              
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
                  <div className="w-2 h-2 bg-rose-400 rounded-full" style={{animation: 'bounce 1s infinite'}}></div>
                  <div className="w-2 h-2 bg-rose-400 rounded-full" style={{animation: 'bounce 1s infinite', animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-rose-400 rounded-full" style={{animation: 'bounce 1s infinite', animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional CSS for modal animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes modalBreathe {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.02); }
          }
          @keyframes heartGlow {
            0%, 100% { opacity: 0.3; transform: scale(0.9); }
            50% { opacity: 0.7; transform: scale(1.1); }
          }
          @keyframes heartMega {
            0% { transform: scale(0) rotate(0deg); }
            50% { transform: scale(1.3) rotate(180deg); }
            100% { transform: scale(1) rotate(360deg); }
          }
          @keyframes bounce {
            0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
            40%, 43% { transform: translate3d(0,-15px,0); }
            70% { transform: translate3d(0,-7px,0); }
            90% { transform: translate3d(0,-2px,0); }
          }
        `
      }} />
    </>
  );
};

export default CelebrationEffects;
