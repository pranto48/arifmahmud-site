
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Youtube, WhatsApp, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { ParticlesBackground } from "../components/Particles";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 font-poppins relative overflow-hidden"
    >
      <ParticlesBackground />
      <div className="relative mb-8">
        <img 
          src="/lovable-uploads/4007d0de-0116-401a-a8f5-f5541cbbe3ac.png" 
          alt="Arif Mahmud" 
          className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary shadow-lg hover:scale-105 transition-transform"
        />
      </div>
      <h1 className="text-5xl font-bold mb-4">
        Hi There,<br/> I'm <span className="text-primary">Arif Mahmud</span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8 font-nunito">
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
      <div className="flex gap-6 text-muted-foreground">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Facebook className="h-6 w-6" />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <Youtube className="h-6 w-6" />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
          <WhatsApp className="h-6 w-6" />
        </a>
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
