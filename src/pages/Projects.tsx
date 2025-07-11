import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";
import GoogleAdsense from "../components/GoogleAdsense";

const projects = [
  {
    title: "IT Support BD",
    description: "Get reliable IT support services and solutions in Bangladesh. Providing expert hardware, software, and network support with certified professionals.",
    link: "https://www.itsupport.com.bd/",
    image: "/lovable-uploads/e19774b1-24fd-433b-af83-ecadbc7d2285.png"
  },
  {
    title: "BD Old Photo Art",
    description: "Best Website for Old Photo Art in Bangladesh. A platform dedicated to preserving and showcasing historical photographs and creating unique digital art from old photographs.",
    link: "https://bdold.com/",
    image: "/lovable-uploads/23d9b311-0c5f-44d6-badc-d90d5f52af61.png"
  },
  {
    title: "Apparels Forum",
    description: "Welcome to apparelsforum! We are a dedicated team of professionals who are passionate about quality. Our mission is to serve you with the best quality products. Founded in 2021, we have been on a journey to provide our customers with the best software.",
    link: "https://apparelsforum.com/",
    image: "/lovable-uploads/e7033d0c-e58a-40d4-8b97-24991ca3ae93.png"
  }
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      {/* Top ad - smaller height to be less intrusive */}
      <div className="mb-10">
        <GoogleAdsense 
          adSlot="7782227990" 
          fullWidth={true} 
          height="120px"
          className="bg-background/50 rounded-md" 
        />
      </div>
      
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="hover:shadow-lg transition overflow-hidden group">
              <div className="aspect-video w-full overflow-hidden">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </Button>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
