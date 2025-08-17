"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-8 px-6 m-8 md:py-8 md:px-10 md:m-10 relative overflow-hidden rounded-3xl"
      id="about"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-[32px] md:text-[47px] font-bold mb-4 md:mb-6 text-[#00989D]"
        >
          Why Psyra?
        </motion.h2>
        <div className="max-w-3xl">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="text-teal-800 mb-4 md:mb-8 text-[16px] md:text-[20px]"
          >
            At Psyra, we believe mental health should be accessible to everyone.
            Our platform connects you with licensed therapists, provides
            resources for self-care, and builds a supportive community where you
            can share experiences and find understanding.
          </motion.p>
          {/* Hide the list on mobile */}
          <motion.ul
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className=" space-y-4 text-[#00989D]"
          >
            {[
              "Professional Support",
              "Confidential Sessions",
              "Flexible Scheduling",
              "Affordable Plans",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-5 h-5 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                </span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
