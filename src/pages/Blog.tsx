import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const posts = [
  {
    title: "Endpoint Security",
    description: "Completed Cisco's Endpoint Security course, earning the badge after gaining broad understanding in basic network security, operating systems, and endpoint security.",
    date: "2024-04-23",
    image: "/lovable-uploads/8d3ef59e-dc69-49a6-9a11-f7bfd749d1b5.png",
    content: `Cisco verifies that the earner of this badge completed the Endpoint Security course. This credential recognizes a broad understanding of basic network security, as well as operating systems and endpoint security concepts.`,
    skills: [
      "Antimalware Protection",
      "Application Security",
      "Common Cyber Threats",
      "Defending Systems And Devices",
      "Host-based Intrusion Prevention",
      "IP/TCP/UDP Vulnerabilities",
      "Linux Basics",
      "Mitigating Common Network Attacks",
      "Network Security Infrastructure",
      "Securing WLANs",
      "System And Endpoint Protection"
    ]
  },
  {
    title: "Cyber Threat Management",
    description: "Earned Cisco's Cyber Threat Management badge, mastering cybersecurity policies and governance, vulnerability assessments, and risk management.",
    date: "2024-04-23",
    image: "/lovable-uploads/da235555-cdbc-4861-ada2-633184fad130.png",
    content: `Cisco verifies the earner of this badge successfully completed the Cyber Threat Management course, gaining familiarity with policies and governance for compliance and legal frameworks, conducting vulnerability assessments, risk management planning, and post-incident response.`,
    skills: [
      "Common Vulnerability Scoring System (CVSS)",
      "Disaster Recovery",
      "Evidence Handling And Attack Attribution",
      "Governance",
      "Incident Response",
      "Network And Server Profiling",
      "Penetration Testing",
      "Risk Assessment",
      "Risk Management",
      "Secure Device Management",
      "Security Assessments",
      "Security Controls",
      "The Cyber Kill Chain"
    ],
    link: "https://www.credly.com/earner/earned/badge/f8872882-62b6-4fda-b711-d947c43ff506"
  },
  {
    title: "Ethical Hacker",
    description: "Earned Cisco's Ethical Hacker badge after understanding compliance, vulnerability assessment, reporting, and completing hands-on penetration testing activities.",
    date: "2024-04-23",
    image: "/lovable-uploads/8e06a47b-cd09-43ce-a3e0-eeb4897a73c3.png",
    content: `Cisco verifies the earner of this badge successfully completed the Ethical Hacker course, demonstrating a broad understanding of legal and compliance requirements, and proficiency in scoping, executing, and reporting vulnerability assessments with mitigation recommendations. Up to 34 hands-on labs using Kali Linux, WebSploit, and more.`,
    skills: [
      "Ethical Hacking",
      "Exploiting Applications",
      "Exploiting Networks",
      "IoT Security",
      "Penetration Testing",
      "Pentesting Tools",
      "Reporting",
      "Social Engineering"
    ]
  },
  {
    title: "Google IT Support Professional Certificate",
    description: "Successfully completed Google's IT Support Professional Certificate program—consisting of 5 rigorous courses with hands-on, practice-based assessments, preparing for IT support roles.",
    date: "2022-08-29",
    image: "/lovable-uploads/2a124295-73f9-47b2-bf50-965f2fc878ed.png",
    content: `Completed by MD ARIF MAHMUD\n\nThis certificate, issued by Google, verifies completion of five professional IT courses on Coursera:
• Technical Support Fundamentals
• The Bits and Bytes of Computer Networking
• Operating Systems and You: Becoming a Power User
• System Administration and IT Infrastructure Services
• IT Security: Defense against the digital dark arts

The program includes hands-on, practice-based assessments and develops foundational skills in troubleshooting, customer service, networking, operating systems, system administration, and security.`,
    skills: [
      "Technical Support Fundamentals",
      "Computer Networking",
      "Operating Systems",
      "System Administration",
      "IT Security",
      "Troubleshooting",
      "Customer Service"
    ],
    link: "https://coursera.org/verify/professional-cert/UWWWGXDXAXVD"
  },
  {
    title: "Google Cybersecurity Professional Certificate",
    description: "Completed Google Cybersecurity Certificate with 8 intensive courses, including hands-on labs in Python, Linux, SIEM tools, and intrusion detection systems.",
    date: "2023-05-18",
    image: "/lovable-uploads/9bc47ff3-362f-47b8-9656-982479bc4ac2.png",
    content: `Completed by MD ARIF MAHMUD\n\nThis certificate evidences comprehensive training in:
• Foundations of Cybersecurity
• Play It Safe: Manage Security Risks
• Connect and Protect: Networks and Network Security
• Tools of the Trade: Linux and SQL
• Assets, Threats, and Vulnerabilities
• Sound the Alarm: Detection and Response
• Automate Cybersecurity Tasks with Python
• Put It to Work: Prepare for Cybersecurity Jobs

Skills include risk management, network/security fundamentals, detection and response, and automation via Python.`,
    skills: [
      "Cybersecurity Fundamentals",
      "Security Risks Management",
      "Network Security",
      "Linux",
      "SQL",
      "Threat Detection",
      "Incident Response",
      "Python Automation"
    ],
    link: "https://www.coursera.org/account/accomplishments/professional-cert/P2FX7UQN5H5T?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof"
  },
  {
    title: "Completed Google Data Analytics Professional Certificate",
    description: "Successfully completed the comprehensive Google Data Analytics specialization, developing expertise in data analysis tools and methodologies.",
    date: "2023-12-25",
    image: "/lovable-uploads/34877d60-33de-4534-bd71-5b9b3ee3c705.png",
    content: `I'm excited to announce the completion of the Google Data Analytics Professional Certificate program. This comprehensive specialization consisted of 8 courses, requiring approximately 6 months at 10 hours per week to complete.

    Courses completed:
    • Foundations: Data, Data, Everywhere
    • Ask Questions to Make Data-Driven Decisions
    • Prepare Data for Exploration
    • Process Data from Dirty to Clean
    • Analyze Data to Answer Questions
    • Share Data Through the Art of Visualization
    • Data Analysis with R Programming
    • Google Data Analytics Capstone: Complete a Case Study

    Through this program, I gained proficiency in essential data analytics tools including spreadsheets, SQL, Tableau, and R programming. The certification verifies my ability to prepare, process, analyze, and share data effectively for informed decision-making.`,
    skills: [
      "Data Analysis",
      "SQL",
      "R Programming",
      "Tableau",
      "Data Visualization",
      "Data Cleaning",
      "Data Processing",
      "Statistical Analysis"
    ],
    link: "https://www.coursera.org/account/accomplishments/professional-cert/WJV9G47TJREH?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
  },
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
