"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "Is online Malayalam counselling in Kochi effective?",
    answer:
      "Yes. Online Malayalam counselling can be highly effective for anxiety, stress, depression, relationship concerns, emotional wellbeing, and personal challenges when guided by experienced psychologists.",
  },
  {
    question: "Can I speak to a psychologist in Malayalam?",
    answer:
      "Yes. Psyra offers online counselling sessions in Malayalam to help individuals communicate emotions more comfortably and openly during therapy.",
  },
  {
    question: "How do online counselling sessions work with Psyra?",
    answer:
      "After booking a session, individuals can attend confidential online video counselling sessions from the comfort of their home using a secure online platform.",
  },
  {
    question: "Are online therapy sessions confidential?",
    answer:
      "Yes. All online counselling sessions are conducted privately and confidentially to provide a safe and supportive environment for emotional conversations.",
  },
  {
    question: "Who can attend online counselling sessions?",
    answer:
      "Individuals, couples, students, working professionals, and families across Kochi and Kerala can attend online Malayalam counselling sessions based on their emotional and mental health needs.",
  },
  {
    question: "What issues are commonly addressed in online counselling?",
    answer:
      "Online counselling sessions commonly support anxiety, stress, overthinking, depression, relationship issues, family conflicts, emotional burnout, and self-esteem concerns.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[10.5px] font-medium tracking-[.12em] uppercase text-[#008C95] mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif text-[30px] lg:text-[38px] font-semibold leading-[1.25] tracking-tight text-[#1a2e2e] mb-2.5">
            Online Malayalam Counselling FAQs
          </h2>
          <div className="w-11 h-[3px] rounded-full bg-[#00A3AD] mx-auto mb-5" />
          <p className="text-[14px] leading-[1.8] text-[#5c6e6e] font-light">
            Find answers to common questions about online Malayalam counselling
            sessions in Kochi, therapy process, confidentiality, and emotional
            support with Psyra.
          </p>
        </div>

        {/* FAQ ACCORDION */}
        <div className="max-w-4xl mx-auto divide-y divide-[#EFEFEF] border-t border-[#EFEFEF]">
          {faqs.map(({ question, answer }, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-[#EFEFEF]">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-[18px] text-left"
                >
                  <span className="text-[14.5px] font-medium text-[#1a2e2e] leading-snug">
                    {question}
                  </span>
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                      isOpen ? "bg-[#008C95]" : "bg-[#E8F4F4]"
                    }`}
                  >
                    <Plus
                      size={13}
                      strokeWidth={2}
                      className={`transition-transform duration-250 ${
                        isOpen ? "rotate-45 text-white" : "text-[#008C95]"
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40 pb-4" : "max-h-0"
                  }`}
                >
                  <p className="text-[13px] leading-[1.78] text-[#6b7f7f] font-light">
                    {answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}