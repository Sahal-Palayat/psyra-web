const testimonials = [
  {
    name: "Vishnu K",
    feedback:
      "Speaking with a Malayalam-speaking psychologist made me feel emotionally comfortable during therapy. The online sessions helped me manage stress and anxiety much better.",
  },
  {
    name: "Aleesha Thomas",
    feedback:
      "I was struggling with overthinking and academic pressure. Online counselling sessions gave me emotional clarity and helped me feel more confident and balanced.",
  },
  {
    name: "Dr Sindhu Sankar",
    feedback:
      "The couples counselling sessions helped us improve communication and understand each other better. The online process felt safe, supportive, and convenient.",
  },
];

function GoogleLogo() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-serif text-[30px] lg:text-[38px] font-semibold leading-[1.25] tracking-tight text-[#1a2e2e] mb-2.5">
            What People Say About Online Counselling with Psyra
          </h2>
          <div className="w-11 h-[3px] rounded-full bg-[#00A3AD] mx-auto mb-5" />
          <p className="text-[14px] leading-[1.8] text-[#5c6e6e] font-light">
            Individuals across Kochi and Kerala have found emotional support,
            clarity, and comfort through online Malayalam counselling sessions
            with Psyra.
          </p>
        </div>

        {/* GOOGLE RATING */}
        <div className="flex items-center justify-center gap-2.5 mb-10">
          <div className="w-6 h-6 rounded-full bg-white shadow-sm flex items-center justify-center">
            <GoogleLogo />
          </div>
          <span className="text-[15px] font-medium text-[#1a2e2e]">4.9</span>
          <span className="text-[#F5A623] text-[14px] tracking-wide">★★★★★</span>
          <span className="text-[11px] text-[#8aabab]">Google Reviews</span>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3.5">
          {testimonials.map(({ name, feedback }) => (
            <div
              key={name}
              className="bg-white border border-[#EFEFEF] rounded-2xl p-6 flex flex-col gap-4 hover:shadow-[0_4px_20px_rgba(0,140,149,0.08)] hover:border-[#C8E6E6] transition-all duration-200"
            >
              {/* Stars */}
              <div className="text-[#F5A623] text-[13px] tracking-wide">★★★★★</div>

              {/* Feedback */}
              <p className="text-[13px] leading-[1.78] text-[#5c6e6e] font-light italic flex-1">
                "{feedback}"
              </p>

              {/* Divider */}
              <div className="h-px bg-[#F0F0F0]" />

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E8F4F4] flex items-center justify-center text-[12px] font-medium text-[#008C95] flex-shrink-0">
                    {name[0]}
                  </div>
                  <div>
                    <p className="text-[12.5px] font-medium text-[#1a2e2e]">{name}</p>
                  </div>
                </div>
                <span className="text-[10px] text-[#8aabab] tracking-wide">Google Review</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}