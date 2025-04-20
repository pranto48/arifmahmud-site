
import { motion } from "framer-motion";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Facebook, Youtube, Phone, Mail, MapPin, QrCode, WhatsApp, Contact } from "lucide-react";
import QRCode from 'qrcode.react';

const Contact = () => {
  const contactInfo = {
    name: "Arif Mahmud",
    phone: "+8801915822266",
    email: "mail@arifmahmud.com",
    company: "IT Support BD",
    role: "Founder",
    location: "Kabirpur, Ashulia, Dhaka, Bangladesh",
    photo: "/lovable-uploads/4007d0de-0116-401a-a8f5-f5541cbbe3ac.png"
  };

  const vCardData = `BEGIN:VCARD
VERSION:3.0
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 min-h-screen"
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

            <div className="flex gap-4">
              <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Facebook className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://youtube.com/example" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Youtube className="w-5 h-5" />
                </Button>
              </a>
              <a href={`https://wa.me/${contactInfo.phone.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <WhatsApp className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-lg">
          <div className="text-center space-y-4">
            <QRCode 
              value={vCardData}
              size={200}
              level="H"
              className="mx-auto"
            />
            <p className="text-sm text-muted-foreground">Scan to save contact</p>
            <Button onClick={downloadVCard} className="w-full">
              <Contact className="w-5 h-5 mr-2" />
              Download vCard
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
