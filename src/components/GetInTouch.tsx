"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Smily from "../../public/listening-music-emoji-illustration 1.png";

const GetInTouch = () => {
  
  return (
    <motion.section
      id="contact"
      className="py-12 bg-[#9EE0D6] m-6 md:m-10  rounded-[10px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="container mx-auto px-4 md:px-12">
        <motion.h2
          className="text-[28px] md:text-[44px] font-bold mb-8 mx-auto text-[#FFFFFF] text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <motion.form
              className="space-y-12 md:space-y-4"
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
            >
              {["Your Name", "Your Email", "Your Message"].map(
                (placeholder, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {placeholder === "Your Message" ? (
                      <textarea
                        placeholder={placeholder}
                        rows={4}
                        className="w-full p-3 rounded-md border border-gray-300 bg-white placeholder:text-[14px] focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    ) : (
                      <input
                        type={placeholder === "Your Email" ? "email" : "text"}
                        placeholder={placeholder}
                        className="w-full p-3 rounded-md border border-gray-300 bg-white placeholder:text-[14px] focus:outline-none focus:ring-2 focus:ring-teal-500"
                      />
                    )}
                  </motion.div>
                )
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white p-3 rounded-md font-medium hover:bg-teal-700 transition-all"
                >
                  Send
                </button>
              </motion.div>
            </motion.form>
          </motion.div>

          <motion.div
            className="hidden md:inline-block flex items-center justify-center px-15"
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2, // Time for one full back-and-forth rotation
              repeat: Infinity, // Infinite repeat
              repeatType: "loop", // Continuous loop
              ease: "easeInOut", // Smooth easing
            }}
            initial={{ opacity: 1 }}
            animate={{
              opacity: 1,
              rotate: [-5, 5, -5], // Slight rotation (degrees)
            }}
          >
            <Image
              src={Smily}
              alt="Contact"
              width={350}
              height={240}
              className="rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
