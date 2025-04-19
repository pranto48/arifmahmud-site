
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 min-h-screen font-poppins"
    >
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="flex justify-center items-center">
          <img 
            src="/lovable-uploads/4007d0de-0116-401a-a8f5-f5541cbbe3ac.png" 
            alt="Arif Mahmud" 
            className="w-64 h-64 rounded-full object-cover border-4 border-primary shadow-lg hover:scale-105 transition-transform"
          />
        </div>
        <div className="prose dark:prose-invert max-w-none font-nunito">
          <h2 className="text-2xl font-semibold mb-4">IT Professional & Web Designer</h2>
          <p className="text-lg mb-6">
            I am an IT professional and web designer based in Dhaka, Bangladesh. I have extensive 
            experience in various aspects of IT, including operating systems, communication and 
            networking, technical support, hardware and software handling, network security, 
            customer support, MIS, and application development.
          </p>
          <p className="text-lg mb-6">
            When it comes to web design, I am skilled in various programming languages and platforms. 
            In particular, I have a keen eye for creating visually appealing and user-friendly 
            websites using WordPress.
          </p>
          <div className="flex flex-col gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span>mail@arifmahmud.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Gazipur-1750, Bangladesh</span>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild>
              <a href="https://blog.arifmahmud.com/p/about-me.html" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center mb-6">Education</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border p-4 rounded-lg bg-background">
            <h4 className="font-medium text-lg">Bachelor of Arts (BA)</h4>
            <p className="text-muted-foreground">Jatir pita bangabandhu college</p>
            <p className="text-sm text-muted-foreground">2015-2018 | Completed</p>
          </div>
          <div className="border p-4 rounded-lg bg-background">
            <h4 className="font-medium text-lg">HSC | Informatic Practices</h4>
            <p className="text-muted-foreground">Jatir pita bangabandhu college</p>
            <p className="text-sm text-muted-foreground">2011-2013 | Completed</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
