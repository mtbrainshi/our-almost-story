
const CelebrationRings = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-pink-500 rounded-full celebration-ring" />
      <div className="absolute w-16 h-16 border-4 border-rose-500 rounded-full celebration-ring" style={{animationDelay: '0.1s'}} />
      <div className="absolute w-32 h-32 border-2 border-red-500 rounded-full celebration-ring" style={{animationDelay: '0.2s'}} />
      <div className="absolute w-48 h-48 border-2 border-pink-400 rounded-full celebration-ring" style={{animationDelay: '0.3s'}} />
      <div className="absolute w-64 h-64 border border-rose-300 rounded-full celebration-ring" style={{animationDelay: '0.4s'}} />
    </div>
  );
};

export default CelebrationRings;
