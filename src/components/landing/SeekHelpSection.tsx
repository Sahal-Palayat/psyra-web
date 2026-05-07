export default function SeekHelpSection() {
  const indicators = [
    {
      number: "01",
      heading: "Communication feels difficult",
      detail:
        "Conversations turn into arguments or important topics get avoided altogether, leaving both partners feeling unheard.",
    },
    {
      number: "02",
      heading: "Trust has been affected",
      detail:
        "Doubts, insecurity, or past incidents are quietly creating emotional distance that feels hard to close.",
    },
    {
      number: "03",
      heading: "Arguments feel repetitive",
      detail:
        "The same conflicts resurface without resolution — a sign that deeper patterns need to be addressed together.",
    },
    {
      number: "04",
      heading: "Emotional connection feels weaker",
      detail:
        "You feel distant, unsupported, or less emotionally present with each other than you used to.",
    },
    {
      number: "05",
      heading: "You want to grow together",
      detail:
        "Therapy isn't only for crises. Proactive support helps couples build stronger, more resilient foundations.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Top — full-width editorial header */}
        <div className="border-t border-[#d4ece4] pt-10 mb-16 grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <p className="text-[11px] font-medium tracking-widest uppercase text-teal-700 mb-3">
              Knowing when to reach out
            </p>
            <h2
              className="text-3xl sm:text-4xl font-normal leading-tight text-gray-900"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              When should you{" "}
              <em className="italic text-teal-600">seek help?</em>
            </h2>
          </div>

          <div className="lg:col-span-2 lg:pl-12 lg:border-l border-[#d4ece4] flex flex-col justify-between gap-6">
            <p className="text-[15px] text-gray-500 leading-relaxed">
              Many couples wait until problems feel overwhelming before reaching out.
              But seeking support early — when patterns are still forming — is far more
              effective than waiting for a breaking point.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="bg-teal-700 text-white px-6 py-3 rounded-[14px] text-[14px] font-medium hover:bg-teal-800 transition-colors duration-200">
                Book a Session
              </button>
              <button className="border border-[#d4ece4] px-6 py-3 rounded-[14px] text-[14px] font-medium text-gray-700 hover:border-teal-400 hover:bg-[#f4fbfb] transition-colors duration-200">
                Talk to a Psychologist
              </button>
            </div>
          </div>
        </div>

        {/* Bottom — numbered indicator list */}
        <div className="divide-y divide-[#d4ece4]">
          {indicators.map((item) => (
            <div
              key={item.number}
              className="grid lg:grid-cols-12 gap-4 lg:gap-8 py-7 group hover:bg-[#f4fbfb] -mx-5 px-5 sm:-mx-6 sm:px-6 transition-colors duration-200 rounded-[16px]"
            >
              {/* Number */}
              <div className="lg:col-span-1">
                <span
                  className="text-[13px] font-normal text-teal-600"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {item.number}
                </span>
              </div>

              {/* Dot + Heading */}
              <div className="lg:col-span-4 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#3dbf7a] shrink-0" />
                <h3 className="text-[15px] font-medium text-gray-900">
                  {item.heading}
                </h3>
              </div>

              {/* Detail */}
              <div className="lg:col-span-7 lg:pl-4">
                <p className="text-[13px] text-gray-500 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}