
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import Interlude from "@/components/Interlude";
import FinalAsk from "@/components/FinalAsk";
import Guestbook from "@/components/Guestbook";

const Index = () => {
  const [currentChapter, setCurrentChapter] = useState(0);

  useEffect(() => {
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
      title: "Quiet Classmates",
      background: "bg-gradient-to-br from-cream-50 to-blush-100",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
      frontContent: "Two students sitting apart in a classroom",
      backContent: "We sat benches apart… never spoke… but I noticed you.",
      animation: "slide-up"
    },
    {
      id: 2,
      title: "Red-Dress Spark",
      background: "bg-gradient-to-br from-mauve-50 to-blush-50",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763426?w=400&h=300&fit=crop",
      frontContent: "A woman in a red dress at a bus stop",
      backContent: "That day you wore red… my smile never faded.",
      animation: "rotate-in"
    },
    {
      id: 3,
      title: "Project Night Dreams",
      background: "bg-gradient-to-br from-mauve-100 to-cream-100",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      frontContent: "Two people working late on a laptop",
      backContent: "Late-night coding… and in my dreams, you were always there.",
      animation: "float-bounce"
    },
    {
      id: 4,
      title: "The Monsoon Dash",
      background: "bg-gradient-to-br from-blush-50 to-mauve-50",
      image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=400&h=300&fit=crop",
      frontContent: "Rain falling on a city street",
      backContent: "You raced the storm. I watched and wished I'd run beside you.",
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
      <Guestbook />
    </div>
  );
};

export default Index;
