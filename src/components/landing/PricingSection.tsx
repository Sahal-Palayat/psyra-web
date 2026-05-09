import Link from "next/link"

const plans = [
  {
    title: "Counselling / Psychotherapy",
    description:
      "One-on-one sessions for couples to improve communication, resolve conflicts, and build a stronger connection together.",
    price: "₹1,499",
    href: "/couple-therapy",
    tags: ["Individual sessions", "Couples therapy", "Relationship support"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8 9h8" />
        <path d="M8 13h6" />
        <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
      </svg>
    ),
  },
  {
    title: "Package Sessions",
    description:
      "Multiple sessions bundled together for consistent, long-term support - ideal for couples working through deeper challenges.",
    price: "₹4,800",
    href: "/couple-therapy",
    tags: ["Multi-session bundle", "Long-term support", "Best value"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" />
        <path d="M12 12l8 -4.5" />
        <path d="M12 12v9" />
        <path d="M12 12l-8 -4.5" />
      </svg>
    ),
  },
]

export default function PricingSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header — centered */}
        <div className="text-center max-w-lg mx-auto mb-10">
          <h2 className="font-serif text-3xl font-normal leading-snug text-gray-900 mb-2">
            Affordable online{" "}
            <em className="italic text-teal-700">couple therapy plans</em>
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Flexible plans designed to make care simple and accessible.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white border border-gray-100 rounded-2xl p-7 flex flex-col hover:border-gray-200 transition-colors"
            >
              {/* Icon + title */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center text-teal-700 flex-shrink-0">
                  {plan.icon}
                </div>
                <h3 className="font-serif text-xl font-normal text-gray-900 leading-snug pt-1">
                  {plan.title}
                </h3>
              </div>

              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                {plan.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {plan.tags.map((tag) => (
                  <span key={tag} className="text-xs text-teal-800 bg-teal-50 rounded-full px-2.5 py-1">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                <div>
                  <p className="text-xs text-gray-400 mb-0.5">Starting from</p>
                  <p className="text-2xl font-medium text-teal-700">{plan.price}</p>
                </div>

                <Link
                  href={plan.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-teal-700 hover:bg-teal-800 rounded-full px-5 py-2.5 transition-colors"
                >
                  Book now
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View all plans — centered below cards */}
        <div className="flex justify-center mt-6">
          <Link
            href="/couple-therapy"
            className="inline-flex items-center gap-2 text-sm font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-full px-5 py-2.5 transition-colors"
          >
            View all plans
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-gray-400 mt-4">
          All sessions are confidential and conducted by qualified Malayalam-speaking psychologists.
        </p>

      </div>
    </section>
  )
}