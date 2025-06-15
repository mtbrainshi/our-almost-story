const CelebrationModal = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
      <div className="relative max-w-md mx-auto">
        {/* Glass background with pulsing effect */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-xl rounded-3xl border border-white/90 shadow-2xl celebration-modal" />
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/80 via-rose-50/60 to-red-50/70 rounded-3xl" />
        
        {/* Glowing effects */}
        <div className="absolute -inset-6 bg-gradient-to-br from-pink-300/40 via-rose-300/30 to-red-300/35 rounded-3xl blur-3xl opacity-60" />
        <div className="absolute -inset-3 bg-gradient-to-br from-pink-400/25 via-rose-400/20 to-red-400/30 rounded-3xl blur-xl opacity-50" />
        
        {/* Content */}
        <div className="relative z-10 p-8 text-center">
          <div className="text-7xl mb-6 celebration-mega-heart">💖</div>
          
          <h1 className="font-playfair text-4xl italic text-rose-800 font-bold mb-4">
            You said YES! 💕
          </h1>
          <p className="font-playfair text-xl italic text-rose-700 mb-3">
            Thank you for saying yes!
          </p>
          <p className="font-poppins text-lg text-rose-600 mb-8 leading-relaxed">
            This makes me so incredibly happy! ✨
            <br />
            <span className="text-sm italic text-rose-500">I can't wait to hear from you...</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CelebrationModal;
