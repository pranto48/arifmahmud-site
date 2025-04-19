
import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2">Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">Message</label>
            <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
