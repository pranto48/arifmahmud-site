
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
      <h1 className="text-4xl font-bold mb-8 text-center">About Me – Arif Mahmud Pranto</h1>
      <div className="grid md:grid-cols-2 gap-12 mb-12">
        <div className="flex justify-center items-center">
          <img 
            src="/lovable-uploads/4007d0de-0116-401a-a8f5-f5541cbbe3ac.png" 
            alt="Arif Mahmud" 
            className="w-64 h-64 rounded-full object-cover border-4 border-primary shadow-lg hover:scale-105 transition-transform"
          />
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Hello there!</h2>
          <p className="text-lg mb-6">
            My name is Arif Mahmud Pranto, and I am an IT professional and web designer based in Kabirpur, Ashulia, Dhaka, Bangladesh. I have extensive experience in various aspects of IT, including network security, firewall management, Windows and Linux server system administration, cybersecurity, operating systems, communication and networking, technical support, hardware and software handling, customer support, Management Information Systems (MIS), and application development.
          </p>
          <p className="text-lg mb-6">
            When it comes to web design, I am skilled in various programming languages and platforms. In particular, I have a keen eye for creating visually appealing and user-friendly websites using WordPress. With my unique blend of technical and creative skills, I am passionate about creating digital experiences that make a difference.
          </p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>
        <p className="text-lg mb-6">
          I have been working full-time as a Server and Network Administrator for over 12 years at a private company. My responsibilities include:
        </p>
        <ul className="space-y-2 list-disc pl-6">
          <li>Network Security: Implementing and managing security measures to protect network infrastructure.</li>
          <li>Firewall Management: Configuring and maintaining firewalls to safeguard against unauthorized access.</li>
          <li>Server Administration: Managing both Windows and Linux servers to ensure optimal performance.</li>
          <li>Communication & Networking: Overseeing network operations and ensuring reliable communication systems.</li>
          <li>NAS Server Maintenance: Maintaining Network-Attached Storage systems for efficient data storage and access.</li>
          <li>System Monitoring: Continuously monitoring systems to detect and resolve issues promptly.</li>
          <li>Technical Support: Providing support for hardware and software-related issues.</li>
          <li>Customer Support: Assisting clients with IT-related inquiries and solutions.</li>
          <li>MIS & Application Development: Developing Management Information Systems and other applications to streamline operations.</li>
        </ul>
        <p className="text-lg mt-6 mb-6">
          In addition to my full-time role, I am the owner of IT Support BD and Web for Bangladesh, where I have been dedicated to supporting municipal finance and digital transformation projects for over 12 years. These initiatives focus on enhancing local economic development and digital capacity building within municipalities.
        </p>
        <p className="text-lg mb-6">
          Currently, I serve as a Senior Supervisor at Interstoff Apparels Ltd. in Gazipur, where I specialize in operating systems, communication and networking, technical support, hardware and software handling, network security, customer support, MIS, and application development. Additionally, I am a partner at IT Support BD and Web for Bangladesh, where I have devoted a significant portion of my practice to municipal finance over the past twenty-five years.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <h3 className="text-2xl font-semibold mb-6">Education</h3>
        <ul className="space-y-4 list-none pl-0">
          <li>S.S.C. from Pagla Government High School, Narayanganj</li>
          <li>H.S.C. from Jatir Pita Bangabandhu Government College, Gazipur</li>
          <li>BBA from Jatir Pita Bangabandhu Government College, Gazipur</li>
        </ul>
      </div>

      <div className="prose dark:prose-invert max-w-none mb-12">
        <p className="text-lg mb-6">
          With my strong technical skills and excellent interpersonal abilities, I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion in life is using my technical know-how to benefit other people and organizations.
        </p>
        <p className="text-lg mb-6">
          Whether you're a small business owner, an entrepreneur, or a large corporation, I would love to talk to you about how I can help you achieve your goals through my services. Thank you for taking the time to learn a little bit about me. I look forward to connecting with you!
        </p>
        <p className="text-lg mb-6">
          If you have any specific projects or collaborations in mind, feel free to reach out. I'm always open to new opportunities and challenges.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <span>mail@arifmahmud.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          <span>Kabirpur, Ashulia, Dhaka, Bangladesh</span>
        </div>
      </div>

      <div>
        <Button asChild>
          <a href="https://blog.arifmahmud.com/p/about-me.html" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default About;
