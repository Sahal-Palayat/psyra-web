export default function TherapyBenefitsSection() {
  const benefits = [
    {
      title: "Improve communication",
      description:
        "Therapy helps couples express emotions, concerns, and needs in healthier, more constructive ways - reducing misunderstandings before they escalate.",
      bg: "bg-[#FFF4EC]",
      titleText: "text-[#712B13]",
      descText: "text-[#993C1D]",
    },
    {
      title: "Build emotional connection",
      description:
        "Counselling deepens intimacy, trust, and empathy - helping partners feel genuinely seen, heard, and emotionally close again.",
      bg: "bg-[#E1F5EE]",
      titleText: "text-[#085041]",
      descText: "text-[#0F6E56]",
    },
    {
      title: "Understand emotional triggers",
      description:
        "Partners learn to identify patterns, reactions, and attachment behaviours that silently drive conflict in the relationship.",
      bg: "bg-[#EEEDFE]",
      titleText: "text-[#3C3489]",
      descText: "text-[#534AB7]",
    },
    {
      title: "Resolve recurring conflicts",
      description:
        "Therapy equips couples with structured tools to manage disagreements calmly and break out of repetitive argument cycles.",
      bg: "bg-[#FAEEDA]",
      titleText: "text-[#633806]",
      descText: "text-[#854F0B]",
    },
    {
      title: "Develop healthier boundaries",
      description:
        "Clear emotional boundaries improve respect, safety, and balance - giving both partners space to thrive individually and together.",
      bg: "bg-[#E6F1FB]",
      titleText: "text-[#0C447C]",
      descText: "text-[#185FA5]",
    },
    {
      title: "Strengthen relationship clarity",
      description:
        "Couples therapy builds emotional awareness and shared understanding, creating a stronger foundation for long-term partnership.",
      bg: "bg-[#EAF3DE]",
      titleText: "text-[#27500A]",
      descText: "text-[#3B6D11]",
    },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Centered heading block */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2
            className="text-3xl sm:text-4xl font-normal leading-tight text-gray-900 mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            How{" "}
            <em className="italic text-emerald-700">couples therapy</em>{" "}
            transforms relationships
          </h2>
          <p className="text-[15px] text-gray-500 leading-relaxed">
            Relationship counselling helps partners rebuild communication, resolve
            recurring conflicts, and develop deeper emotional understanding - all
            in a safe, Malayalam-speaking environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {benefits.map((item) => (
            <div
              key={item.title}
              className={`${item.bg} rounded-[20px] p-5 flex flex-col gap-3`}
            >
              <p className={`${item.titleText} text-[15px] font-medium leading-snug`}>
                {item.title}
              </p>
              <p className={`${item.descText} text-[13px] leading-relaxed`}>
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}