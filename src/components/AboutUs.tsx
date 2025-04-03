"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-8 px-6 m-8 md:py-8 md:px-10 md:m-10 bg-[#9EE0D6] relative overflow-hidden rounded-3xl"
      id="about"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-[32px] md:text-[47px] font-bold mb-4 md:mb-6 text-[#00989D]">
          Why Psyra?
        </h2>
        <div className="max-w-3xl">
          <p className="text-[#00989D] mb-4 md:mb-8 text-[16px] md:text-[20px]">
            At Psyra, we believe mental health should be accessible to everyone.
            Our platform connects you with licensed therapists, provides
            resources for self-care, and builds a supportive community where you
            can share experiences and find understanding.
          </p>
          {/* Hide the list on mobile */}
          <ul className=" space-y-4 text-[#00989D]">
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
          </ul>
        </div>
      </div>

      {/* Floating Animated Piece */}
      <motion.div
        initial={{ x: 30, y: -30, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        className="absolute top-0 right-0 w-24 h-24 bg-[#80CFC6] rounded-bl-[90px] shadow-lg"
      ></motion.div>
    </motion.section>
  );
};

export default AboutUs;
