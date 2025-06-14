
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
  const [isHovered, setIsHovered] = useState(false);
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
        // Enhanced classroom atmosphere
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-orange-50/40 to-yellow-50/50" />
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/30 via-transparent to-orange-100/35" />
            
            {/* Floating golden dust particles */}
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-amber-400/40 rounded-full animate-sparkle-drift"
                style={{
                  width: `${2 + Math.random() * 4}px`,
                  height: `${2 + Math.random() * 4}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 6}s`,
                  animationDuration: `${4 + Math.random() * 4}s`
                }}
              />
            ))}
            
            {/* Book page silhouettes */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`page-${i}`}
                className="absolute w-8 h-10 bg-amber-200/20 rounded-sm animate-float blur-sm"
                style={{
                  left: `${10 + Math.random() * 80}%`,
                  top: `${10 + Math.random() * 80}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${6 + Math.random() * 3}s`,
                  transform: `rotate(${Math.random() * 30 - 15}deg)`
                }}
              />
            ))}
            
            <div className="absolute top-1/4 left-1/3 w-60 h-60 bg-amber-200/20 rounded-full blur-3xl animate-breathe" />
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-orange-200/15 blur-2xl animate-breathe" style={{animationDelay: '3s'}} />
          </div>
        );
      
      case 2:
        // Enhanced romantic atmosphere
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-pink-50/50 to-red-50/45" />
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-200/30 via-transparent to-pink-200/35" />
            
            {/* Golden hour light rays */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-conic from-yellow-200/30 via-transparent to-transparent rounded-full blur-2xl animate-spin-slow" />
            
            {/* Floating rose petal silhouettes */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-4 bg-rose-400/30 rounded-full animate-petal-fall blur-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                  animationDuration: `${6 + Math.random() * 6}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              />
            ))}
            
            {/* Dreamy bokeh effects */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`bokeh-${i}`}
                className="absolute rounded-full bg-pink-300/20 animate-pulse-gentle blur-lg"
                style={{
                  width: `${20 + Math.random() * 60}px`,
                  height: `${20 + Math.random() * 60}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
            
            <div className="absolute bottom-1/4 left-1/6 w-72 h-72 bg-rose-300/25 rounded-full blur-3xl animate-breathe" style={{animationDelay: '4s'}} />
          </div>
        );
      
      case 3:
        // Enhanced coding night atmosphere
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 via-indigo-50/45 to-purple-100/40" />
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-200/25 via-transparent to-indigo-200/30" />
            
            {/* Matrix-like code effects */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-blue-400/20 font-mono text-xs animate-matrix-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${-10 + Math.random() * 20}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
            
            {/* Screen glows */}
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-breathe" />
            <div className="absolute bottom-1/2 right-1/5 w-48 h-48 bg-indigo-300/25 blur-2xl animate-breathe" style={{animationDelay: '3s'}} />
            
            {/* Coffee steam wisps */}
            <div className="absolute top-1/6 right-1/3 animate-steam">
              <div className="w-2 h-8 bg-gray-300/30 rounded-full blur-sm animate-float" />
              <div className="w-1 h-6 bg-gray-300/20 rounded-full blur-sm animate-float ml-2" style={{animationDelay: '1s'}} />
            </div>
          </div>
        );
      
      case 4:
        // Gentle normal rain - no storm effects
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Soft rainy day atmosphere */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-100/40 via-gray-50/30 to-slate-50/20" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-transparent to-gray-100/25" />
            
            {/* Gentle vertical rain drops */}
            {[...Array(40)].map((_, i) => (
              <div
                key={`rain-${i}`}
                className="absolute bg-gradient-to-b from-gray-300/60 to-gray-400/30 animate-gentle-rain rounded-full"
                style={{
                  width: '1px',
                  height: `${8 + Math.random() * 15}px`,
                  left: `${Math.random() * 100}%`,
                  top: '-10%',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              />
            ))}
            
            {/* Light rain layer */}
            {[...Array(25)].map((_, i) => (
              <div
                key={`light-rain-${i}`}
                className="absolute bg-gradient-to-b from-gray-400/40 to-gray-500/20 animate-gentle-rain rounded-full blur-[0.5px]"
                style={{
                  width: '0.8px',
                  height: `${5 + Math.random() * 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: '-5%',
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${3 + Math.random() * 1.5}s`,
                }}
              />
            ))}
            
            {/* Soft atmospheric depth */}
            <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-gray-200/15 rounded-full blur-3xl animate-breathe" />
            <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl animate-breathe" style={{animationDelay: '2s'}} />
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
      {getChapterAtmosphere()}

      <div className={`transition-all duration-1000 ${getAnimationClass()}`}>
        <div className="perspective-1000">
          <div
            className={`relative w-80 h-96 md:w-96 md:h-[450px] cursor-pointer transition-transform duration-700 preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
          >
            {/* Front of card */}
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
                  
                  {/* Hover-activated click hint */}
                  <div className={`absolute inset-0 bg-black/10 backdrop-blur-[1px] flex items-center justify-center transition-all duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/50 animate-pulse-gentle transform transition-all duration-300">
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

            {/* Back of card - clean, no emojis */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="bg-gradient-to-br from-cream-50 to-blush-50 p-8 rounded-3xl shadow-2xl transform transition-all duration-500 border border-white/60 h-full flex items-center justify-center backdrop-blur-md relative overflow-hidden">
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

      {/* Minimal floating elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/6 left-8 w-2 h-2 bg-blush-400/60 rounded-full animate-sparkle"></div>
        <div className="absolute bottom-1/6 right-8 w-3 h-3 bg-mauve-400/60 rounded-full animate-sparkle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-cream-500/50 rounded-full animate-sparkle" style={{animationDelay: '4s'}}></div>
      </div>
    </section>
  );
};

export default Chapter;
