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

const CelebrationEffects = ({
  showCelebration,
  celebrationPhase,
  onCelebrationEnd,
}: CelebrationEffectsProps) => {
  console.log("CelebrationEffects rendered:", {
    showCelebration,
    celebrationPhase,
  });

  useEffect(() => {
    if (showCelebration) {
      console.log("Starting Heart Bloom celebration for 8 seconds");
      const timer = setTimeout(() => {
        console.log("Heart Bloom celebration ended after 8 seconds");
        onCelebrationEnd();
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [showCelebration, onCelebrationEnd]);

  if (!showCelebration) {
    console.log("Celebration not showing - returning null");
    return null;
  }

  console.log("Rendering Heart Bloom: hearts only - no interfering rings");

  return (
    <>
      <CelebrationStyles />

      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden transition-opacity duration-700 ease-in-out opacity-100 celebration-fade">
        <CelebrationBackground />

        {/* Gentle screen shake for drama */}
        <div className="absolute inset-0 celebration-shake">
          {/* Heart Bloom - pure confetti hearts without interfering rings */}
          <HeartBloomConfetti />
        </div>

        <CelebrationModal />
      </div>
      <style>{`
        .celebration-fade {
          animation: celebrationFadeIn 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes celebrationFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .celebration-shake {
          animation: shake 0.7s cubic-bezier(0.4,0,0.2,1) 1;
        }
        @keyframes shake {
          0% { transform: translate(0, 0); }
          10%, 30%, 50%, 70%, 90% { transform: translate(-2px, 2px); }
          20%, 40%, 60%, 80% { transform: translate(2px, -2px); }
          100% { transform: translate(0, 0); }
        }
      `}</style>
    </>
  );
};

export default CelebrationEffects;
