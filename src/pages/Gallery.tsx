
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const imageFiles = [
  "2017-09-13-09-09-36-258.jpg",
  "2017-09-13-09-10-01-288.jpg",
  "2017-09-13-09-10-21-855.jpg",
  "20170117_003040.jpg",
  "20170406_160406.jpg",
  "20170816_122456.jpg",
  "20170816_122508.jpg",
  "20171026_170512.jpg",
  "20171026_171002.jpg",
  "20171026_171529.jpg",
  "57F7B671-1A37-4D88-ABD3-2A6DDCB8E3DC.JPG",
  "73569F94-AFAE-4A07-A17D-BB71830FDEA5.JPG",
  "8k3aOPVUNbYBctjZpZIOvdRWcAh.jpg",
  "FB_IMG_1539020660787.jpg",
  "FB_IMG_1550328090135.jpg",
  "IMG-20190312-WA0011.jpg",
  "IMG20190306135338.jpg",
  "IMG_0015.JPG",
  "IMG_0089.JPG",
  "IMG_0426.JPG",
  "IMG_1337-COLLAGE.jpg",
  "IMG_20160322_105331_HDR.jpg",
  "IMG_20160324_111124.jpg",
  "IMG_20160921_090639.jpg",
  "IMG_20161005_091359.jpg",
  "IMG_20161005_091432.jpg",
  "IMG_20161005_091617.jpg",
  "IMG_20190217_211321.jpg",
  "IMG_20190304_144856.jpg",
  "IMG_20190402_111223.jpg",
  "IMG_20190409_104812.jpg",
  "IMG_20190621_120348.jpg",
  "IMG_20190701_213944.jpg",
  "IMG_20190704_100437.jpg",
  "IMG_20190716_192023.jpg",
  "IMG_20200715_115533.jpg",
  "IMG_20200715_132129-01.jpeg",
  "IMG_20200716_083946.jpg",
  "IMG_20200818_130626.jpg",
  "IMG_9295.JPG",
  "arif2 (1).JPG",
  "arif2 (2).JPG",
  "arif2 (3).JPG",
  "arif2 (4).JPG",
  "arif2 (7).JPG",
  "arif2 (8).JPG",
  "arif3 (1).jpg",
  "arif3 (10).JPG",
  "arif3 (11).JPG",
  "arif3 (12).JPG",
  "arif3 (13).JPG",
  "arif3 (14).JPG",
  "arif3 (15).jpg",
  "arif3 (16).JPG",
  "arif3 (3).JPG",
  "arif3 (4).JPG",
  "arif3 (6).JPG",
  "arif3 (7).JPG",
  "arif3 (8).JPG",
  "arif3 (9).JPG",
  "received_1421482727929019.jpeg",
  "received_1803887452976697.jpeg",
  "received_1822796807752428.jpeg",
  "received_1858178650880910.jpeg",
  "received_2764971093516651.jpeg"
];

const images = imageFiles.map((file, idx) => ({
  id: idx,
  src: `/src/image/gallery/${file}`,
  alt: `Gallery photo ${idx + 1}`,
}));

const IMAGES_PER_PAGE_DESKTOP = 3;
const IMAGES_PER_PAGE_MOBILE = 1;

const useImagesPerPage = () => {
  // Responsive: 1 on <768px, 3 otherwise
  if (typeof window === "undefined") return IMAGES_PER_PAGE_DESKTOP;
  return window.innerWidth < 768 ? IMAGES_PER_PAGE_MOBILE : IMAGES_PER_PAGE_DESKTOP;
};

const Gallery = () => {
  const [startIdx, setStartIdx] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [imagesPerPage, setImagesPerPage] = useState(useImagesPerPage());

  // Listen to resize and update images per page for responsiveness
  // This is safe since this is a page-level component
  // (if SSR/hydration warnings ever arise, move to a useEffect with a 'hasMounted' state)
  if (typeof window !== "undefined") {
    window.onresize = () => {
      const perPage = window.innerWidth < 768 ? IMAGES_PER_PAGE_MOBILE : IMAGES_PER_PAGE_DESKTOP;
      setImagesPerPage(perPage);
    };
  }

  const total = images.length;
  const loop = (idx: number) => {
    if (idx < 0) return total + idx;
    if (idx >= total) return idx - total;
    return idx;
  };

  const next = () => {
    setDirection("right");
    setStartIdx((prev) => loop(prev + imagesPerPage));
  };
  const prev = () => {
    setDirection("left");
    setStartIdx((prev) => loop(prev - imagesPerPage));
  };

  // Get visible images for current page (wrap around for looping)
  const getVisibleImages = () => {
    let vis: typeof images = [];
    for (let i = 0; i < imagesPerPage; i++) {
      vis.push(images[loop(startIdx + i)]);
    }
    return vis;
  };

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 300 : -300,
      opacity: 0,
      position: "absolute" as "absolute"
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative" as "relative"
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -300 : 300,
      opacity: 0,
      position: "absolute" as "absolute"
    }),
  };

  return (
    <div className="container mx-auto px-4 pt-24 min-h-screen select-none">
      <h1 className="text-4xl font-bold mb-8 text-center">Family Gallery</h1>
      <div className="relative flex flex-col items-center">
        <div className="flex justify-between items-center w-full max-w-3xl">
          <button
            aria-label="Previous"
            className="rounded-full p-2 bg-secondary hover:bg-secondary/80 transition absolute left-0 z-10 top-1/2 -translate-y-1/2"
            onClick={prev}
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          <div className="w-full">
            <div className="relative h-[350px] md:h-[400px] flex items-center justify-center">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={startIdx}
                  className={`flex gap-4 w-full justify-center`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 500, damping: 40, duration: 0.4 }}
                  style={{ position: "relative", width: "100%", height: "100%" }}
                >
                  {getVisibleImages().map((img) => (
                    <div
                      key={img.id}
                      className="rounded-lg overflow-hidden flex-1 bg-muted flex items-center justify-center shadow-md"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="object-cover w-full h-[200px] md:h-[360px] transition-all duration-300"
                        draggable={false}
                        loading="lazy"
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <button
            aria-label="Next"
            className="rounded-full p-2 bg-secondary hover:bg-secondary/80 transition absolute right-0 z-10 top-1/2 -translate-y-1/2"
            onClick={next}
          >
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
        {/* Pagination dots */}
        <div className="flex gap-1 mt-6">
          {Array.from({ length: Math.ceil(total / imagesPerPage) }).map((_, i) => (
            <button
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === Math.floor(startIdx / imagesPerPage)
                  ? "bg-primary"
                  : "bg-muted-foreground opacity-50"
              } transition`}
              onClick={() => {
                setDirection(i > Math.floor(startIdx / imagesPerPage) ? "right" : "left");
                setStartIdx(loop(i * imagesPerPage));
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="text-center text-muted-foreground text-sm mt-6">Swipe or use arrows to navigate</div>
    </div>
  );
};

export default Gallery;

