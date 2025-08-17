"use client";

import { SectionHeader } from "@/components/SectionTitle";
import { motion } from "framer-motion";

export function CarouselHeader() {
  return (
    <div className="text-center mb-12">
      <SectionHeader>Meet Our Therapists❤</SectionHeader>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-600 hidden sm:block max-w-2xl mx-auto"
      >
        Connect with licensed professionals who specialize in various areas of
        mental health. Find the right therapist for your journey to wellness.
      </motion.p>
    </div>
  );
}
