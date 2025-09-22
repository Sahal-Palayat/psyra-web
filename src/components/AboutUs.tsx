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
                When the world doesn't <br /> understand your silence Psyra
                does.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <p className="text-gray-600 text-lg md:text-xl mb-10">
                Behind every smile, there are battles no one sees. Sleepless
                nights, racing thoughts, a weight you can't explain. You don't
                need another person telling you to "be strong" or "move on."
                What you need... is a space that finally feels safe. That's why
                Psyra exists. Not as a clinic. Not as an app. But as a sanctuary
                for your mind.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-teal-600 mb-8">
                At Psyra, you'll find:
              </h3>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.6 + index * 0.1,
                    }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-teal-500 rotate-90"></div>
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
                      <h4 className="text-xl font-bold text-teal-600">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-lg md:text-xl">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
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
