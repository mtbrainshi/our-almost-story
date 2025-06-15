
import { Coffee } from "lucide-react";

const CoffeeInvitation = () => {
  return (
    <div className="text-center">
      {/* Coffee icon with enhanced glow */}
      <div className="mb-8 flex justify-center">
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-8 rounded-full shadow-lg relative">
          <Coffee size={56} className="text-amber-700" />
          <div className="absolute inset-0 bg-amber-300/30 rounded-full blur-xl animate-pulse-gentle"></div>
          <div className="absolute inset-0 bg-orange-300/20 rounded-full blur-2xl animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      <h2 className="font-playfair text-4xl md:text-5xl italic text-rose-800 mb-6 font-bold">
        So... Coffee?
      </h2>
      
      <div className="space-y-6 mb-10">
        <p className="font-poppins text-xl md:text-2xl text-rose-700 font-medium">
          Would you like to go for coffee with me, sometime?
        </p>
        
        <p className="font-poppins text-lg text-rose-600 max-w-2xl mx-auto leading-relaxed">
          Just coffee. Just a conversation. No expectations, no pressure.
          <br />
          <span className="italic font-medium text-rose-700">Just... me being honest.</span>
        </p>
        
        <div className="bg-rose-50/80 p-8 rounded-2xl border border-rose-200/40 max-w-xl mx-auto">
          <p className="font-playfair text-lg italic text-rose-700 leading-relaxed">
            "Because the truth is — I liked you. I think a part of me still does."
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeInvitation;
