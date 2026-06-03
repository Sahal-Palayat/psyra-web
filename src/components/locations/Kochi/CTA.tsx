import Link from "next/link";

export default function CTA() {
  return (
    <section className="w-full bg-[#EAF6F6] py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="bg-gradient-to-br from-[#008C95] to-[#006d75] rounded-2xl px-6 py-10 sm:px-10 sm:py-12 text-center">
          {/* Eyebrow */}
          <p className="text-[10px] font-medium tracking-[.12em] uppercase text-white/60 mb-3">
            Start Your Mental Wellness Journey
          </p>

          {/* Heading */}
          <h2 className="font-serif text-[22px] sm:text-[28px] lg:text-[32px] font-semibold leading-[1.25] tracking-tight text-white max-w-lg mx-auto mb-2">
            Connect with Malayalam-Speaking Psychologists Online in Kochi
          </h2>

          {/* Description */}
          <p className="text-[13px] leading-[1.8] text-white/70 font-light max-w-md mx-auto mb-6">
            Psyra offers confidential online Malayalam counselling sessions for
            individuals, couples, students, and working professionals seeking
            emotional support, therapy, and mental wellbeing across Kochi and
            Kerala.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/online-counselling-services"
              className="bg-white text-[#008C95] hover:bg-[#F3F8F8] transition-all px-7 py-3 rounded-full text-sm font-semibold shadow-sm"
            >
              Book Now
            </Link>

            <Link
              href="/psychologists"
              className="border border-white/40 text-white hover:bg-white hover:text-[#008C95] transition-all px-7 py-3 rounded-full text-sm font-medium"
            >
              Talk to a Psychologist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
