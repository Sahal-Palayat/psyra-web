export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
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
        "Choose a time that suits you. Schedule your online therapy appointment in minutes, with no waiting lists.",
      tags: ["Flexible timing", "No waitlist"],
    },
    {
      number: "02",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.566" />
          <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
          <path d="M12.5 15.5l2 2" />
          <path d="M15 13l2 2" />
        </svg>
      ),
      title: "Get Matched",
      description:
        "We pair you with a qualified Malayalam-speaking psychologist - an expert in couples therapy, relationship counselling, or individual mental health support.",
      tags: ["Malayalam therapist", "Qualified experts"],
    },
    {
      number: "03",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 10l4.553 -2.277a1 1 0 0 1 1.447 .894v6.766a1 1 0 0 1 -1.447 .894l-4.553 -2.277v-4z" />
          <path d="M3 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v5a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
        </svg>
      ),
      title: "Begin Healing",
      description:
        "Join confidential video sessions from home, speak freely in your mother tongue, and get the mental health support you deserve - on your own terms.",
      tags: ["Fully confidential", "From home"],
    },
  ];



  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10 text-center max-w-lg mx-auto">
          <h2 className="font-serif text-3xl font-normal leading-snug text-gray-900 mb-3">
            How therapy at Psyra{" "}
            <em className="italic text-teal-700">actually works</em>
          </h2>

          <p className="text-sm text-gray-500 leading-relaxed">
            Start your healing journey in three simple steps - private, secure,
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

        
      </div>
    </section>
  );
}
