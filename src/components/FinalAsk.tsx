
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const FinalAsk = () => {
  const [showModal, setShowModal] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [confetti, setConfetti] = useState(false);

  const handleResponse = (answer: string) => {
    setResponse(answer);
    
    // Store response locally until Supabase is connected
    localStorage.setItem('sakshi_response', JSON.stringify({
      answer,
      timestamp: new Date().toISOString()
    }));

    if (answer === 'yes') {
      setConfetti(true);
      setShowModal(true);
      setTimeout(() => setConfetti(false), 3000);
    } else if (answer === 'maybe') {
      // Gentle encouragement for maybe
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    } else {
      // Even store "no" with understanding
      setShowModal(true);
    }
  };

  const getModalContent = () => {
    switch (response) {
      case 'yes':
        return {
          title: "My heart is dancing! 💃",
          content: "I can't wait to share that coffee with you, Sakshi. Thank you for giving us this chance. ☕💕"
        };
      case 'maybe':
        return {
          title: "I understand... 🌸",
          content: "Take all the time you need, Sakshi. I'll be here when you're ready. No pressure, just hope. 💝"
        };
      case 'no':
        return {
          title: "Thank you for your honesty 💕",
          content: "I'm grateful you took the time to read this, Sakshi. That means more to me than you know. 🌹"
        };
      default:
        return { title: "", content: "" };
    }
  };

  const modalContent = getModalContent();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced layered background */}
      <div className="absolute inset-0">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-100 via-blush-50 to-mauve-100" />
        
        {/* Café atmosphere overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cream-200/40 via-transparent to-blush-200/40" />
        
        {/* Warm lighting effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream-100/30 to-transparent" />
      </div>

      {/* Enhanced confetti effect */}
      {confetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 animate-bounce rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                backgroundColor: ['#f7aeae', '#b098b0', '#ffed9e', '#fbd1d1'][Math.floor(Math.random() * 4)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Enhanced café background with better integration */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px) sepia(20%)"
        }}
      />

      {/* Floating coffee elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-cream-300 to-blush-300 animate-pulse-gentle"
            style={{
              width: `${10 + Math.random() * 20}px`,
              height: `${10 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              filter: 'blur(4px)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 md:p-20 shadow-2xl border border-white/30 relative overflow-hidden">
          {/* Inner atmospheric glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream-50/70 via-transparent to-blush-50/70 rounded-3xl" />
          
          <div className="relative z-10">
            <div className="mb-12">
              <h2 className="font-playfair text-5xl md:text-7xl italic text-mauve-800 mb-10 leading-tight drop-shadow-sm">
                Sakshi...
              </h2>
              <div className="space-y-6 mb-10">
                <p className="font-poppins text-2xl md:text-3xl text-mauve-700 leading-relaxed font-light">
                  All this was just me being honest with you.
                </p>
                <p className="font-poppins text-2xl md:text-3xl text-mauve-700 leading-relaxed font-light">
                  Would you like to grab coffee with me?
                </p>
              </div>
              <p className="font-poppins text-xl text-mauve-600 italic">
                Just us, just a conversation... just being real.
              </p>
            </div>

            {!response && (
              <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <Button
                  onClick={() => handleResponse('yes')}
                  className="bg-gradient-to-r from-blush-400 to-mauve-400 hover:from-blush-500 hover:to-mauve-500 text-white px-12 py-5 text-xl font-poppins font-medium rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  ☕ Yes, let's do this
                </Button>

                <Button
                  onClick={() => handleResponse('maybe')}
                  variant="outline"
                  className="border-2 border-mauve-300 text-mauve-600 hover:bg-mauve-50 px-12 py-5 text-xl font-poppins font-medium rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  🌸 Maybe... I need time
                </Button>

                <Button
                  onClick={() => handleResponse('no')}
                  variant="outline"
                  className="border-2 border-blush-300 text-blush-600 hover:bg-blush-50 px-12 py-5 text-xl font-poppins font-medium rounded-full shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  💭 Not right now
                </Button>
              </div>
            )}

            {response && (
              <div className="animate-float-in">
                <div className="text-5xl mb-6 animate-pulse-gentle">
                  {response === 'yes' ? '🎉' : response === 'maybe' ? '🌸' : '💕'}
                </div>
                <p className="font-poppins text-xl text-mauve-600">
                  Thank you for your honesty, Sakshi.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Response Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-gradient-to-br from-cream-50 to-blush-50 border-blush-200 rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-playfair text-3xl italic text-mauve-800 text-center mb-4">
              {modalContent.title}
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="font-poppins text-lg text-mauve-700 mb-6 leading-relaxed">
              {modalContent.content}
            </p>
            <div className="text-5xl animate-pulse-gentle">
              {response === 'yes' ? '☕💕' : response === 'maybe' ? '🌸💝' : '🌹💕'}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/5 left-1/6 text-4xl text-blush-300 animate-sparkle opacity-60">☕</div>
        <div className="absolute bottom-1/5 right-1/6 text-4xl text-mauve-300 animate-sparkle opacity-60" style={{animationDelay: '1.5s'}}>☕</div>
        <div className="absolute top-3/5 left-4/5 text-3xl text-cream-500 animate-sparkle opacity-60" style={{animationDelay: '2.5s'}}>💕</div>
        <div className="absolute bottom-2/5 left-1/5 text-3xl text-blush-400 animate-sparkle opacity-60" style={{animationDelay: '0.8s'}}>✨</div>
        <div className="absolute top-1/6 right-1/4 text-2xl text-mauve-400 animate-sparkle opacity-60" style={{animationDelay: '3s'}}>🌸</div>
        <div className="absolute bottom-1/6 left-3/5 text-2xl text-cream-400 animate-sparkle opacity-60" style={{animationDelay: '2s'}}>💫</div>
      </div>
    </section>
  );
};

export default FinalAsk;
