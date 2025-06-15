import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [showSubhead, setShowSubhead] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowSubhead(true), 3000);
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
      {/* Simple Aurora-style Background - Clean Gradients Only */}
      <div className="absolute inset-0">
        {/* Base aurora gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50" />
        
        {/* Aurora layers for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/60 via-pink-50/80 to-yellow-50/50" />
        <div className="absolute inset-0 bg-gradient-to-bl from-rose-50/70 via-transparent to-pink-50/60" />
        
        {/* Soft aurora glow effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-radial from-pink-200/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-rose-200/30 to-transparent rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-orange-200/25 to-transparent rounded-full blur-2xl" />
        </div>
      </div>

      <div className="text-center z-10 px-4 max-w-5xl relative">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl italic text-rose-800 mb-8 leading-tight">
          <span className="block mb-6 opacity-0 animate-elegant-fade-up" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>Sakshi,</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-rose-700 opacity-0 animate-elegant-fade-up" style={{animationDelay: '1500ms', animationFillMode: 'forwards'}}>
            this is our story...
          </span>
        </h1>
        
        <div className="font-playfair text-2xl md:text-4xl lg:text-5xl italic text-rose-600 mb-12 font-light opacity-0 animate-elegant-fade-up" style={{animationDelay: '2500ms', animationFillMode: 'forwards'}}>
          The one I've been wanting to tell you.
        </div>

        {showSubhead && (
          <div className="opacity-0 animate-elegant-fade-up" style={{animationFillMode: 'forwards'}}>
            <p className="font-poppins text-xl md:text-2xl text-rose-600 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              From those quiet classroom days to the rainy afternoons...
              <br />
              <span className="text-rose-500 italic text-lg">scroll down to see where it all began.</span>
            </p>
          </div>
        )}

        {showArrow && (
          <button
            onClick={scrollToStory}
            className="opacity-0 animate-elegant-fade-up transition-all duration-500 focus:outline-none group hover:opacity-100"
            style={{animationFillMode: 'forwards'}}
            aria-label="Scroll to our story"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-full p-3 shadow-2xl transition-all duration-500 border border-white/70 group-hover:bg-white group-hover:shadow-3xl group-hover:scale-110">
              <ArrowDown 
                size={16} 
                className="text-rose-500 mx-auto cursor-pointer group-hover:text-rose-700 transition-colors animate-pulse-gentle" 
              />
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default Hero;
