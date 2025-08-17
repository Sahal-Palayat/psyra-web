"use client"

import type React from "react"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  children: React.ReactNode
  color?: string
  size?: string
  className?: string
}

export function SectionHeader({
  children,
  color = "text-teal-800",
  size = "text-3xl md:text-4xl",
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.h2
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className={`${color} ${size} font-bold text-foreground mb-4 ${className}`}
    >
      {children}
    </motion.h2>
  )
}
