
const CelebrationRings = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-pink-500 rounded-full celebration-ring" />
      <div className="absolute w-20 h-20 border-4 border-rose-500 rounded-full celebration-ring" style={{animationDelay: '0.2s'}} />
      <div className="absolute w-40 h-40 border-3 border-red-500 rounded-full celebration-ring" style={{animationDelay: '0.4s'}} />
      <div className="absolute w-64 h-64 border-2 border-pink-400 rounded-full celebration-ring" style={{animationDelay: '0.6s'}} />
      <div className="absolute w-80 h-80 border-2 border-rose-300 rounded-full celebration-ring" style={{animationDelay: '0.8s'}} />
      <div className="absolute w-96 h-96 border border-pink-200 rounded-full celebration-ring" style={{animationDelay: '1.0s'}} />
    </div>
  );
};

export default CelebrationRings;
