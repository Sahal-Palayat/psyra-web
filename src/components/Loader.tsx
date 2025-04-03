"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ setLoadingComplete }: { setLoadingComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      setLoadingComplete();
    }, 2000); // Loader disappears after 2 seconds
  }, [setLoadingComplete]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.8 }}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{
          repeat: Infinity,
          duration: 0.8,
          repeatType: "reverse",
        }}
        className="text-5xl"
      >
        🧠
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-2xl font-bold mt-4 text-[#00989D]"
      >
        Psyra
      </motion.p>
    </motion.div>
  );
};

export default Loader;
