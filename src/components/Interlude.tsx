import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Interlude = () => {
  const [isVisible, setIsVisible] = useState(false);
  const interludeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (interludeRef.current) {
      observer.observe(interludeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToFinalAsk = () => {
    const element = document.getElementById('final-ask-section') || 
                    document.querySelector('[data-section="final-ask-section"]');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={interludeRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mauve-100 via-blush-50 to-cream-100 relative overflow-hidden px-2 sm:px-4 md:px-8 py-8 sm:py-16"
    >
      {/* Enhanced dreamy background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-mauve-200/30 via-transparent to-blush-200/30" />
        <div className="absolute inset-0 bg-gradient-to-bl from-cream-200/20 via-transparent to-mauve-200/25" />
        
        {/* Floating dream bubbles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-blush-200 rounded-full opacity-20 animate-pulse-gentle"
            style={{
              width: `${30 + Math.random() * 80}px`,
              height: `${30 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              background: `radial-gradient(circle, ${['rgba(247, 174, 174, 0.08)', 'rgba(176, 152, 176, 0.08)', 'rgba(255, 237, 158, 0.08)'][Math.floor(Math.random() * 3)]} 0%, transparent 70%)`
            }}
          />
        ))}
        
        {/* Dreamy particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-sparkle opacity-25"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#f7aeae', '#b098b0', '#ffed9e'][Math.floor(Math.random() * 3)],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Soft ambient lighting */}
        <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-cream-200 rounded-full opacity-10 animate-pulse-gentle blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-56 h-56 bg-blush-200 rounded-full opacity-8 animate-pulse-gentle blur-3xl" style={{animationDelay: '2s'}} />
      </div>

      <div className={`max-w-5xl mx-auto text-center px-2 sm:px-8 transition-all duration-1500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="bg-white/90 backdrop-blur-lg rounded-3xl p-3 sm:p-8 md:p-16 shadow-2xl border border-white/50 relative overflow-hidden max-h-[90vh] overflow-y-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-cream-100/40 via-transparent to-blush-100/40 rounded-3xl" />
          
          <div className="relative z-10">
            <blockquote className="font-playfair text-base sm:text-2xl md:text-3xl lg:text-5xl italic text-mauve-800 leading-relaxed mb-4 sm:mb-8 font-medium break-words">
              "Sakshi, I’ve carried these words with me for so long... I had a crush on you, and today, I finally found the courage to say it out loud."
            </blockquote>
            
            <p className="font-poppins text-sm sm:text-lg md:text-xl text-mauve-600 mb-3 sm:mb-6 font-light leading-relaxed break-words">
              Sometimes the simplest truths are the hardest to say. But in your presence, even silence felt like poetry.
            </p>

            <p className="font-poppins text-sm sm:text-lg md:text-xl text-mauve-600 mb-4 sm:mb-8 font-light leading-relaxed opacity-90 break-words">
              I know this may be sudden, and we never really talked about it... but some feelings are worth the leap of faith.
            </p>
            
            <div className="flex justify-center space-x-6">
              <div className="w-3 h-3 bg-blush-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-mauve-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-cream-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation button at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Button
          onClick={scrollToFinalAsk}
          variant="ghost"
          className="group flex flex-col items-center gap-2 text-purple-600/70 hover:text-purple-800 transition-all duration-300 hover:scale-105 p-6"
        >
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/6 left-1/6 text-2xl text-blush-300 animate-sparkle">☁️</div>
        <div className="absolute top-2/3 right-1/6 text-xl text-mauve-300 animate-sparkle" style={{animationDelay: '3s'}}>☁️</div>
        <div className="absolute top-1/2 left-4/5 text-lg text-cream-400 animate-sparkle" style={{animationDelay: '4s'}}>✨</div>
      </div>
    </section>
  );
};

export default Interlude;
