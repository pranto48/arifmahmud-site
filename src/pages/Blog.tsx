
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

const posts = [
  {
    title: "Getting Started with React",
    description: "Learn the basics of React and start building modern web applications.",
    date: "2024-04-15"
  },
  {
    title: "The Power of TypeScript",
    description: "Why TypeScript is becoming the standard for large-scale applications.",
    date: "2024-04-10"
  },
  {
    title: "Building with Next.js",
    description: "A comprehensive guide to building with Next.js framework.",
    date: "2024-04-05"
  }
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <Card key={index} className="hover:shadow-lg transition cursor-pointer">
            <CardHeader>
              <div className="text-sm text-muted-foreground">{post.date}</div>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
