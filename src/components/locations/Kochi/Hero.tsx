export default function Hero() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight text-[#1E1E1E] mb-8">
              Online Malayalam Counselling in Kochi
            </h1>

            <div className="space-y-6 text-[18px] leading-9 text-[#5F5F5F]">
              
              <p>
                In today’s fast-moving world, emotional wellbeing has become an
                important part of maintaining a balanced and healthy life.
                However, many individuals still struggle to find accessible and
                comfortable mental health support that truly understands their
                emotions, lifestyle, and communication preferences.
              </p>

              <p>
                Our online Malayalam counselling sessions in Kochi provide a
                safe and supportive space to speak openly with experienced
                psychologists from the comfort of your home. Whether you are
                experiencing anxiety, stress, relationship challenges,
                overthinking, emotional burnout, depression, loneliness, or
                family conflicts, online therapy can help you better understand
                and manage your emotions.
              </p>

              <p>
                Speaking in your native language often makes emotional
                conversations feel more natural and comfortable. Malayalam
                counselling sessions can help individuals express feelings more
                openly without hesitation, allowing deeper emotional connection
                and understanding during therapy.
              </p>

              <p>
                We offer confidential online counselling support for
                individuals, couples, students, parents, and working
                professionals across Kochi and Kerala through secure online
                video sessions with Malayalam-speaking psychologists.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <button className="bg-[#008C95] hover:bg-[#00757D] transition text-white px-8 py-4 rounded-full text-sm font-medium">
                Book Now
              </button>

              <button className="border border-[#008C95] text-[#008C95] hover:bg-[#008C95] hover:text-white transition px-8 py-4 rounded-full text-sm font-medium">
                Talk to a Psychologist
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-[320px] h-[320px] lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-4 border-[#00A3AD]">
                <img
                  src="/images/kochi/hero.webp"
                  alt="Online Malayalam counselling session in Kochi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}