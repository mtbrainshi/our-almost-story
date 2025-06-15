
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PersonalMessage = () => {
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
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
      setShowForm(false);
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

      <div className="relative max-w-3xl mx-auto w-full">
        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12 text-center">
            {/* Header */}
            <div className="mb-8">
              <div className="text-5xl mb-4 animate-pulse">💕</div>
              <h1 className="font-playfair text-3xl md:text-4xl italic text-purple-800 font-bold mb-6">
                Sakshi, I'm waiting...
              </h1>
              <div className="space-y-4 mb-8">
                <p className="font-poppins text-lg text-purple-600">
                  This space is just for you. Whatever you want to say, whatever you feel...
                </p>
                <p className="font-poppins text-lg text-purple-500 font-medium">
                  I'm here to listen.
                </p>
              </div>
              
              {/* Optional Message Button */}
              {!showForm && (
                <Button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 px-8 py-4 text-base shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Leave me a message (optional)
                </Button>
              )}
            </div>

            {/* Message Form - only shows when requested */}
            {showForm && (
              <div className="bg-gradient-to-br from-purple-50/50 to-pink-50/50 rounded-2xl p-6 mb-8 border border-purple-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <Textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share your thoughts, feelings, or anything you'd like to say... ✨"
                      className="min-h-[140px] text-base bg-white/90 border-purple-200 focus:border-purple-400 focus:ring-purple-400 rounded-xl resize-none shadow-sm"
                      disabled={isSubmitting}
                    />
                    <div className="absolute bottom-4 right-4">
                      <Heart className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button
                      type="button"
                      onClick={() => setShowForm(false)}
                      variant="outline"
                      className="px-6 py-3 border-purple-300 text-purple-600 hover:bg-purple-50 rounded-xl font-medium"
                    >
                      Maybe later
                    </Button>
                    <Button
                      type="submit"
                      disabled={!message.trim() || isSubmitting}
                      className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none shadow-lg"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending with love...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send message
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Footer */}
            <div className="pt-8 border-t border-purple-100/50">
              <h2 className="font-playfair text-2xl italic text-purple-700 mb-3 font-bold">
                Made with all my heart, just for you
              </h2>
              <div className="space-y-2 text-purple-500">
                <p className="font-poppins text-base leading-relaxed">
                  Sometimes the bravest thing you can do is tell someone how you feel.
                </p>
                <p className="font-poppins text-base leading-relaxed font-medium">
                  So here I am, being brave for us.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PersonalMessage;
