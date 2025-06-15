
import { useEffect } from "react";

interface CelebrationEffectsProps {
  showCelebration: boolean;
  celebrationPhase: number;
  onCelebrationEnd: () => void;
}

const CelebrationEffects = ({ showCelebration, celebrationPhase, onCelebrationEnd }: CelebrationEffectsProps) => {
  // Heart emojis for maximum impact
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];

  // 8 direction animations for explosive effect
  const directions = [
    'heart-burst-up',
    'heart-burst-up-right', 
    'heart-burst-right',
    'heart-burst-down-right',
    'heart-burst-down',
    'heart-burst-down-left',
    'heart-burst-left',
    'heart-burst-up-left'
  ];

  // Generate primary burst hearts - immediate explosion
  const generatePrimaryHearts = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `primary-${i}`,
      emoji: heartEmojis[i % heartEmojis.length],
      direction: directions[i % directions.length],
      size: 28 + (i % 4) * 6,
      delay: 0 // Start immediately
    }));
  };

  // Generate secondary wave hearts - quick follow-up
  const generateSecondaryHearts = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `secondary-${i}`,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      direction: directions[Math.floor(Math.random() * directions.length)],
      size: 24 + Math.random() * 8,
      delay: 0.1 // Quick follow-up
    }));
  };

  // More hearts for bigger impact
  const primaryHearts = generatePrimaryHearts(24);
  const secondaryHearts = generateSecondaryHearts(16);

  useEffect(() => {
    if (showCelebration) {
      const timer = setTimeout(() => {
        onCelebrationEnd();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  if (!showCelebration) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Enhanced dreamy background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/60 via-rose-100/50 to-red-100/55 backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/40 via-transparent to-yellow-100/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-50/30 to-transparent animate-celebration-pulse" />
      </div>
      
      {/* Enhanced screen shake */}
      <div className="absolute inset-0 animate-celebration-shake">
        
        {/* Perfectly synchronized expanding rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-pink-500/90 rounded-full animate-ring-burst" />
          <div className="absolute w-24 h-24 border-[3px] border-rose-500/80 rounded-full animate-ring-burst" style={{animationDelay: '0.05s'}} />
          <div className="absolute w-40 h-40 border-2 border-red-500/70 rounded-full animate-ring-burst" style={{animationDelay: '0.1s'}} />
          <div className="absolute w-64 h-64 border-2 border-pink-400/60 rounded-full animate-ring-burst" style={{animationDelay: '0.15s'}} />
          <div className="absolute w-80 h-80 border border-rose-300/50 rounded-full animate-ring-burst" style={{animationDelay: '0.2s'}} />
        </div>

        {/* Primary Heart Burst - immediate explosion in all directions */}
        <div className="absolute inset-0 flex items-center justify-center">
          {primaryHearts.map((heart) => (
            <div
              key={heart.id}
              className={`absolute animate-${heart.direction}`}
              style={{
                left: '50%',
                top: '50%',
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 12px rgba(255, 20, 147, 0.9)) drop-shadow(0 0 6px rgba(255, 182, 193, 0.7))',
                zIndex: 10,
              }}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

        {/* Secondary Heart Wave - quick follow-up for density */}
        <div className="absolute inset-0 flex items-center justify-center">
          {secondaryHearts.map((heart) => (
            <div
              key={heart.id}
              className={`absolute animate-${heart.direction}`}
              style={{
                left: '50%',
                top: '50%',
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 8px rgba(255, 105, 180, 0.8))',
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
          <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/90 shadow-2xl animate-modal-breathe" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-rose-50/60 to-red-50/70 rounded-3xl" />
          
          {/* Multi-layered glow effect */}
          <div className="absolute -inset-6 bg-gradient-to-br from-pink-300/50 via-rose-300/40 to-red-300/45 rounded-3xl blur-3xl animate-heart-glow-intense" />
          <div className="absolute -inset-3 bg-gradient-to-br from-pink-400/30 via-rose-400/25 to-red-400/35 rounded-3xl blur-xl animate-heart-glow-pulse" />
          
          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            <div className="text-7xl mb-6 animate-heart-mega-celebration">💖</div>
            
            <h1 className="font-playfair text-4xl italic text-rose-800 font-bold mb-4 animate-text-shimmer">
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
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce-enhanced"></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce-enhanced" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce-enhanced" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrationEffects;
