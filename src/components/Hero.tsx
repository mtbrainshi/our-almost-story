
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
      {/* Sophisticated aurora-like background - NO EMOJIS */}
      <div className="absolute inset-0">
        {/* Multi-layered dreamy gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/40 via-pink-50/60 to-orange-50/30" />
        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-50/20 via-transparent to-pink-100/30" />
        
        {/* Aurora-like effects */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-conic from-pink-200/40 via-transparent to-rose-200/30 animate-spin-slow" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-conic from-rose-200/30 via-transparent to-pink-200/40 animate-spin-slow" style={{animationDirection: 'reverse', animationDuration: '25s'}} />
        </div>
        
        {/* Sophisticated floating geometric shapes ONLY - NO EMOJIS */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-pink-200/30 to-rose-300/20 animate-float blur-sm"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
        
        {/* Twinkling light particles - geometric ONLY */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-gradient-to-br from-yellow-300/60 to-orange-300/40 animate-twinkle"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Dynamic floating light orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-pink-300/25 to-transparent rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-rose-300/20 to-transparent rounded-full blur-2xl animate-breathe" style={{animationDelay: '3s'}} />
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-radial from-purple-300/15 to-transparent rounded-full blur-3xl animate-breathe" style={{animationDelay: '6s'}} />
        
        {/* Dreamy texture overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(244, 174, 174, 0.3) 0%, transparent 60%), 
                              radial-gradient(circle at 80% 70%, rgba(192, 132, 252, 0.25) 0%, transparent 60%),
                              radial-gradient(circle at 40% 80%, rgba(251, 191, 36, 0.2) 0%, transparent 60%)`
          }} />
        </div>
      </div>

      <div className="text-center z-10 px-4 max-w-5xl relative">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl italic text-rose-800 mb-8 leading-tight">
          <span className="block mb-6 animate-float-in animation-delay-1000 opacity-0" style={{animationFillMode: 'forwards'}}>Sakshi,</span>
          <span className="block text-4xl md:text-6xl lg:text-7xl text-rose-700 animate-float-in animation-delay-2000 opacity-0" style={{animationFillMode: 'forwards'}}>
            this is our story...
          </span>
        </h1>
        
        <div className="font-playfair text-2xl md:text-4xl lg:text-5xl italic text-rose-600 mb-12 font-light animate-float-in animation-delay-3000 opacity-0" style={{animationFillMode: 'forwards'}}>
          The one I've been wanting to tell you.
        </div>

        {showSubhead && (
          <div className="animate-float-in">
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
            className="animate-float-in transition-all duration-500 focus:outline-none group opacity-0 hover:opacity-100"
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
