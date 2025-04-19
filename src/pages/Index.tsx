
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-xl text-muted-foreground max-w-2xl mb-8">
        I'm a passionate developer and creator, building beautiful and functional web experiences.
        Explore my projects, read my blog, or get in touch.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link to="/projects">View Projects</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default Index;
