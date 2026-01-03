"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  question: string;
  answer: string;
}

interface LocationFaqProps {
  faqs: FaqItem[];
}

const LocationFaq = ({ faqs }: LocationFaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="pb-20 pt-4 mx-4 md:mx-16" id="faq">
      <div className="divide-y divide-teal-100/80">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`
                group relative py-5 px-3 md:px-4 -mx-3 md:-mx-4 rounded-xl
                transition-all duration-300
                hover:border hover:border-teal-200 hover:shadow-sm
                ${isOpen ? "border border-teal-200 shadow-sm" : ""}
              `}
            >
              {/* Left accent */}
              <span
                className={`
                  absolute left-1 md:left-0 top-3 bottom-3 w-1 rounded-full
                  transition-opacity duration-300
                  ${
                    isOpen
                      ? "bg-teal-600"
                      : "bg-teal-500/0 group-hover:bg-teal-500/40"
                  }
                `}
              />

              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
              >
                <span className="text-[16px] md:text-[20px] text-[#005657]">
                  {faq.question}
                </span>

                <span className="text-teal-600 text-xl font-medium leading-none">
                  {isOpen ? "×" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-[15px] md:text-[19px] text-gray-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LocationFaq;
