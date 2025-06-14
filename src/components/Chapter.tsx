
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
      {/* Background effects based on chapter */}
      {id === 2 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-20 bg-blush-200 opacity-30 animate-rain-drop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {id === 3 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cream-300 animate-sparkle opacity-40"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}

      <div className={`transition-all duration-800 ${getAnimationClass()}`}>
        <div className="perspective-1000">
          <div
            className={`relative w-80 h-96 cursor-pointer transition-transform duration-600 preserve-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front of card */}
            <div className="absolute inset-0 backface-hidden">
              <div className="bg-white p-4 rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300 border-8 border-white">
                <img
                  src={image}
                  alt={frontContent}
                  className="w-full h-64 object-cover rounded"
                />
                <div className="mt-4 text-center">
                  <h3 className="font-playfair text-xl italic text-mauve-700 mb-2">{title}</h3>
                  <p className="text-sm text-mauve-500 font-poppins">{frontContent}</p>
                </div>
              </div>
            </div>

            {/* Back of card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180">
              <div className="bg-cream-50 p-8 rounded-lg shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300 border-8 border-white h-full flex items-center justify-center">
                <blockquote className="text-center">
                  <p className="font-playfair text-lg italic text-mauve-800 leading-relaxed">
                    "{backContent}"
                  </p>
                  <div className="mt-6 text-blush-400 text-2xl">♡</div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Tap hint */}
        {!isFlipped && isVisible && (
          <div className="text-center mt-6 animate-pulse-gentle">
            <p className="text-sm text-mauve-500 font-poppins">Tap to read the memory</p>
          </div>
        )}
      </div>

      {/* Floating micro-interactions */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-8 w-1 h-1 bg-blush-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-1/4 right-8 w-2 h-2 bg-mauve-300 rounded-full animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
};

export default Chapter;
