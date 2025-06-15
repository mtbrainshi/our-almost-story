
import { useEffect } from "react";

interface CelebrationEffectsProps {
  showCelebration: boolean;
  celebrationPhase: number;
  onCelebrationEnd: () => void;
}

const CelebrationEffects = ({ showCelebration, celebrationPhase, onCelebrationEnd }: CelebrationEffectsProps) => {
  // Only pink/red hearts - removed all colored hearts
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];

  // Generate multiple layers of hearts
  const generateHeartLayer = (count: number, radius: number, startDelay: number = 0) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return {
        startX: x,
        startY: y,
        angle,
        delay: startDelay + (i * 0.02), // Slightly slower stagger for smoother effect
        emoji: heartEmojis[i % heartEmojis.length],
        size: 20 + (i % 5) * 3, // Sizes from 20px to 32px
      };
    });
  };

  // Generate floating hearts that go upward
  const generateFloatingHearts = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      startX: (Math.random() - 0.5) * 300, // Reduced horizontal spread
      startY: 0,
      delay: Math.random() * 1.5, // Reduced random delays
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      size: 18 + Math.random() * 10, // Random sizes 18-28px
      duration: 5 + Math.random() * 2, // More consistent durations 5-7s
    }));
  };

  // Create multiple heart layers
  const innerHearts = generateHeartLayer(25, 60, 0); // Close to modal
  const middleHearts = generateHeartLayer(30, 120, 0.3); // Medium distance
  const outerHearts = generateHeartLayer(25, 200, 0.6); // Far distance
  const floatingHearts = generateFloatingHearts(20); // Upward floating

  useEffect(() => {
    if (showCelebration) {
      const timer = setTimeout(() => {
        onCelebrationEnd();
      }, 8000);
      
      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  if (!showCelebration) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Enhanced dreamy background with heart patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-100/40 to-red-100/45 backdrop-blur-lg">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/30 via-transparent to-yellow-100/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-50/20 to-transparent" />
      </div>
      
      {/* Subtle screen shake effect */}
      <div className="absolute inset-0 animate-heart-screen-shake">
        
        {/* Multiple expanding heart rings with better timing */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-pink-500/80 rounded-full animate-expand-ring-heart-fast" />
          <div className="absolute w-28 h-28 border-3 border-rose-500/60 rounded-full animate-expand-ring-heart-medium" />
          <div className="absolute w-40 h-40 border-2 border-red-500/50 rounded-full animate-expand-ring-heart-slow" />
          <div className="absolute w-56 h-56 border-2 border-pink-400/40 rounded-full animate-expand-ring-heart-slowest" />
        </div>

        {/* Inner Heart Burst Layer - improved animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          {innerHearts.map((heart, i) => (
            <div
              key={`inner-${i}`}
              className="absolute animate-heart-burst-smooth"
              style={{
                left: '50%',
                top: '50%',
                '--start-x': `${heart.startX}px`,
                '--start-y': `${heart.startY}px`,
                '--burst-angle': `${heart.angle}rad`,
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 8px rgba(255, 182, 193, 0.8))',
              } as React.CSSProperties}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

        {/* Middle Heart Burst Layer - improved animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          {middleHearts.map((heart, i) => (
            <div
              key={`middle-${i}`}
              className="absolute animate-heart-burst-graceful"
              style={{
                left: '50%',
                top: '50%',
                '--start-x': `${heart.startX}px`,
                '--start-y': `${heart.startY}px`,
                '--burst-angle': `${heart.angle}rad`,
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 6px rgba(255, 105, 180, 0.6))',
              } as React.CSSProperties}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

        {/* Outer Heart Burst Layer - improved animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          {outerHearts.map((heart, i) => (
            <div
              key={`outer-${i}`}
              className="absolute animate-heart-burst-elegant"
              style={{
                left: '50%',
                top: '50%',
                '--start-x': `${heart.startX}px`,
                '--start-y': `${heart.startY}px`,
                '--burst-angle': `${heart.angle}rad`,
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 4px rgba(220, 20, 60, 0.5))',
              } as React.CSSProperties}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

        {/* Floating Hearts Going Upward - improved animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          {floatingHearts.map((heart, i) => (
            <div
              key={`float-${i}`}
              className="absolute animate-heart-float-graceful"
              style={{
                left: '50%',
                top: '50%',
                '--start-x': `${heart.startX}px`,
                '--start-y': `${heart.startY}px`,
                animationDelay: `${heart.delay}s`,
                animationDuration: `${heart.duration}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 10px rgba(255, 20, 147, 0.7))',
              } as React.CSSProperties}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

      </div>
      
      {/* SUCCESS MODAL */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative max-w-md mx-auto">
          {/* Enhanced glass background with heart glow */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-xl rounded-3xl border border-white/80 shadow-2xl" />
          <div className="absolute inset-0 bg-gradient-to-br from-pink-50/70 via-rose-50/50 to-red-50/60 rounded-3xl" />
          
          {/* Enhanced heart glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-br from-pink-300/40 via-rose-300/30 to-red-300/35 rounded-3xl blur-2xl animate-heart-glow-pulse" />
          
          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            <div className="text-7xl mb-6 animate-heart-bounce-celebration">💖</div>
            
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
