
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, X } from "lucide-react";

const FinalAsk = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [message, setMessage] = useState("");
  const [noButtonClicked, setNoButtonClicked] = useState(0);
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

  const handleYesClick = () => {
    setShowMessageForm(true);
  };

  const handleNoClick = () => {
    setNoButtonClicked(prev => prev + 1);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const mailtoLink = `mailto:your.email@example.com?subject=Coffee Reply from Sakshi&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
    }
  };

  const getNoButtonText = () => {
    if (noButtonClicked === 0) return "No";
    if (noButtonClicked === 1) return "Are you sure?";
    if (noButtonClicked === 2) return "Really?";
    if (noButtonClicked === 3) return "Please? 🥺";
    return "Fine... 💔";
  };

  const getNoButtonStyle = () => {
    if (noButtonClicked >= 4) {
      return "opacity-30 cursor-not-allowed transform scale-75";
    }
    if (noButtonClicked >= 2) {
      return "animate-pulse";
    }
    return "";
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Clean, warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-blush-50 to-mauve-100">
        {/* Subtle warm lighting */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cream-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blush-200 rounded-full opacity-15 blur-2xl" />
        
        {/* Gentle floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cream-300 opacity-30"
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className={`max-w-4xl mx-auto px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <Card className="bg-white/90 backdrop-blur-sm border border-white/40 shadow-xl rounded-2xl overflow-hidden">
          <CardContent className="p-12 relative">
            <div className="text-center">
              {/* Coffee icon */}
              <div className="mb-8 flex justify-center">
                <div className="bg-gradient-to-br from-cream-100 to-blush-100 p-4 rounded-full shadow-md">
                  <Coffee size={40} className="text-mauve-700" />
                </div>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl italic text-mauve-800 mb-6 font-bold">
                So... Coffee?
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="font-poppins text-xl md:text-2xl text-mauve-700 font-medium">
                  Would you like to go for coffee with me, sometime?
                </p>
                
                <p className="font-poppins text-lg text-mauve-600 max-w-2xl mx-auto">
                  Just coffee. Just a conversation. No expectations, no pressure.
                  <br />
                  <span className="italic font-medium text-mauve-700">Just... me being honest.</span>
                </p>
                
                <div className="bg-blush-50/60 p-6 rounded-xl border border-blush-200/30 max-w-xl mx-auto">
                  <p className="font-playfair text-lg italic text-mauve-700">
                    "Because the truth is — I liked you. I think a part of me still does."
                  </p>
                </div>
              </div>

              {!showMessageForm ? (
                <div className="space-y-6">
                  <div className="flex gap-6 justify-center flex-wrap">
                    <Button
                      onClick={handleYesClick}
                      className="bg-gradient-to-r from-blush-400 to-mauve-400 hover:from-blush-500 hover:to-mauve-500 text-white px-10 py-4 rounded-xl font-poppins font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
                    >
                      <Coffee size={20} />
                      Yes, I'd love to!
                    </Button>
                    
                    <Button
                      onClick={handleNoClick}
                      disabled={noButtonClicked >= 4}
                      className={`bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 px-10 py-4 rounded-xl font-poppins font-medium text-lg shadow-lg transition-all duration-300 flex items-center gap-3 ${getNoButtonStyle()}`}
                    >
                      <X size={20} />
                      {getNoButtonText()}
                    </Button>
                  </div>
                  
                  {noButtonClicked > 0 && (
                    <p className="text-sm text-mauve-500 italic">
                      {noButtonClicked === 1 && "Come on, just one coffee? ☕"}
                      {noButtonClicked === 2 && "I promise it'll be fun! 😊"}
                      {noButtonClicked === 3 && "Pretty please with sugar on top? 🍯"}
                      {noButtonClicked >= 4 && "Okay, I understand... but the offer stands! 💙"}
                    </p>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-white/60 p-6 rounded-xl border border-white/40 shadow-inner">
                    <label className="block font-poppins text-mauve-700 mb-3 text-left font-medium">
                      Your message for me...
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me what you're thinking... when and where should we meet? 😊"
                      className="w-full p-4 border border-mauve-200 rounded-xl resize-none font-poppins text-mauve-700 placeholder-mauve-400 bg-white/80 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-blush-300 transition-all"
                      rows={4}
                    />
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="bg-gradient-to-r from-blush-400 to-mauve-400 hover:from-blush-500 hover:to-mauve-500 text-white px-8 py-3 rounded-xl font-poppins font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      <Heart size={20} />
                      Send Message
                    </Button>
                    
                    <Button
                      onClick={() => setShowMessageForm(false)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-8 py-3 rounded-xl font-poppins font-medium text-lg transition-all duration-300"
                    >
                      Back
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Simple floating coffee elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/5 left-1/5 text-2xl animate-bounce" style={{animationDuration: '3s'}}>☕</div>
        <div className="absolute top-2/3 right-1/5 text-xl animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>💕</div>
        <div className="absolute bottom-1/4 left-1/3 text-lg animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}>☕</div>
      </div>
    </section>
  );
};

export default FinalAsk;
