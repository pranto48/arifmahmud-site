
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20"
    >
      <h1 className="text-5xl font-bold mb-4">
        Hi There,<br/> I'm <span className="text-primary">Arif Mahmud</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        I'm an IT professional and web designer based in Dhaka, Bangladesh. 
        I specialize in building beautiful and functional web experiences.
      </p>
      <div className="flex gap-4 mb-8">
        <Button asChild>
          <Link to="/about">About Me <span className="ml-2">→</span></Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
      <div className="flex gap-4 text-muted-foreground">
        <a href="https://www.linkedin.com/in/pranto48/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="https://github.com/pranto48" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Github className="h-6 w-6" />
        </a>
        <a href="https://twitter.com/pranto48" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Twitter className="h-6 w-6" />
        </a>
        <a href="https://www.instagram.com/pranto48" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Instagram className="h-6 w-6" />
        </a>
      </div>
    </motion.div>
  );
};

export default Index;
