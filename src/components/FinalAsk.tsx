import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CelebrationEffects from "./CelebrationEffects";
import CoffeeButtons from "./CoffeeButtons";
import CoffeeInvitation from "./CoffeeInvitation";
import MomentOfTruth from "./MomentOfTruth";
import { supabase, getSessionId } from "@/integrations/supabase/client";

// Edge function configuration
const EDGE_FUNCTION_URL = 'https://cfvzcfmuxneqihrrqipn.functions.supabase.co/send-notification';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmdnpjZm11eG5lcWlocnJxaXBuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTk3NTEwNywiZXhwIjoyMDY1NTUxMTA3fQ.5cMi40YhhNTvX_FzBn4bfebHsdq56ryr6xVee7oPE10';

const FinalAsk = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMomentOfTruth, setShowMomentOfTruth] = useState(false);
  const [showCoffeeQuestion, setShowCoffeeQuestion] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationPhase, setCelebrationPhase] = useState(0);
  const [momentOfTruthShown, setMomentOfTruthShown] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Helper function for sending notifications
  const sendNotification = async (session_id: string, response: boolean | null) => {
    try {
      console.log('Sending notification with auth:', SERVICE_ROLE_KEY);
      const notifRes = await fetch(EDGE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`
        },
        body: JSON.stringify({ session_id, response })
      });

      const notifText = await notifRes.text();
      console.log('Notification status:', notifRes.status);
      console.log('Notification response:', notifText);

      if (!notifRes.ok) {
        throw new Error(`Notification failed: ${notifRes.status} - ${notifText}`);
      }
      
      return true;
    } catch (err) {
      console.error('Notification error:', err);
      return false;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !momentOfTruthShown) {
          setIsVisible(true);
          setTimeout(() => {
            setShowMomentOfTruth(true);
            setMomentOfTruthShown(true);
          }, 1000);
        } else if (entry.isIntersecting && momentOfTruthShown) {
          setIsVisible(true);
          setShowCoffeeQuestion(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [momentOfTruthShown]);

  const handleMomentOfTruthComplete = () => {
    setShowMomentOfTruth(false);
    setShowCoffeeQuestion(true);
  };

  const handleYesClick = async () => {
    setShowCelebration(true);
    setCelebrationPhase(1);
    
    const session_id = getSessionId();
    const { error: dbError } = await supabase.from('user_responses').insert([{ 
      session_id, 
      response: true,
      created_at: new Date().toISOString()
    }]);
    
    if (dbError) {
      console.error('Database error:', dbError);
      return;
    }
    
    await sendNotification(session_id, true);
  };

  const handleNoClick = async () => {
    const session_id = getSessionId();
    const { error: dbError } = await supabase.from('user_responses').insert([{ 
      session_id, 
      response: false,
      created_at: new Date().toISOString()
    }]);
    
    if (dbError) {
      console.error('Database error:', dbError);
      return;
    }
    
    await sendNotification(session_id, false);
  };

  const handleCelebrationEnd = () => {
    setShowCelebration(false);
    setCelebrationPhase(0);
    const personalMessage = document.querySelector('#personal-message') || 
                           document.querySelector('[data-section="personal-message"]') ||
                           document.body.lastElementChild;
    personalMessage?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      {/* Cozy coffee shop atmosphere */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-orange-50/50 to-yellow-50/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-100/40 via-transparent to-orange-100/30" />
        
        {/* Floating steam particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gray-200/30 rounded-full animate-steam-rise blur-sm"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${8 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              top: `${80 + Math.random() * 20}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
        
        {/* Warm ambient lighting */}
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-1/2 right-1/3 w-80 h-80 bg-orange-200/20 rounded-full blur-2xl animate-breathe" style={{animationDelay: '3s'}} />
      </div>

      {/* Moment of Truth Transition - only show once */}
      {showMomentOfTruth && (
        <MomentOfTruth onComplete={handleMomentOfTruthComplete} />
      )}

      {/* Celebration Effects */}
      <CelebrationEffects 
        showCelebration={showCelebration}
        celebrationPhase={celebrationPhase}
        onCelebrationEnd={handleCelebrationEnd}
      />

      {/* Main content card - only show after moment of truth */}
      {showCoffeeQuestion && (
        <div className={`max-w-4xl mx-auto px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <Card className="bg-white/95 backdrop-blur-sm border border-white/50 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-12 relative">
              <CoffeeInvitation />
              <CoffeeButtons onYesClick={handleYesClick} onFinalNoClick={handleNoClick} />
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
};

export default FinalAsk;
