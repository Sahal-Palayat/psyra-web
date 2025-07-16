"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "50+", label: "Expert Therapists" },
  { value: "4.8★", label: "Average Rating" },
]

export function CarouselStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto"
    >
      {stats.map((stat, index) => (
        <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-[#00989D] mb-2">{stat.value}</div>
          <div className="text-gray-600">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  )
}
