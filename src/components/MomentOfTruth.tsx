import { useState, useEffect } from "react";
import { Heart, Coffee, Sparkles } from "lucide-react";

interface MomentOfTruthProps {
  onComplete: () => void;
}

const MomentOfTruth = ({ onComplete }: MomentOfTruthProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 800);
    const timer2 = setTimeout(() => setPhase(2), 2000);
    const timer3 = setTimeout(() => setPhase(3), 3200);
    const timer4 = setTimeout(() => setPhase(4), 4200);
    const timer5 = setTimeout(() => onComplete(), 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Dreamy, soft gradient background with floating shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-mauve-100 via-blush-50 to-cream-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-mauve-200/30 via-transparent to-blush-200/30" />
        <div className="absolute inset-0 bg-gradient-to-bl from-cream-200/20 via-transparent to-mauve-200/25" />
        {/* Floating dream bubbles */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-blush-200 rounded-full opacity-20 animate-pulse-gentle"
            style={{
              width: `${30 + Math.random() * 80}px`,
              height: `${30 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              background: `radial-gradient(circle, ${['rgba(247, 174, 174, 0.08)', 'rgba(176, 152, 176, 0.08)', 'rgba(255, 237, 158, 0.08)'][Math.floor(Math.random() * 3)]} 0%, transparent 70%)`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8 max-w-2xl">
        {/* Enhanced heartbeat icon */}
        <div className={`mb-10 flex justify-center transition-all duration-1000 ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}>
          <div className="relative">
            <Heart 
              size={80} 
              className={`text-rose-300 ${phase >= 2 ? 'animate-pulse' : ''}`}
              fill="currentColor"
            />
            <div className="absolute inset-0 animate-ping">
              <Heart size={80} className="text-rose-200/40" />
            </div>
            {/* Sparkles around heart */}
            <Sparkles 
              size={24} 
              className="absolute -top-2 -right-2 text-yellow-300 animate-bounce"
              style={{animationDelay: '0.5s'}}
            />
            <Sparkles 
              size={20} 
              className="absolute -bottom-1 -left-1 text-pink-300 animate-bounce"
              style={{animationDelay: '1s'}}
            />
          </div>
        </div>

        {/* Enhanced text transition */}
        <div className="space-y-8">
          <h2 className={`font-playfair text-5xl md:text-7xl italic text-rose-700 transition-all duration-1000 ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            The Moment of Truth
          </h2>
          
          <p className={`font-poppins text-2xl text-rose-500 transition-all duration-1000 delay-500 ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            From silent admiration to this moment...
          </p>

          <p className={`font-poppins text-xl text-purple-500 transition-all duration-1000 delay-1000 ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Every heartbeat has led to this question
          </p>

          <div className={`flex justify-center transition-all duration-1000 delay-1500 ${
            phase >= 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <div className="relative">
              <Coffee size={60} className="text-amber-300 animate-bounce" />
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                {/* Enhanced steam effect */}
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-6 bg-white/40 rounded-full animate-steam-rise"
                    style={{
                      left: `${-6 + i * 4}px`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-sparkle opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes steam-rise {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 0.4; }
          100% { transform: translateY(-40px) scale(1.3); opacity: 0; }
        }
        
        .animate-steam-rise {
          animation: steam-rise var(--duration, 2s) ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MomentOfTruth;
