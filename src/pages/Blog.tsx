import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const posts = [
  {
    title: "Achieved CCNA: Enterprise Networking, Security, and Automation Certification",
    description: "Cisco verifies successful completion of the Enterprise Networking, Security and Automation course with hands-on experience in scalable network architectures, security, and automation.",
    date: "2024-04-22",
    image: "/lovable-uploads/9477d888-becb-452b-ab92-d01426fff086.png",
    content: `I'm excited to share that I've earned the CCNA: Enterprise Networking, Security, and Automation certification from Cisco. This certification verifies my foundation in:

    • Scalable network architectures
    • Dynamic routing
    • Security threat mitigation
    • Wide-area networks
    • Network virtualization
    • Network automation and programmability

    The certification process included over 41 lab activities and 15 hours of hands-on experience with Cisco hardware and Packet Tracer tools.`,
    skills: [
      "Dynamic Routing",
      "Network Address Translation (NAT)",
      "Network Automation Basics",
      "Quality Of Service (QoS)",
      "Security Threat Mitigation",
      "Software-Driven Networks",
      "Virtualization",
      "Wide Area Networks"
    ],
    link: "https://www.credly.com/badges/0a260c98-1316-4391-82a2-4e652639b234/linked_in_profile"
  },
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
          <Card key={index} className="hover:shadow-lg transition">
            <CardHeader>
              <div className="text-sm text-muted-foreground">{post.date}</div>
              <CardTitle>{post.title}</CardTitle>
              {post.image && (
                <div className="my-4">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="rounded-lg max-h-48 object-contain"
                  />
                </div>
              )}
              <CardDescription className="whitespace-pre-line">{post.content || post.description}</CardDescription>
              {post.skills && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              )}
              {post.link && (
                <a 
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline mt-4 inline-block"
                >
                  View Certification →
                </a>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Blog;
