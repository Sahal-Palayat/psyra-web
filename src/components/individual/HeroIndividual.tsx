"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Smily from "../../../public/listening-music-emoji-illustration 1.png";

const HeroIndividual = () => {
  return (
    <div className="bg-[#9EE0D6] flex justify-center">
      <div className="pt-22 px-8 flex gap-x-2">
        {/* 🎧 Floating & Rotating Emoji */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [-5, 5, -5] }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex items-center justify-center mb-4"
        >
          <Image
            src={Smily}
            alt="Smiley Emoji with Headphones"
            width={0}
            height={0}
            sizes="(max-width: 768px) 128px, 264px"
            className="rounded-full w-44 sm:w-32 md:w-48 lg:w-64 h-auto"
          />
        </motion.div>

        {/* 💬 Text + Button with Entry Animation */}
        <motion.div
          className="md:flex md:justify-center md:flex-col md:items-center gap-y-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="md:max-w-120 md:text-center text-[18px] md:text-[38px] font-semibold text-[#005657]">
            Sometimes healing starts with feeling heard
          </h2>
          <p className="text-sm text-[#005657]">24/7 free call support</p>

          {/* ✨ Button Hover Animation */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white p-0 text-[#005657] px-6 rounded-full text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-medium border border-teal-200 shadow-sm hover:bg-teal-100 transition-colors"
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroIndividual;
