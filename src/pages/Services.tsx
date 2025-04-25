import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Server, Shield, Globe, Wrench } from "lucide-react";

const services = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Network Services",
    description: "Designing, configuring, and maintaining network infrastructures, including routers, switches, and firewalls.",
    pricing: [
      "Hourly Rate: $40",
      "Per Project Rate: Varies based on scope and complexity"
    ],
    note: "Rates are competitive compared to other professionals in the region, where network engineers charge between $20 to $60 per hour."
  },
  {
    icon: <Server className="h-8 w-8 text-primary" />,
    title: "Server Configuration",
    description: "Setting up and managing Windows and Linux servers, ensuring optimal performance and security.",
    pricing: [
      "Per Server Configuration: $100",
      "Hourly Rate: $35"
    ],
    note: "These rates are aligned with industry standards for server configuration services."
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Cybersecurity Services",
    description: "Implementing security measures to protect systems and networks from cyber threats.",
    pricing: [
      "Hourly Rate: $50",
      "Per Assessment: $150"
    ],
    note: "Given the increasing importance of cybersecurity, these rates reflect the value of expert services in this domain."
  },
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    title: "Web Design and Development",
    description: "Creating responsive and user-friendly websites using WordPress, tailored to client needs.",
    pricing: [
      "Hourly Rate: $20",
      "Basic Package: $200 – Includes up to 5 pages, basic SEO, and responsive design",
      "Standard Package: $250 – Includes up to 10 pages, enhanced SEO, and additional features",
      "Ultimate Package: $300 – Includes up to 15 pages, advanced SEO, and comprehensive customization"
    ],
    note: "These packages are competitive, considering that WordPress developers in Bangladesh charge between $10 to $50 per hour."
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Technical Support and IT Consulting",
    description: "Providing technical assistance, troubleshooting, and IT consultancy to optimize business operations.",
    pricing: [
      "Hourly Rate: $30"
    ],
    note: "This rate is in line with local IT support services, which often range around $30 per hour."
  }
];

const Services = () => {
  return (
    <motion.div 
      className="container mx-auto px-4 pt-24 pb-16 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        💼 Services Offered by Arif Mahmud Pranto
      </motion.h1>
      
      <motion.p 
        className="text-lg text-center mb-12 max-w-3xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Arif Mahmud Pranto is a seasoned IT professional and web designer based in Dhaka, Bangladesh. 
        With extensive experience in various IT domains, he offers a range of services tailored to meet 
        the needs of businesses and individuals.
      </motion.p>

      <motion.div 
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          >
            <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105 bg-background/80 backdrop-blur-sm border-primary/20">
              <CardHeader className="flex flex-row items-center gap-4">
                {service.icon}
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Pricing:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {service.pricing.map((price, idx) => (
                      <li key={idx}>{price}</li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Note: {service.note}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
