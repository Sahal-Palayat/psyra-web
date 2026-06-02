"use client"

import { motion } from "framer-motion"

type SlideLeftProps = {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function SlideRight({
  children,
  className,
  delay = 0
}: SlideLeftProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        x: 48
      }}
      whileInView={{
        opacity: 1,
        x: 0
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  )
}