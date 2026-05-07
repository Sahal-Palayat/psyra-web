export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4fbfb] to-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-[11px] font-medium tracking-widest uppercase text-teal-700 mb-3">
            Online Relationship Support in Malayalam
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-gray-900 mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Couples Counselling &{" "}
            <em className="italic text-teal-600">Relationship Therapy</em>
          </h1>

          <p className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-xl">
            Support for communication issues, emotional disconnect, trust concerns,
            recurring conflicts, overthinking, and relationship healing — in a
            confidential, culturally familiar space.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-teal-700 text-white px-6 py-3 rounded-[14px] text-[14px] font-medium hover:bg-teal-800 transition-colors duration-200">
              Book a Session
            </button>
            <button className="border border-[#d4ece4] px-6 py-3 rounded-[14px] text-[14px] font-medium text-gray-700 hover:border-teal-400 hover:bg-[#f4fbfb] transition-colors duration-200">
              Talk to a Psychologist
            </button>
          </div>

           <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-500">
            <div>✔ Malayalam Sessions</div>
            <div>✔ Online & Confidential</div>
            <div>✔ Licensed Professionals</div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-[32px] overflow-hidden border border-[#d4ece4] bg-white p-3">
            <img
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
              alt="Couples counselling"
              className="w-full h-[500px] object-cover rounded-[24px]"
            />
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-[22px] border border-[#d4ece4] p-5 w-64 shadow-sm">
            <p
              className="text-[11px] font-medium tracking-widest uppercase text-teal-700 mb-3"
            >
              Most Common Concerns
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Trust Issues",
                "Communication",
                "Overthinking",
                "Emotional Distance",
              ].map((item) => (
                <span
                  key={item}
                  className="bg-[#e8f7f2] text-teal-700 px-3 py-1 rounded-full text-[12px] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}