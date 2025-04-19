
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          Portfolio
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/about" className="hover:text-primary/80 transition">About</Link>
          <Link to="/projects" className="hover:text-primary/80 transition">Projects</Link>
          <Link to="/blog" className="hover:text-primary/80 transition">Blog</Link>
          <Link to="/gallery" className="hover:text-primary/80 transition">Gallery</Link>
          <Link to="/contact" className="hover:text-primary/80 transition">Contact</Link>
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
