
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Hi, I'm a passionate creator with a love for technology and design. 
          I specialize in building beautiful, functional websites and applications.
        </p>
        <p className="text-lg">
          When I'm not coding, you can find me exploring new technologies, 
          writing about my experiences, or spending time with my family.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
