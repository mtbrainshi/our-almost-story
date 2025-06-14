
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
      {/* Breathtaking romantic background */}
      <div className="absolute inset-0">
        {/* Multi-layered romantic gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/60 via-pink-50/40 to-orange-50/50" />
        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-50/30 via-transparent to-pink-100/40" />
        
        {/* Dreamy atmospheric layers */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-pink-200/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-radial from-rose-200/15 via-transparent to-transparent" />
        
        {/* Floating hearts of various sizes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/40 animate-float"
            style={{
              fontSize: `${12 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
          >
            {['💕', '💖', '💗', '💝', '💞'][Math.floor(Math.random() * 5)]}
          </div>
        ))}
        
        {/* Twinkling stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-yellow-300/50 animate-sparkle"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Soft romantic light orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-pink-300/25 to-transparent rounded-full blur-3xl animate-pulse-gentle" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-radial from-rose-300/20 to-transparent rounded-full blur-2xl animate-pulse-gentle" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-gradient-radial from-purple-300/15 to-transparent rounded-full blur-3xl animate-pulse-gentle" style={{animationDelay: '4s'}} />
        
        {/* Magical particle system */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-sparkle opacity-60"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#fbb6ce', '#f9a8d4', '#fde047', '#fb7185'][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(244, 174, 174, 0.2) 0%, transparent 50%), 
                              radial-gradient(circle at 75% 75%, rgba(192, 132, 252, 0.2) 0%, transparent 50%),
                              radial-gradient(circle at 50% 90%, rgba(251, 191, 36, 0.15) 0%, transparent 50%)`
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
            className="animate-float-in transition-all duration-500 focus:outline-none group hover:scale-110"
            aria-label="Scroll to our story"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-full p-4 shadow-2xl transition-all duration-500 border border-white/70 group-hover:bg-white group-hover:shadow-3xl">
              <ArrowDown 
                size={20} 
                className="text-rose-500 mx-auto cursor-pointer group-hover:text-rose-700 transition-colors animate-pulse-gentle" 
              />
            </div>
          </button>
        )}
      </div>

      {/* Additional floating romantic elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/6 left-1/8 text-3xl text-pink-400/60 animate-float" style={{animationDelay: '1s'}}>🌹</div>
        <div className="absolute top-3/4 right-1/8 text-2xl text-rose-400/60 animate-float" style={{animationDelay: '3s'}}>💐</div>
        <div className="absolute top-1/2 left-4/5 text-xl text-purple-400/60 animate-sparkle" style={{animationDelay: '5s'}}>✨</div>
        <div className="absolute top-1/3 left-1/12 text-lg text-yellow-400/60 animate-sparkle" style={{animationDelay: '2s'}}>⭐</div>
      </div>
    </section>
  );
};

export default Hero;
