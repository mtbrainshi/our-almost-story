
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, X } from "lucide-react";
import CoffeeRejectionCard from "./CoffeeRejectionCard";

interface CoffeeButtonsProps {
  onYesClick: () => void;
}

const CoffeeButtons = ({ onYesClick }: CoffeeButtonsProps) => {
  const [noButtonClicked, setNoButtonClicked] = useState(0);
  const [showRejectionCard, setShowRejectionCard] = useState(false);

  const handleNoClick = () => {
    if (noButtonClicked < 4) {
      setNoButtonClicked(prev => prev + 1);
    } else {
      setShowRejectionCard(true);
    }
  };

  const getNoButtonText = () => {
    if (noButtonClicked === 0) return "No";
    if (noButtonClicked === 1) return "Are you sure?";
    if (noButtonClicked === 2) return "Really?";
    if (noButtonClicked === 3) return "Please? 🥺";
    return "Fine... 💔";
  };

  const getNoButtonStyle = () => {
    if (noButtonClicked >= 4) {
      return "opacity-30 cursor-not-allowed transform scale-75";
    }
    if (noButtonClicked >= 2) {
      return "animate-pulse";
    }
    return "";
  };

  if (showRejectionCard) {
    return <CoffeeRejectionCard />;
  }

  return (
    <div className="space-y-8">
      <div className="flex gap-8 justify-center flex-wrap">
        <Button
          onClick={onYesClick}
          className="bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white px-12 py-6 rounded-2xl font-poppins font-medium text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 hover:scale-105 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-300/20 to-rose-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Coffee size={28} />
          <span className="relative z-10">Yes, I'd love to!</span>
          <div className="absolute top-0 right-0 text-yellow-300 animate-sparkle text-sm">✨</div>
        </Button>
        
        <Button
          onClick={handleNoClick}
          disabled={noButtonClicked >= 4}
          className={`bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 px-12 py-6 rounded-2xl font-poppins font-medium text-xl shadow-xl transition-all duration-300 flex items-center gap-3 ${getNoButtonStyle()}`}
        >
          <X size={24} />
          {getNoButtonText()}
        </Button>
      </div>
      
      {noButtonClicked > 0 && noButtonClicked < 4 && (
        <p className="text-lg text-rose-500 italic font-poppins animate-float-in">
          {noButtonClicked === 1 && "Come on, just one coffee? ☕"}
          {noButtonClicked === 2 && "I promise it'll be fun! 😊"}
          {noButtonClicked === 3 && "Pretty please with sugar on top? 🍯"}
        </p>
      )}
    </div>
  );
};

export default CoffeeButtons;
