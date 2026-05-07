export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
          <path d="M16 3v4" />
          <path d="M8 3v4" />
          <path d="M4 11h16" />
          <path d="M15 19l2 2l4 -4" />
        </svg>
      ),
      title: "Book a Session",
      description:
        "Choose a time that suits you — early morning or late evening. Schedule your online therapy appointment in minutes, with no waiting lists.",
      tags: ["Flexible timing", "No waitlist"],
    },
    {
      number: "02",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.566" />
          <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
          <path d="M12.5 15.5l2 2" />
          <path d="M15 13l2 2" />
        </svg>
      ),
      title: "Get Matched",
      description:
        "We pair you with a licensed Malayalam-speaking psychologist — an expert in couples therapy, relationship counselling, or individual mental health support.",
      tags: ["Malayalam therapist", "Licensed experts"],
    },
    {
      number: "03",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 10l4.553 -2.277a1 1 0 0 1 1.447 .894v6.766a1 1 0 0 1 -1.447 .894l-4.553 -2.277v-4z" />
          <path d="M3 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
        </svg>
      ),
      title: "Begin Healing",
      description:
        "Join confidential video sessions from home, speak freely in your mother tongue, and get the mental health support you deserve — on your own terms.",
      tags: ["Fully confidential", "From home"],
    },
  ]

  const trustPills = [
    {
      label: "100% private",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
          <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
          <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
        </svg>
      ),
    },
    {
      label: "മലയാളം-first",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5h7" />
          <path d="M9 3v2c0 4.418 -2.239 8 -5 8" />
          <path d="M5 9c0 2.144 2.952 3.908 6.7 4" />
          <path d="M12 20l4 -9l4 9" />
          <path d="M19.1 18h-6.2" />
        </svg>
      ),
    },
    {
      label: "Any device",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
          <path d="M11 4h2" />
          <path d="M12 17v.01" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
            Online Malayalam counselling
          </span>

          <h2 className="font-serif text-3xl font-normal leading-snug text-gray-900 mb-3 max-w-lg">
            How therapy at Psyra{" "}
            <em className="italic text-teal-700">actually works</em>
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed max-w-md">
            Start your healing journey in three simple steps — private, secure,
            and fully in Malayalam.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-medium text-teal-700 bg-teal-50 w-7 h-7 rounded-full flex items-center justify-center">
                  {step.number}
                </span>
                <div className="w-9 h-9 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                  {step.icon}
                </div>
              </div>

              <h3 className="font-serif text-lg font-normal text-gray-900 mb-2 leading-snug">
                {step.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                {step.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-teal-800 bg-teal-50 rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-7">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-gray-400">
            Trusted by Keralites across the globe
          </span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex flex-wrap gap-2">
            {trustPills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-1.5 text-xs text-gray-500 border border-gray-100 rounded-full px-3 py-1.5"
              >
                <span className="text-teal-600">{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>

          <button className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 border-none rounded-full px-4 py-2 transition-colors cursor-pointer">
            Book your first session
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M13 18l6 -6" />
              <path d="M13 6l6 6" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}