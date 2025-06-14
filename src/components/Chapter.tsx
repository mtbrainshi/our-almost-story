
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
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cream-100/30 via-blush-50/20 to-mauve-50/25" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cream-200/15 via-transparent to-blush-100/20" />
            
            <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-cream-200/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-blush-200/12 blur-2xl" />
          </div>
        );
      
      case 2:
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cream-200/40 via-blush-100/30 to-mauve-100/25" />
            <div className="absolute inset-0 bg-gradient-to-tr from-cream-300/20 via-transparent to-blush-200/30" />
            
            <div className="absolute top-1/6 right-1/4 w-48 h-48 bg-cream-300/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/6 w-36 h-36 bg-blush-300/18 blur-2xl" />
          </div>
        );
      
      case 3:
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-mauve-100/30 via-blush-50/25 to-cream-100/30" />
            <div className="absolute inset-0 bg-gradient-to-bl from-mauve-200/15 via-transparent to-cream-200/25" />
            
            <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-blush-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 right-1/5 w-28 h-28 bg-mauve-200/25 blur-2xl" />
          </div>
        );
      
      case 4:
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-700/40 via-slate-800/30 to-slate-900/25" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-600/25 via-slate-700/20 to-slate-800/30" />
            
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-600/40 to-transparent" />
            
            {[...Array(60)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-slate-300/60 animate-rain-drop"
                style={{
                  width: '1.5px',
                  height: `${8 + Math.random() * 12}px`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.8 + Math.random() * 1}s`,
                  transform: `rotate(15deg)`,
                }}
              />
            ))}
            
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-500/20 to-transparent" />
          </div>
        );
      
      default:
        return null;
    }
  };

  // Only flip on click, not hover
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section
      ref={chapterRef}
      data-chapter={id}
      className={`min-h-screen flex items-center justify-center ${background} relative overflow-hidden transition-all duration-1000`}
    >
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
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl transform rotate-1 group-hover:rotate-0 transition-all duration-500 border border-white/60 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-100/20 via-transparent to-mauve-100/20 rounded-3xl" />
                
                <div className="relative overflow-hidden rounded-2xl mb-6 group-hover:shadow-xl transition-all duration-500">
                  <img
                    src={image}
                    alt={frontContent}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Click hint - only appears on hover, no constant animation */}
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/50">
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

            {/* Back of card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="bg-gradient-to-br from-cream-50 to-blush-50 p-8 rounded-3xl shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-all duration-500 border border-white/60 h-full flex items-center justify-center backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cream-100/30 via-transparent to-blush-100/30 rounded-3xl" />
                
                <blockquote className="text-center relative z-10">
                  <div className="mb-8 text-blush-400 text-4xl">♡</div>
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

      {/* Subtle floating elements - no constant animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-8 w-3 h-3 bg-blush-300/40 rounded-full"></div>
        <div className="absolute bottom-1/6 right-8 w-4 h-4 bg-mauve-300/40 rounded-full"></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-cream-400/30 rounded-full"></div>
      </div>
    </section>
  );
};

export default Chapter;
