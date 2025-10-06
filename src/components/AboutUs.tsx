"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const features = [
    {
      title: "Listeners, not judges",
      description: "therapists who meet you where you are.",
    },
    {
      title: "A refuge of privacy",
      description: "your story is yours alone.",
    },
    {
      title: "Support that bends to your life",
      description: "no rigid systems, only what works for you.",
    },
    {
      title: "Care without shame",
      description: "because seeking help should never feel like weakness.",
    },
  ];
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="py-8 px-3 md:px-6 m-8 md:py-8 md:px-10 md:m-10 relative overflow-hidden rounded-3xl"
      id="about"
    >
      <div className="container mx-auto md:px-4">
        {/* 2-column on md+, single column on mobile */}
        <div className="md:flex md:items-start md:gap-8">
          {/* LEFT: keep same width (max-w-3xl) */}
          <div className="max-w-3xl md:pr-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-2xl lg:text-4xl font-bold text-teal-600 leading-tight mb-8">
                {" When the world doesn't "}
                <br /> understand your silence Psyra does.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-gray-600 text-lg md:text-xl mb-4">
                {
                  " Behind every smile, there are battles no one sees. Sleepless nights, racing thoughts, a weight you can't explain. You don't need another person telling you to 'be strong' or 'move on.'   What you need... is a space that finally feels safe. That's why Psyra exists. Not as a clinic. Not as an app. But as a sanctuary for your mind."
                }
              </p>
              <p className="text-gray-600 text-lg md:text-xl mb-10">
                At Psyra, you will find listeners, not judges therapists who
                meet you where you are, offering a refuge of privacy where your
                story remains yours alone. You will experience support that adapts
                to your life, with no rigid systems only what truly works for
                you. Here, care comes without shame, because seeking help should
                never feel like weakness. Psyra is not just about therapy; it is
                about giving your mind the home it is been searching for. Because
                you deserve more than just surviving you deserve peace
              </p>
            </motion.div>
          </div>

          {/* RIGHT: image fills remaining space, desktop only */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="hidden md:block md:flex-1"
          >
            <div className="relative w-full h-[290px] lg:h-[390px] xl:h-[390px] overflow-hidden rounded-2xl mt-24">
              <img
                src="/woman-relaxing-chair-home.png"
                alt="Illustration representing supportive mental health therapy"
                className="absolute inset-0 h-full w-full object-cover -scale-x-100"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
