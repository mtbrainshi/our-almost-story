
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
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Enhanced layered background with sophisticated gradients */}
      <div className="absolute inset-0">
        {/* Primary gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-blush-100 via-cream-50 to-mauve-50" />
        
        {/* Secondary overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-mauve-100/40 via-transparent to-blush-100/40" />
        
        {/* Tertiary atmospheric layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-100/20 to-transparent" />
      </div>

      {/* Enhanced background pattern with depth and movement */}
      <div className="absolute inset-0 opacity-15">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-blush-300 to-mauve-300 rounded-full animate-pulse-gentle blur-xl"></div>
        <div className="absolute top-40 right-32 w-16 h-16 bg-gradient-to-br from-mauve-300 to-cream-300 rounded-full animate-pulse-gentle blur-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-32 h-32 bg-gradient-to-br from-cream-300 to-blush-300 rounded-full animate-pulse-gentle blur-2xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-gradient-to-br from-blush-200 to-mauve-200 rounded-full animate-pulse-gentle blur-xl" style={{animationDelay: '1.5s'}}></div>
        
        {/* Smaller floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-sparkle"
            style={{
              width: `${2 + Math.random() * 6}px`,
              height: `${2 + Math.random() * 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#f7aeae', '#b098b0', '#ffed9e', '#fbd1d1'][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-5xl relative">
        {/* Enhanced typography with better hierarchy */}
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl italic text-mauve-800 mb-8 leading-tight drop-shadow-sm">
          <span className="block mb-4 animate-float-in">Sakshi,</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-mauve-700 animate-float-in" style={{animationDelay: '0.5s'}}>
            this is our story...
          </span>
        </h1>
        
        <div className="font-playfair text-2xl md:text-4xl lg:text-5xl italic text-mauve-600 mb-10 font-light animate-float-in" style={{animationDelay: '1s'}}>
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

      {/* Enhanced floating hearts and romantic elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/5 text-3xl text-blush-300 animate-sparkle opacity-70">♡</div>
        <div className="absolute top-2/3 right-1/5 text-2xl text-mauve-300 animate-sparkle opacity-70" style={{animationDelay: '1.2s'}}>♡</div>
        <div className="absolute top-1/2 left-3/5 text-xl text-cream-400 animate-sparkle opacity-70" style={{animationDelay: '2s'}}>♡</div>
        <div className="absolute bottom-1/4 left-1/2 text-2xl text-blush-400 animate-sparkle opacity-60" style={{animationDelay: '0.5s'}}>✨</div>
        <div className="absolute top-3/4 left-1/6 text-xl text-mauve-400 animate-sparkle opacity-60" style={{animationDelay: '2.5s'}}>💫</div>
        <div className="absolute top-1/3 right-1/4 text-lg text-blush-200 animate-sparkle opacity-60" style={{animationDelay: '1.8s'}}>🌸</div>
      </div>

      {/* Parallax layers that will respond to scroll */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blush-400 rounded-full animate-pulse-gentle"></div>
        <div className="absolute top-20 right-16 w-1 h-1 bg-mauve-400 rounded-full animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-24 left-24 w-3 h-3 bg-cream-400 rounded-full animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-16 right-12 w-2 h-2 bg-blush-300 rounded-full animate-pulse-gentle" style={{animationDelay: '1.5s'}}></div>
      </div>
    </section>
  );
};

export default Hero;
