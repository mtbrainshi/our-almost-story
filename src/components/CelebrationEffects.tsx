
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
      console.log("Starting celebration timer for 8 seconds total");
      const timer = setTimeout(() => {
        console.log("Celebration ended after 8 seconds");
        onCelebrationEnd();
      }, 8000); // Full 8 seconds for level-wise effect
      
      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  if (!showCelebration) {
    console.log("Celebration not showing");
    return null;
  }

  console.log("Rendering level-wise celebration: rings first, then 3 waves of hearts bursting outward");

  return (
    <>
      <CelebrationStyles />

      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <CelebrationBackground />
        
        {/* Gentle screen shake for drama */}
        <div className="absolute inset-0 celebration-shake">
          {/* Rings expand first from modal center */}
          <CelebrationRings />
          {/* Hearts burst in 3 distinct levels/waves after rings */}
          <ConfettiHearts />
        </div>
        
        <CelebrationModal />
      </div>
    </>
  );
};

export default CelebrationEffects;
