import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageCircle } from "lucide-react";  // Removed Heart import
import { useToast } from "@/hooks/use-toast";
import { supabase, getSessionId } from "@/integrations/supabase/client";

// Edge function configuration
const EDGE_FUNCTION_URL = 'https://cfvzcfmuxneqihrrqipn.functions.supabase.co/send-notification';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdnpjZm11eG5lcWlocnJxaXBuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTk3NTEwNywiZXhwIjoyMDY1NTUxMTA3fQ.5cMi40YhhNTvX_FzBn4bfebHsdq56ryr6xVee7oPE10';

const PersonalMessage = () => {
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsSubmitting(true);
    const session_id = getSessionId();

    // Insert message into Supabase
    const { error: dbError } = await supabase
      .from('user_messages')
      .insert([{ 
        session_id, 
        message_content: message,
        created_at: new Date().toISOString()
      }]);

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      toast({
        title: "Error sending message",
        description: dbError.message,
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Send notification
    try {
      console.log('Sending message notification with auth:', SERVICE_ROLE_KEY);
      const notifRes = await fetch(EDGE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`
        },
        body: JSON.stringify({ 
          session_id, 
          message,
          response: null // indicates this is a message, not a yes/no response
        })
      });

      const notifText = await notifRes.text();
      console.log('Notification (MESSAGE) status:', notifRes.status);
      console.log('Notification (MESSAGE) response:', notifText);

      if (!notifRes.ok) {
        console.error("Notification error:", notifText);
        toast({
          title: "Message saved but notification failed",
          description: "Your message was saved but we couldn't send the notification.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Message sent! 💕",
          description: "Thank you for sharing your thoughts with me.",
        });
      }
    } catch (err) {
      console.error("Notification error:", err);
      toast({
        title: "Message saved but notification failed",
        description: "Your message was saved but we couldn't send the notification.",
        variant: "destructive",
      });
    }

    setMessage("");
    setIsSubmitting(false);
    setShowForm(false);
  };

  return (
    <section 
      id="personal-message" 
      data-section="personal-message"
      className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-purple-50 via-pink-50 to-rose-50 relative"
    >
      {/* Dreamy background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(200,150,255,0.1),rgba(255,180,220,0.05))]" />
        <div className="absolute inset-0 bg-grid-purple/[0.02] bg-[size:20px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <Card className="relative w-[90%] sm:w-[85%] md:w-[450px] max-w-2xl bg-white/90 backdrop-blur-sm border-purple-100/50 rounded-3xl shadow-xl transform hover:scale-[1.02] transition-all duration-300">
        <CardContent className="p-6 sm:p-8 md:p-10">
          <div className="text-center space-y-6">
            <div className="flex justify-center gap-2 transform -translate-y-1">
              <div className="text-4xl animate-pulse transform hover:scale-110 transition-transform duration-300 hover:-rotate-12">💝</div>
              <div className="text-4xl animate-pulse delay-150 transform hover:scale-110 transition-transform duration-300 hover:rotate-12">💝</div>
            </div>
            
            <h1 className="font-playfair text-2xl sm:text-3xl md:text-4xl italic text-purple-800 font-bold">
              I'm waiting...
            </h1>
            
            <div className="space-y-3">
              <p className="font-poppins text-base sm:text-lg text-purple-600">
                This space is just for you.
              </p>
              <p className="font-poppins text-base sm:text-lg text-purple-600">
                Whatever you want to say, whatever you feel...
              </p>
              <p className="font-poppins text-base sm:text-lg text-purple-500 font-medium mt-4">
                I'm here to listen.
              </p>
            </div>
            
            {/* Optional Message Button */}
            {!showForm && (
              <Button
                onClick={() => setShowForm(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-2xl transition-all duration-300 transform hover:scale-105 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base shadow-lg mt-6"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
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
        </CardContent>
      </Card>
    </section>
  );
};

export default PersonalMessage;
