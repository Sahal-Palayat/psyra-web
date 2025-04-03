"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Individual from "../../public/individual.jpg";
import Couple from "../../public/couple.jpg";
import Coffe from "../../public/Coffee.png";

const Services = () => {
  const obj = [
    {
      type: "Individual therapy",
      subTitle: "You will never walk alone",
      img: Individual,
    },
    {
      type: "Couple therapy",
      subTitle: "You will never walk alone",
      img: Couple,
    },
    {
      type: "Coffee with Psychologist",
      subTitle: "You will never walk alone",
      img: Coffe,
    },
  ];

  // Function to handle WhatsApp redirection
  const handleWhatsAppRedirect = (serviceType: string) => {
    const phoneNumber = "+918891724199"; // Replace with your WhatsApp number (e.g., "911234567890")
    const message = encodeURIComponent(
      `Hi, I'm interested in the "${serviceType}" package. Can you provide more details?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 pb-8" id="services">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {obj.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Image Animation */}
              <motion.div
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={item?.img}
                  alt={`Feature ${item?.type}`}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#00989D] via-[#00989D]/60 to-transparent flex flex-col items-center justify-center text-center text-white px-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-lg font-semibold">{item?.type}</p>
                <p className="text-sm">{item?.subTitle}</p>
              </motion.div>

              {/* Button Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-white text-[#0F1010] max-w-[112px] w-[112px] h-[28px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-all"
                  style={{ fontSize: "11px" }}
                  onClick={() => handleWhatsAppRedirect(item.type)}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
