
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
      {/* Clean, sophisticated background */}
      <div className="absolute inset-0">
        {/* Base gradient - much cleaner */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-blush-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blush-100/20 via-transparent to-mauve-100/15" />
        
        {/* Subtle depth with very gentle radial gradients */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-cream-200/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blush-200/10 to-transparent rounded-full blur-2xl" />
        
        {/* Very subtle texture overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(244, 174, 174, 0.1) 0%, transparent 50%), 
                              radial-gradient(circle at 75% 75%, rgba(176, 152, 176, 0.1) 0%, transparent 50%)`
          }} />
        </div>
      </div>

      {/* Very subtle floating elements - much less distracting */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-blush-300 to-mauve-300 animate-pulse-gentle"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 px-4 max-w-5xl relative">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl italic text-mauve-800 mb-8 leading-tight">
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
            className="animate-float-in hover:scale-110 transition-all duration-500 focus:outline-none group"
            aria-label="Scroll to our story"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-full p-6 shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-white/70 group-hover:bg-white">
              <ArrowDown 
                size={28} 
                className="text-mauve-500 mx-auto cursor-pointer group-hover:text-mauve-700 transition-colors" 
              />
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
