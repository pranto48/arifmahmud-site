
import { motion } from "framer-motion";
import GoogleAdsense from "../components/GoogleAdsense";
import Carousel3D from "../components/Carousel3D";

// Select all available gallery images
const galleryImages = [
  {
    src: "/lovable-uploads/b6cac783-812c-4a99-b9af-86c14809f174.png",
    alt: "Workplace photo 1",
  },
  {
    src: "/lovable-uploads/2858dab3-3c7f-49cc-a491-ac1dd7be6b18.png",
    alt: "Workplace photo 2",
  },
  {
    src: "/lovable-uploads/493bd59e-435f-4dd1-8cef-e569542e410b.png",
    alt: "Team meeting photo",
  },
  {
    src: "/lovable-uploads/1d01cc0f-bd41-4415-b480-de89161d75ea.png",
    alt: "Award ceremony photo",
  },
  {
    src: "/lovable-uploads/fe947a12-538e-474d-88de-536ce1ec5a22.png",
    alt: "Office workspace photo",
  },
];

const Gallery = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 min-h-screen"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Gallery
      </motion.h1>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-8"
      >
        <p className="text-center text-gray-300 mb-4">
          Click and drag to rotate • Scroll to zoom in/out
        </p>
        <Carousel3D images={galleryImages} />
      </motion.div>
      
      {/* Bottom ad - placed after content so it doesn't disrupt the user experience */}
      <div className="mt-16 mb-8">
        <GoogleAdsense 
          adSlot="7782227990" 
          fullWidth={true}
          className="bg-background/30 backdrop-blur-sm rounded-lg p-2" 
        />
      </div>
    </motion.div>
  );
};

export default Gallery;
