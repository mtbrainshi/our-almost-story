
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PersonalMessage = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    
    // Simulate sending message
    setTimeout(() => {
      toast({
        title: "Message sent! 💕",
        description: "Thank you for sharing your thoughts with me.",
      });
      setMessage("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section 
      id="personal-message" 
      data-section="personal-message"
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50"
    >
      {/* Dreamy background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-200/15 rounded-full blur-3xl animate-breathe" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-rose-200/25 rounded-full blur-2xl animate-breathe" style={{animationDelay: '4s'}} />
      </div>

      <div className="relative max-w-2xl mx-auto w-full">
        <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center">
            {/* Header */}
            <div className="mb-8">
              <div className="text-6xl mb-4 animate-pulse">💕</div>
              <h1 className="font-playfair text-3xl md:text-4xl italic text-purple-800 font-bold mb-4">
                Sakshi, I'm waiting...
              </h1>
              <p className="font-poppins text-lg text-purple-600 mb-2">
                This space is just for you. Whatever you want to say, whatever you feel...
              </p>
              <p className="font-poppins text-base text-purple-500">
                I'm here to listen.
              </p>
            </div>

            {/* Message Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your thoughts, feelings, or anything you'd like to say..."
                  className="min-h-[120px] text-base bg-white/80 border-purple-200 focus:border-purple-400 focus:ring-purple-400 rounded-xl resize-none"
                  disabled={isSubmitting}
                />
                <div className="absolute bottom-3 right-3">
                  <Heart className="w-4 h-4 text-purple-400" />
                </div>
              </div>

              <Button
                type="submit"
                disabled={!message.trim() || isSubmitting}
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Leave me a message
                  </div>
                )}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-purple-100">
              <p className="font-playfair text-xl italic text-purple-700 mb-2">
                Made with all my heart, just for you
              </p>
              <p className="font-poppins text-sm text-purple-500 leading-relaxed">
                Sometimes the bravest thing you can do is tell someone how you feel.
                <br />
                So here I am, being brave for us.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PersonalMessage;
