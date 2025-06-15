
import { useEffect } from "react";
import CelebrationStyles from "./celebration/CelebrationStyles";
import CelebrationBackground from "./celebration/CelebrationBackground";
import HeartBloomConfetti from "./celebration/HeartBloomConfetti";
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
      console.log("Starting Heart Bloom celebration for 8 seconds");
      const timer = setTimeout(() => {
        console.log("Heart Bloom celebration ended after 8 seconds");
        onCelebrationEnd();
      }, 8000); // Full 8 seconds for Heart Bloom effect
      
      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  // Only render when celebration is actually showing
  if (!showCelebration) {
    console.log("Celebration not showing - returning null");
    return null;
  }

  console.log("Rendering Heart Bloom: hearts only - no interfering rings");

  return (
    <>
      <CelebrationStyles />

      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        <CelebrationBackground />
        
        {/* Gentle screen shake for drama */}
        <div className="absolute inset-0 celebration-shake">
          {/* Heart Bloom - pure confetti hearts without interfering rings */}
          <HeartBloomConfetti />
        </div>
        
        <CelebrationModal />
      </div>
    </>
  );
};

export default CelebrationEffects;
