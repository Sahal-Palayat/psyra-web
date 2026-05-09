const concerns = [
  {
    title: "Anxiety & Overthinking",
    description:
      "Support for persistent worrying, racing thoughts, panic, fear, and emotional stress that affect daily life and peace of mind.",
  },
  {
    title: "Stress & Burnout",
    description:
      "Online counselling support for emotional exhaustion, work pressure, mental fatigue, and overwhelming responsibilities.",
  },
  {
    title: "Relationship Issues",
    description:
      "Guidance for communication problems, emotional distance, conflicts, trust concerns, and relationship challenges.",
  },
  {
    title: "Depression & Loneliness",
    description:
      "Compassionate emotional support for sadness, hopelessness, isolation, low motivation, and emotional disconnection.",
  },
  {
    title: "Family Conflicts",
    description:
      "Counselling support for misunderstandings, emotional tension, parenting stress, and difficult family situations.",
  },
  {
    title: "Student Mental Health",
    description:
      "Therapy support for academic pressure, exam stress, career confusion, anxiety, and emotional struggles faced by students.",
  },
  {
    title: "Work-Life Balance",
    description:
      "Support for managing emotional stress caused by career pressure, personal responsibilities, and daily life imbalance.",
  },
  {
    title: "Self-Esteem & Confidence",
    description:
      "Guidance to improve self-worth, confidence, emotional resilience, and personal growth through supportive therapy.",
  },
];

export default function Concerns() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="max-w-4xl mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-[#008C95] mb-4">
            Mental Health Support
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E1E1E] mb-6">
            Online Counselling Support for Different Emotional Challenges
          </h2>

          <p className="text-[17px] leading-8 text-[#5F5F5F]">
            Our online Malayalam counselling sessions in Kochi provide emotional
            support for individuals facing anxiety, stress, relationship
            challenges, emotional burnout, family conflicts, and other mental
            health concerns.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {concerns.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] rounded-[28px] p-8 border border-[#EFEFEF] hover:shadow-lg transition duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#008C95]/10 flex items-center justify-center mb-6">
                <span className="text-[#008C95] text-xl font-semibold">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#1E1E1E] mb-4 leading-snug">
                {item.title}
              </h3>

              <p className="text-[15px] leading-7 text-[#5F5F5F]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}