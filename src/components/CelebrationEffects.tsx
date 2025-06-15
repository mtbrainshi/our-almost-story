
import { useEffect } from "react";

interface CelebrationEffectsProps {
  showCelebration: boolean;
  celebrationPhase: number;
  onCelebrationEnd: () => void;
}

const CelebrationEffects = ({ showCelebration, celebrationPhase, onCelebrationEnd }: CelebrationEffectsProps) => {
  // Only pink/red hearts
  const heartEmojis = ['💕', '💖', '💗', '❤️', '💝', '💘', '💓', '💞', '💟', '♥️'];

  // Primary explosive burst - immediate dramatic effect
  const generatePrimaryBurst = (count: number, radius: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return {
        startX: x,
        startY: y,
        angle,
        delay: i * 0.01, // Very fast stagger for immediate impact
        emoji: heartEmojis[i % heartEmojis.length],
        size: 22 + (i % 4) * 4, // Sizes from 22px to 34px
        spiralIntensity: 0.3 + Math.random() * 0.4, // Random spiral effect
      };
    });
  };

  // Secondary wave - delayed cascade effect
  const generateSecondaryWave = (count: number, radius: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * 2 * Math.PI + Math.PI / count; // Offset from primary
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      
      return {
        startX: x,
        startY: y,
        angle,
        delay: 0.8 + i * 0.02, // Delayed start with stagger
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 18 + Math.random() * 8, // Random sizes 18-26px
        bounceIntensity: 0.4 + Math.random() * 0.3,
      };
    });
  };

  // Sparkle hearts - tiny dancing hearts
  const generateSparkleHearts = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 40 + Math.random() * 80;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      return {
        startX: x,
        startY: y,
        delay: 1.5 + Math.random() * 2, // Later appearance
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        size: 14 + Math.random() * 6, // Smaller sparkle hearts
        dancePattern: Math.floor(Math.random() * 3), // Different dance patterns
      };
    });
  };

  // Floating ambient hearts - continuous gentle movement
  const generateAmbientHearts = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      startX: (Math.random() - 0.5) * 400,
      startY: Math.random() * 100,
      delay: Math.random() * 3,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      size: 16 + Math.random() * 8,
      floatPattern: Math.floor(Math.random() * 2), // Different float patterns
      duration: 4 + Math.random() * 2,
    }));
  };

  // Create multiple heart layers with different behaviors
  const primaryBurst = generatePrimaryBurst(20, 80);
  const secondaryWave = generateSecondaryWave(16, 140);
  const sparkleHearts = generateSparkleHearts(12);
  const ambientHearts = generateAmbientHearts(8);

  useEffect(() => {
    if (showCelebration) {
      const timer = setTimeout(() => {
        onCelebrationEnd();
      }, 6000); // Reduced to 6 seconds for more intensity
      
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
      
      {/* Enhanced screen shake with multiple phases */}
      <div className="absolute inset-0 animate-celebration-shake-intense">
        
        {/* Multiple expanding rings with better sync */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-pink-500/90 rounded-full animate-ring-burst-immediate" />
          <div className="absolute w-24 h-24 border-3 border-rose-500/70 rounded-full animate-ring-burst-fast" />
          <div className="absolute w-40 h-40 border-2 border-red-500/60 rounded-full animate-ring-burst-medium" />
          <div className="absolute w-64 h-64 border-2 border-pink-400/50 rounded-full animate-ring-burst-slow" />
          <div className="absolute w-80 h-80 border-1 border-rose-300/40 rounded-full animate-ring-burst-slowest" />
        </div>

        {/* Primary Explosive Burst - immediate dramatic impact */}
        <div className="absolute inset-0 flex items-center justify-center">
          {primaryBurst.map((heart, i) => (
            <div
              key={`primary-${i}`}
              className="absolute animate-heart-explosive-burst"
              style={{
                left: '50%',
                top: '50%',
                '--start-x': `${heart.startX}px`,
                '--start-y': `${heart.startY}px`,
                '--burst-angle': `${heart.angle}rad`,
                '--spiral-intensity': heart.spiralIntensity,
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 12px rgba(255, 20, 147, 0.9)) drop-shadow(0 0 6px rgba(255, 182, 193, 0.7))',
              } as React.CSSProperties}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

        {/* Secondary Wave - delayed cascade effect */}
        <div className="absolute inset-0 flex items-center justify-center">
          {secondaryWave.map((heart, i) => (
            <div
              key={`secondary-${i}`}
              className="absolute animate-heart-wave-cascade"
              style={{
                left: '50%',
                top: '50%',
                '--start-x': `${heart.startX}px`,
                '--start-y': `${heart.startY}px`,
                '--burst-angle': `${heart.angle}rad`,
                '--bounce-intensity': heart.bounceIntensity,
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 8px rgba(255, 105, 180, 0.8))',
              } as React.CSSProperties}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

        {/* Sparkle Hearts - tiny dancing hearts */}
        <div className="absolute inset-0 flex items-center justify-center">
          {sparkleHearts.map((heart, i) => (
            <div
              key={`sparkle-${i}`}
              className={`absolute ${
                heart.dancePattern === 0 ? 'animate-heart-dance-twirl' :
                heart.dancePattern === 1 ? 'animate-heart-dance-bounce' :
                'animate-heart-dance-shimmer'
              }`}
              style={{
                left: '50%',
                top: '50%',
                '--start-x': `${heart.startX}px`,
                '--start-y': `${heart.startY}px`,
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 10px rgba(255, 20, 147, 1)) brightness(1.3)',
              } as React.CSSProperties}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

        {/* Ambient Floating Hearts - gentle continuous movement */}
        <div className="absolute inset-0 flex items-center justify-center">
          {ambientHearts.map((heart, i) => (
            <div
              key={`ambient-${i}`}
              className={`absolute ${
                heart.floatPattern === 0 ? 'animate-heart-ambient-gentle' : 'animate-heart-ambient-dreamy'
              }`}
              style={{
                left: '50%',
                top: '50%',
                '--start-x': `${heart.startX}px`,
                '--start-y': `${heart.startY}px`,
                animationDelay: `${heart.delay}s`,
                animationDuration: `${heart.duration}s`,
                fontSize: `${heart.size}px`,
                filter: 'drop-shadow(0 0 6px rgba(255, 182, 193, 0.6))',
              } as React.CSSProperties}
            >
              {heart.emoji}
            </div>
          ))}
        </div>

      </div>
      
      {/* SUCCESS MODAL with enhanced effects */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
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
