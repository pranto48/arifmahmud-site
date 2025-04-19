
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/useTheme";
import { useScroll } from "../hooks/useScroll";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { scrolled, activeSection, scrollToSection } = useScroll();

  return (
    <nav className={cn(
      "fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 transition-all duration-300",
      scrolled && "border-b shadow-sm"
    )}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Portfolio
        </Link>
        <div className="flex items-center gap-6">
          {["about", "projects", "blog", "gallery", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className={cn(
                "hover:text-primary/80 transition capitalize",
                activeSection === item && "text-primary"
              )}
              onClick={(e) => scrollToSection(e, item)}
            >
              {item}
            </Link>
          ))}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
