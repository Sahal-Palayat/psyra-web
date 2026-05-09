export default function CTA() {
  return (
    <section className="w-full bg-[#EAF6F6] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        <div className="bg-[#F9F5EE] rounded-[40px] px-8 py-14 lg:px-16 lg:py-20 text-center">

          {/* SMALL LABEL */}
          <p className="text-sm uppercase tracking-[0.2em] text-[#008C95] mb-5">
            Start Your Mental Wellness Journey
          </p>

          {/* HEADING */}
          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E1E1E] max-w-4xl mx-auto mb-8">
            Connect with Malayalam-Speaking Psychologists Online in Kochi
          </h2>

          {/* DESCRIPTION */}
          <p className="text-[17px] leading-8 text-[#5F5F5F] max-w-3xl mx-auto mb-10">
            Psyra offers confidential online Malayalam counselling sessions for
            individuals, couples, students, and working professionals seeking
            emotional support, therapy, and mental wellbeing across Kochi and
            Kerala.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#008C95] hover:bg-[#00757D] transition text-white px-8 py-4 rounded-full text-sm font-medium">
              Book Online Session
            </button>

            <button className="border border-[#008C95] text-[#008C95] hover:bg-[#008C95] hover:text-white transition px-8 py-4 rounded-full text-sm font-medium">
              Talk to a Psychologist
            </button>
          </div>

          {/* TRUST TEXT */}
          <div className="flex flex-wrap justify-center gap-5 mt-10 text-sm text-[#5F5F5F]">
            <span>✔ Confidential Sessions</span>
            <span>✔ Online Video Counselling</span>
            <span>✔ Malayalam Speaking Psychologists</span>
          </div>
        </div>
      </div>
    </section>
  );
}