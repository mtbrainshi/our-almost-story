
import { useEffect } from "react";
import CelebrationStyles from "./celebration/CelebrationStyles";
import CelebrationBackground from "./celebration/CelebrationBackground";
import CelebrationRings from "./celebration/CelebrationRings";
import ConfettiHearts from "./celebration/ConfettiHearts";
import CelebrationModal from "./celebration/CelebrationModal";

interface CelebrationEffectsProps {
  showCelebration: boolean;
  celebrationPhase: number;
  onCelebrationEnd: () => void;
}

const CelebrationEffects = ({ showCelebration, celebrationPhase, onCelebrationEnd }: CelebrationEffectsProps) => {
  console.log("CelebrationEffects rendered:", { showCelebration, celebrationPhase });

  useEffect(() => {
    if (showCelebration) {
      console.log("Starting celebration timer");
      const timer = setTimeout(() => {
        console.log("Celebration ended");
        onCelebrationEnd();
      }, 8500); // 8.5 seconds for complete celebration sequence
      
      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  if (!showCelebration) {
    console.log("Celebration not showing");
    return null;
  }

  console.log("Rendering celebration with bubble-ring-first, then level-wise heart burst");

  return (
    <>
      <CelebrationStyles />

      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <CelebrationBackground />
        
        {/* Screen shake container - gentler shake */}
        <div className="absolute inset-0 celebration-shake">
          {/* Rings appear first in sequence */}
          <CelebrationRings />
          {/* Hearts burst after rings in synchronized waves */}
          <ConfettiHearts />
        </div>
        
        <CelebrationModal />
      </div>
    </>
  );
};

export default CelebrationEffects;
