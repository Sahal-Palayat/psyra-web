export default function IssuesSection() {
  const issues = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 9h8" />
          <path d="M8 13h6" />
          <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
        </svg>
      ),
      title: "Communication issues",
      description:
        "Difficulty expressing thoughts, emotions, or concerns clearly creates misunderstandings and emotional distance - therapy helps couples find a shared language.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </svg>
      ),
      title: "Trust & insecurity",
      description:
        "Past betrayals, jealousy, or emotional insecurity can erode the foundation of a relationship. Counselling rebuilds safety and mutual trust step by step.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.566" />
        </svg>
      ),
      title: "Premarital counselling",
      description:
        "Before marriage, therapy helps couples align on expectations, values, compatibility, and communication - setting a strong foundation for lifelong partnership.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.566" />
          <path d="M12 6l-1 1" />
          <path d="M10 10l-1 1" />
          <path d="M14 10l1 1" />
          <path d="M12 14l1 -1" />
        </svg>
      ),
      title: "Emotional disconnect",
      description:
        "Feeling distant, unheard, or unsupported over time quietly damages relationships. Therapy helps partners reconnect and feel emotionally present again.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 9v4" />
          <path d="M12 16v.01" />
        </svg>
      ),
      title: "Relationship anxiety",
      description:
        "Fear of abandonment, overthinking, and anxious attachment patterns create constant tension. Counselling helps couples manage anxiety together constructively.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M3.6 9h16.8" />
          <path d="M3.6 15h16.8" />
          <path d="M11.5 3a17 17 0 0 0 0 18" />
          <path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
      ),
      title: "Long-distance challenges",
      description:
        "Distance strains communication, trust, and emotional intimacy. Online couples therapy in Malayalam is especially suited for NRI couples and long-distance relationships.",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-[#f4f8f5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-16">
          <h2
            className="text-3xl sm:text-4xl font-normal leading-tight text-gray-900 mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Common relationship struggles{" "}
            <em className="italic text-emerald-700">we help couples navigate</em>
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            Our Malayalam-speaking psychologists support couples facing a wide range of
            emotional, communication, and trust-related challenges - in a confidential,
            culturally familiar space.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {issues.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#d4ece4] rounded-[22px] p-6 flex flex-col gap-4 hover:border-emerald-400 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-[14px] bg-[#e8f7f2] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-[15px] font-medium text-gray-900 leading-snug">
                  {item.title}
                </h3>
              </div>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}