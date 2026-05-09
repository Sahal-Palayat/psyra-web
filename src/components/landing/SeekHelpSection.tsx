import Link from "next/link";

export default function SeekHelpSection() {
  const indicators = [
    {
      number: "01",
      heading: "Communication feels difficult",
      detail:
        "Conversations turn into arguments or important topics get avoided, leaving both partners feeling unheard and frustrated.",
    },
    {
      number: "02",
      heading: "Trust has been affected",
      detail:
        "Doubts, insecurity, or past incidents are quietly creating emotional distance that feels hard to close on your own.",
    },
    {
      number: "03",
      heading: "Arguments feel repetitive",
      detail:
        "The same conflicts resurface without resolution - a sign that deeper patterns need to be worked through together.",
    },
    {
      number: "04",
      heading: "Emotional connection feels weaker",
      detail:
        "You feel distant, unsupported, or less emotionally present with each other than you used to be.",
    },
    {
      number: "05",
      heading: "You want to grow together",
      detail:
        "Therapy isn't only for crises. Proactive support helps couples build stronger, more resilient foundations before things get hard.",
    },
  ];

  const tags = [
    "Malayalam sessions",
    "Online & private",
    "Experienced therapists",
    "Flexible timing",
  ];

  return (
    <section className="py-16 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 items-start">
          {/* Left — CTA panel (not sticky on mobile) */}
          <div className="lg:sticky lg:top-10">
            <h2
              className="text-2xl sm:text-3xl font-normal leading-tight text-gray-900 mb-4 lg:mb-5"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              When should you{" "}
              <em className="italic text-emerald-700">seek help?</em>
            </h2>

            <p className="text-[13px] text-gray-500 leading-relaxed mb-5 lg:mb-7">
              Many couples wait until problems feel overwhelming. Reaching out
              early - while patterns are still forming - leads to far better
              outcomes than waiting for a breaking point.
            </p>

            {/* Buttons — row on mobile, column on desktop */}
            <div className="flex flex-row lg:flex-col gap-2 lg:gap-3 mb-6 lg:mb-8">
              <Link
                href="/couple-therapy"
                className="flex-1 lg:flex-none bg-[#0F9EA8] text-white text-[13px] font-medium px-5 py-2.5 lg:py-3 rounded-[10px] text-center lg:text-left hover:bg-[#0B6B72] transition-colors duration-200"
              >
                Book a session
              </Link>

              <Link
                href="/psychologists"
                className="flex-1 lg:flex-none border border-gray-200 text-gray-600 text-[13px] px-5 py-2.5 lg:py-3 rounded-[10px] text-center lg:text-left hover:border-[#0F9EA8 hover:bg-[#f4fbf9] transition-colors duration-200"
              >
                Talk to a psychologist
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11.5px] px-3 py-1.5 rounded-full border border-emerald-200 text-emerald-900 bg-emerald-50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — indicator list */}
          <div className="divide-y divide-gray-100 border-t border-gray-100 mt-2 lg:mt-0">
            {indicators.map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-[24px_1fr] gap-3 py-4 lg:py-5"
              >
                <span
                  className="text-[12px] lg:text-[13px] text-emerald-300 pt-0.5"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {item.number}
                </span>
                <div>
                  <p className="text-[13px] lg:text-[14px] font-medium text-gray-900 mb-1">
                    {item.heading}
                  </p>
                  <p className="text-[12px] lg:text-[12.5px] text-gray-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
