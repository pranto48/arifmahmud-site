
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

const projects = [
  {
    title: "Project One",
    description: "A modern web application built with React and TypeScript.",
    link: "#"
  },
  {
    title: "Project Two",
    description: "Mobile-first design system for enterprise applications.",
    link: "#"
  },
  {
    title: "Project Three",
    description: "Open-source contribution to the developer community.",
    link: "#"
  }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
