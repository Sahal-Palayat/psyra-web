import Link from "next/link";

export default function EmotionalConnection() {
  return (
    <section className="w-full bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}

          <div className="relative max-w-[480px] mx-auto lg:mx-0">
            <div className="overflow-hidden rounded-3xl w-full aspect-[4/4.5] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <img
                src="https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/1869c6b1-281a-4300-b335-6fcf1177cde3.webp"
                alt="Malayalam-speaking psychologist providing emotional support during a counselling session"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>
            {/* Eyebrow */}
            <p className="text-[10.5px] font-medium tracking-[.12em] uppercase text-[#008C95] mb-4">
              Emotional Comfort
            </p>

            {/* Heading */}
            <h2 className="font-serif text-[30px] lg:text-[38px] font-semibold leading-[1.25] tracking-tight text-[#1a2e2e] mb-2.5">
              Sometimes It Feels Easier to Express Emotions in Malayalam
            </h2>

            {/* Body */}
            <div className="space-y-4 text-[15px] leading-[1.82] text-[#5c6e6e] font-light">
              <p>
                Mental health conversations are deeply personal. For many
                people, expressing emotions in their{" "}
                <strong className="text-[#1a2e2e] font-medium">
                  native language
                </strong>{" "}
                feels more natural, honest, and emotionally comfortable.
              </p>

              <p>
                Malayalam counselling sessions help individuals communicate
                feelings without hesitation or the pressure of translating
                emotions into another language. This creates a{" "}
                <strong className="text-[#1a2e2e] font-medium">
                  stronger emotional connection
                </strong>{" "}
                during therapy and helps clients feel genuinely understood.
              </p>

              <p>
                Our{" "}
                <Link
                  href="/psychologists"
                  className="text-[#008C95] font-medium hover:underline"
                >
                  Malayalam-speaking psychologists
                </Link>{" "}
                understand the{" "}
                <strong className="text-[#1a2e2e] font-medium">
                  cultural, social, and family dynamics
                </strong>{" "}
                many individuals in Kochi and Kerala experience in their daily
                lives — making therapy conversations feel more relatable and
                supportive.
              </p>

              <p>
                Whether you are struggling with anxiety, stress, relationship
                concerns, emotional burnout, loneliness, or family conflicts,
                online Malayalam counselling offers a{" "}
                <strong className="text-[#1a2e2e] font-medium">
                  safe and confidential space
                </strong>{" "}
                to talk openly and seek emotional support.
              </p>
            </div>

            {/* Chips */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              {[
                "Malayalam Speaking Psychologists",
                "Private Online Sessions",
                "Emotional Support from Home",
              ].map((label) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-white border border-[#D8ECEC] px-4 py-2.5 rounded-full text-[12px] text-[#1a2e2e]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1D9E75] flex-shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
