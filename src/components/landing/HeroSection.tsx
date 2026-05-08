import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const concerns = [
    "Trust Issues",
    "Communication",
    "Overthinking",
    "Emotional Distance",
    "Recurring Conflicts",
    "Premarital Support",
  ];

  return (
    <section className="relative overflow-hidden bg-[#e6f7f5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-14 lg:py-28 pt-24 lg:pt-28 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1
            className="text-3xl sm:text-4xl lg:text-6xl font-normal leading-tight text-gray-900 mb-4 lg:mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Couples Counselling &{" "}
            <em className="italic text-teal-600">Relationship Therapy</em>
          </h1>

          <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-5 lg:mb-6">
            Support for communication issues, emotional disconnect, trust
            concerns, recurring conflicts, overthinking, and relationship
            healing - in a confidential, culturally familiar space.
          </p>

          {/* Concerns */}
          <div className="mb-6 lg:mb-8">
            <p className="text-[11px] font-medium tracking-widest uppercase text-gray-400 mb-2.5">
              Common concerns we help with
            </p>
            <div className="flex flex-wrap gap-2">
              {concerns.map((item) => (
                <span
                  key={item}
                  className="bg-white/70 text-teal-800 px-3 py-1.5 rounded-full text-[12px] font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/couple-therapy"
              className="bg-teal-700 text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-[14px] text-[13px] lg:text-[14px] font-medium hover:bg-teal-800 transition-colors duration-200"
            >
              Book a Session
            </Link>

            <Link
              href="/psychologists"
              className="border border-[#d4ece4] bg-white/50 px-5 py-2.5 lg:px-6 lg:py-3 rounded-[14px] text-[13px] lg:text-[14px] font-medium text-gray-700 hover:border-teal-400 hover:bg-white transition-colors duration-200"
            >
              Talk to a Psychologist
            </Link>
          </div>

          <div className="mt-6 lg:mt-8 flex flex-wrap gap-4 lg:gap-6 text-[12px] lg:text-sm text-gray-500">
            {[
              "Malayalam Sessions",
              "Online & Confidential",
              "Qualified Professionals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F6E56"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12l5 5l9 -9" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-2 lg:mt-0">
          <div className="rounded-[24px] lg:rounded-[32px] overflow-hidden border border-[#d4ece4] bg-white p-2 lg:p-3">
            <Image
              src="https://pebby-uplods.s3.us-east-1.amazonaws.com/uploads/c13caca1-76f3-4a93-8053-b950c4c0f3c8.webp"
              alt="Couple expressing emotional connection and togetherness"
              width={1200}
              height={900}
              priority
              className="w-full h-[260px] sm:h-[340px] lg:h-[460px] object-cover rounded-[18px] lg:rounded-[24px] brightness-[1.05] contrast-[0.92]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
