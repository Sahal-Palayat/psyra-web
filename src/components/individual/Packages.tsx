"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Packages = ({ data }: any) => {
  return (
    <div className="px-4 py-6">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
        className="text-[32px] sm:text-[44px] text-[#005657] font-bold text-center mb-5"
      >
        PACKAGES
      </motion.h2>

      <div className="max-w-xl mx-auto space-y-6">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-[#B6E5DF] rounded-2xl overflow-hidden shadow-md"
          >
            {/* Top Image */}
            <div className="w-full h-[200px] relative">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-black">
              <h3 className="font-bold text-xl mb-1">{item.title}</h3>
              <p className="italic mb-3">{item.tagline}</p>
              <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
                {item.list.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="mb-4">
                <span className="text-2xl font-bold text-black">
                  {item.price}
                </span>
              </div>

              <div className="flex justify-center">
                <button className="bg-white px-6 py-2 text-black text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
