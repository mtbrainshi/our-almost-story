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

  const handleYesClick = () => {
    setShowCelebration(true);
    setCelebrationPhase(1);
    
    // Synchronized phase progression for better timing
    const phases = [
      { delay: 200, phase: 2 },    // Quick second wave
      { delay: 600, phase: 3 },    // Third wave
      { delay: 1200, phase: 4 },   // Final elements
    ];
    
    phases.forEach(({ delay, phase }) => {
      setTimeout(() => setCelebrationPhase(phase), delay);
    });
    
    // Auto-hide and scroll with improved timing
    setTimeout(() => {
      setShowCelebration(false);
      setCelebrationPhase(0);
      const personalMessage = document.querySelector('#personal-message') || 
                             document.querySelector('[data-section="personal-message"]') ||
                             document.body.lastElementChild;
      personalMessage?.scrollIntoView({ behavior: 'smooth' });
    }, 4000);
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

      {/* Enhanced Spectacular Celebration - FIXED ALIGNMENT & TIMING */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {/* Instant Screen Flash Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/50 via-rose-200/40 to-orange-200/50 animate-celebration-flash" />
          
          {/* Synchronized Expanding Rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-pink-400/70 rounded-full animate-expand-ring" />
            <div className="absolute w-48 h-48 border-4 border-rose-400/50 rounded-full animate-expand-ring" style={{animationDelay: '0.1s'}} />
            <div className="absolute w-64 h-64 border-4 border-orange-400/40 rounded-full animate-expand-ring" style={{animationDelay: '0.2s'}} />
          </div>
          
          {/* Multi-Wave Heart Confetti Burst - Better Distribution */}
          {celebrationPhase >= 1 && [...Array(25)].map((_, i) => (
            <div
              key={`wave1-${i}`}
              className="absolute animate-heart-burst-wave1"
              style={{
                left: '50%',
                top: '50%',
                fontSize: `${14 + Math.random() * 16}px`,
                animationDelay: `${Math.random() * 0.1}s`,
                '--random-x': `${(Math.random() - 0.5) * 180}vw`,
                '--random-y': `${(Math.random() - 0.5) * 180}vh`,
                '--rotation': `${Math.random() * 360}deg`,
              } as any}
            >
              {['💕', '💖', '💗', '💝', '💞', '❤️'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
          
          {celebrationPhase >= 2 && [...Array(20)].map((_, i) => (
            <div
              key={`wave2-${i}`}
              className="absolute animate-heart-burst-wave2"
              style={{
                left: '50%',
                top: '50%',
                fontSize: `${12 + Math.random() * 14}px`,
                animationDelay: `${Math.random() * 0.15}s`,
                '--random-x': `${(Math.random() - 0.5) * 160}vw`,
                '--random-y': `${(Math.random() - 0.5) * 160}vh`,
                '--rotation': `${Math.random() * 360}deg`,
              } as any}
            >
              {['💕', '💖', '💗', '💝', '💞', '❤️'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
          
          {celebrationPhase >= 3 && [...Array(15)].map((_, i) => (
            <div
              key={`wave3-${i}`}
              className="absolute animate-heart-burst-wave3"
              style={{
                left: '50%',
                top: '50%',
                fontSize: `${16 + Math.random() * 18}px`,
                animationDelay: `${Math.random() * 0.2}s`,
                '--random-x': `${(Math.random() - 0.5) * 140}vw`,
                '--random-y': `${(Math.random() - 0.5) * 140}vh`,
                '--rotation': `${Math.random() * 360}deg`,
              } as any}
            >
              {['💕', '💖', '💗', '💝', '💞', '❤️'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
          
          {/* Floating Heart Balloons */}
          {celebrationPhase >= 2 && [...Array(6)].map((_, i) => (
            <div
              key={`balloon-${i}`}
              className="absolute animate-heart-balloon"
              style={{
                left: `${25 + Math.random() * 50}%`,
                top: '100%',
                fontSize: `${18 + Math.random() * 10}px`,
                animationDelay: `${Math.random() * 0.8}s`,
              } as any}
            >
              🎈
            </div>
          ))}
          
          {/* Golden Sparkle Cascade */}
          {celebrationPhase >= 3 && [...Array(30)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute animate-sparkle-cascade"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                fontSize: `${8 + Math.random() * 10}px`,
                animationDelay: `${Math.random() * 1.5}s`,
              } as any}
            >
              ✨
            </div>
          ))}
          
          {/* Firework Bursts */}
          {celebrationPhase >= 4 && [...Array(4)].map((_, i) => (
            <div
              key={`firework-${i}`}
              className="absolute animate-firework-burst"
              style={{
                left: `${25 + Math.random() * 50}%`,
                top: `${25 + Math.random() * 30}%`,
                fontSize: '28px',
                animationDelay: `${Math.random() * 0.6}s`,
              } as any}
            >
              🎆
            </div>
          ))}
          
          {/* IMPROVED SUCCESS MODAL - BETTER ALIGNMENT & TIMING */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/97 backdrop-blur-md rounded-3xl p-10 shadow-3xl border border-white/70 animate-celebration-modal max-w-lg mx-4 relative overflow-hidden">
              {/* Enhanced Pulsing Heart Background */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-100/60 to-rose-100/60 animate-pulse-heart" />
              
              <div className="relative z-10 text-center">
                {/* Large Pulsing Heart */}
                <div className="text-7xl mb-6 animate-heart-pulse-gentle">💖</div>
                
                {/* FIXED TYPEWRITER MESSAGES - BETTER TIMING & ALIGNMENT */}
                <div className="space-y-4 mb-6">
                  <div className="overflow-hidden">
                    <h1 className="font-playfair text-3xl md:text-4xl italic text-rose-800 font-bold opacity-0 animate-typewriter-fast" style={{animationFillMode: 'forwards'}}>
                      You said YES! 💕
                    </h1>
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-playfair text-xl italic text-rose-700 opacity-0 animate-typewriter-medium" style={{animationDelay: '1s', animationFillMode: 'forwards'}}>
                      Thank you for saying yes!
                    </p>
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-poppins text-lg text-rose-600 opacity-0 animate-typewriter-slow" style={{animationDelay: '2s', animationFillMode: 'forwards'}}>
                      This makes me so incredibly happy! ✨
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <p className="font-poppins text-base text-rose-600 opacity-0 animate-fade-in-delayed" style={{animationDelay: '3s', animationFillMode: 'forwards'}}>
                    Taking you to leave a message...
                  </p>
                  <div className="mt-4 flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '3.5s'}}></div>
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '3.7s'}}></div>
                    <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '3.9s'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
