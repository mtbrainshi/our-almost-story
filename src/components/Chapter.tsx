import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  const scrollToNext = () => {
    let targetElement;
    if (id < 4) {
      targetElement = document.getElementById(`chapter-${id + 1}`) || 
                     document.querySelector(`[data-chapter="${id + 1}"]`);
    } else {
      targetElement = document.getElementById('interlude-section') || 
                     document.querySelector('[data-section="interlude-section"]');
    }
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
      
      case 2: // Red Dress Moment
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/60 via-pink-50/50 to-red-50/60" />
            
            {/* Floating hearts */}
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute text-rose-300/40 animate-float-hearts"
                style={{
                  fontSize: `${12 + Math.random() * 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 5}s`,
                  filter: 'blur(1px)',
                  opacity: 0.6
                }}
              >
                ❤
              </div>
            ))}
            
            {/* Larger blurred hearts */}
            {[...Array(15)].map((_, i) => (
              <div
                key={`large-${i}`}
                className="absolute text-rose-400/30 animate-pulse-gentle"
                style={{
                  fontSize: `${30 + Math.random() * 40}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  filter: 'blur(2px)',
                  animationDelay: `${Math.random() * 4}s`,
                  opacity: 0.4
                }}
              >
                ❤
              </div>
            ))}

            {/* Ambient light spots */}
            <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-rose-200/25 rounded-full blur-3xl animate-breathe" />
            <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-pink-200/20 rounded-full blur-2xl animate-breathe" style={{animationDelay: '2s'}} />
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
        // Lighter rainy atmosphere
        return (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Lighter stormy background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-600/70 via-gray-500/60 to-slate-600/65" />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-700/30 via-transparent to-gray-600/25" />
            
            {/* Rain drops */}
            {[...Array(60)].map((_, i) => (
              <div
                key={`rain-${i}`}
                className="absolute bg-blue-200/60 rounded-full animate-simple-rain"
                style={{
                  width: '1.5px',
                  height: `${12 + Math.random() * 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: '-30px',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2.5 + Math.random() * 1.5}s`,
                }}
              />
            ))}
            
            {/* Lighter rain layer */}
            {[...Array(40)].map((_, i) => (
              <div
                key={`light-rain-${i}`}
                className="absolute bg-blue-100/40 rounded-full animate-simple-rain"
                style={{
                  width: '1px',
                  height: `${8 + Math.random() * 15}px`,
                  left: `${Math.random() * 100}%`,
                  top: '-25px',
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 2}s`,
                }}
              />
            ))}
            
            {/* Lighter storm clouds effect */}
            <div className="absolute top-1/6 left-1/4 w-80 h-80 bg-gray-500/25 rounded-full blur-3xl animate-breathe" />
            <div className="absolute bottom-1/4 right-1/5 w-64 h-64 bg-gray-600/15 rounded-full blur-2xl animate-breathe" style={{animationDelay: '3s'}} />
          </div>
        );
      
      default:
        return null;
    }
  };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  // Get background class - override for chapter 4
  const getBackgroundClass = () => {
    if (id === 4) {
      return "bg-gradient-to-br from-gray-700 via-gray-600 to-slate-700";
    }
    return background;
  };

  return (
    <section
      ref={chapterRef}
      data-chapter={id}
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 ${getBackgroundClass()} relative overflow-hidden transition-all duration-1000`}
    >
      {getChapterAtmosphere()}

      <div className={`transition-all duration-1000 ${getAnimationClass()}`}>
        <div className="perspective-1000">
          <div
            className={`relative w-[300px] sm:w-[350px] md:w-[400px] h-[450px] sm:h-[500px] md:h-[550px] cursor-pointer transition-transform duration-700 preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
          >
            {/* Front of card */}
            <div className="absolute inset-0 backface-hidden">
              <div className="bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-3xl shadow-2xl transform transition-all duration-500 border border-white/60 relative overflow-hidden hover:shadow-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blush-100/20 via-transparent to-mauve-100/20 rounded-3xl" />
                
                <div className="relative overflow-hidden rounded-2xl mb-6 transition-all duration-500">
                  <img
                    src={image}
                    alt={frontContent}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-xl shadow-md mx-auto transition-transform duration-700 border border-white/40"
                    style={{ aspectRatio: '4/3', objectFit: 'cover' }}
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

      {/* Navigation button at bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Button
          onClick={scrollToNext}
          variant="ghost"
          className="group flex flex-col items-center gap-2 text-purple-600/70 hover:text-purple-800 transition-all duration-300 hover:scale-105 p-6"
        >
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
        </Button>
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
