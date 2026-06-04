import Link from "next/link";

const tags = [
  "Anxiety",
  "Depression",
  "Stress",
  "Relationships",
  "Overthinking",
  "Burnout",
  "Loneliness",
  "Family conflicts",
];

const avatars = [
  { initial: "A", bg: "#1D9E75" },
  { initial: "R", bg: "#0F6E56" },
  { initial: "P", bg: "#5DCAA5" },
  { initial: "M", bg: "#085041" },
];

export default function Hero() {
  return (
    <section className="w-full bg-white pt-24 pb-10 lg:pt-28 lg:pb-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* ── LEFT ── */}
          <div className="order-last lg:order-first">
            {/* Heading */}
            <h1 className="font-serif text-[36px] sm:text-[44px] lg:text-[52px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#1a2e2e]">
              Online Malayalam
              <span className="block italic font-normal text-[#008C95]">
                Counselling in Kochi
              </span>
            </h1>

            <div className="flex flex-wrap gap-3 mt-8 mb-6">
              <span className="bg-white border border-[#D4ECEC] px-4 py-2 rounded-full text-sm text-[#085041]">
                Malayalam Sessions
              </span>
              <span className="bg-white border border-[#D4ECEC] px-4 py-2 rounded-full text-sm text-[#085041]">
                Online & Confidential
              </span>
              <span className="bg-white border border-[#D4ECEC] px-4 py-2 rounded-full text-sm text-[#085041]">
                Qualified Psychologists
              </span>
            </div>

            {/* Body */}
            <div className="space-y-4 text-[15px] leading-[1.82] text-[#5c6e6e] font-light">
              <p>
                In today's fast-moving world, emotional wellbeing has become an
                important part of maintaining a{" "}
                <strong className="text-[#1a2e2e] font-medium">
                  balanced and healthy life.
                </strong>{" "}
                However, many individuals still struggle to find accessible and
                comfortable mental health support that truly understands their
                emotions, lifestyle, and communication preferences.
              </p>

              <p>
                Our online Malayalam counselling sessions in Kochi provide a
                safe and supportive space to speak openly with{" "}
                <Link
                  href="/psychologists"
                  className="text-[#008C95] font-medium hover:underline"
                >
                  experienced psychologists
                </Link>{" "}
                from the comfort of your home. Whether you are experiencing{" "}
                <strong className="text-[#1a2e2e] font-medium">
                  anxiety, stress,{" "}
                  <Link
                    href="/couples-counselling"
                    className="text-[#008C95] font-medium hover:underline"
                  >
                    relationship challenges
                  </Link>
                  , overthinking, emotional burnout, depression, loneliness,
                </strong>{" "}
                or family conflicts, online therapy can help you better
                understand and manage your emotions.
              </p>

              {/* Pull-quote */}
              <div className="bg-[#F0FAF8] border-l-[3px] border-[#1D9E75] rounded-r-lg px-4 py-3 text-[13.5px] text-[#0F6E56] leading-[1.72]">
                Speaking in your native language often makes emotional
                conversations feel more natural and comfortable — allowing
                deeper emotional connection and understanding during therapy.
              </div>

              <p>
                We offer confidential online counselling support for{" "}
                <strong className="text-[#1a2e2e] font-medium">
                  individuals, couples, students, parents, and working
                  professionals
                </strong>{" "}
                across Kochi and Kerala through secure online video sessions
                with Malayalam-speaking psychologists.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              <Link
                href="/online-counselling-services"
                className="bg-[#008C95] hover:bg-[#006d75] transition-colors text-white px-6 py-3 rounded-full text-[13px] font-medium"
              >
                Book Now
              </Link>

              <Link
                href="/psychologists"
                className="border-[1.5px] border-[#008C95] text-[#008C95] hover:bg-[#008C95] hover:text-white transition-colors px-5 py-3 rounded-full text-[13px] font-medium"
              >
                Talk to a Psychologist
              </Link>
            </div>

            {/* Trust row */}
            <div className="mt-5 flex items-center gap-2.5">
              <div className="flex">
                {avatars.map(({ initial, bg }) => (
                  <div
                    key={initial}
                    className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-medium text-white -ml-2 first:ml-0"
                    style={{ background: bg }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span className="text-[12px] text-[#8aabab]">
                Trusted by 2,000+ individuals across Kerala
              </span>
            </div>
          </div>

          {/* ── RIGHT ── image comes FIRST on mobile */}
          <div className="order-first lg:order-last flex flex-col gap-3.5 lg:sticky lg:top-24">
            {/* Landscape image */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#dff0ef]">
              <img
                src="https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/7b87d523-5eee-425c-9d2d-f44094e091a2.webp"
                alt="Woman attending an online Malayalam counselling session with a psychologist in Kochi"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-[1fr_1px_1fr] bg-[#F7FAFA] border border-[#D4ECEC] rounded-xl overflow-hidden">
              <div className="py-3.5 text-center">
                <span className="block font-serif text-[20px] font-semibold text-[#008C95] mb-0.5">
                  500+
                </span>
                <span className="text-[10.5px] text-[#8aabab]">
                  Sessions/month
                </span>
              </div>
              <div className="bg-[#D4ECEC]" />
              <div className="py-3.5 text-center">
                <span className="block font-serif text-[20px] font-semibold text-[#008C95] mb-0.5">
                  4.9★
                </span>
                <span className="text-[10.5px] text-[#8aabab]">
                  Client rating
                </span>
              </div>
            </div>

            {/* Topic tags */}
            <div className="border border-[#E0EDED] rounded-xl p-4">
              <p className="text-[10px] font-medium text-[#8aabab] tracking-[.08em] uppercase mb-2.5">
                We help with
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#E8F4F4] text-[#085041] text-[11px] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
