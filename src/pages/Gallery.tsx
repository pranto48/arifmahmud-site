
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef } from "react";

const galleryImages = [
  {
    src: "/lovable-uploads/6bfe97da-2f42-45f9-ad34-a7a999bf3122.png",
    alt: "Gallery photo 1",
  },
  {
    src: "/lovable-uploads/d22c82d0-03ec-4613-9d4b-d0b678da9577.png",
    alt: "Gallery photo 2",
  },
  {
    src: "/lovable-uploads/51eb30b7-d455-433f-817d-925746b373d3.png",
    alt: "Gallery photo 3",
  },
  {
    src: "/lovable-uploads/1d7fd048-ec4b-4e4c-af93-c9ec70d0a94d.png",
    alt: "Gallery photo 4",
  },
  {
    src: "/lovable-uploads/df2ce87c-d3e9-4d05-b53a-0acce8ea4d8e.png",
    alt: "Gallery photo 5",
  },
  {
    src: "/lovable-uploads/b4ff9853-166c-4055-9b27-5c72fc699562.png",
    alt: "Gallery photo 6",
  },
  {
    src: "/lovable-uploads/a29e082d-aa0c-4d98-80fc-8fca4323c0cc.png",
    alt: "Gallery photo 7",
  },
  {
    src: "/lovable-uploads/27181897-92a0-45e8-92f2-8b014faaee3c.png",
    alt: "Gallery photo 8",
  },
  {
    src: "/lovable-uploads/30725d80-4a71-408f-98a9-08a65e600c0e.png",
    alt: "Gallery photo 9",
  },
  {
    src: "/lovable-uploads/85a35b59-3a97-43da-9828-3131f65647bb.png",
    alt: "Gallery photo 10",
  },
];

const AUTOPLAY_INTERVAL = 2500; // 2.5 seconds

const Gallery = () => {
  const carouselRef = useRef<any>(null);
  const autoplayRef = useRef<any>();

  // Simple auto-play effect using the carousel API
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
                  <a
                    href={img.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    className="block overflow-hidden rounded-lg shadow-lg"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="object-cover w-full aspect-video md:aspect-square max-h-[350px] mx-auto transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Hide arrows & pagination for minimal look */}
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

