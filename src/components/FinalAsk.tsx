
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart } from "lucide-react";

const FinalAsk = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const mailtoLink = `mailto:your.email@example.com?subject=Coffee Reply from Sakshi&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      setMessage("");
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-blush-50 to-mauve-100 relative overflow-hidden py-20"
    >
      {/* Enhanced background atmosphere */}
      <div className="absolute inset-0">
        {/* Layered gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cream-100/50 via-transparent to-blush-100/50" />
        <div className="absolute inset-0 bg-gradient-to-bl from-mauve-100/40 via-transparent to-cream-100/40" />
        
        {/* Warm ambient lighting */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cream-300 rounded-full opacity-15 animate-pulse-gentle blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blush-300 rounded-full opacity-12 animate-pulse-gentle blur-2xl" style={{animationDelay: '2s'}} />
        <div className="absolute top-2/3 left-1/6 w-40 h-40 bg-mauve-300 rounded-full opacity-10 animate-pulse-gentle blur-xl" style={{animationDelay: '4s'}} />

        {/* Floating coffee-themed elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-cream-200 to-blush-200 opacity-20 animate-pulse-gentle"
            style={{
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className={`max-w-4xl mx-auto px-8 transition-all duration-1500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <Card className="bg-white/95 backdrop-blur-lg border border-white/60 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12 relative">
            {/* Card background enhancement */}
            <div className="absolute inset-0 bg-gradient-to-br from-cream-50/50 via-transparent to-blush-50/50" />
            
            <div className="relative z-10 text-center">
              {/* Coffee icon with animation */}
              <div className="mb-8 flex justify-center">
                <div className="bg-gradient-to-br from-cream-200 to-blush-200 p-6 rounded-full shadow-lg">
                  <Coffee size={48} className="text-mauve-700 animate-pulse-gentle" />
                </div>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl italic text-mauve-800 mb-6 font-bold leading-tight">
                So... Coffee?
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="font-poppins text-xl md:text-2xl text-mauve-700 leading-relaxed font-medium">
                  Would you like to go for coffee with me, sometime?
                </p>
                
                <p className="font-poppins text-lg text-mauve-600 leading-relaxed max-w-2xl mx-auto">
                  Just coffee. Just a conversation. No expectations, no pressure.
                  <br />
                  <span className="italic font-medium text-mauve-700">Just... me being honest.</span>
                </p>
                
                <div className="bg-blush-50 p-6 rounded-2xl border border-blush-200/50 max-w-xl mx-auto">
                  <p className="font-playfair text-lg italic text-mauve-700 leading-relaxed">
                    "Because the truth is — I liked you. I think a part of me still does."
                  </p>
                </div>
              </div>

              {/* Enhanced message input area */}
              <div className="space-y-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-white/60 shadow-inner">
                  <label className="block font-poppins text-mauve-700 mb-3 text-left font-medium">
                    Your thoughts...
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me what's on your mind..."
                    className="w-full p-4 border border-mauve-200 rounded-xl resize-none font-poppins text-mauve-700 placeholder-mauve-400 bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-blush-300 transition-all"
                    rows={4}
                  />
                </div>

                <div className="flex gap-4 justify-center flex-wrap">
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="bg-gradient-to-r from-blush-400 to-mauve-400 hover:from-blush-500 hover:to-mauve-500 text-white px-8 py-3 rounded-xl font-poppins font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Heart size={20} />
                    Send Message
                  </Button>
                  
                  <Button
                    onClick={() => setMessage("Yes! I'd love to have coffee with you. 😊")}
                    className="bg-gradient-to-r from-cream-400 to-blush-300 hover:from-cream-500 hover:to-blush-400 text-mauve-800 px-8 py-3 rounded-xl font-poppins font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                  >
                    <Coffee size={20} />
                    Yes to Coffee!
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating hearts and coffee elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/5 left-1/5 text-2xl text-blush-400 animate-sparkle">☕</div>
        <div className="absolute top-2/3 right-1/5 text-xl text-mauve-400 animate-sparkle" style={{animationDelay: '2s'}}>💝</div>
        <div className="absolute top-1/2 left-4/5 text-lg text-cream-500 animate-sparkle" style={{animationDelay: '4s'}}>☕</div>
        <div className="absolute bottom-1/4 left-1/3 text-xl text-blush-400 animate-sparkle" style={{animationDelay: '3s'}}>💫</div>
      </div>
    </section>
  );
};

export default FinalAsk;
