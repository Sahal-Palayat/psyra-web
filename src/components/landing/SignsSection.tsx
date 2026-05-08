export default function SignsSection() {
  const signs = [
    {
      title: "Constant Arguments",
      description:
        "You may find yourselves arguing often, with small issues slowly turning into bigger conflicts over time.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3dbf7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <line x1="9" y1="10" x2="15" y2="10"/>
          <line x1="12" y1="7" x2="12" y2="13"/>
        </svg>
      ),
    },
    {
      title: "Communication Problems",
      description:
        "You may struggle to express your thoughts or feel unheard, leading to repeated misunderstandings between you both.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3dbf7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <line x1="9" y1="10" x2="15" y2="10"/>
        </svg>
      ),
    },
    {
      title: "Emotional Distance",
      description:
        "You may feel disconnected or less emotionally close, even when you are spending time together regularly.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3dbf7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
          <line x1="12" y1="12" x2="12" y2="12"/>
        </svg>
      ),
    },
    {
      title: "Trust Issues",
      description:
        "You may experience doubts, insecurity, or difficulty trusting your partner in different situations over time.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3dbf7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
    },
    {
      title: "Overthinking in Relationships",
      description:
        "Relationship anxiety and constant worrying may create stress and misunderstandings between you and your partner.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3dbf7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
    },
    {
      title: "Jealousy & Insecurity",
      description:
        "Unhealthy jealousy and fear of losing connection may affect your relationship stability and emotional wellbeing.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3dbf7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4"/>
          <path d="M6 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
          <line x1="18" y1="8" x2="23" y2="8"/>
        </svg>
      ),
    },
    {
      title: "Feeling Unheard",
      description:
        "Feeling ignored or emotionally invalidated repeatedly can reduce intimacy and understanding between partners.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3dbf7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/>
          <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
          <line x1="3" y1="11" x2="3" y2="11.01"/>
        </svg>
      ),
    },
    {
      title: "Recurring Misunderstandings",
      description:
        "Repeated communication breakdowns and unresolved emotional patterns can create long-term relationship frustration.",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3dbf7a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 4 1 10 7 10"/>
          <path d="M3.51 15a9 9 0 1 0 .49-3.51"/>
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#f4fbfb] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-gray-900 mb-4 sm:mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Common signs your relationship{" "}
            <em className="italic text-teal-600">may need support</em>
          </h2>
          <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
            Relationship challenges can show up in different ways, affecting communication,
            emotions, and overall connection. Recognizing these signs can help you take
            the first step toward support.
          </p>
        </div>

        {/* Cards — 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
          {signs.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#d4ece4] rounded-[22px] p-5 sm:p-6 flex flex-col gap-3 hover:border-teal-400 hover:shadow-sm transition-all duration-200"
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0">{item.icon}</span>
                <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-900 leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-[12px] sm:text-[13px] text-gray-500 leading-relaxed pl-[30px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}