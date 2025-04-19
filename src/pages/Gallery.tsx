
import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    { id: 1, src: "https://source.unsplash.com/random/800x600?family=1", alt: "Family photo 1" },
    { id: 2, src: "https://source.unsplash.com/random/800x600?family=2", alt: "Family photo 2" },
    { id: 3, src: "https://source.unsplash.com/random/800x600?family=3", alt: "Family photo 3" },
    { id: 4, src: "https://source.unsplash.com/random/800x600?family=4", alt: "Family photo 4" },
    { id: 5, src: "https://source.unsplash.com/random/800x600?family=5", alt: "Family photo 5" },
    { id: 6, src: "https://source.unsplash.com/random/800x600?family=6", alt: "Family photo 6" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 pt-24 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8">Family Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            whileHover={{ scale: 1.05 }}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Gallery;
