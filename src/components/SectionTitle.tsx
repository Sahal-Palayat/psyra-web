"use client";

import type React from "react";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  children: React.ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <>
      <div className="text-center">
        <p className="text-gray-600 italic text-md md:text-2xl">{children}</p>
      </div>
    </>
  );
}
