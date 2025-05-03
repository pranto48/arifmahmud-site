
import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Facebook, Youtube, Phone, Mail, MapPin, QrCode, UserPlus, Twitter, Instagram, Linkedin, Globe } from "lucide-react";
import { QRCodeSVG } from 'qrcode.react';

const Contact = () => {
  const contactInfo = {
    name: "Arif Mahmud Pranto",
    phone: "+8801915822266",
    email: "mail@arifmahmud.com",
    company: "IT Support BD",
    role: "Founder",
    location: "Kabirpur, Ashulia, Dhaka, Bangladesh",
    photo: "/lovable-uploads/4007d0de-0116-401a-a8f5-f5541cbbe3ac.png",
    social: {
      facebook: "https://facebook.com/arifmahmudpranto",
      twitter: "https://twitter.com/pranto48",
      instagram: "https://www.instagram.com/pranto48/",
      linkedin: "https://www.linkedin.com/in/pranto48/",
      youtube: "https://www.youtube.com/arifmahmudpranto"
    }
  };

  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Pranto;Arif Mahmud;;;
FN:${contactInfo.name}
ORG:${contactInfo.company}
TITLE:${contactInfo.role}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
ADR:;;${contactInfo.location}
PHOTO;VALUE=URL:${window.location.origin}${contactInfo.photo}
END:VCARD`;

  const downloadVCard = () => {
    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'arif-mahmud.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const socialMediaLinks = [
    { icon: Facebook, url: contactInfo.social.facebook, label: "Facebook" },
    { icon: Twitter, url: contactInfo.social.twitter, label: "Twitter" },
    { icon: Instagram, url: contactInfo.social.instagram, label: "Instagram" },
    { icon: Linkedin, url: contactInfo.social.linkedin, label: "LinkedIn" },
    { icon: Youtube, url: contactInfo.social.youtube, label: "YouTube" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 pb-16 min-h-screen"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-card rounded-lg p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={contactInfo.photo}
                alt={contactInfo.name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-semibold">{contactInfo.name}</h3>
                <p className="text-muted-foreground">{contactInfo.role}</p>
                <p className="text-muted-foreground">{contactInfo.company}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-primary">{contactInfo.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary">{contactInfo.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>{contactInfo.location}</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                  >
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                      <social.icon className="w-5 h-5" />
                    </Button>
                  </a>
                ))}
                <a href={`https://wa.me/${contactInfo.phone.replace('+', '')}`} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                  <Button variant="outline" size="icon" className="hover:bg-primary hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-lg">
          <div className="text-center space-y-4">
            <QRCodeSVG 
              value={vCardData}
              size={200}
              level="H"
              className="mx-auto"
            />
            <p className="text-sm text-muted-foreground">Scan to save contact</p>
            <Button onClick={downloadVCard} className="w-full">
              <UserPlus className="w-5 h-5 mr-2" />
              Download vCard
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
