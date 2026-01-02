"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importing animation components

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Ensure correct type

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is a Psyra?",
      answer:
        "Psyra provides counseling services in the Malayalam and Hindi languages via online counselling, which offers safe and private access to psychological counseling for persons seeking mental health assistance.",
    },
    {
      question: "What is Online Counselling?",
      answer:
        "Online counseling consists of the provision of professional mental health care through the use of online video or audio sessions.Psyra is also providing internet counseling through Malayalam and Hindi, making psychological services accessible to people from anywhere.",
    },
    {
      question: "What makes Psyra special?",
      answer:
        "Psyra is distinct in terms of its services through online Malayalam and Hindi counseling that integrates professionalism, understanding, accessibility, and the highest standards of the client-centered approach.",
    },
    {
      question: "Are the counseling sessions conducted in Malayalam?",
      answer:
        "Yes. Psyra offers online counseling services in Malayalam and Hindi, allowing clients to articulate their feelings in their language of choice without any issues relating to effective communication.",
    },
    {
      question:
        " I suffer from anxiety and overthinking. Will counselling help me?",
      answer:
        "Yes. Through online counseling in Malayalam or Hindi, counseling will assist you in understanding anxiety patterns, managing overthinking, and building better coping mechanisms for enhanced emotional state management.",
    },
    {
      question:
        " How effective is online counselling when compared with face-to-face therapy sessions?",
      answer:
        "Indeed. Studies, including the experience of the practitioner, make it evident that online counseling conducted in the Malayalam and Hindi languages of the Psyra site can be equally effective as traditional counseling.",
    },
    {
      question:
        "I don’t think I have a mental illness, but I don’t exactly feel happy. Will counseling work for me?",
      answer:
        "Yes. Online counseling offered in both Malayalam and Hindi at Psyra is not only limited to therapy of diagnosed cases. It also helps one explore one's emotions, attain clarity, and move towards growth.",
    },
    {
      question: "When might I need to consult a psychologist?",
      answer:
        "You could turn to online counseling sessions conducted in Malayalam or Hindi if emotional distress, anxiety, stress, or personal issues start impacting your life.",
    },
    {
      question: "What can I expect in an online counselling session?",
      answer:
        "Sessions remain confidential and client-centered. Online counseling in Malayalam and Hindi offers you a safe platform where you can discuss your concerns and work together towards finding solutions.",
    },
    {
      question: "How long is each session with the counselor?",
      answer:
        "The duration of online counseling usually takes between 45 minutes to 60 minutes per consultation per online counseling client.",
    },
    {
      question: "Are the counseling sessions confidential? ",
      answer:
        "Yes. Psyra maintains high professional and moral standards. There is complete confidentiality and privacy in all online counseling sessions in Malayalam as well as Hindi.",
    },
  ];

  return (
    <section className="pb-20 pt-4 mx-4 md:mx-16" id="faq">
      <div className="divide-y divide-teal-100/80">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`
    group
    relative
    py-5
    px-3 md:px-4
    -mx-3 md:-mx-4
    rounded-xl
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
    ${isOpen ? "bg-teal-600" : "bg-teal-500/0 group-hover:bg-teal-500/40"}
  `}
              />

              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 text-left focus:outline-none"
              >
                <span className="text-[16px] md:text-[20px] text-[#005657]">
                  {faq.question}
                </span>

                <span
                  className="
      text-teal-600
      text-xl
      font-medium
      leading-none
      transition-transform duration-300
    "
                >
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

export default Faq;
