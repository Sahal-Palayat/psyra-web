export default function EmotionalConnection() {
  return (
    <section className="w-full bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>
            <div className="overflow-hidden rounded-[32px]">
              <img
                src="/images/kochi/emotional-connection.webp"
                alt="Malayalam emotional support counselling"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#008C95] mb-4">
              Emotional Comfort
            </p>

            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E1E1E] mb-8">
              Sometimes It Feels Easier to Express Emotions in Malayalam
            </h2>

            <div className="space-y-6 text-[17px] leading-8 text-[#5F5F5F]">

              <p>
                Mental health conversations are deeply personal. For many
                people, expressing emotions in their native language feels more
                natural, honest, and emotionally comfortable.
              </p>

              <p>
                Malayalam counselling sessions can help individuals communicate
                feelings without hesitation or the pressure of translating
                emotions into another language. This often creates a stronger
                emotional connection during therapy and helps clients feel
                genuinely understood.
              </p>

              <p>
                Our Malayalam-speaking psychologists understand the cultural,
                social, and family dynamics many individuals in Kochi and Kerala
                experience in their daily lives. This cultural familiarity can
                make therapy conversations feel more relatable and supportive.
              </p>

              <p>
                Whether you are struggling with anxiety, stress, relationship
                concerns, emotional burnout, loneliness, or family conflicts,
                online Malayalam counselling offers a safe and confidential
                space to talk openly and seek emotional support.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="flex flex-wrap gap-4 mt-10">
              <span className="bg-white border border-[#E5E5E5] px-5 py-3 rounded-full text-sm text-[#444]">
                Malayalam Speaking Psychologists
              </span>

              <span className="bg-white border border-[#E5E5E5] px-5 py-3 rounded-full text-sm text-[#444]">
                Private Online Sessions
              </span>

              <span className="bg-white border border-[#E5E5E5] px-5 py-3 rounded-full text-sm text-[#444]">
                Emotional Support from Home
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}