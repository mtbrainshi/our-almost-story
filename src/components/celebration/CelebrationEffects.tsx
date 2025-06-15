import React from "react";
import ConfettiHearts from "./ConfettiHearts";
import SparkleBurst from "./SparkleBurst";

interface CelebrationEffectsProps {
  showCelebration: boolean;
  celebrationPhase: number;
  onCelebrationEnd: () => void;
}

const CelebrationEffects: React.FC<CelebrationEffectsProps> = ({
  showCelebration,
  celebrationPhase,
  onCelebrationEnd,
}) => {
  if (!showCelebration) return null;
  return (
    <>
      {/* Sparkle burst overlay */}
      <SparkleBurst />
      {/* Existing confetti hearts */}
      <ConfettiHearts />
      {/* Optionally, you can add a timeout to call onCelebrationEnd after the animation */}
    </>
  );
};

export default CelebrationEffects;
