
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
      {/* Enhanced dreamy background with layered effects */}
      <div className="absolute inset-0">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-mauve-200/30 via-transparent to-blush-200/30" />
        
        {/* Floating dream bubbles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-blush-200 rounded-full opacity-20 animate-pulse-gentle"
            style={{
              width: `${60 + Math.random() * 80}px`,
              height: `${60 + Math.random() * 80}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
              background: `radial-gradient(circle, ${['rgba(247, 174, 174, 0.1)', 'rgba(176, 152, 176, 0.1)', 'rgba(255, 237, 158, 0.1)'][Math.floor(Math.random() * 3)]} 0%, transparent 70%)`
            }}
          />
        ))}
        
        {/* Dreamy particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-sparkle opacity-30"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#f7aeae', '#b098b0', '#ffed9e'][Math.floor(Math.random() * 3)],
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className={`max-w-5xl mx-auto text-center px-8 transition-all duration-1500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-16 shadow-2xl border border-white/40 relative overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream-100/50 via-transparent to-blush-100/50 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="mb-8 text-6xl animate-pulse-gentle">💭</div>
            
            <blockquote className="font-playfair text-3xl md:text-5xl italic text-mauve-800 leading-relaxed mb-8 font-medium">
              "Sakshi, sometimes I dreamt we talked for hours... laughed without deadlines... wandered together through those college corridors."
            </blockquote>
            
            <p className="font-poppins text-xl md:text-2xl text-mauve-600 mb-8 font-light leading-relaxed">
              In those dreams, you always listened with that same gentle smile.
            </p>
            
            <div className="flex justify-center space-x-6">
              <div className="w-3 h-3 bg-blush-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-mauve-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="w-3 h-3 bg-cream-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced floating dream elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/6 text-5xl text-blush-300 animate-sparkle opacity-50">☁️</div>
        <div className="absolute top-2/3 right-1/6 text-4xl text-mauve-300 animate-sparkle opacity-50" style={{animationDelay: '2s'}}>☁️</div>
        <div className="absolute top-1/2 left-4/5 text-3xl text-cream-400 animate-sparkle opacity-50" style={{animationDelay: '3s'}}>✨</div>
        <div className="absolute bottom-1/4 left-1/3 text-4xl text-blush-400 animate-sparkle opacity-50" style={{animationDelay: '1s'}}>💫</div>
        <div className="absolute top-3/4 right-1/3 text-2xl text-mauve-400 animate-sparkle opacity-40" style={{animationDelay: '2.5s'}}>🌙</div>
      </div>
    </section>
  );
};

export default Interlude;
