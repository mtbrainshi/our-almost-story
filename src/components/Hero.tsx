
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [showSubhead, setShowSubhead] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubhead(true), 3500);
    const timer2 = setTimeout(() => setShowArrow(true), 5000);

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
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Enhanced layered background with sophisticated gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blush-100 via-cream-50 to-mauve-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-mauve-100/30 via-transparent to-blush-100/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-100/15 to-transparent" />
      </div>

      {/* Enhanced background pattern with depth and movement */}
      <div className="absolute inset-0 opacity-12">
        <div className="absolute top-20 left-20 w-20 h-20 bg-gradient-to-br from-blush-300 to-mauve-300 rounded-full animate-pulse-gentle blur-xl"></div>
        <div className="absolute top-40 right-32 w-14 h-14 bg-gradient-to-br from-mauve-300 to-cream-300 rounded-full animate-pulse-gentle blur-lg" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-32 left-40 w-28 h-28 bg-gradient-to-br from-cream-300 to-blush-300 rounded-full animate-pulse-gentle blur-2xl" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-br from-blush-200 to-mauve-200 rounded-full animate-pulse-gentle blur-xl" style={{animationDelay: '2s'}}></div>
        
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-sparkle"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#f7aeae', '#b098b0', '#ffed9e', '#fbd1d1'][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-5xl relative">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl italic text-mauve-800 mb-8 leading-tight drop-shadow-sm">
          <span className="block mb-4 animate-float-in animation-delay-500">Sakshi,</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-mauve-700 animate-float-in animation-delay-1000">
            this is our story...
          </span>
        </h1>
        
        <div className="font-playfair text-2xl md:text-4xl lg:text-5xl italic text-mauve-600 mb-10 font-light animate-float-in animation-delay-2000">
          The one I've been wanting to tell you.
        </div>

        {showSubhead && (
          <div className="animate-float-in">
            <p className="font-poppins text-xl md:text-2xl text-mauve-600 mb-10 font-light leading-relaxed max-w-3xl mx-auto">
              From those quiet classroom days to the rainy afternoons...
              <br />
              <span className="text-mauve-500 italic text-lg">scroll down to see where it all began.</span>
            </p>
          </div>
        )}

        {showArrow && (
          <button
            onClick={scrollToStory}
            className="animate-float-in animate-pulse-gentle hover:scale-110 transition-all duration-300 focus:outline-none group"
            aria-label="Scroll to our story"
          >
            <div className="bg-white/90 backdrop-blur-md rounded-full p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-300 border border-white/50">
              <ArrowDown 
                size={32} 
                className="text-mauve-500 mx-auto cursor-pointer group-hover:text-mauve-700 transition-colors" 
              />
            </div>
          </button>
        )}
      </div>

      {/* Subtle floating hearts */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-1/5 left-1/5 text-2xl text-blush-300 animate-sparkle opacity-50">♡</div>
        <div className="absolute top-2/3 right-1/5 text-xl text-mauve-300 animate-sparkle opacity-50" style={{animationDelay: '2s'}}>♡</div>
        <div className="absolute top-1/2 left-3/5 text-lg text-cream-400 animate-sparkle opacity-50" style={{animationDelay: '4s'}}>♡</div>
      </div>
    </section>
  );
};

export default Hero;
