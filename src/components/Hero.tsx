
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [showSubhead, setShowSubhead] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubhead(true), 1500);
    const timer2 = setTimeout(() => setShowArrow(true), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scrollToStory = () => {
    const firstChapter = document.querySelector('[data-chapter="1"]');
    firstChapter?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blush-100 via-cream-50 to-mauve-50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blush-400 rounded-full"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-mauve-400 rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-cream-400 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-blush-300 rounded-full"></div>
      </div>

      <div className="text-center z-10 px-4 max-w-4xl">
        <h1 className="font-playfair text-5xl md:text-7xl italic text-mauve-800 mb-8 overflow-hidden whitespace-nowrap border-r-2 border-mauve-600 animate-typing">
          This isn't just a website…
        </h1>
        
        <div className="font-playfair text-4xl md:text-6xl italic text-mauve-700 mb-12 overflow-hidden whitespace-nowrap">
          it's our story.
        </div>

        {showSubhead && (
          <div className="animate-float-in">
            <p className="font-poppins text-lg md:text-xl text-mauve-600 mb-16 font-light">
              Scroll down to see how it began.
            </p>
          </div>
        )}

        {showArrow && (
          <button
            onClick={scrollToStory}
            className="animate-float-in animate-pulse-gentle hover:scale-110 transition-transform duration-300 focus:outline-none"
            aria-label="Scroll to story"
          >
            <ArrowDown 
              size={32} 
              className="text-mauve-500 mx-auto cursor-pointer hover:text-mauve-700 transition-colors" 
            />
          </button>
        )}
      </div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 text-blush-300 animate-sparkle opacity-60">♡</div>
        <div className="absolute top-3/4 right-1/4 text-mauve-300 animate-sparkle opacity-60" style={{animationDelay: '0.8s'}}>♡</div>
        <div className="absolute top-1/2 left-3/4 text-cream-400 animate-sparkle opacity-60" style={{animationDelay: '1.2s'}}>♡</div>
      </div>
    </section>
  );
};

export default Hero;
