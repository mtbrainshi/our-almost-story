
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
      {/* Enhanced dreamy background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-mauve-200/20 via-transparent to-blush-200/20" />
        
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-blush-200 rounded-full opacity-15 animate-pulse-gentle"
            style={{
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              background: `radial-gradient(circle, ${['rgba(247, 174, 174, 0.05)', 'rgba(176, 152, 176, 0.05)', 'rgba(255, 237, 158, 0.05)'][Math.floor(Math.random() * 3)]} 0%, transparent 70%)`
            }}
          />
        ))}
        
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full animate-sparkle opacity-20"
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#f7aeae', '#b098b0', '#ffed9e'][Math.floor(Math.random() * 3)],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className={`max-w-5xl mx-auto text-center px-8 transition-all duration-1500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="bg-white/85 backdrop-blur-lg rounded-3xl p-16 shadow-2xl border border-white/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cream-100/30 via-transparent to-blush-100/30 rounded-3xl" />
          
          <div className="relative z-10">
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

      {/* Subtle floating elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/6 left-1/6 text-3xl text-blush-300 animate-sparkle">☁️</div>
        <div className="absolute top-2/3 right-1/6 text-2xl text-mauve-300 animate-sparkle" style={{animationDelay: '2s'}}>☁️</div>
        <div className="absolute top-1/2 left-4/5 text-xl text-cream-400 animate-sparkle" style={{animationDelay: '3s'}}>✨</div>
      </div>
    </section>
  );
};

export default Interlude;
