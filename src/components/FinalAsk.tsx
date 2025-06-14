
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const FinalAsk = () => {
  const [showModal, setShowModal] = useState(false);
  const [dodgeAnimation, setDodgeAnimation] = useState(false);
  const [confetti, setConfetti] = useState(false);

  const handleYes = () => {
    setConfetti(true);
    setShowModal(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  const handleMaybe = () => {
    setDodgeAnimation(true);
    setTimeout(() => setDodgeAnimation(false), 400);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-100 to-blush-100 relative overflow-hidden">
      {/* Confetti effect */}
      {confetti && (
        <div className="absolute inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-10px`,
                backgroundColor: ['#f7aeae', '#b098b0', '#ffed9e'][Math.floor(Math.random() * 3)],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Warm café background blur */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&h=800&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(3px)"
        }}
      />

      <div className="relative z-10 text-center px-8 max-w-2xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl">
          <div className="mb-8">
            <h2 className="font-playfair text-4xl md:text-5xl italic text-mauve-800 mb-6">
              Coffee?
            </h2>
            <p className="font-poppins text-lg md:text-xl text-mauve-700 leading-relaxed mb-4">
              All this… was just me being honest.
            </p>
            <p className="font-poppins text-lg md:text-xl text-mauve-700 leading-relaxed">
              Would you like to grab coffee with me?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={handleYes}
              className="bg-blush-400 hover:bg-blush-500 text-white px-8 py-4 text-lg font-poppins font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              ☕ Let's Go
            </Button>

            <Button
              onClick={handleMaybe}
              variant="outline"
              className={`border-mauve-300 text-mauve-600 hover:bg-mauve-50 px-8 py-4 text-lg font-poppins font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                dodgeAnimation ? "animate-dodge" : ""
              }`}
            >
              🌸 Maybe Later
            </Button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-cream-50 border-blush-200">
          <DialogHeader>
            <DialogTitle className="font-playfair text-2xl italic text-mauve-800 text-center">
              Can't wait! 😊
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="font-poppins text-mauve-700 mb-4">
              Tell me when you're free and we'll make it happen!
            </p>
            <div className="text-4xl animate-pulse-gentle">☕💕</div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating coffee elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 text-2xl text-blush-300 animate-sparkle opacity-60">☕</div>
        <div className="absolute bottom-1/4 right-1/6 text-2xl text-mauve-300 animate-sparkle opacity-60" style={{animationDelay: '1s'}}>☕</div>
        <div className="absolute top-3/4 left-3/4 text-xl text-cream-500 animate-sparkle opacity-60" style={{animationDelay: '2s'}}>💕</div>
      </div>
    </section>
  );
};

export default FinalAsk;
