"use client";

import { SectionHeader } from "@/components/SectionTitle";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { HeartHandshake } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: 2500, label: "Happy Psymates", suffix: "+" },
  { value: 15, label: "Expert Therapists", suffix: "+" },
  { value: 12, label: "Countries", suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
  }, [springValue, suffix]);

  return (
    <div
      ref={ref}
      className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#00989D] to-[#00B4BA] bg-clip-text text-transparent"
    >
      0{suffix}
    </div>
  );
}

export function CarouselStats() {
  return (
    <div className="w-full py-4 mb-8 md:px-14 px-2">
      <div className="text-center mb-4">
        <p className="text-gray-600 italic text-sm md:text-2xl">
           A Safe Space for Our Psymates
        </p>
      </div>
      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-6xl mx-auto flex gap-2 md:gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex-1 text-center mt-2 bg-gradient-to-br from-[#00989D]/10 via-[#00B4BA]/20 to-white text-black backdrop-blur-md rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow border border-teal-100"
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <div className="text-[10px] md:text-xl font-medium text-gray-700 leading-relaxed text-center">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* About Psymates Note */}
      <div className="text-center mt-5">
        <p className="text-gray-600 italic text-[12px] md:text-xl">
          “We don’t call them clients ,we call them{" "}
          <span className="inline-flex items-center font-semibold text-[#00989D]">
            Psymates <HeartHandshake className="ml-1 w-5 h-5" />
          </span>
          ”
        </p>
      </div>
    </div>
  );
}
