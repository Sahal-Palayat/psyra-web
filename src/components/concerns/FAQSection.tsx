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
    <section className="bg-white rounded-2xl p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6 text-[#005657]">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="border border-gray-200 rounded-lg p-4 group"
          >
            <summary className="cursor-pointer font-medium text-gray-800 flex justify-between items-center">
              {faq.question}
              <span className="transition group-open:rotate-45">+</span>
            </summary>

            <p className="mt-3 text-gray-700 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
