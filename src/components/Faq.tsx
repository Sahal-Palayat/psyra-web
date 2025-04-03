"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Using Lucide icons
import { motion, AnimatePresence } from "framer-motion"; // Importing animation components

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Ensure correct type

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What exactly is online counselling?",
      answer:
        "Think of it as therapy, but without the commute. At Psyra, online counselling connects you with licensed professionals through video calls, chat, or phone—anytime, anywhere. It’s therapy that fits into your life.",
    },
    {
      question: "What kind of issues can I talk about?",
      answer:
        "Whether it’s stress, anxiety, relationship struggles, or just feeling 'off,' Psyra is here for it all. No issue is too big or too small.",
    },
    {
      question: "What happens during a session?",
      answer:
        "Imagine a safe, judgment-free zone where you can unpack your thoughts. Your therapist will listen, guide, and help you find clarity—all from the comfort of your space.",
    },
    {
      question: "How do I book a session?",
      answer:
        "Easy peasy! Head to our website, pick a therapist who vibes with you, and choose a time that works. Stuck? We’re just a message away to help you out.",
    },
    {
      question: "How do I know if I need therapy?",
      answer:
        "If you’re asking this question, it’s probably a good time to try. Therapy isn’t just for crises—it’s for anyone looking to feel better, grow, or just understand themselves more.",
    },
    {
      question: "Can I use Psyra outside my country?",
      answer:
        "Absolutely! Psyra is borderless. Whether you’re at home or halfway across the world, we’re here for you.",
    },
    {
      question: "Can I have sessions in my preferred language?",
      answer:
        "Yes! We offer sessions in multiple languages, including [insert languages]. Your comfort is our priority.",
    },
    {
      question: "Is online therapy really effective?",
      answer:
        "Let’s bust the myth: online therapy is just as effective as in-person sessions for most people. Research backs it, and so do we. Plus, it’s way more convenient.",
    },
    {
      question: "Are there workshops or group sessions?",
      answer:
        "Yes! We host workshops on everything from stress management to parenting. Check out our Events page for the latest.",
    },
  ];

  return (
    <section className="pb-20 pt-4 mx-10 md:mx-16" id="faq">
      <div className="container">
        <h2 className="text-[30px] md:text-[40px] font-bold mb-8 text-[#005657]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full border-b border-gray-200 pb-4">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-[20px] text-[#005657]">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {/* Animate the answer smoothly */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
