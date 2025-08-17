"use client";

import type React from "react";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  children: React.ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <>
      <motion.h2 className="text-2xl sm:text-2xl font-bold text-teal-800 text-center leading-snug">
        {children}
      </motion.h2>
    </>
  );
}
