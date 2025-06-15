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
      image: "/images/CLASSROOM.png",
      frontContent: "Two students in the same classroom, worlds apart",
      backContent: "Sakshi, we sat benches apart, never spoke much... but I noticed you. Always.",
      animation: "slide-up"
    },
    {
      id: 2,
      title: "The Red Dress Moment",
      background: "bg-gradient-to-br from-mauve-50 via-blush-50 to-cream-100",
      image: "/images/RED DRESS_FINALE.png",
      frontContent: "That day at the Upper Depot bus stop that changed everything",
      backContent: "You wore red that day, Sakshi. My heart kept smiling for hours. That was the moment something sparked.",
      animation: "rotate-in"
    },
    {
      id: 3,
      title: "Project Nights & Dreams",
      background: "bg-gradient-to-br from-mauve-100 via-cream-50 to-blush-100",
      image: "images/college_project_image.jpg",
      frontContent: "Late nights, laptops, and stolen glances",
      backContent: "Those late project nights — the chaos, the pressure, the laughter. We were both tired, but still giving our best. And even after it all, I kept thinking of you. Somewhere between suppressed feelings and quiet moments, you stayed in my thoughts... even in my dreams — where we’d walk, talk, and never run out of things to say.",
      animation: "float-bounce"
    },
    {
      id: 4,
      title: "The Day You Raced the Rain",
      background: "bg-gradient-to-br from-blush-50 via-mauve-50 to-cream-100",
      image: "/images/girl_drenched_in_rain.jpg",
      frontContent: "Drenched but determined, beautiful in chaos",
      backContent: "You ran through that storm, Sakshi. Completely soaked but still came to college. I wished I'd run with you.",
      animation: "ripple"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blush-50 to-cream-50 font-poppins min-h-screen w-full overflow-x-hidden">
      <div id="hero-section" className="w-full">
        <Hero />
      </div>

      {chapters.map((chapter) => (
        <div key={chapter.id} id={`chapter-${chapter.id}`} data-chapter={chapter.id} className="w-full">
          <Chapter
            {...chapter}
            isActive={currentChapter === chapter.id}
          />
        </div>
      ))}

      <div id="interlude-section" className="w-full">
        <Interlude />
      </div>

      <div id="final-ask-section" className="w-full">
        <FinalAsk />
      </div>

      <PersonalMessage />
    </div>
  );
};

export default Index;
