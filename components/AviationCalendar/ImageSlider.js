import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slideVariants = {
  enter: {
    x: "-100%",
    opacity: 0,
  },
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: {
    x: "0%",
    opacity: 0,
  },
};

const ImageSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  // Reset index if images change
  useEffect(() => {
    setIndex(0);
  }, [images]);

  // Auto slide
  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
        No images
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden flex justify-center items-center shadow-md">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`slide-${index}`}
          className="absolute w-full p-0 object-cover"
          initial="enter"
          animate="center"
          exit="exit"
          variants={slideVariants}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageSlider;
