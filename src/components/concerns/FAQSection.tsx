interface FAQ {
  question: string
  answer: string
}

export default function FAQSection({
  faqs,
}: {
  faqs: readonly FAQ[]
}) {
  return (
    <section className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 rounded-xl p-6 md:p-8 shadow-lg border border-teal-100">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-teal-700 to-cyan-600 bg-clip-text text-transparent">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-white/80 backdrop-blur-sm border border-teal-200/50 rounded-lg p-4 group hover:shadow-md transition-all duration-300 hover:border-teal-300"
          >
            <summary className="cursor-pointer font-semibold text-teal-800 flex justify-between items-center gap-3">
              <span className="text-sm md:text-base">{faq.question}</span>
              <span className="text-teal-600 text-xl transition-transform group-open:rotate-45 flex-shrink-0">+</span>
            </summary>

            <p className="mt-3 text-gray-700 leading-relaxed text-sm md:text-base pl-0">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
