
import { Heart } from "lucide-react";

const CoffeeRejectionCard = () => {
  return (
    <div className="mt-8 opacity-0 animate-fade-in" style={{animationFillMode: 'forwards'}}>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-blue-100/50 max-w-2xl mx-auto relative overflow-hidden">
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 via-transparent to-slate-100/30 rounded-3xl" />
        
        <div className="relative z-10 text-center">
          {/* Gentle heart icon */}
          <div className="mb-6 flex justify-center">
            <div className="bg-blue-100/80 p-4 rounded-full">
              <Heart size={32} className="text-blue-400/70" />
            </div>
          </div>
          
          <h3 className="font-playfair text-2xl italic text-slate-700 mb-4 font-medium">
            I understand, and that's perfectly okay.
          </h3>
          
          <div className="space-y-4 text-slate-600">
            <p className="font-poppins text-lg leading-relaxed">
              Thank you for being honest with me, Sakshi.
            </p>
            
            <p className="font-poppins text-base leading-relaxed max-w-lg mx-auto">
              Your comfort and feelings matter most to me. I'm grateful you took the time to read our story, and I hope it brought back some good memories.
            </p>
            
            <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100/30 mt-6">
              <p className="font-playfair text-lg italic text-slate-700 font-medium">
                "The offer will always stand, whenever you're ready... or not at all. Either way, I respect your choice completely."
              </p>
            </div>
          </div>
          
          {/* Gentle decorative elements */}
          <div className="flex justify-center items-center space-x-3 mt-8 opacity-60">
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse"></div>
            <Heart size={16} className="text-blue-300" />
            <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeRejectionCard;
