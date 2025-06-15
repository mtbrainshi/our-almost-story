
import { useState, useEffect } from "react";
import { Heart, Coffee } from "lucide-react";

interface MomentOfTruthProps {
  onComplete: () => void;
}

const MomentOfTruth = ({ onComplete }: MomentOfTruthProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 500);
    const timer2 = setTimeout(() => setPhase(2), 1500);
    const timer3 = setTimeout(() => setPhase(3), 2800);
    const timer4 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Dark overlay with spotlight effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-purple-900/90 to-rose-900/95 backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      </div>

      {/* Spotlight effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`w-96 h-96 bg-gradient-radial from-white/20 via-white/5 to-transparent rounded-full transition-all duration-1000 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-8">
        {/* Heartbeat icon */}
        <div className={`mb-8 flex justify-center transition-all duration-700 ${
          phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}>
          <div className="relative">
            <Heart 
              size={64} 
              className={`text-rose-300 ${phase >= 2 ? 'animate-pulse' : ''}`}
              fill="currentColor"
            />
            <div className="absolute inset-0 animate-ping">
              <Heart size={64} className="text-rose-200/50" />
            </div>
          </div>
        </div>

        {/* Text transition */}
        <div className="space-y-6">
          <h2 className={`font-playfair text-4xl md:text-6xl italic text-white transition-all duration-700 ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            The Moment of Truth
          </h2>
          
          <p className={`font-poppins text-xl text-rose-200 transition-all duration-700 delay-300 ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            After all these memories shared...
          </p>

          <div className={`flex justify-center transition-all duration-700 delay-700 ${
            phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <Coffee size={48} className="text-amber-300 animate-bounce" />
          </div>
        </div>

        {/* Subtle particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-sparkle opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MomentOfTruth;
