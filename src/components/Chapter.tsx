
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
    
    switch (animation) {
      case "slide-up":
        return "animate-float-in";
      case "rotate-in":
        return "animate-float-in";
      case "float-bounce":
        return "animate-float-in";
      case "ripple":
        return "animate-float-in";
      default:
        return "animate-float-in";
    }
  };

  return (
    <section
      ref={chapterRef}
      data-chapter={id}
      className={`min-h-screen flex items-center justify-center ${background} relative overflow-hidden`}
    >
      {/* Enhanced background effects */}
      {id === 2 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-16 bg-blush-200 opacity-20 animate-rain-drop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1.5 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {id === 3 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cream-300 animate-sparkle opacity-40"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 4}s`,
                fontSize: `${16 + Math.random() * 8}px`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      <div className={`transition-all duration-1000 ${getAnimationClass()}`}>
        <div className="perspective-1000">
          <div
            className={`relative w-80 h-96 md:w-96 md:h-[450px] cursor-pointer transition-transform duration-700 preserve-3d group ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Enhanced front of card */}
            <div className="absolute inset-0 backface-hidden">
              <div className="bg-white p-6 rounded-2xl shadow-2xl transform rotate-1 group-hover:rotate-0 transition-all duration-500 border-4 border-white/80 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={image}
                    alt={frontContent}
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="text-center">
                  <h3 className="font-playfair text-xl md:text-2xl italic text-mauve-700 mb-3 font-semibold">{title}</h3>
                  <p className="text-sm md:text-base text-mauve-500 font-poppins leading-relaxed">{frontContent}</p>
                </div>
              </div>
            </div>

            {/* Enhanced back of card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="bg-gradient-to-br from-cream-50 to-blush-50 p-8 rounded-2xl shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-all duration-500 border-4 border-white/80 h-full flex items-center justify-center backdrop-blur-sm">
                <blockquote className="text-center">
                  <div className="mb-6 text-blush-400 text-3xl">♡</div>
                  <p className="font-playfair text-lg md:text-xl italic text-mauve-800 leading-relaxed mb-6 font-medium">
                    "{backContent}"
                  </p>
                  <div className="flex justify-center space-x-2">
                    <div className="w-1 h-1 bg-blush-400 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-mauve-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-1 h-1 bg-cream-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced tap hint */}
        {!isFlipped && isVisible && (
          <div className="text-center mt-8 animate-pulse-gentle">
            <div className="bg-white/70 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg inline-block">
              <p className="text-sm text-mauve-600 font-poppins font-medium">💝 Tap to read my heart</p>
            </div>
          </div>
        )}
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
