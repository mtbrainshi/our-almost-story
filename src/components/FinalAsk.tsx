import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, X } from "lucide-react";

const FinalAsk = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [noButtonClicked, setNoButtonClicked] = useState(0);
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

  // Generate circular burst positions for hearts
  const generateBurstPositions = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * 2 * Math.PI;
      const radius = 120 + Math.random() * 80; // Random radius between 120-200px
      const burstX = Math.cos(angle) * radius;
      const burstY = Math.sin(angle) * radius;
      const rotation = angle * (180 / Math.PI) + Math.random() * 180;
      
      return {
        burstX,
        burstY,
        rotation,
        delay: (i % 8) * 0.1, // Staggered bursts
        scale: 0.8 + Math.random() * 0.6, // Varied sizes
      };
    });
  };

  // Generate curved arc trajectories
  const generateArcPositions = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const baseAngle = (i / count) * 2 * Math.PI;
      const arcMidX = Math.cos(baseAngle) * (80 + Math.random() * 40);
      const arcMidY = Math.sin(baseAngle) * (60 + Math.random() * 40) - 60;
      const arcEndX = Math.cos(baseAngle + 0.5) * (150 + Math.random() * 100);
      const arcEndY = Math.sin(baseAngle + 0.5) * (100 + Math.random() * 80) + 50;
      
      return {
        arcMidX,
        arcMidY,
        arcEndX,
        arcEndY,
        delay: (i % 6) * 0.2,
        duration: 2.5 + Math.random() * 1.5,
      };
    });
  };

  // Generate spiral positions
  const generateSpiralPositions = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      const spiralAngle = (i / count) * 720; // 2 full rotations
      const spiralRadius = 30 + (i / count) * 120;
      
      return {
        spiralAngle,
        spiralRadius,
        delay: i * 0.15,
        direction: i % 2 === 0 ? 1 : -1, // Alternate spiral directions
      };
    });
  };

  const burstPositions = generateBurstPositions(20);
  const arcPositions = generateArcPositions(16);
  const spiralPositions = generateSpiralPositions(12);

  const handleYesClick = () => {
    setShowCelebration(true);
    setCelebrationPhase(1);
    
    // Enhanced phase progression for more romance
    setTimeout(() => setCelebrationPhase(2), 600);
    setTimeout(() => setCelebrationPhase(3), 1200);
    setTimeout(() => setCelebrationPhase(4), 2000);
    
    // Auto-hide and scroll after 8 seconds
    setTimeout(() => {
      setShowCelebration(false);
      setCelebrationPhase(0);
      const personalMessage = document.querySelector('#personal-message') || 
                             document.querySelector('[data-section="personal-message"]') ||
                             document.body.lastElementChild;
      personalMessage?.scrollIntoView({ behavior: 'smooth' });
    }, 8000);
  };

  const handleNoClick = () => {
    if (noButtonClicked < 4) {
      setNoButtonClicked(prev => prev + 1);
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

      {/* ENHANCED Romantic Celebration Modal with Circular Confetti */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {/* Dreamy Glass Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100/40 via-rose-100/30 to-orange-100/35 backdrop-blur-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 via-transparent to-yellow-100/20" />
          </div>
          
          {/* Multiple expanding rings for depth */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-pink-400/70 rounded-full animate-expand-ring" />
            <div className="absolute w-28 h-28 border-2 border-rose-400/50 rounded-full animate-expand-ring" style={{animationDelay: '0.2s'}} />
            <div className="absolute w-40 h-40 border-2 border-orange-400/40 rounded-full animate-expand-ring" style={{animationDelay: '0.4s'}} />
            <div className="absolute w-52 h-52 border border-purple-300/30 rounded-full animate-expand-ring" style={{animationDelay: '0.6s'}} />
          </div>
          
          {/* PHASE 1: Circular Burst Hearts */}
          {celebrationPhase >= 1 && (
            <div className="absolute inset-0 flex items-center justify-center">
              {burstPositions.map((pos, i) => (
                <div
                  key={`burst-${i}`}
                  className="absolute animate-heart-burst"
                  style={{
                    left: '50%',
                    top: '50%',
                    '--burst-x': `${pos.burstX}px`,
                    '--burst-y': `${pos.burstY}px`,
                    '--burst-rotation': `${pos.rotation}deg`,
                    animationDelay: `${pos.delay}s`,
                    fontSize: `${16 + pos.scale * 8}px`,
                    zIndex: Math.floor(pos.scale * 10),
                  } as React.CSSProperties}
                >
                  {['💕', '💖', '💗', '❤️', '💝', '💘'][i % 6]}
                </div>
              ))}
            </div>
          )}
          
          {/* PHASE 2: Curved Arc Trajectories */}
          {celebrationPhase >= 2 && (
            <div className="absolute inset-0 flex items-center justify-center">
              {arcPositions.map((pos, i) => (
                <div
                  key={`arc-${i}`}
                  className="absolute animate-heart-arc"
                  style={{
                    left: '50%',
                    top: '50%',
                    '--arc-mid-x': `${pos.arcMidX}px`,
                    '--arc-mid-y': `${pos.arcMidY}px`,
                    '--arc-end-x': `${pos.arcEndX}px`,
                    '--arc-end-y': `${pos.arcEndY}px`,
                    animationDelay: `${pos.delay}s`,
                    animationDuration: `${pos.duration}s`,
                    fontSize: `${14 + (i % 3) * 3}px`,
                  } as React.CSSProperties}
                >
                  {['💕', '💖', '💗'][i % 3]}
                </div>
              ))}
            </div>
          )}
          
          {/* PHASE 3: Spiral Hearts */}
          {celebrationPhase >= 3 && (
            <div className="absolute inset-0 flex items-center justify-center">
              {spiralPositions.map((pos, i) => (
                <div
                  key={`spiral-${i}`}
                  className="absolute animate-heart-spiral"
                  style={{
                    left: '50%',
                    top: '50%',
                    '--spiral-angle': `${pos.spiralAngle * pos.direction}deg`,
                    animationDelay: `${pos.delay}s`,
                    fontSize: `${12 + (i % 4) * 2}px`,
                    transform: `scale(${0.8 + (i % 3) * 0.2})`,
                  } as React.CSSProperties}
                >
                  {['💖', '🌸', '✨'][i % 3]}
                </div>
              ))}
            </div>
          )}
          
          {/* PHASE 4: Gentle Floating Elements */}
          {celebrationPhase >= 4 && [...Array(8)].map((_, i) => (
            <div
              key={`roses-${i}`}
              className="absolute animate-heart-float"
              style={{
                left: `${25 + (i % 4) * 15}%`,
                top: `${45 + (i < 4 ? 0 : 25)}%`,
                animationDelay: `${(i % 4) * 0.4}s`,
                animationDuration: `3.5s`,
                fontSize: `18px`,
              }}
            >
              🌹
            </div>
          ))}
          
          {/* SUCCESS MODAL with enhanced romantic design */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative max-w-md mx-auto">
              {/* Enhanced glass background with multiple layers */}
              <div className="absolute inset-0 bg-white/85 backdrop-blur-xl rounded-3xl border border-white/70 shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/60 via-rose-50/40 to-orange-50/50 rounded-3xl" />
              
              {/* Subtle glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-br from-pink-200/30 via-rose-200/20 to-orange-200/25 rounded-3xl blur-xl" />
              
              {/* Content */}
              <div className="relative z-10 p-8 text-center">
                <div className="text-6xl mb-6 animate-heart-pulse-gentle">💖</div>
                
                <h1 className="font-playfair text-4xl italic text-rose-800 font-bold mb-4">
                  You said YES! 💕
                </h1>
                <p className="font-playfair text-xl italic text-rose-700 mb-3">
                  Thank you for saying yes!
                </p>
                <p className="font-poppins text-lg text-rose-600 mb-8 leading-relaxed">
                  This makes me so incredibly happy! ✨
                  <br />
                  <span className="text-sm italic text-rose-500">I can't wait to hear from you...</span>
                </p>
                
                <div className="mt-8">
                  <p className="font-poppins text-sm text-rose-600 mb-4">
                    Taking you to leave a message...
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main content card */}
      <div className={`max-w-4xl mx-auto px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <Card className="bg-white/95 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12 relative">
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

              <div className="space-y-8">
                <div className="flex gap-8 justify-center flex-wrap">
                  <Button
                    onClick={handleYesClick}
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
                
                {noButtonClicked > 0 && (
                  <p className="text-lg text-rose-500 italic font-poppins animate-float-in">
                    {noButtonClicked === 1 && "Come on, just one coffee? ☕"}
                    {noButtonClicked === 2 && "I promise it'll be fun! 😊"}
                    {noButtonClicked === 3 && "Pretty please with sugar on top? 🍯"}
                    {noButtonClicked >= 4 && "Okay, I understand... but the offer stands! 💙"}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalAsk;
