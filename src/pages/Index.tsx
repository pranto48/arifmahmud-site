
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Facebook, Youtube, Globe, Github, Linkedin, Twitter, Instagram, Network } from "lucide-react";
import { ParticlesBackground } from "../components/Particles";
import { TypeAnimation } from 'react-type-animation';
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/arifmahmudpranto", label: "Facebook" },
    { icon: Youtube, url: "https://www.youtube.com/arifmahmudpranto", label: "YouTube" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/pranto48/", label: "LinkedIn" },
    { icon: Github, url: "https://github.com/pranto48", label: "GitHub" },
    { icon: Twitter, url: "https://twitter.com/pranto48", label: "Twitter" },
    { icon: Instagram, url: "https://www.instagram.com/pranto48/", label: "Instagram" },
  ];

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
        <TypeAnimation
          sequence={[
            'Hi There,\nI\'m Arif Mahmud',
            1000,
          ]}
          speed={50}
          style={{ whiteSpace: 'pre-line' }}
          repeat={0}
        />
      </h1>
      <div className="text-xl text-muted-foreground max-w-2xl mb-8 font-nunito">
        <TypeAnimation
          sequence={[
            500,
            'I\'m an IT professional and web designer based in Kabirpur, Ashulia, Dhaka, Bangladesh. I specialize in building beautiful and functional web experiences.',
          ]}
          speed={50}
          repeat={0}
        />
      </div>
      <div className="flex gap-4 mb-8">
        <Button asChild>
          <Link to="/about">About Me <span className="ml-2">→</span></Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
      <div className="flex flex-wrap justify-center gap-6 text-muted-foreground mb-16">
        {socialLinks.map((social, index) => (
          <motion.a 
            key={index}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-primary transition-colors"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="h-6 w-6" />
          </motion.a>
        ))}
      </div>

      {/* Featured Service */}
      <motion.div 
        className="w-full max-w-4xl mx-auto mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <h2 className="text-2xl font-bold mb-6">Featured Service</h2>
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2">
                <img 
                  src="/lovable-uploads/eebab7be-29a2-4661-bbe4-a32ea77fbaa9.png"
                  alt="Network Monitoring Dashboard" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <div className="mb-2 flex items-center gap-2">
                  <Network className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Featured Service</span>
                </div>
                <h2 className="text-2xl font-bold mb-4">Professional Network Monitoring Setup</h2>
                <p className="text-muted-foreground mb-6">
                  Complete monitoring solution using Nagios and NagVis with real-time alerts and custom dashboards.
                </p>
                <Button asChild>
                  <Link to="/network-monitoring">
                    Learn More <span className="ml-2">→</span>
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Index;
