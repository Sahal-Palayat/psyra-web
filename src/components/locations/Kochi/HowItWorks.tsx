const steps = [
  {
    title: "Choose the Right Psychologist",
    description:
      "Explore online Malayalam counselling support based on your emotional needs, relationship concerns, stress, anxiety, or personal challenges.",
  },
  {
    title: "Book Your Online Session",
    description:
      "Schedule a convenient online therapy session based on your preferred time and availability from anywhere in Kochi or Kerala.",
  },
  {
    title: "Prepare for Your Session",
    description:
      "Find a comfortable and private space where you can openly discuss your emotions, thoughts, concerns, and mental wellbeing.",
  },
  {
    title: "Attend Your Therapy Session",
    description:
      "Connect securely through online video sessions and receive supportive guidance from experienced Malayalam-speaking psychologists.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#EAF6F6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADING */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#008C95] mb-4">
            Therapy Process
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E1E1E]">
            How Online Malayalam Counselling in Kochi Works with Psyra
          </h2>
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#F9F5EE] rounded-[28px] p-8 min-h-[340px] flex flex-col"
            >
              {/* STEP NUMBER */}
              <div className="w-14 h-14 rounded-2xl bg-[#008C95]/10 flex items-center justify-center mb-8">
                <span className="text-[#008C95] text-xl font-semibold">
                  0{index + 1}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-medium text-[#1E1E1E] leading-snug mb-5">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[16px] leading-8 text-[#5F5F5F]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
