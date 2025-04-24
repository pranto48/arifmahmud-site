
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

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

  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">
          <Carousel
            ref={carouselRef}
            opts={{
              loop: true,
              align: "center",
              dragFree: false,
              skipSnaps: false,
              slidesToScroll: 1,
            }}
            className="relative"
            orientation="horizontal"
          >
            <CarouselContent>
              {galleryImages.map((img, idx) => (
                <CarouselItem key={idx} className="flex flex-col items-center">
                  <div className="block overflow-hidden rounded-lg shadow-lg w-full">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="object-cover w-full h-[600px] mx-auto transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <style>
              {`
                [aria-roledescription='carousel'] [role='button'], 
                [aria-roledescription='carousel'] .embla__dots {
                  display: none !important;
                }
              `}
            </style>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
