"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Comunity from "../../public/Cmmnty.png"
import Tracking from "../../public/Tracking.png"
import Workshop from "../../public/Workshop.png"
import Twenrty from "../../public/Callingg.png"

const OurSpecials = () => {
  const obj = [
    {
      des: "24/7 Access to Expert Guidance",
      img: Twenrty,
    },
    {
      des: "Community Support Networks",
      img: Comunity,
    },
    {
      des: "Interactive Workshops",
      img: Workshop,
    },
    {
      des: "Personalized Tracking",
      img: Tracking,
    },
  ];

  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-6"
      id="specialities"
    >
      <div className="container mx-auto px-4">
        {/* Title Animation */}
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-[32px] sm:text-[44px] text-[#005657] font-semibold mb-8 text-center"
        >
          OUR SPECIALTIES
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-8 mx-auto">
          {obj.map((item, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2, // Stagger effect
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="relative w-[161px] h-[207px] sm:w-[251px] sm:h-[322px] overflow-hidden shadow-md rounded-[36px] sm:rounded-[56px]"
            >
              {/* Image */}
              <Image
                src={item.img}
                alt={`Feature ${item.des}`}
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#000000] via-[#000000]/90 to-transparent flex flex-col items-center justify-center text-center text-white px-4">
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="text-[14px] sm:text-[22px] w-[140px] sm:w-[200px]"
                >
                  {item.des}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurSpecials;
