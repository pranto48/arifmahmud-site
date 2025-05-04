
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Home, Info, Briefcase, BookText, ImageIcon, Settings, Mail, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "../hooks/useTheme";
import { useScroll } from "../hooks/useScroll";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { useIsMobile } from "../hooks/use-mobile";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { scrolled } = useScroll();
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path || (location.pathname === '/' && path === '/');
  };

  const menuItems = [
    { path: "/", label: "Home", icon: Home, gradient: { i: "#a955ff", j: "#ea51ff" } },
    { path: "/about", label: "About", icon: Info, gradient: { i: "#56CCF2", j: "#2F80ED" } },
    { path: "/projects", label: "Projects", icon: Briefcase, gradient: { i: "#FF9966", j: "#FF5E62" } },
    { path: "/blog", label: "Blog", icon: BookText, gradient: { i: "#80FF72", j: "#7EE8FA" } },
    { path: "/gallery", label: "Gallery", icon: ImageIcon, gradient: { i: "#ffa9c6", j: "#f434e2" } },
    { path: "/services", label: "Services", icon: Settings, gradient: { i: "#FFC857", j: "#E9724C" } },
    { path: "/contact", label: "Contact", icon: Mail, gradient: { i: "#9b87f5", j: "#D946EF" } }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
        
        {/* Desktop Menu */}
        {!isMobile && (
          <div className="flex items-center gap-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group nav-item"
                onMouseEnter={() => setHoveredItem(item.path)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  '--i': item.gradient.i,
                  '--j': item.gradient.j,
                } as React.CSSProperties}
              >
                <div className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300",
                  hoveredItem === item.path ? "nav-item-hovered text-white" : "",
                  isActive(item.path) ? "text-primary" : "text-foreground/70"
                )}>
                  <item.icon className={cn(
                    "w-5 h-5 transition",
                    hoveredItem === item.path ? "scale-0" : "scale-100"
                  )} />
                  <span className={cn(
                    "transition capitalize",
                    hoveredItem === item.path ? "scale-100" : ""
                  )}>
                    {item.label}
                  </span>
                </div>
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
        )}
        
        {/* Mobile Menu Button */}
        {isMobile && (
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="rounded-full"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        )}
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobile && mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="bg-background/95 backdrop-blur-sm border-t py-4"
        >
          <div className="container mx-auto px-4 flex flex-col gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 p-2 rounded-md transition",
                  isActive(item.path) 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-primary/5"
                )}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  '--i': item.gradient.i,
                  '--j': item.gradient.j,
                } as React.CSSProperties}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
                {isActive(item.path) && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="h-1 w-1 rounded-full bg-primary ml-auto"
                  />
                )}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
