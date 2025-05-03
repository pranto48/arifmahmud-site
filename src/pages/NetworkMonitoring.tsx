
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Network, Bell, LayoutDashboard, Monitor, Server, Book, Clock, DollarSign, Compass, ArrowRight } from "lucide-react";

const NetworkMonitoring = () => {
  const features = [
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: "Comprehensive monitoring",
      description: "Using Nagios and NagVis for complete network visibility"
    },
    {
      icon: <Bell className="h-8 w-8 text-primary" />,
      title: "Real-time alerts",
      description: "Get immediate notifications when issues arise"
    },
    {
      icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
      title: "Custom dashboards",
      description: "Clear, at-a-glance network insights through NagVis"
    },
    {
      icon: <Monitor className="h-8 w-8 text-primary" />,
      title: "Multi-site coverage",
      description: "Monitor servers, switches, routers, or any IP addresses"
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Linux-based installation",
      description: "Complete setup and configuration on reliable Linux servers"
    },
    {
      icon: <Book className="h-8 w-8 text-primary" />,
      title: "Hands-on training",
      description: "Full system training for your team included"
    }
  ];

  const serviceDetails = [
    { icon: <DollarSign className="h-6 w-6 text-green-500" />, title: "Price", value: "$200 (flat fee)" },
    { icon: <Clock className="h-6 w-6 text-blue-500" />, title: "Delivery", value: "Setup completed within 5 days" },
    { icon: <Book className="h-6 w-6 text-amber-500" />, title: "Training", value: "Full system training included" },
  ];

  return (
    <motion.div
      className="container mx-auto px-4 pt-24 pb-16 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Professional Network Monitoring Setup</h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            I provide a complete network monitoring solution using Nagios and NagVis. 
            This setup runs on a Linux server and delivers real-time monitoring and alerts across your network.
          </p>
        </div>

        <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
          <img 
            src="/lovable-uploads/eebab7be-29a2-4661-bbe4-a32ea77fbaa9.png" 
            alt="Network Monitoring Dashboard" 
            className="w-full object-cover"
          />
        </div>

        <div className="prose max-w-none mb-12">
          <p className="text-lg">
            Custom dashboards (via NagVis) give you clear, at-a-glance insights into the status of your servers, 
            switches, routers, and any IP addresses. Full training is included so your team can manage and 
            maintain the monitoring system with confidence.
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-8">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              className="flex gap-4 items-start"
            >
              <div className="bg-primary/10 p-3 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mb-6">Service Details</h2>
        <Card className="mb-8 bg-card/50 backdrop-blur border-primary/20">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              {serviceDetails.map((detail, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="mb-2">{detail.icon}</div>
                  <h3 className="font-semibold">{detail.title}</h3>
                  <p className="text-muted-foreground">{detail.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button asChild size="lg" className="gap-2">
            <Link to="/contact">
              Ready to enhance your network's reliability? Contact Me <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NetworkMonitoring;
