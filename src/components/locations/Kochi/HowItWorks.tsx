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
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-[30px] lg:text-[38px] font-semibold leading-[1.25] tracking-tight text-[#1a2e2e] mb-2.5">
            How Online Malayalam Counselling in Kochi Works with Psyra
          </h2>
          <div className="w-11 h-[3px] rounded-full bg-[#00A3AD] mx-auto" />
        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3.5">
          {steps.map(({ title, description }, i) => (
            <div key={title} className="relative">

              {/* Dashed connector — desktop only, not on last item */}
              {i < steps.length - 1 && (
                <div className="hidden xl:block absolute top-[19px] left-[calc(50%+20px)] right-[calc(-50%+20px)] border-t-[1.5px] border-dashed border-[#9FD8CC] z-0" />
              )}

              <div className="relative bg-[#F9F5EE] border border-[#E8E0D4] rounded-2xl p-6 h-full flex flex-col">

                {/* Badge row */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-[38px] h-[38px] rounded-full bg-[#008C95] flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-white text-[13px] font-medium">{i + 1}</span>
                  </div>
                </div>

                <h3 className="text-[14.5px] font-medium text-[#1a2e2e] leading-snug mb-3">
                  {title}
                </h3>

                <p className="text-[12.5px] leading-[1.75] text-[#6b7f7f] font-light">
                  {description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}