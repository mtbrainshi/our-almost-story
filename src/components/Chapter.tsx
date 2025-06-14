
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
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cream-300 rounded-full opacity-20 animate-sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-100/10 via-transparent to-blush-100/10" />
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-cream-200 rounded-full opacity-5 animate-pulse-gentle blur-3xl" />
          </div>
        );
      
      case 2:
        // Warm golden hour with bokeh effects - NO RAIN
        return (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-gradient-to-br from-cream-300 to-blush-200 opacity-15 animate-pulse-gentle"
                style={{
                  width: `${15 + Math.random() * 30}px`,
                  height: `${15 + Math.random() * 30}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  filter: 'blur(6px)'
                }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-tr from-cream-200/20 via-blush-100/10 to-mauve-100/20" />
            <div className="absolute top-1/6 right-1/4 w-24 h-24 bg-cream-300 rounded-full opacity-10 animate-pulse-gentle blur-2xl" />
          </div>
        );
      
      case 3:
        // Cozy coding atmosphere with screen glows
        return (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-blush-300 animate-sparkle opacity-30"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  fontSize: `${10 + Math.random() * 4}px`,
                  filter: 'blur(0.5px)'
                }}
              >
                ✨
              </div>
            ))}
            <div className="absolute top-1/4 left-1/6 w-28 h-28 bg-blush-200 rounded-full opacity-8 animate-pulse-gentle blur-3xl" />
            <div className="absolute bottom-1/3 right-1/5 w-20 h-20 bg-mauve-200 rounded-full opacity-12 animate-pulse-gentle blur-2xl" style={{animationDelay: '1.5s'}} />
          </div>
        );
      
      case 4:
        // Enhanced stormy atmosphere with dramatic rain effects
        return (
          <div className="absolute inset-0 pointer-events-none">
            {/* Dark stormy background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-600/40 via-slate-700/30 to-slate-800/40" />
            
            {/* Heavy rain drops */}
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-slate-300 opacity-70 animate-rain-drop"
                style={{
                  width: '1px',
                  height: `${8 + Math.random() * 12}px`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.8 + Math.random() * 1}s`,
                  transform: `rotate(12deg)`,
                  background: 'linear-gradient(to bottom, rgba(148, 163, 184, 0.8), rgba(148, 163, 184, 0.2))'
                }}
              />
            ))}
            
            {/* Storm clouds effect */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-500/50 to-transparent" />
            
            {/* Lightning flash effect */}
            <div className="absolute inset-0 bg-white opacity-0 animate-pulse" style={{animationDuration: '5s', animationDelay: '3s'}} />
            
            {/* Rain puddle reflections */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-slate-400/20 to-transparent" />
            
            {/* Wind effect with diagonal rain streaks */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`wind-${i}`}
                className="absolute bg-slate-200 opacity-40 animate-rain-drop"
                style={{
                  width: '2px',
                  height: `${20 + Math.random() * 30}px`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${1.2 + Math.random() * 1.5}s`,
                  transform: `rotate(20deg)`,
                }}
              />
            ))}
          </div>
        );
      
      default:
        return null;
    }
  };

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
            {/* Front of card */}
            <div className="absolute inset-0 backface-hidden">
              <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl transform rotate-1 group-hover:rotate-0 transition-all duration-500 border-4 border-white/80 relative overflow-hidden">
                <div className="relative overflow-hidden rounded-xl mb-4 group">
                  <img
                    src={image}
                    alt={frontContent}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Tap hint overlay that appears on hover */}
                  <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg animate-pulse-gentle">
                      <p className="text-sm text-mauve-700 font-poppins font-medium">💝 Tap to read my heart</p>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-playfair text-xl md:text-2xl italic text-mauve-700 mb-3 font-semibold">{title}</h3>
                  <p className="text-sm md:text-base text-mauve-500 font-poppins leading-relaxed">{frontContent}</p>
                </div>
              </div>
            </div>

            {/* Back of card - clean and simple */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="bg-gradient-to-br from-cream-50 to-blush-50 p-8 rounded-2xl shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-all duration-500 border-4 border-white/80 h-full flex items-center justify-center backdrop-blur-sm">
                <blockquote className="text-center">
                  <div className="mb-6 text-blush-400 text-3xl">♡</div>
                  <p className="font-playfair text-lg md:text-xl italic text-mauve-800 leading-relaxed font-medium">
                    "{backContent}"
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-8 w-2 h-2 bg-blush-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-1/6 right-8 w-3 h-3 bg-mauve-300 rounded-full animate-pulse opacity-30" style={{animationDelay: '1.5s'}}></div>
      </div>
    </section>
  );
};

export default Chapter;
