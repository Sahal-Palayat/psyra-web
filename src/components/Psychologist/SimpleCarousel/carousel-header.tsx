"use client";

import { motion } from "framer-motion";

export function CarouselHeader() {
  return (
    <div className="text-center">
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-3xl sm:text-4xl font-bold text-teal-800 mb-4"
      >
        Meet Our Expert Psychologists
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-600 max-w-2xl mx-auto"
      >
        Connect with licensed professionals who specialize in various areas of
        mental health. Find the right therapist for your journey to wellness.
      </motion.p>
    </div>
  );
}
