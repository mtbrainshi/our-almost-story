
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
        // Warm classroom atmosphere with floating elements
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/40 via-orange-50/30 to-yellow-50/40" />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/20 via-transparent to-orange-100/25" />
            
            {/* Floating book pages */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-amber-300/30 animate-float text-sm"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 3}s`,
                  transform: `rotate(${Math.random() * 30 - 15}deg)`
                }}
              >
                📖
              </div>
            ))}
            
            {/* Golden dust particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`dust-${i}`}
                className="absolute w-1 h-1 bg-amber-400/40 rounded-full animate-sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
            
            <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-amber-200/15 rounded-full blur-3xl animate-pulse-gentle" />
            <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-orange-200/12 blur-2xl animate-pulse-gentle" style={{animationDelay: '2s'}} />
          </div>
        );
      
      case 2:
        // Romantic golden hour with rose petals
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-pink-50/40 to-red-50/35" />
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/25 via-transparent to-pink-200/30" />
            
            {/* Floating rose petals */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-rose-400/50 animate-float text-lg"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${5 + Math.random() * 4}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              >
                🌹
              </div>
            ))}
            
            {/* Warm light rays */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-conic from-yellow-200/20 via-transparent to-transparent rounded-full blur-2xl animate-pulse-gentle" />
            <div className="absolute bottom-1/4 left-1/6 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl animate-pulse-gentle" style={{animationDelay: '3s'}} />
            
            {/* Heart sparkles */}
            {[...Array(10)].map((_, i) => (
              <div
                key={`heart-${i}`}
                className="absolute text-pink-400/40 animate-sparkle text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              >
                💖
              </div>
            ))}
          </div>
        );
      
      case 3:
        // Cozy coding night atmosphere
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-indigo-50/35 to-purple-100/30" />
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-200/20 via-transparent to-indigo-200/25" />
            
            {/* Floating code elements */}
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute text-blue-400/30 animate-float font-mono text-xs"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${6 + Math.random() * 3}s`
                }}
              >
                {['{ }', '< />', '💻', '⌨️', '🖥️'][Math.floor(Math.random() * 5)]}
              </div>
            ))}
            
            {/* Screen glows */}
            <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-blue-300/15 rounded-full blur-3xl animate-pulse-gentle" />
            <div className="absolute bottom-1/2 right-1/5 w-40 h-40 bg-indigo-300/20 blur-2xl animate-pulse-gentle" style={{animationDelay: '2.5s'}} />
            
            {/* Coffee steam */}
            <div className="absolute top-1/6 right-1/3 text-gray-400/40 animate-float text-sm">☕</div>
          </div>
        );
      
      case 4:
        // Dramatic storm with rain and lightning
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-700/50 via-slate-800/40 to-slate-900/35" />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-600/30 via-slate-700/25 to-slate-800/35" />
            
            {/* Storm clouds */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-600/50 to-transparent" />
            
            {/* Enhanced rain drops */}
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-slate-300/70 animate-rain-drop"
                style={{
                  width: '2px',
                  height: `${10 + Math.random() * 15}px`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${0.6 + Math.random() * 0.8}s`,
                  transform: `rotate(20deg)`,
                }}
              />
            ))}
            
            {/* Lightning flashes */}
            <div className="absolute inset-0 bg-white/10 animate-lightning opacity-0" />
            
            {/* Puddle reflections */}
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-slate-500/25 to-transparent" />
            
            {/* Storm atmosphere */}
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-slate-400/15 rounded-full blur-3xl animate-pulse-gentle" />
          </div>
        );
      
      default:
        return null;
    }
  };

  // Pure click-based flip - no hover interference
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
            className={`relative w-80 h-96 md:w-96 md:h-[450px] cursor-pointer transition-transform duration-700 preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={handleCardClick}
          >
            {/* Front of card - removed hover effects that interfere with click */}
            <div className="absolute inset-0 backface-hidden">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl transform transition-all duration-500 border border-white/60 relative overflow-hidden hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-100/20 via-transparent to-mauve-100/20 rounded-3xl" />
                
                <div className="relative overflow-hidden rounded-2xl mb-6 transition-all duration-500">
                  <img
                    src={image}
                    alt={frontContent}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Click hint with sparkle effect */}
                  <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px] flex items-center justify-center opacity-100 transition-all duration-300">
                    <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/50 animate-pulse-gentle">
                      <p className="text-sm text-mauve-700 font-poppins font-medium flex items-center gap-2">
                        💝 Click to read my heart
                        <span className="text-pink-400 animate-sparkle">✨</span>
                      </p>
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
              <div className="bg-gradient-to-br from-cream-50 to-blush-50 p-8 rounded-3xl shadow-2xl transform transition-all duration-500 border border-white/60 h-full flex items-center justify-center backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cream-100/30 via-transparent to-blush-100/30 rounded-3xl" />
                
                {/* Floating hearts around the quote */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute text-pink-300/40 animate-float text-sm"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${4 + Math.random() * 2}s`
                    }}
                  >
                    💕
                  </div>
                ))}
                
                <blockquote className="text-center relative z-10">
                  <div className="mb-8 text-blush-400 text-4xl animate-pulse-gentle">♡</div>
                  <p className="font-playfair text-lg md:text-xl italic text-mauve-800 leading-relaxed font-medium mb-6">
                    "{backContent}"
                  </p>
                  <div className="text-xs text-mauve-500 font-poppins opacity-70 flex items-center justify-center gap-2">
                    Click to go back
                    <span className="text-pink-400 animate-sparkle">✨</span>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating romantic elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/6 left-8 w-3 h-3 bg-blush-400/60 rounded-full animate-sparkle"></div>
        <div className="absolute bottom-1/6 right-8 w-4 h-4 bg-mauve-400/60 rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-cream-500/50 rounded-full animate-sparkle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 text-pink-300/50 animate-float text-xs" style={{animationDelay: '3s'}}>💫</div>
      </div>
    </section>
  );
};

export default Chapter;
