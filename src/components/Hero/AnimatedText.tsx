"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sentences = [
  "You are not alone Psyra with you",
  "We are here to help you",
  "Every day is a new beginning",
];

export default function AnimatedTextLoop() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = sentences[currentIndex].split(" ");

  // Cycle sentences every 4 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % sentences.length);
    }, 4000);
    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const emojiVariants = {
    hidden: { opacity: 0, scale: 0, rotate: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        delay: words.length * 0.15 + 0.4,
        type: "spring",
        stiffness: 200,
      },
    },
  };

  return (
    <div className="flex md:mt-5px w-full mt-6 items-center justify-center px-4 py-16 relative text-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="inline-flex flex-wrap justify-center"
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariants}
              className="text-3xl md:text-4xl font-bold text-white mr-2"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            variants={emojiVariants}
            className="text-3xl inline-block"
          >
            😊
          </motion.span>
        </motion.div>
      </AnimatePresence>

      {/* Optional background blur/glow */}
      {/* <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 2, delay: 2, ease: "easeOut" }}
        className="absolute inset-0 -z-10 opacity-10"
      >
        <div className="w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-full blur-3xl scale-75" />
      </motion.div> */}
    </div>
  );
}
