
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
    }, 3000);
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
      {/* Enhanced romantic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/40 via-transparent to-rose-100/30" />
        
        {/* Floating hearts for romance */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/40 animate-float"
            style={{
              fontSize: `${10 + Math.random() * 15}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${5 + Math.random() * 4}s`,
            }}
          >
            💕
          </div>
        ))}
        
        {/* Ambient lighting */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-pink-200/20 rounded-full blur-3xl animate-pulse-gentle" />
        <div className="absolute bottom-1/2 right-1/3 w-80 h-80 bg-rose-200/15 rounded-full blur-2xl animate-pulse-gentle" style={{animationDelay: '2s'}} />
      </div>

      {/* Celebration overlay */}
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
          {/* Heart explosion */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-500 animate-heart-explosion"
              style={{
                left: '50%',
                top: '50%',
                fontSize: `${15 + Math.random() * 25}px`,
                animationDelay: `${Math.random() * 2}s`,
                '--random-x': `${(Math.random() - 0.5) * 200}vw`,
                '--random-y': `${(Math.random() - 0.5) * 200}vh`,
              } as any}
            >
              {['💕', '💖', '💗', '💝', '💞', '❤️', '💓'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
          
          {/* Sparkle confetti */}
          {[...Array(30)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute text-yellow-400 animate-sparkle-confetti"
              style={{
                left: '50%',
                top: '50%',
                fontSize: `${10 + Math.random() * 15}px`,
                animationDelay: `${Math.random() * 3}s`,
                '--random-x': `${(Math.random() - 0.5) * 150}vw`,
                '--random-y': `${(Math.random() - 0.5) * 150}vh`,
              } as any}
            >
              ✨
            </div>
          ))}
          
          {/* Success message */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-3xl border border-white/60 animate-scale-in">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse-gentle">💖</div>
                <p className="font-playfair text-2xl md:text-3xl italic text-rose-800 mb-2 font-bold">
                  YES! 
                </p>
                <p className="font-poppins text-lg text-rose-600">
                  Scrolling to the message section...
                </p>
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
              {/* Coffee icon with glow */}
              <div className="mb-8 flex justify-center">
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 p-6 rounded-full shadow-lg relative">
                  <Coffee size={48} className="text-amber-700" />
                  <div className="absolute inset-0 bg-amber-300/20 rounded-full blur-xl animate-pulse-gentle"></div>
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
                    <Coffee size={24} />
                    <span className="relative z-10">Yes, I'd love to!</span>
                    <div className="absolute inset-0 animate-sparkle opacity-30">✨</div>
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

      {/* Floating romantic elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/6 left-8 text-pink-400/60 animate-float text-lg">🌹</div>
        <div className="absolute bottom-1/6 right-8 text-rose-400/60 animate-float text-xl" style={{animationDelay: '2s'}}>💐</div>
        <div className="absolute top-2/3 left-1/4 text-yellow-400/60 animate-sparkle text-sm" style={{animationDelay: '1s'}}>⭐</div>
      </div>
    </section>
  );
};

export default FinalAsk;
