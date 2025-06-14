
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [showSubhead, setShowSubhead] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubhead(true), 2000);
    const timer2 = setTimeout(() => setShowArrow(true), 3000);

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
      {/* Enhanced background pattern with more depth */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-3 h-3 bg-blush-400 rounded-full animate-pulse-gentle"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-mauve-400 rounded-full animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-4 h-4 bg-cream-400 rounded-full animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-blush-300 rounded-full animate-pulse-gentle" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-mauve-300 rounded-full animate-sparkle"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-blush-200 rounded-full animate-sparkle" style={{animationDelay: '0.8s'}}></div>
      </div>

      <div className="text-center z-10 px-4 max-w-5xl">
        {/* More personal and intimate heading */}
        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl italic text-mauve-800 mb-6 leading-tight">
          <span className="block mb-2">Sakshi,</span>
          <span className="block text-3xl md:text-5xl lg:text-6xl text-mauve-700">this is our story...</span>
        </h1>
        
        <div className="font-playfair text-2xl md:text-3xl lg:text-4xl italic text-mauve-600 mb-8 font-light">
          The one I've been wanting to tell you.
        </div>

        {showSubhead && (
          <div className="animate-float-in">
            <p className="font-poppins text-lg md:text-xl text-mauve-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              From those quiet classroom days to the rainy afternoons...
              <br />
              <span className="text-mauve-500 italic">scroll down to see where it all began.</span>
            </p>
          </div>
        )}

        {showArrow && (
          <button
            onClick={scrollToStory}
            className="animate-float-in animate-pulse-gentle hover:scale-110 transition-all duration-300 focus:outline-none group"
            aria-label="Scroll to our story"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <ArrowDown 
                size={28} 
                className="text-mauve-500 mx-auto cursor-pointer group-hover:text-mauve-700 transition-colors" 
              />
            </div>
          </button>
        )}
      </div>

      {/* Enhanced floating hearts with better positioning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/5 text-2xl text-blush-300 animate-sparkle opacity-60">♡</div>
        <div className="absolute top-2/3 right-1/5 text-xl text-mauve-300 animate-sparkle opacity-60" style={{animationDelay: '1.2s'}}>♡</div>
        <div className="absolute top-1/2 left-3/5 text-lg text-cream-400 animate-sparkle opacity-60" style={{animationDelay: '2s'}}>♡</div>
        <div className="absolute bottom-1/4 left-1/2 text-xl text-blush-400 animate-sparkle opacity-50" style={{animationDelay: '0.5s'}}>✨</div>
      </div>
    </section>
  );
};

export default Hero;
