"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Can online couples counselling really help?",
    answer:
      "Yes — research consistently shows that online therapy is as effective as in-person sessions for most relationship concerns. Our licensed Malayalam-speaking psychologists use evidence-based approaches like Emotionally Focused Therapy (EFT) and Cognitive Behavioural Therapy (CBT) to help couples improve communication, resolve conflicts, and rebuild trust — all from the comfort of your home.",
  },
  {
    question: "Can one partner attend therapy alone?",
    answer:
      "Absolutely. Individual sessions are available alongside couples therapy. Sometimes one partner begins therapy first, and the other joins later. Our psychologists tailor the approach based on what works best for your situation — there's no fixed rule.",
  },
  {
    question: "Are sessions available in Malayalam?",
    answer:
      "Yes — all our psychologists are native Malayalam speakers. You can express yourself fully in your mother tongue without worrying about language barriers. We also serve the Kerala diaspora globally, so sessions are available across time zones.",
  },
  {
    question: "How many sessions are usually needed?",
    answer:
      "It varies depending on the concerns you bring to therapy. Many couples notice meaningful progress within 4–6 sessions. For deeper or long-standing issues, a longer course may be recommended. Your psychologist will discuss a plan with you after the first session — there's no pressure to commit upfront.",
  },
  {
    question: "Is everything discussed in sessions kept confidential?",
    answer:
      "Confidentiality is a core principle of our practice. What you share in sessions stays between you and your therapist. The only exceptions are situations involving imminent risk of harm — which your psychologist will explain clearly before you begin.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Simply click 'Book your first session', choose a time that suits you, and you'll be matched with a qualified Malayalam psychologist. The whole process takes just a few minutes — no lengthy intake forms or waiting lists.",
  },
]

function FAQItem({ faq, isOpen, onToggle }: {
  faq: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border border-gray-100 rounded-2xl overflow-hidden hover:border-gray-200 transition-colors">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-base font-normal text-gray-900 leading-snug">
          {faq.question}
        </span>

        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-400"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          

          <h2 className="font-serif text-3xl font-normal leading-snug text-gray-900 mb-3">
            Frequently asked{" "}
            <em className="italic text-teal-700">questions</em>
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed">
            Everything you need to know about online Malayalam couples counselling at Psyra.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

    
      </div>
    </section>
  )
}