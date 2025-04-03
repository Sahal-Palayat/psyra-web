"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import EventMob from "../../public/eventmob.jpg";

const EventMobile = () => {
  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-4 px-4"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-[32px] sm:text-[44px] text-[#005657] font-bold text-center mb-5"
      >
        MEET NEW FACES
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="relative rounded-lg overflow-hidden shadow-md max-w-full mx-auto"
      >
        <motion.div
          whileInView={{ scale: 1 }}
          initial={{ scale: 1.1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={EventMob}
            alt="Event Mobile Image"
            width={400}
            height={200}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="gap-3 absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col items-center justify-center text-center text-white px-2">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
            className="gap-3"
          >
            <p className="text-[20px] font-semibold">Let&apos;s Gather with a Tea</p>
            <p className="text-[11px]">Sun, April 06 6:00 PM IST</p>
            <p className="text-[11px]">Kochi, Marine Drive Park</p>
          </motion.div>

          <motion.button
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white font-semibold text-[#0F1010] w-[121px] h-[22px] text-[11px] 
             flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
            style={{ color: "#005657" }}
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default EventMobile;
