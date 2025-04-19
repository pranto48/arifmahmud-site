
import { Button } from "./ui/button";
import { ArrowUp } from "lucide-react";
import { useScroll } from "../hooks/useScroll";
import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
  const { scrolled } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      variant="secondary"
      size="icon"
      className={cn(
        "fixed bottom-4 right-4 rounded-full opacity-0 transition-all duration-300",
        scrolled && "opacity-100"
      )}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};
