
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationButtonProps {
  targetSectionId: string;
  text?: string;
}

const NavigationButton = ({ targetSectionId, text = "Continue reading" }: NavigationButtonProps) => {
  const scrollToSection = () => {
    const element = document.getElementById(targetSectionId) || 
                    document.querySelector(`[data-section="${targetSectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex justify-center mt-12 mb-8">
      <Button
        onClick={scrollToSection}
        variant="ghost"
        className="group flex flex-col items-center gap-2 text-purple-600/70 hover:text-purple-800 transition-all duration-300 hover:scale-105 p-6"
      >
        <span className="text-sm font-medium">{text}</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform" />
      </Button>
    </div>
  );
};

export default NavigationButton;
