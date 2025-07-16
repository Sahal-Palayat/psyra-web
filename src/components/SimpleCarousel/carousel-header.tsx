"use client"

import { motion } from "framer-motion"

export function CarouselHeader() {
  return (
    <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4"
      >
        Meet Our Expert Psychologists
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-gray-600 max-w-2xl mx-auto"
      >
        Connect with licensed professionals who specialize in various areas of mental health. Find the right therapist
        for your journey to wellness.
      </motion.p>
    </div>
  )
}
