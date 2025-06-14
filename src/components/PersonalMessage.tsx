
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const PersonalMessage = () => {
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // For now, we'll store locally until Supabase is connected
      localStorage.setItem('sakshi_message', JSON.stringify({
        message: message.trim(),
        timestamp: new Date().toISOString()
      }));
      
      setIsSubmitted(true);
      setMessage("");
      setShowForm(false);
      
      toast({
        title: "Message received 💕",
        description: "Your words mean everything...",
      });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blush-50 via-cream-50 to-mauve-100 py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl italic text-mauve-800 mb-8 leading-tight">
            Sakshi, I'm waiting...
          </h2>
          <p className="font-poppins text-lg md:text-xl text-mauve-600 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
            This space is just for you. Whatever you want to say, whatever you feel... I'm here to listen.
          </p>
          
          {!isSubmitted ? (
            <Button
              onClick={() => setShowForm(!showForm)}
              className="bg-gradient-to-r from-blush-400 to-mauve-400 hover:from-blush-500 hover:to-mauve-500 text-white px-8 py-4 text-lg font-poppins font-medium rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {showForm ? "Close" : "💌 Leave me a message"}
            </Button>
          ) : (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md mx-auto">
              <div className="text-4xl mb-4">💕</div>
              <p className="font-playfair text-xl italic text-mauve-700 mb-4">
                Thank you for opening your heart to me...
              </p>
              <p className="text-sm text-mauve-500 font-poppins">
                Your message is safe with me
              </p>
            </div>
          )}
        </div>

        {showForm && !isSubmitted && (
          <div className="mb-16 animate-float-in">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blush-200">
                <div className="mb-6 text-center">
                  <div className="text-3xl mb-4">💝</div>
                  <p className="text-mauve-600 font-poppins italic">What's in your heart?</p>
                </div>
                
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Dear..."
                  className="w-full min-h-32 p-4 border border-blush-200 rounded-xl focus:border-blush-400 focus:ring-2 focus:ring-blush-200 font-poppins resize-none bg-white/80 backdrop-blur-sm"
                  maxLength={500}
                />
                
                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-mauve-500 font-poppins">
                    {message.length}/500
                  </span>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-blush-400 to-mauve-400 hover:from-blush-500 hover:to-mauve-500 text-white font-poppins font-medium rounded-full px-6 py-2"
                    disabled={!message.trim()}
                  >
                    Send with love 💕
                  </Button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Heartfelt footer */}
        <div className="text-center mt-20 pt-8 border-t border-blush-200">
          <p className="font-playfair text-xl italic text-mauve-600 mb-4">
            Made with all my heart, just for you
          </p>
          <p className="font-poppins text-sm text-mauve-500 leading-relaxed">
            Sometimes the bravest thing you can do is tell someone how you feel.<br />
            So here I am, being brave for us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalMessage;
