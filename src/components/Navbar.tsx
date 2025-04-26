
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Home } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/useTheme";
import { useScroll } from "../hooks/useScroll";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { scrolled } = useScroll();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || (location.pathname === '/' && path === '/');
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full bg-background/70 backdrop-blur-sm z-50 transition-all duration-300",
      scrolled && "border-b shadow-sm"
    )}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-semibold">
          <Home className="w-6 h-6" />
        </Link>
        <div className="flex items-center gap-6">
          {[
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/blog", label: "Blog" },
            { path: "/gallery", label: "Gallery" },
            { path: "/services", label: "Services" },
            { path: "/contact", label: "Contact" }
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative group"
            >
              <span className={cn(
                "hover:text-primary/80 transition capitalize",
                isActive(item.path) && "text-primary"
              )}>
                {item.label}
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                initial={{ width: isActive(item.path) ? "100%" : "0%" }}
                animate={{ width: isActive(item.path) ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.2 }}
              />
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
