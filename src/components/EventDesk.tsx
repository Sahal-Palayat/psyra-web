"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import EventImg from "../../public/artist-tools.jpg";
import Modal from "./Modal";

const EventDesktop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.section
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="py-6 px-8 sm:px-6"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-[32px] sm:text-[44px] text-[#005657] font-bold text-center mb-7"
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
            src={EventImg}
            alt="Event Image"
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        <div className="gap-8 absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col items-center justify-center text-center text-white px-4">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.2 }}
            className="gap-6"
          >
            <p className="text-[50px] font-bold">Art With Strangers</p>

            <p className="text-[22px]">Sun, June 15 3:30 PM IST</p>
            <p className="text-[22px]">Thelagram Cafe, JP Nagar, Bengaluru</p>
          </motion.div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-white font-semibold text-[#0F1010] w-[250px] h-[50px] text-[20px] 
             flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
            style={{ color: "#005657" }}
          >
            Register Now
          </motion.button>
        </div>
      </motion.div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={"event"}
      />
    </motion.section>
  );
};

export default EventDesktop;
