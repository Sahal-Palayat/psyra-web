export default function IntroductionSection() {
  const pillars = [
    { label: "Better communication" },
    { label: "Emotional understanding" },
    { label: "Conflict resolution" },
    { label: "Rebuilding trust" },
    { label: "Intimacy & connection" },
    { label: "Culturally familiar space" },
  ]

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — heading + label */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[11px] font-medium tracking-widest uppercase text-teal-700 mb-3">
              What is couples counselling
            </p>

            <h2
              className="text-3xl sm:text-4xl font-normal leading-tight text-gray-900 mb-8"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              A safe space to{" "}
              <em className="italic text-teal-600">
                understand each other better
              </em>
            </h2>

            {/* Pill tags */}
            <div className="flex flex-wrap gap-2">
              {pillars.map((p) => (
                <span
                  key={p.label}
                  className="flex items-center gap-2 bg-[#e8f7f2] text-teal-700 px-4 py-2 rounded-full text-[13px] font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-[#3dbf7a] shrink-0" />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — body text as stacked stat + prose blocks */}
          <div className="space-y-8">

            <div className="border-l-2 border-[#3dbf7a] pl-6">
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Couples counselling is a form of therapy that helps partners improve
                communication, understand emotional patterns, resolve conflicts, and
                build healthier relationships — through guided conversation in a
                confidential setting.
              </p>
            </div>

            <div className="border-l-2 border-[#d4ece4] pl-6">
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Relationship challenges can affect emotional wellbeing, trust,
                intimacy, and daily life. Professional therapy creates a structured
                and supportive space where both partners feel heard and understood.
              </p>
            </div>

            <div className="border-l-2 border-[#d4ece4] pl-6">
              <p className="text-[15px] text-gray-500 leading-relaxed">
                At Psyra, our licensed Malayalam psychologists provide online couples
                therapy sessions designed to help partners navigate relationship
                struggles with empathy, clarity, and cultural familiarity.
              </p>
            </div>

            {/* Divider stat row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#d4ece4]">
              {[
                { value: "100%", label: "Online & private" },
                { value: "Malayalam", label: "Native language sessions" },
                { value: "Licensed", label: "Certified psychologists" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-xl font-normal text-teal-700 mb-1"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[12px] text-gray-400 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}