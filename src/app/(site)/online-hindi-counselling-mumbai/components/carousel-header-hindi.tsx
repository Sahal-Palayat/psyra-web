"use client";

// import { SectionHeader } from "@/components/SectionTitle";
import { motion } from "framer-motion";

export function CarouselHeaderHindi() {
  return (
    <div className="text-center mb-8">

      <div className="text-center">
        <p className="text-gray-600 italic text-sm md:text-2xl">
          Hindi-Speaking Psychologists Available for Online Counselling
        </p>
      </div>
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-gray-600  max-w-2xl mx-auto text-[10px] md:text-[16px]"
      >
        Connect with experienced psychologists providing online Hindi counselling support for anxiety, stress, depression, relationship concerns, emotional wellbeing, and personal growth.
      </motion.p>
    </div>
  );
}
