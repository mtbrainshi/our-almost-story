
import { useState, useEffect, useRef } from "react";

interface ChapterProps {
  id: number;
  title: string;
  background: string;
  image: string;
  frontContent: string;
  backContent: string;
  animation: string;
  isActive: boolean;
}

const Chapter = ({ id, title, background, image, frontContent, backContent, animation, isActive }: ChapterProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const chapterRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (chapterRef.current) {
      observer.observe(chapterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0 translate-y-10";
    return "animate-float-in";
  };

  const getChapterAtmosphere = () => {
    switch (id) {
      case 1:
        // Warm classroom ambiance with floating dust particles
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Layered warm backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-100/40 via-blush-50/30 to-mauve-50/40" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cream-200/20 via-transparent to-blush-100/30" />
            
            {/* Floating dust particles */}
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cream-300 rounded-full opacity-30 animate-sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${4 + Math.random() * 6}s`
                }}
              />
            ))}
            
            {/* Soft ambient lights */}
            <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-cream-200 rounded-full opacity-10 animate-pulse-gentle blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blush-200 rounded-full opacity-8 animate-pulse-gentle blur-2xl" style={{animationDelay: '2s'}} />
          </div>
        );
      
      case 2:
        // Golden hour warmth with bokeh effects (no rain)
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Warm golden backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-200/50 via-blush-100/40 to-mauve-100/30" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cream-300/30 via-transparent to-blush-200/40" />
            
            {/* Bokeh light effects */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-cream-300 to-blush-200 opacity-20 animate-pulse-gentle"
                style={{
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  filter: 'blur(8px)'
                }}
              />
            ))}
            
            {/* Golden hour lighting */}
            <div className="absolute top-1/6 right-1/4 w-48 h-48 bg-cream-300 rounded-full opacity-15 animate-pulse-gentle blur-3xl" />
            <div className="absolute bottom-1/4 left-1/6 w-36 h-36 bg-blush-300 rounded-full opacity-12 animate-pulse-gentle blur-2xl" style={{animationDelay: '1.5s'}} />
          </div>
        );
      
      case 3:
        // Cozy evening coding atmosphere with screen glows
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Cozy evening backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-br from-mauve-100/40 via-blush-50/30 to-cream-100/40" />
            <div className="absolute inset-0 bg-gradient-to-bl from-mauve-200/20 via-transparent to-cream-200/30" />
            
            {/* Screen glow effects */}
            <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-blush-200 rounded-full opacity-15 animate-pulse-gentle blur-3xl" />
            <div className="absolute bottom-1/3 right-1/5 w-28 h-28 bg-mauve-200 rounded-full opacity-18 animate-pulse-gentle blur-2xl" style={{animationDelay: '1.5s'}} />
            <div className="absolute top-2/3 left-1/2 w-24 h-24 bg-cream-300 rounded-full opacity-12 animate-pulse-gentle blur-xl" style={{animationDelay: '3s'}} />
            
            {/* Floating sparkles for cozy atmosphere */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-blush-300 animate-sparkle opacity-40"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  fontSize: `${8 + Math.random() * 6}px`,
                  filter: 'blur(0.5px)'
                }}
              >
                ✨
              </div>
            ))}
          </div>
        );
      
      case 4:
        // Intense stormy atmosphere with dramatic rain effects
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Dark stormy background layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700/60 via-slate-800/50 to-slate-900/40" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-600/40 via-slate-700/30 to-slate-800/50" />
            
            {/* Storm clouds */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-600/60 to-transparent" />
            <div className="absolute top-0 right-0 w-2/3 h-1/3 bg-gradient-to-bl from-slate-500/50 to-transparent" />
            
            {/* Heavy rain drops - multiple layers for depth */}
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-slate-300 opacity-70 animate-rain-drop"
                style={{
                  width: '1.5px',
                  height: `${10 + Math.random() * 15}px`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.6 + Math.random() * 1.2}s`,
                  transform: `rotate(15deg)`,
                  background: 'linear-gradient(to bottom, rgba(148, 163, 184, 0.9), rgba(148, 163, 184, 0.3))'
                }}
              />
            ))}
            
            {/* Wind-driven rain streaks */}
            {[...Array(25)].map((_, i) => (
              <div
                key={`wind-${i}`}
                className="absolute bg-slate-200 opacity-50 animate-rain-drop"
                style={{
                  width: '2px',
                  height: `${25 + Math.random() * 35}px`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 1.8}s`,
                  transform: `rotate(25deg)`,
                }}
              />
            ))}
            
            {/* Lightning flash effect */}
            <div className="absolute inset-0 bg-white opacity-0 animate-pulse" 
                 style={{
                   animationDuration: '6s', 
                   animationDelay: '4s',
                   animationIterationCount: 'infinite'
                 }} />
            
            {/* Rain puddle reflections */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-500/30 to-transparent" />
            
            {/* Thunder clouds movement */}
            <div className="absolute top-1/6 left-1/4 w-64 h-32 bg-slate-600 rounded-full opacity-20 animate-pulse-gentle blur-3xl" />
            <div className="absolute top-1/3 right-1/5 w-48 h-24 bg-slate-700 rounded-full opacity-25 animate-pulse-gentle blur-2xl" style={{animationDelay: '2s'}} />
          </div>
        );
      
      default:
        return null;
    }
  };

  // Simple click handler for card flipping
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      ref={chapterRef}
      data-chapter={id}
      className={`min-h-screen flex items-center justify-center ${background} relative overflow-hidden transition-all duration-1000`}
    >
      {/* Chapter-specific atmospheric effects */}
      {getChapterAtmosphere()}

      <div className={`transition-all duration-1000 ${getAnimationClass()}`}>
        <div className="perspective-1000">
          <div
            className={`relative w-80 h-96 md:w-96 md:h-[450px] cursor-pointer transition-transform duration-700 preserve-3d group ${
              isFlipped ? "rotate-y-180" : ""
            } hover:scale-105`}
            onClick={handleCardClick}
          >
            {/* Front of card - Enhanced design */}
            <div className="absolute inset-0 backface-hidden">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl transform rotate-1 group-hover:rotate-0 transition-all duration-500 border border-white/60 relative overflow-hidden">
                {/* Card glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blush-100/20 via-transparent to-mauve-100/20 rounded-3xl" />
                
                <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={image}
                    alt={frontContent}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Click hint that appears on hover */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/50 animate-pulse-gentle">
                      <p className="text-sm text-mauve-700 font-poppins font-medium">💝 Click to read my heart</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center relative z-10">
                  <h3 className="font-playfair text-xl md:text-2xl italic text-mauve-700 mb-4 font-semibold leading-tight">{title}</h3>
                  <p className="text-sm md:text-base text-mauve-600 font-poppins leading-relaxed">{frontContent}</p>
                </div>
              </div>
            </div>

            {/* Back of card - Enhanced story display */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="bg-gradient-to-br from-cream-50 to-blush-50 p-8 rounded-3xl shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-all duration-500 border border-white/60 h-full flex items-center justify-center backdrop-blur-md relative overflow-hidden">
                {/* Story card glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cream-100/30 via-transparent to-blush-100/30 rounded-3xl" />
                
                <blockquote className="text-center relative z-10">
                  <div className="mb-8 text-blush-400 text-4xl animate-pulse-gentle">♡</div>
                  <p className="font-playfair text-lg md:text-xl italic text-mauve-800 leading-relaxed font-medium mb-6">
                    "{backContent}"
                  </p>
                  <div className="text-xs text-mauve-500 font-poppins opacity-70">
                    Click to go back
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-8 w-3 h-3 bg-blush-300 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-1/6 right-8 w-4 h-4 bg-mauve-300 rounded-full animate-pulse opacity-40" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-cream-400 rounded-full animate-pulse opacity-30" style={{animationDelay: '3s'}}></div>
      </div>
    </section>
  );
};

export default Chapter;
