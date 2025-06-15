
import { Heart, Coffee } from "lucide-react";
import { useState, useEffect } from "react";

const CoffeeRejectionCard = () => {
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
    <div className="mt-8 opacity-0 animate-fade-in relative" style={{animationFillMode: 'forwards'}}>
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

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl shadow-xl border border-blue-100/50 max-w-2xl mx-auto relative overflow-hidden">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-slate-100/30 rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/10 via-transparent to-rose-100/10 rounded-3xl" />
        
        <div className="relative z-10 text-center">
          {/* Coffee cup with fading steam */}
          <div className={`mb-6 flex justify-center transition-all duration-1000 ${
            phase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-full shadow-lg">
              <Coffee size={40} className="text-amber-700" />
              {/* Fading steam */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-4 bg-gray-300 rounded-full animate-steam-fade opacity-50"
                    style={{
                      left: `${-4 + i * 4}px`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <h3 className={`font-playfair text-3xl italic text-slate-700 mb-6 font-medium transition-all duration-700 ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            I understand, and that's perfectly okay.
          </h3>
          
          <div className={`space-y-6 text-slate-600 transition-all duration-700 delay-300 ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="font-poppins text-xl leading-relaxed">
              Thank you for being honest with me, Sakshi.
            </p>
            
            <p className="font-poppins text-lg leading-relaxed max-w-lg mx-auto">
              Your comfort and feelings matter most to me. I'm grateful you took the time to read our story, and I hope it brought back some beautiful memories from our college days.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100/40 mt-8">
              <p className="font-playfair text-xl italic text-slate-700 font-medium leading-relaxed mb-4">
                "Sometimes the most beautiful stories are the ones we keep close to our hearts, even if they don't have the ending we imagined."
              </p>
              <p className="font-poppins text-base text-slate-600">
                The offer will always stand, whenever you're ready... or not at all. Either way, I respect your choice completely, and I'm thankful for the memories we shared.
              </p>
            </div>
            
            <div className="bg-slate-50/80 p-6 rounded-xl border border-slate-200/30 mt-6">
              <p className="font-poppins text-base text-slate-600 italic">
                Take care, Sakshi. You'll always have a special place in my story. 💙
              </p>
            </div>
          </div>
          
          {/* Enhanced decorative elements */}
          <div className="flex justify-center items-center space-x-4 mt-10 opacity-60">
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <Heart size={18} className="text-blue-300 animate-pulse" style={{animationDelay: '0.5s'}} />
            <Coffee size={16} className="text-amber-400 animate-pulse" style={{animationDelay: '1s'}} />
            <Heart size={18} className="text-rose-300 animate-pulse" style={{animationDelay: '1.5s'}} />
            <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
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
