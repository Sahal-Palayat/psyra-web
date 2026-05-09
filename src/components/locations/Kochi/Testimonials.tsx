const testimonials = [
  {
    name: "Working Professional",
    feedback:
      "Speaking with a Malayalam-speaking psychologist made me feel emotionally comfortable during therapy. The online sessions helped me manage stress and anxiety much better.",
  },
  {
    name: "College Student",
    feedback:
      "I was struggling with overthinking and academic pressure. Online counselling sessions gave me emotional clarity and helped me feel more confident and balanced.",
  },
  {
    name: "Married Client",
    feedback:
      "The couples counselling sessions helped us improve communication and understand each other better. The online process felt safe, supportive, and convenient.",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#008C95] mb-4">
            Client Experiences
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E1E1E] mb-6">
            What People Say About Online Counselling with Psyra
          </h2>

          <p className="text-[17px] leading-8 text-[#5F5F5F]">
            Individuals across Kochi and Kerala have found emotional support,
            clarity, and comfort through online Malayalam counselling sessions
            with Psyra.
          </p>
        </div>

        {/* TESTIMONIALS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F8F8] rounded-[30px] p-8 border border-[#ECECEC]"
            >
              {/* QUOTE */}
              <div className="text-5xl text-[#008C95] leading-none mb-6">
                “
              </div>

              {/* FEEDBACK */}
              <p className="text-[16px] leading-8 text-[#5F5F5F] mb-8">
                {item.feedback}
              </p>

              {/* NAME */}
              <div>
                <h3 className="text-lg font-medium text-[#1E1E1E]">
                  {item.name}
                </h3>

                <p className="text-sm text-[#777777] mt-1">
                  Online Counselling Client
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}