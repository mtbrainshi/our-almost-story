
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Heart, X } from "lucide-react";

const FinalAsk = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [message, setMessage] = useState("");
  const [noButtonClicked, setNoButtonClicked] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    if (noButtonClicked < 4) {
      setNoButtonClicked(prev => prev + 1);
    }
  };

  const handleSendMessage = async () => {
    if (message.trim() && !isSubmitting) {
      setIsSubmitting(true);
      const mailtoLink = `mailto:your.email@example.com?subject=Coffee Reply from Sakshi&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      
      // Reset after a delay to prevent double sending
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
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
      {/* Clean, sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-white to-blush-50">
        {/* Subtle warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cream-100/30 via-transparent to-blush-100/20" />
        
        {/* Very subtle ambient lighting */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cream-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-1/3 w-80 h-80 bg-blush-200/15 rounded-full blur-2xl" />
      </div>

      <div className={`max-w-4xl mx-auto px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <Card className="bg-white/95 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-12 relative">
            <div className="text-center">
              {/* Coffee icon */}
              <div className="mb-8 flex justify-center">
                <div className="bg-gradient-to-br from-cream-100 to-blush-100 p-6 rounded-full shadow-lg">
                  <Coffee size={48} className="text-mauve-700" />
                </div>
              </div>

              <h2 className="font-playfair text-4xl md:text-5xl italic text-mauve-800 mb-6 font-bold">
                So... Coffee?
              </h2>
              
              <div className="space-y-6 mb-10">
                <p className="font-poppins text-xl md:text-2xl text-mauve-700 font-medium">
                  Would you like to go for coffee with me, sometime?
                </p>
                
                <p className="font-poppins text-lg text-mauve-600 max-w-2xl mx-auto leading-relaxed">
                  Just coffee. Just a conversation. No expectations, no pressure.
                  <br />
                  <span className="italic font-medium text-mauve-700">Just... me being honest.</span>
                </p>
                
                <div className="bg-blush-50/80 p-8 rounded-2xl border border-blush-200/40 max-w-xl mx-auto">
                  <p className="font-playfair text-lg italic text-mauve-700 leading-relaxed">
                    "Because the truth is — I liked you. I think a part of me still does."
                  </p>
                </div>
              </div>

              {!showMessageForm ? (
                <div className="space-y-8">
                  <div className="flex gap-8 justify-center flex-wrap">
                    <Button
                      onClick={handleYesClick}
                      className="bg-gradient-to-r from-blush-400 to-mauve-400 hover:from-blush-500 hover:to-mauve-500 text-white px-12 py-6 rounded-2xl font-poppins font-medium text-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 hover:scale-105"
                    >
                      <Coffee size={24} />
                      Yes, I'd love to!
                    </Button>
                    
                    <Button
                      onClick={handleNoClick}
                      disabled={noButtonClicked >= 4}
                      className={`bg-gradient-to-r from-gray-300 to-gray-400 hover:from-gray-400 hover:to-gray-500 text-gray-700 px-12 py-6 rounded-2xl font-poppins font-medium text-xl shadow-xl transition-all duration-300 flex items-center gap-3 ${getNoButtonStyle()}`}
                    >
                      <X size={24} />
                      {getNoButtonText()}
                    </Button>
                  </div>
                  
                  {noButtonClicked > 0 && (
                    <p className="text-lg text-mauve-500 italic font-poppins">
                      {noButtonClicked === 1 && "Come on, just one coffee? ☕"}
                      {noButtonClicked === 2 && "I promise it'll be fun! 😊"}
                      {noButtonClicked === 3 && "Pretty please with sugar on top? 🍯"}
                      {noButtonClicked >= 4 && "Okay, I understand... but the offer stands! 💙"}
                    </p>
                  )}
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="bg-white/80 p-8 rounded-2xl border border-white/60 shadow-inner">
                    <label className="block font-poppins text-mauve-700 mb-4 text-left font-medium text-lg">
                      Your message for me...
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me what you're thinking... when and where should we meet? 😊"
                      className="w-full p-6 border border-mauve-200 rounded-2xl resize-none font-poppins text-mauve-700 placeholder-mauve-400 bg-white/90 focus:outline-none focus:ring-2 focus:ring-blush-300 focus:border-blush-300 transition-all text-lg leading-relaxed"
                      rows={5}
                    />
                  </div>

                  <div className="flex gap-6 justify-center">
                    <Button
                      onClick={handleSendMessage}
                      disabled={!message.trim() || isSubmitting}
                      className="bg-gradient-to-r from-blush-400 to-mauve-400 hover:from-blush-500 hover:to-mauve-500 text-white px-10 py-4 rounded-2xl font-poppins font-medium text-xl shadow-xl hover:shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 hover:scale-105"
                    >
                      <Heart size={24} />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    
                    <Button
                      onClick={() => setShowMessageForm(false)}
                      disabled={isSubmitting}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-10 py-4 rounded-2xl font-poppins font-medium text-xl transition-all duration-300 hover:scale-105"
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
    </section>
  );
};

export default FinalAsk;
