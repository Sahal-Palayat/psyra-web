"use client"

import { motion } from "framer-motion"

export default function StaggerItem({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {
          opacity: 0,
          y: 18
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  )
}