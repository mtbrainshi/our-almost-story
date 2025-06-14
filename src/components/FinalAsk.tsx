
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, X } from "lucide-react";

const FinalAsk = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [noButtonClicked, setNoButtonClicked] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
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
    
    // Scroll to PersonalMessage section after celebration
    setTimeout(() => {
      const personalMessage = document.querySelector('#personal-message') || 
                             document.querySelector('[data-section="personal-message"]') ||
                             document.body.lastElementChild;
      personalMessage?.scrollIntoView({ behavior: 'smooth' });
    }, 5000);
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
        
        {/* Coffee bean silhouettes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`bean-${i}`}
            className="absolute w-3 h-2 bg-amber-600/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 3}s`,
              transform: `rotate(${Math.random() * 45}deg)`
            }}
          />
        ))}
        
        {/* Warm ambient lighting */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/2 right-1/3 w-80 h-80 bg-orange-200/20 rounded-full blur-2xl animate-breathe" style={{animationDelay: '3s'}} />
      </div>

      {/* Spectacular celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {/* Heart-shaped confetti explosion */}
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti-explosion"
              style={{
                left: '50%',
                top: '50%',
                fontSize: `${12 + Math.random() * 20}px`,
                animationDelay: `${Math.random() * 2}s`,
                '--random-x': `${(Math.random() - 0.5) * 300}vw`,
                '--random-y': `${(Math.random() - 0.5) * 300}vh`,
                '--rotation': `${Math.random() * 720}deg`,
              } as any}
            >
              {['💕', '💖', '💗', '💝', '💞', '❤️', '💓', '🌹'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
          
          {/* Golden sparkles cascading */}
          {[...Array(50)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute animate-cascade-sparkles"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10%',
                fontSize: `${8 + Math.random() * 12}px`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 3}s`,
              } as any}
            >
              ✨
            </div>
          ))}
          
          {/* Floating coffee beans and hearts */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`coffee-${i}`}
              className="absolute animate-float-celebration"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${10 + Math.random() * 15}px`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {Math.random() > 0.5 ? '☕' : '💕'}
            </div>
          ))}
          
          {/* Romantic success message with typewriter effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-12 shadow-3xl border border-white/60 animate-scale-celebration max-w-md">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-pulse-heart">💖</div>
                <div className="overflow-hidden">
                  <p className="font-playfair text-3xl md:text-4xl italic text-rose-800 mb-4 font-bold animate-typewriter">
                    She said YES!
                  </p>
                </div>
                <p className="font-poppins text-lg text-rose-600 animate-fade-in-delayed">
                  Taking you to the message section...
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-rose-400 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-rose-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Color temperature shift overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-pink-100/30 to-orange-100/40 animate-color-shift" />
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
