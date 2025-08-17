"use client";

import type React from "react";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  className?: string;
}

export function SectionHeader({
  children,
  color = "text-[#00989D]",
  size = "text-3xl md:text-4xl",
  className = "",
}: SectionHeaderProps) {
  return (
    <>
      <motion.h2 className="text-2xl sm:text-2xl font-bold text-teal-800 text-center leading-snug">
        {children}
      </motion.h2>
    </>
  );
}
