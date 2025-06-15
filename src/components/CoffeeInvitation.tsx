import { Coffee } from "lucide-react";

const CoffeeInvitation = () => {
  return (
    <div className="text-center px-2 sm:px-6 md:px-8 py-8 sm:py-12 max-w-4xl mx-auto w-full">
      {/* Coffee icon with enhanced glow */}
      <div className="mb-8 sm:mb-10 flex justify-center">
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 sm:p-8 rounded-full shadow-lg relative transform hover:scale-105 transition-transform duration-300">
          <Coffee size={32} className="sm:w-12 sm:h-12 md:w-14 md:h-14 text-amber-700" />
          <div className="absolute inset-0 bg-amber-300/30 rounded-full blur-md sm:blur-xl animate-pulse-gentle"></div>
          <div className="absolute inset-0 bg-orange-300/20 rounded-full blur-lg sm:blur-2xl animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl italic text-rose-800 mb-4 sm:mb-6 font-bold leading-tight break-words">
        So... Coffee?
      </h2>
      
      <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
        <p className="font-poppins text-lg sm:text-xl md:text-2xl text-rose-700 font-medium break-words">
          Would you like to go for coffee with me, sometime?
        </p>
        
        <p className="font-poppins text-base sm:text-lg text-rose-600 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4 break-words">
          Just coffee. Just a conversation. No expectations, no pressure.
          <br className="hidden sm:block" />
          <span className="italic font-medium text-rose-700 block mt-2">Just... me being honest.</span>
        </p>
        
        <div className="bg-rose-50/80 p-3 sm:p-5 md:p-8 rounded-2xl border border-rose-200/40 max-w-xs sm:max-w-md md:max-w-xl mx-auto backdrop-blur-sm overflow-x-auto">
          <p className="font-playfair text-base sm:text-lg md:text-xl italic text-rose-700 leading-relaxed break-words whitespace-pre-line">
            "Because the truth is — I liked you. I think a part of me still does."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeInvitation;
