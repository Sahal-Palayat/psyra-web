export default function WhyPsyraSection() {
  const reasons = [
    {
      icon: "🗣",
      title: "Therapy in your mother tongue",
      desc: "Our licensed psychologists are native Malayalam speakers, so you can express emotions naturally without language barriers.",
    },
    {
      icon: "🔒",
      title: "100% confidential sessions",
      desc: "Your conversations are fully private and protected. No information is shared with anyone — ever — without your explicit consent.",
    },
    {
      icon: "🤝",
      title: "Non-judgmental, safe space",
      desc: "We create an open, supportive environment where couples feel heard and respected, regardless of the nature of the conflict.",
    },
    {
      icon: "📅",
      title: "Flexible online appointments",
      desc: "Book sessions on weekdays or weekends at a time that fits your schedule — early mornings, evenings, or lunch hours.",
    },
    {
      icon: "₹",
      title: "Affordable relationship therapy",
      desc: "Quality mental health care should be accessible. Our pricing is designed with Kerala families in mind — transparent and fair.",
    },
    {
      icon: "✅",
      title: "Personalized guidance from experts",
      desc: "Every couple is unique. Your therapist builds a tailored plan addressing communication, trust, intimacy, and long-term goals.",
    },
  ]

  const stats = [
    { num: "500+", label: "Couples supported" },
    { num: "4.9★", label: "Average session rating" },
    { num: "Malayalam", label: "First language of care" },
    { num: "Secure", label: "End-to-end encrypted" },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <p className="text-xs font-medium tracking-widest uppercase text-emerald-700 mb-3">
          Couples counselling · Malayalam
        </p>
        <h2 className="font-serif text-4xl font-normal leading-tight text-gray-900 mb-4 max-w-xl">
          Why families trust{" "}
          <em className="italic text-emerald-700 not-italic" style={{ fontStyle: "italic" }}>
            Psyra
          </em>{" "}
          for relationship care
        </h2>
        <p className="text-[15px] text-gray-500 leading-relaxed max-w-lg mb-10">
          Psyra connects couples across Kerala with licensed psychologists who conduct
          sessions in Malayalam — providing culturally sensitive, evidence-based
          relationship therapy from the comfort of your home.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 hover:border-emerald-300 transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-lg">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-gray-900 leading-snug">
                {item.title}
              </p>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-gray-100">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="font-serif text-2xl text-emerald-700 leading-none">
                  {stat.num}
                </span>
                <span className="text-xs text-gray-400 mt-1">{stat.label}</span>
              </div>
              {i < stats.length - 1 && (
                <div className="w-px h-8 bg-gray-100" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}