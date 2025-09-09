"use client";

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
      className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-[#00989D] to-[#00B4BA] bg-clip-text text-transparent"
    >
      0{suffix}
    </div>
  );
}

export function CarouselStats() {
  return (
    <div className="w-full py-8 mb-8 md:px-24 px-14">
      {/* Updated Title with Psymates */}
      <div className="text-center mb-10">
        {/* <h2 className="text-2xl sm:text-2xl font-bold text-teal-800 text-center leading-snug">
          A Safe Space for Our{" "}
          <span className="inline-flex items-center text-[#3D985C] px-2 shadow-md">
            Psymates <HeartHandshake className="ml-1 w-6 h-6" />
          </span>
        </h2> */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          <span
            className={`text-teal-800 relative font-semibold italic`}
            style={{ fontFamily: "'Workbench', cursive" }} // try with a script font
          >
            A Safe Space for Our {/* underline stroke */}
            <span className="inline-flex items-center px-2 shadow-md">
              Psymates <HeartHandshake className="ml-1 w-6 h-6" />
            </span>{" "}
          </span>
        </h2>
        {/* <p className="text-gray-600 mt-3 text-lg">
          Together, we're building a supportive community for mental well-being.
        </p> */}
      </div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col justify-center items-center md:h-54 p-12 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            <div className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed text-center">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* About Psymates Note */}
      <div className="text-center mt-10">
        <p className="text-gray-600 italic text-lg">
          “We don’t call them clients — we call them{" "}
          <span className="inline-flex items-center font-semibold text-[#00989D]">
            Psymates <HeartHandshake className="ml-1 w-5 h-5" />
          </span>
          ”
        </p>
      </div>
    </div>
  );
}
