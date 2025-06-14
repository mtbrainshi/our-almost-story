
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [showSubhead, setShowSubhead] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubhead(true), 4000);
    const timer2 = setTimeout(() => setShowArrow(true), 6000);

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
      {/* Multi-layered sophisticated background */}
      <div className="absolute inset-0">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blush-100 via-cream-50 to-mauve-100" />
        <div className="absolute inset-0 bg-gradient-to-tr from-mauve-200/40 via-transparent to-blush-200/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-100/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-blush-100/50 via-transparent to-mauve-100/50" />
        
        {/* Radial gradient overlays for depth */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cream-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-blush-200/25 to-transparent rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-radial from-mauve-200/20 to-transparent rounded-full blur-xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Enhanced floating elements with varied sizes and movements */}
      <div className="absolute inset-0 opacity-15">
        {/* Large floating orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blush-300 to-mauve-300 rounded-full animate-pulse-gentle blur-2xl"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-br from-mauve-300 to-cream-300 rounded-full animate-pulse-gentle blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-br from-cream-300 to-blush-300 rounded-full animate-pulse-gentle blur-3xl" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-br from-blush-200 to-mauve-200 rounded-full animate-pulse-gentle blur-2xl" style={{animationDelay: '3s'}}></div>
        
        {/* Medium floating elements */}
        <div className="absolute top-1/3 left-1/6 w-16 h-16 bg-gradient-to-br from-cream-400 to-blush-300 rounded-full animate-pulse-gentle blur-lg" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 right-1/6 w-20 h-20 bg-gradient-to-br from-mauve-300 to-cream-400 rounded-full animate-pulse-gentle blur-lg" style={{animationDelay: '5s'}}></div>
        
        {/* Sparkle particles with varied timing */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-sparkle"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#f7aeae', '#b098b0', '#ffed9e', '#fbd1d1'][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${3 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-5xl relative">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl italic text-mauve-800 mb-8 leading-tight drop-shadow-lg">
          <span className="block mb-6 animate-float-in animation-delay-1000 opacity-0" style={{animationFillMode: 'forwards'}}>Sakshi,</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-mauve-700 animate-float-in animation-delay-2000 opacity-0" style={{animationFillMode: 'forwards'}}>
            this is our story...
          </span>
        </h1>
        
        <div className="font-playfair text-2xl md:text-4xl lg:text-5xl italic text-mauve-600 mb-12 font-light animate-float-in animation-delay-3000 opacity-0" style={{animationFillMode: 'forwards'}}>
          The one I've been wanting to tell you.
        </div>

        {showSubhead && (
          <div className="animate-float-in">
            <p className="font-poppins text-xl md:text-2xl text-mauve-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              From those quiet classroom days to the rainy afternoons...
              <br />
              <span className="text-mauve-500 italic text-lg">scroll down to see where it all began.</span>
            </p>
          </div>
        )}

        {showArrow && (
          <button
            onClick={scrollToStory}
            className="animate-float-in animate-pulse-gentle hover:scale-110 transition-all duration-500 focus:outline-none group"
            aria-label="Scroll to our story"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-full p-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/60 group-hover:bg-white">
              <ArrowDown 
                size={36} 
                className="text-mauve-500 mx-auto cursor-pointer group-hover:text-mauve-700 transition-colors" 
              />
            </div>
          </button>
        )}
      </div>

      {/* Subtle geometric patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-8">
        <div className="absolute top-1/4 left-1/4 w-2 h-32 bg-blush-300 transform rotate-45 blur-sm"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-24 bg-mauve-300 transform -rotate-45 blur-sm"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-20 bg-cream-400 transform rotate-12 blur-sm"></div>
      </div>
    </section>
  );
};

export default Hero;
