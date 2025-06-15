import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, X } from "lucide-react";
import CoffeeRejectionCard from "./CoffeeRejectionCard";

interface CoffeeButtonsProps {
  onYesClick: () => void;
  onFinalNoClick?: () => void;
}

const CoffeeButtons = ({ onYesClick, onFinalNoClick }: CoffeeButtonsProps) => {
  const [noButtonClicked, setNoButtonClicked] = useState(0);
  const [showRejectionCard, setShowRejectionCard] = useState(false);

  const handleNoClick = () => {
    const newCount = noButtonClicked + 1;
    setNoButtonClicked(newCount);
    
    if (newCount === 4) {
      if (onFinalNoClick) onFinalNoClick();
      setTimeout(() => setShowRejectionCard(true), 300);
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

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
        <Button
          onClick={onYesClick}
          size="lg"
          className="w-full sm:w-auto bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 px-8 py-6 text-base sm:text-lg shadow-xl group relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-rose-200/20 to-pink-200/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <Coffee className="w-5 h-5 sm:w-6 sm:h-6 mr-3 inline-block" />
          Yes, I'd love to!
        </Button>

        <Button
          onClick={handleNoClick}
          variant="secondary"
          size="lg"
          disabled={noButtonClicked >= 4}
          className={`w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-600 font-medium rounded-2xl transition-all duration-300 px-8 py-6 text-base sm:text-lg shadow-md ${getNoButtonStyle()}`}
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 mr-3 inline-block" />
          {getNoButtonText()}
        </Button>
      </div>
      
      {/* Rejection card modal */}
      {showRejectionCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <CoffeeRejectionCard onClose={() => setShowRejectionCard(false)} />
        </div>
      )}
    </>
  );
};

export default CoffeeButtons;
