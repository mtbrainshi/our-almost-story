
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import Interlude from "@/components/Interlude";
import FinalAsk from "@/components/FinalAsk";
import PersonalMessage from "@/components/PersonalMessage";

const Index = () => {
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
    // Track page visit for Sakshi (stored locally until Supabase is connected)
    const visitData = {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      screenSize: `${window.screen.width}x${window.screen.height}`
    };
    
    const existingVisits = JSON.parse(localStorage.getItem('sakshi_visits') || '[]');
    existingVisits.push(visitData);
    localStorage.setItem('sakshi_visits', JSON.stringify(existingVisits));

    const handleScroll = () => {
      const chapters = document.querySelectorAll('[data-chapter]');
      chapters.forEach((chapter, index) => {
        const rect = chapter.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setCurrentChapter(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const chapters = [
    {
      id: 1,
      title: "When We Were Just Classmates",
      background: "bg-gradient-to-br from-cream-50 via-blush-50 to-mauve-100",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      frontContent: "Two students in the same classroom, worlds apart",
      backContent: "Sakshi, we sat benches apart, never spoke much... but I noticed you. Always.",
      animation: "slide-up"
    },
    {
      id: 2,
      title: "The Red Dress Moment",
      background: "bg-gradient-to-br from-mauve-50 via-blush-50 to-cream-100",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763426?w=400&h=300&fit=crop",
      frontContent: "That day at the bus stop that changed everything",
      backContent: "You wore red that day, Sakshi. My heart smiled for hours. That was my spark.",
      animation: "rotate-in"
    },
    {
      id: 3,
      title: "Project Nights & Dreams",
      background: "bg-gradient-to-br from-mauve-100 via-cream-50 to-blush-100",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      frontContent: "Late nights, laptops, and stolen glances",
      backContent: "Those project nights, Sakshi... you beside me, both tired but trying. In my dreams, we talked for hours.",
      animation: "float-bounce"
    },
    {
      id: 4,
      title: "The Day You Raced the Rain",
      background: "bg-gradient-to-br from-blush-50 via-mauve-50 to-cream-100",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400&h=300&fit=crop",
      frontContent: "Drenched but determined, beautiful in chaos",
      backContent: "You ran through that storm, Sakshi. Completely soaked but still came to college. I wished I'd run with you.",
      animation: "ripple"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blush-50 to-cream-50 font-poppins">
      <Hero />
      
      {chapters.map((chapter, index) => (
        <Chapter
          key={chapter.id}
          {...chapter}
          isActive={currentChapter === index + 1}
        />
      ))}
      
      <Interlude />
      <FinalAsk />
      <PersonalMessage />
    </div>
  );
};

export default Index;
