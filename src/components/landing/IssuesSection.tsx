export default function IssuesSection() {
  const issues = [
    {
      icon: "💬",
      title: "Communication issues",
      description:
        "Difficulty expressing thoughts, emotions, or concerns clearly creates misunderstandings and emotional distance — therapy helps couples find a shared language.",
    },
    {
      icon: "🔐",
      title: "Trust & insecurity",
      description:
        "Past betrayals, jealousy, or emotional insecurity can erode the foundation of a relationship. Counselling rebuilds safety and mutual trust step by step.",
    },
    {
      icon: "💍",
      title: "Premarital counselling",
      description:
        "Before marriage, therapy helps couples align on expectations, values, compatibility, and communication — setting a strong foundation for lifelong partnership.",
    },
    {
      icon: "💔",
      title: "Emotional disconnect",
      description:
        "Feeling distant, unheard, or unsupported over time quietly damages relationships. Therapy helps partners reconnect and feel emotionally present again.",
    },
    {
      icon: "😰",
      title: "Relationship anxiety",
      description:
        "Fear of abandonment, overthinking, and anxious attachment patterns create constant tension. Counselling helps couples manage anxiety together constructively.",
    },
    {
      icon: "🌏",
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
          <p className="text-[11px] font-medium tracking-widest uppercase text-emerald-700 mb-3">
            Relationship issues we treat
          </p>
          <h2
            className="text-3xl sm:text-4xl font-normal leading-tight text-gray-900 mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Common relationship struggles{" "}
            <em className="italic text-emerald-700">we help couples navigate</em>
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            Our licensed Malayalam psychologists support couples facing a wide range of
            emotional, communication, and trust-related challenges — in a confidential,
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
                <div className="w-11 h-11 rounded-[14px] bg-[#e8f7f2] flex items-center justify-center text-xl shrink-0">
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