
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
      {/* Enhanced dreamy background effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 border border-blush-200 rounded-full opacity-15 animate-pulse-gentle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className={`max-w-5xl mx-auto text-center px-8 transition-all duration-1500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-16 shadow-2xl border border-white/30">
          <div className="mb-8 text-6xl">💭</div>
          
          <blockquote className="font-playfair text-3xl md:text-4xl italic text-mauve-800 leading-relaxed mb-8 font-medium">
            "Sakshi, sometimes I dreamt we talked for hours... laughed without deadlines... wandered together through those college corridors."
          </blockquote>
          
          <p className="font-poppins text-lg md:text-xl text-mauve-600 mb-8 font-light leading-relaxed">
            In those dreams, you always listened with that same gentle smile.
          </p>
          
          <div className="flex justify-center space-x-6">
            <div className="w-3 h-3 bg-blush-400 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-mauve-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-3 h-3 bg-cream-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>

      {/* Enhanced floating dream elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/6 text-4xl text-blush-300 animate-sparkle opacity-40">☁️</div>
        <div className="absolute top-2/3 right-1/6 text-4xl text-mauve-300 animate-sparkle opacity-40" style={{animationDelay: '2s'}}>☁️</div>
        <div className="absolute top-1/2 left-4/5 text-3xl text-cream-400 animate-sparkle opacity-40" style={{animationDelay: '3s'}}>✨</div>
        <div className="absolute bottom-1/4 left-1/3 text-3xl text-blush-400 animate-sparkle opacity-40" style={{animationDelay: '1s'}}>💫</div>
      </div>
    </section>
  );
};

export default Interlude;
