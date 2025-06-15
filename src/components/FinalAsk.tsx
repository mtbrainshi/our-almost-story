
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CelebrationEffects from "./CelebrationEffects";
import CoffeeButtons from "./CoffeeButtons";
import CoffeeInvitation from "./CoffeeInvitation";

const FinalAsk = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationPhase, setCelebrationPhase] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleYesClick = () => {
    setShowCelebration(true);
    setCelebrationPhase(1);
  };

  const handleCelebrationEnd = () => {
    setShowCelebration(false);
    setCelebrationPhase(0);
    const personalMessage = document.querySelector('#personal-message') || 
                           document.querySelector('[data-section="personal-message"]') ||
                           document.body.lastElementChild;
    personalMessage?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Cozy coffee shop atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-orange-50/50 to-yellow-50/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/40 via-transparent to-orange-100/30" />
        
        {/* Floating steam particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gray-200/30 rounded-full animate-steam-rise blur-sm"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${8 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              top: `${80 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Warm ambient lighting */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/2 right-1/3 w-80 h-80 bg-orange-200/20 rounded-full blur-2xl animate-breathe" style={{animationDelay: '3s'}} />
      </div>

      {/* Celebration Effects */}
      <CelebrationEffects 
        showCelebration={showCelebration}
        celebrationPhase={celebrationPhase}
        onCelebrationEnd={handleCelebrationEnd}
      />

      {/* Main content card */}
      <div className={`max-w-4xl mx-auto px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <Card className="bg-white/95 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12 relative">
            <CoffeeInvitation />
            <CoffeeButtons onYesClick={handleYesClick} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalAsk;
