
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
        // Classroom ambiance with floating dust particles
        return (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cream-300 rounded-full opacity-30 animate-sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-100/20 via-transparent to-blush-100/20" />
          </div>
        );
      
      case 2:
        // Warm golden hour with bokeh effects - NO RAIN
        return (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-cream-300 to-blush-200 opacity-20 animate-pulse-gentle"
                style={{
                  width: `${20 + Math.random() * 40}px`,
                  height: `${20 + Math.random() * 40}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  filter: 'blur(8px)'
                }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-cream-200/30 via-blush-100/20 to-mauve-100/30" />
          </div>
        );
      
      case 3:
        // Cozy coding atmosphere with screen glows
        return (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-blush-300 animate-sparkle opacity-40"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  fontSize: `${12 + Math.random() * 6}px`,
                  filter: 'blur(1px)'
                }}
              >
                ✨
              </div>
            ))}
            <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-blush-200 rounded-full opacity-10 animate-pulse-gentle blur-3xl" />
            <div className="absolute bottom-1/3 right-1/5 w-24 h-24 bg-mauve-200 rounded-full opacity-15 animate-pulse-gentle blur-2xl" style={{animationDelay: '1.5s'}} />
          </div>
        );
      
      case 4:
        // Dark stormy atmosphere with rain effects
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* Dark stormy background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-400/30 via-slate-500/20 to-slate-600/30" />
            
            {/* Rain drops */}
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute w-0.5 h-8 bg-slate-300 opacity-60 animate-rain-drop"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1 + Math.random() * 1.5}s`,
                  transform: `rotate(15deg)`
                }}
              />
            ))}
            
            {/* Storm clouds effect */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-slate-400/40 to-transparent" />
            
            {/* Lightning flash effect */}
            <div className="absolute inset-0 bg-white opacity-0 animate-pulse" style={{animationDuration: '4s', animationDelay: '2s'}} />
          </div>
        );
      
      default:
        return null;
    }
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
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Enhanced front of card with overlay hint */}
            <div className="absolute inset-0 backface-hidden">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl transform rotate-1 group-hover:rotate-0 transition-all duration-500 border-4 border-white/80 relative overflow-hidden">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={image}
                    alt={frontContent}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Tap hint overlay on the image itself */}
                  {!isFlipped && isVisible && (
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-pulse-gentle">
                        <p className="text-sm text-mauve-700 font-poppins font-medium">💝 Tap to read my heart</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-playfair text-xl md:text-2xl italic text-mauve-700 mb-3 font-semibold">{title}</h3>
                  <p className="text-sm md:text-base text-mauve-500 font-poppins leading-relaxed">{frontContent}</p>
                </div>
              </div>
            </div>

            {/* Enhanced back of card - removed three dots */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="bg-gradient-to-br from-cream-50 to-blush-50 p-8 rounded-2xl shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-all duration-500 border-4 border-white/80 h-full flex items-center justify-center backdrop-blur-sm">
                <blockquote className="text-center">
                  <div className="mb-6 text-blush-400 text-3xl">♡</div>
                  <p className="font-playfair text-lg md:text-xl italic text-mauve-800 leading-relaxed mb-6 font-medium">
                    "{backContent}"
                  </p>
                  {/* Removed the three dots animation that was confusing */}
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating micro-interactions */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-8 w-2 h-2 bg-blush-300 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/6 right-8 w-3 h-3 bg-mauve-300 rounded-full animate-pulse opacity-50" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-cream-400 rounded-full animate-sparkle opacity-60" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Chapter;
