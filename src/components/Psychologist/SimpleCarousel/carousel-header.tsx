"use client";

import { SectionHeader } from "@/components/SectionTitle";
import { motion } from "framer-motion";

export function CarouselHeader() {
  return (
    <div className="text-center mb-12">
      <div className="text-center">
        <p className="text-gray-600 italic text-sm md:text-2xl">
          Meet Our Therapists
        </p>
      </div>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-600  max-w-2xl mx-auto text-[10px] md:text-[16px]"
      >
        Find the right therapist for your journey to wellness.
      </motion.p>
    </div>
  );
}
