
import { useEffect, useRef, useState } from "react";

const Interlude = () => {
  const [isVisible, setIsVisible] = useState(false);
  const interludeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (interludeRef.current) {
      observer.observe(interludeRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={interludeRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-mauve-100 via-blush-50 to-cream-100 relative overflow-hidden"
    >
      {/* Dreamy background effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border border-blush-200 rounded-full opacity-20 animate-pulse-gentle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className={`max-w-4xl mx-auto text-center px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 shadow-xl">
          <blockquote className="font-playfair text-2xl md:text-3xl italic text-mauve-800 leading-relaxed">
            "Sometimes I dreamt we talked for hours… laughed without deadlines… wandered together."
          </blockquote>
          
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-2 h-2 bg-blush-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-mauve-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-2 h-2 bg-cream-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Floating dream elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 text-3xl text-blush-300 animate-sparkle opacity-40">☁️</div>
        <div className="absolute top-3/4 right-1/6 text-3xl text-mauve-300 animate-sparkle opacity-40" style={{animationDelay: '1.5s'}}>☁️</div>
        <div className="absolute top-1/2 left-3/4 text-2xl text-cream-400 animate-sparkle opacity-40" style={{animationDelay: '2s'}}>✨</div>
      </div>
    </section>
  );
};

export default Interlude;
