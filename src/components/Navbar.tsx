
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/useTheme";
import { useScroll } from "../hooks/useScroll";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { scrolled } = useScroll();
  const location = useLocation();

  // Determine if a link is active based on current path
  const isActive = (path: string) => {
    return location.pathname === path || (location.pathname === '/' && path === '/');
  };

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
          {[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/blog", label: "Blog" },
            { path: "/gallery", label: "Gallery" },
            { path: "/contact", label: "Contact Us" }
          ].map((item) => (
            item.path !== "/" && (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "hover:text-primary/80 transition capitalize",
                  isActive(item.path) && "text-primary"
                )}
              >
                {item.label}
              </Link>
            )
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
