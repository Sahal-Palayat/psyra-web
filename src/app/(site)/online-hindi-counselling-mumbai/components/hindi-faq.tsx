"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SlideLeft from "./motion/slide-left";
import SlideRight from "./motion/slide-right";

const faqs = [
  {
    question: "Is online Hindi counselling in Mumbai effective?",
    answer:
      "Yes. Online Hindi counselling can be highly effective for anxiety, stress, depression, emotional wellbeing, relationship concerns, and personal challenges when guided by experienced psychologists.",
  },
  {
    question: "Can I speak to a psychologist in Hindi?",
    answer:
      "Yes. Psyra offers online counselling sessions in Hindi to help individuals communicate emotions more naturally and comfortably during therapy conversations.",
  },
  {
    question: "How do online counselling sessions work with Psyra?",
    answer:
      "After booking a session, individuals can attend confidential online video counselling sessions from the comfort of their home through a secure online platform.",
  },
  {
    question: "Are online therapy sessions confidential?",
    answer:
      "Yes. All online counselling sessions are conducted privately and confidentially to provide a safe and supportive environment for emotional conversations.",
  },
  {
    question: "Who can attend online counselling sessions?",
    answer:
      "Individuals, couples, students, working professionals, and families across Mumbai and Maharashtra can attend online Hindi counselling sessions based on their emotional and mental health needs.",
  },
  {
    question: "What issues are commonly addressed in online counselling?",
    answer:
      "Online counselling sessions commonly support anxiety, stress, overthinking, depression, relationship issues, emotional burnout, family conflicts, and self-esteem concerns.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
        isOpen
          ? "border-teal-200 bg-[#f0faf7]"
          : "border-gray-100 bg-white hover:border-teal-100"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span
          className="text-[15px] font-medium text-gray-800 leading-snug"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex-shrink-0 text-teal-600"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-6 pb-5">
              <div className="w-full h-px bg-teal-100 mb-4" />
              <p className="text-[14px] text-gray-500 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function HindiFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="bg-white py-20 px-4">
      {/* Schema markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer,
              },
            })),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          {/* <p className="text-[11px] font-medium tracking-widest text-teal-600 uppercase mb-3">
            FAQs
          </p> */}
          <SlideLeft>
          <h2
            className="text-3xl sm:text-4xl font-normal text-gray-900 leading-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Online Hindi Counselling{" "}
            <em className="text-teal-600 not-italic italic">FAQs</em>
          </h2>
          </SlideLeft>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <SlideRight key={i} delay={i * 0.1}>
            <FaqItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
            </SlideRight>
          ))}
        </div>
      </div>
    </section>
  );
}