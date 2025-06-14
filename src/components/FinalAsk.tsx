
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
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-100 via-blush-50 to-mauve-100 relative overflow-hidden">
      {/* Enhanced confetti effect */}
      {confetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(80)].map((_, i) => (
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

      {/* Enhanced café background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)"
        }}
      />

      <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
        <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-2xl border border-white/20">
          <div className="mb-12">
            <h2 className="font-playfair text-5xl md:text-6xl italic text-mauve-800 mb-8 leading-tight">
              Sakshi...
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-poppins text-xl md:text-2xl text-mauve-700 leading-relaxed font-light">
                All this was just me being honest with you.
              </p>
              <p className="font-poppins text-xl md:text-2xl text-mauve-700 leading-relaxed font-light">
                Would you like to grab coffee with me?
              </p>
            </div>
            <p className="font-poppins text-lg text-mauve-600 italic">
              Just us, just a conversation... just being real.
            </p>
          </div>

          {!response && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                onClick={() => handleResponse('yes')}
                className="bg-gradient-to-r from-blush-400 to-mauve-400 hover:from-blush-500 hover:to-mauve-500 text-white px-10 py-4 text-xl font-poppins font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                ☕ Yes, let's do this
              </Button>

              <Button
                onClick={() => handleResponse('maybe')}
                variant="outline"
                className="border-2 border-mauve-300 text-mauve-600 hover:bg-mauve-50 px-10 py-4 text-xl font-poppins font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                🌸 Maybe... I need time
              </Button>

              <Button
                onClick={() => handleResponse('no')}
                variant="outline"
                className="border-2 border-blush-300 text-blush-600 hover:bg-blush-50 px-10 py-4 text-xl font-poppins font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                💭 Not right now
              </Button>
            </div>
          )}

          {response && (
            <div className="animate-float-in">
              <div className="text-4xl mb-4">
                {response === 'yes' ? '🎉' : response === 'maybe' ? '🌸' : '💕'}
              </div>
              <p className="font-poppins text-lg text-mauve-600">
                Thank you for your honesty, Sakshi.
              </p>
            </div>
          )}
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
        <div className="absolute top-1/5 left-1/6 text-3xl text-blush-300 animate-sparkle opacity-60">☕</div>
        <div className="absolute bottom-1/5 right-1/6 text-3xl text-mauve-300 animate-sparkle opacity-60" style={{animationDelay: '1.5s'}}>☕</div>
        <div className="absolute top-3/5 left-4/5 text-2xl text-cream-500 animate-sparkle opacity-60" style={{animationDelay: '2.5s'}}>💕</div>
        <div className="absolute bottom-2/5 left-1/5 text-2xl text-blush-400 animate-sparkle opacity-60" style={{animationDelay: '0.8s'}}>✨</div>
      </div>
    </section>
  );
};

export default FinalAsk;
