
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

const AUTOPLAY_INTERVAL = 3000; // 3 seconds
const SLIDES_PER_VIEW = 5;

const Gallery = () => {
  const carouselRef = useRef<any>(null);
  const autoplayRef = useRef<any>();

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current && carouselRef.current.api) {
        carouselRef.current.api.scrollNext();
      }
    }, AUTOPLAY_INTERVAL);
    autoplayRef.current = interval;
    return () => clearInterval(interval);
  }, []);

  // Create chunks of 5 images for sliding
  const imageChunks = galleryImages.reduce((resultArray: any[], item, index) => {
    const chunkIndex = Math.floor(index / SLIDES_PER_VIEW);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

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
      <div className="flex justify-center">
        <div className="w-full">
          <Carousel
            ref={carouselRef}
            opts={{
              loop: true,
              align: "start",
              dragFree: false,
              skipSnaps: false,
            }}
            className="relative"
            orientation="horizontal"
          >
            <CarouselContent>
              {imageChunks.map((chunk, chunkIndex) => (
                <CarouselItem key={chunkIndex} className="basis-full">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {chunk.map((img: any, imgIndex: number) => (
                      <motion.div
                        key={imgIndex}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="relative overflow-hidden rounded-lg shadow-lg"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-[200px] object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
};

export default Gallery;
