
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
      }, 7500); // 7.5 seconds for perfect timing
      
      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  if (!showCelebration) {
    console.log("Celebration not showing");
    return null;
  }

  console.log("Rendering elegant celebration: rings expand first, then synchronized heart burst");

  return (
    <>
      <CelebrationStyles />

      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <CelebrationBackground />
        
        {/* Gentle screen shake for drama */}
        <div className="absolute inset-0 celebration-shake">
          {/* Rings expand first from modal center */}
          <CelebrationRings />
          {/* Hearts burst in synchronized wave after rings start */}
          <ConfettiHearts />
        </div>
        
        <CelebrationModal />
      </div>
    </>
  );
};

export default CelebrationEffects;
