"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface FAQ {
  question: string
  answer: string
}

export default function FAQSection({
  faqs,
}: {
  faqs: readonly FAQ[]
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-0 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#007C80]">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-teal-100/80">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index

          return (
            <div
              key={index}
              className="
                group
                relative
                py-5
                px-4 -mx-4
                rounded-xl
                transition-all duration-300
              "
            >
              {/* Left accent */}
              <span
                className={`
                  absolute left-0 top-3 bottom-3 w-1 rounded-full
                  transition-opacity duration-300
                  ${isOpen ? "bg-teal-600" : "bg-transparent"}
                `}
              />

              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
              >
                <span className="text-[16px] md:text-[20px] font-medium text-[#007C80]">
                  {faq.question}
                </span>

                <span className="text-teal-600 text-xl font-medium leading-none">
                  {isOpen ? "×" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-[15px] md:text-[19px] text-gray-700 leading-relaxed max-w-3xl">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
