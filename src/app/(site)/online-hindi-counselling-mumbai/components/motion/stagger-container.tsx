"use client"

import { motion } from "framer-motion"

export default function StaggerContainer({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.12
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}