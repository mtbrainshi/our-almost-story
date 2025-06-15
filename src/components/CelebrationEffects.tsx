
import { useEffect } from "react";

interface CelebrationEffectsProps {
  showCelebration: boolean;
  celebrationPhase: number;
  onCelebrationEnd: () => void;
}

const CelebrationEffects = ({ showCelebration, celebrationPhase, onCelebrationEnd }: CelebrationEffectsProps) => {
  // Generate circular positions around the modal perimeter
  const generateCircularPositions = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * 2 * Math.PI;
      const radius = 200; // Distance from modal center to form the circle
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return {
        startX: x,
        startY: y,
        angle,
        delay: i * 0.05, // Small stagger for wave effect
        emoji: ['💕', '💖', '💗', '❤️', '💝', '💘'][i % 6],
      };
    });
  };

  const circularPositions = generateCircularPositions(24);

  useEffect(() => {
    if (showCelebration) {
      // Auto-hide after 4 seconds
      const timer = setTimeout(() => {
        onCelebrationEnd();
      }, 4000);
      
      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  if (!showCelebration) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Dreamy background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-rose-100/30 to-orange-100/35 backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 via-transparent to-yellow-100/20" />
      </div>
      
      {/* Expanding rings for depth */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-2 border-pink-400/70 rounded-full animate-expand-ring" />
        <div className="absolute w-28 h-28 border-2 border-rose-400/50 rounded-full animate-expand-ring" style={{animationDelay: '0.2s'}} />
        <div className="absolute w-40 h-40 border-2 border-orange-400/40 rounded-full animate-expand-ring" style={{animationDelay: '0.4s'}} />
      </div>
      
      {/* Circular Burst Hearts */}
      <div className="absolute inset-0 flex items-center justify-center">
        {circularPositions.map((pos, i) => (
          <div
            key={`circular-${i}`}
            className="absolute animate-circular-burst"
            style={{
              left: '50%',
              top: '50%',
              '--start-x': `${pos.startX}px`,
              '--start-y': `${pos.startY}px`,
              '--burst-angle': `${pos.angle}rad`,
              animationDelay: `${pos.delay}s`,
              fontSize: `${18 + (i % 3) * 4}px`,
            } as React.CSSProperties}
          >
            {pos.emoji}
          </div>
        ))}
      </div>
      
      {/* SUCCESS MODAL */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative max-w-md mx-auto">
          {/* Enhanced glass background */}
          <div className="absolute inset-0 bg-white/85 backdrop-blur-xl rounded-3xl border border-white/70 shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 via-rose-50/40 to-orange-50/50 rounded-3xl" />
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-br from-pink-200/30 via-rose-200/20 to-orange-200/25 rounded-3xl blur-xl" />
          
          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            <div className="text-6xl mb-6 animate-heart-pulse-gentle">💖</div>
            
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
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrationEffects;
