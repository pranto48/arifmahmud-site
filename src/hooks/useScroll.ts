
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update active section based on current route
  useEffect(() => {
    // Extract the section name from the path (remove leading slash)
    const currentPath = location.pathname.slice(1);
    setActiveSection(currentPath || 'home');
  }, [location]);

  // This function is kept for compatibility but won't be used in the Navbar
  const scrollToSection = (e: React.MouseEvent, section: string) => {
    // This function is maintained for backward compatibility
    // It will not be used in our updated navigation
  };

  return { scrolled, activeSection, scrollToSection };
};
