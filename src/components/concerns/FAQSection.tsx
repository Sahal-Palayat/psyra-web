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
    <section className="max-w-4xl mx-auto px-4 md:px-0 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#005657]">
        Frequently Asked Questions
      </h2>

      <div className="divide-y divide-teal-100/80">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="
              group
              relative
              py-5
              px-4 -mx-4
              rounded-xl
              transition-all duration-300
              hover:bg-teal-50/80
              open:bg-teal-50
            "
          >
            {/* Left accent */}
            <span
              className="
                absolute left-0 top-3 bottom-3 w-1
                bg-teal-500/0
                rounded-full
                transition-opacity duration-300
                group-hover:bg-teal-500/40
                group-open:bg-teal-600
              "
            />

            <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
              <span
                className="
                  text-sm md:text-base font-medium
                  text-teal-900
                  group-hover:text-teal-800
                  transition-colors
                "
              >
                {faq.question}
              </span>

              <span
                className="
                  text-teal-600 text-xl
                  transition-transform duration-300
                  group-open:rotate-45
                "
              >
                +
              </span>
            </summary>

            <p className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base max-w-3xl">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  )
}
