export default function SignsSection() {
  const signs = [
    {
      title: "Constant Arguments",
      description:
        "You may find yourselves arguing often, with small issues slowly turning into bigger conflicts over time.",
    },
    {
      title: "Communication Problems",
      description:
        "You may struggle to express your thoughts or feel unheard, leading to repeated misunderstandings between you both.",
    },
    {
      title: "Emotional Distance",
      description:
        "You may feel disconnected or less emotionally close, even when you are spending time together regularly.",
    },
    {
      title: "Trust Issues",
      description:
        "You may experience doubts, insecurity, or difficulty trusting your partner in different situations over time.",
    },
    {
      title: "Overthinking in Relationships",
      description:
        "Relationship anxiety and constant worrying may create stress and misunderstandings between you and your partner.",
    },
    {
      title: "Jealousy & Insecurity",
      description:
        "Unhealthy jealousy and fear of losing connection may affect your relationship stability and emotional wellbeing.",
    },
    {
      title: "Feeling Unheard",
      description:
        "Feeling ignored or emotionally invalidated repeatedly can reduce intimacy and understanding between partners.",
    },
    {
      title: "Recurring Misunderstandings",
      description:
        "Repeated communication breakdowns and unresolved emotional patterns can create long-term relationship frustration.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#f4fbfb] to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-16">
          <p className="text-[11px] font-medium tracking-widest uppercase text-teal-700 mb-3">
            Relationship warning signs
          </p>
          <h2
            className="text-3xl sm:text-4xl font-normal leading-tight text-gray-900 mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Common signs your relationship{" "}
            <em className="italic text-teal-600">may need support</em>
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            Relationship challenges can show up in different ways, affecting communication,
            emotions, and overall connection. Recognizing these signs can help you take
            the first step toward support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {signs.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#d4ece4] rounded-[22px] p-6 flex flex-col gap-3 hover:border-teal-400 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                {/* Uniform dot — matches reference style */}
                <span className="w-4 h-4 rounded-full bg-[#3dbf7a] shrink-0" />
                <h3 className="text-[15px] font-medium text-gray-900 leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed pl-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}