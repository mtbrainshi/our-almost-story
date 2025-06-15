import { Heart, Coffee, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CoffeeRejectionCardProps {
  onClose: () => void;
}

const CoffeeRejectionCard = ({ onClose }: CoffeeRejectionCardProps) => {
  const [showRain, setShowRain] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    setShowRain(true);
    const timer1 = setTimeout(() => setPhase(1), 500);
    const timer2 = setTimeout(() => setPhase(2), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="w-[90vw] sm:w-[440px] md:w-[480px] max-w-2xl opacity-0 animate-fade-in" style={{animationFillMode: 'forwards'}}>
      {/* Gentle rain effect */}
      {showRain && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-8 bg-blue-200/30 animate-rain"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 sm:p-8 rounded-3xl shadow-xl border border-blue-100/50 relative overflow-hidden transition-all duration-500">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="ghost"
          className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 rounded-full"
        >
          <X className="w-5 h-5" />
        </Button>
        
        {/* Content */}
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-4">
            <Coffee className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400 animate-bounce-gentle" />
            <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-rose-400 animate-pulse" />
          </div>

          <div className="space-y-4">
            <h3 className="font-playfair text-2xl sm:text-3xl text-slate-700 font-semibold">
              {phase === 0 && "Oh..."}
              {phase === 1 && "I understand..."}
              {phase === 2 && "Maybe next time?"}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
              {phase === 0 && "The rain outside matches my heart right now..."}
              {phase === 1 && "It's okay, I respect your decision."}
              {phase === 2 && "The coffee shop will always have a seat for you."}
            </p>
          </div>

          <Button
            onClick={onClose}
            variant="outline"
            className="mt-6 px-6 py-2 text-sm sm:text-base text-slate-600 hover:text-slate-700 border-slate-300"
          >
            Close
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes rain {
          0% { transform: translateY(-100vh) rotate(15deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh) rotate(15deg); opacity: 0; }
        }
        
        @keyframes steam-fade {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-20px) scale(1.2); opacity: 0.3; }
          100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
        }
        
        .animate-rain {
          animation: rain var(--duration, 4s) linear infinite;
        }
        
        .animate-steam-fade {
          animation: steam-fade var(--duration, 3s) ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CoffeeRejectionCard;
