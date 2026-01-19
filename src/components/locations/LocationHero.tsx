import Link from "next/link";
import { MoveRight } from "lucide-react";

interface LocationHeroProps {
  countryName: string;
}



export default function LocationHero({ countryName }: LocationHeroProps) {
  

  return (
    <section
      className="
    relative overflow-hidden
    pt-[76px] pb-0
    sm:pt-8 sm:pb-12
    md:pt-0 md:pb-0 md:h-screen
    px-0
    bg-[#EAF7F5]
    md:bg-transparent
    text-[#1a3c34]
  "
    >
      {/*  MOBILE HERO  */}
      <div className="md:hidden flex flex-col">
        {/* Smooth transition gradient from navbar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/40 via-[#EAF7F5]/60 to-transparent pointer-events-none z-10" />
        
        {/* Image - shown first, full-width edge-to-edge */}
        <div className="w-screen h-[320px] sm:h-[360px] overflow-hidden bg-[#EAF7F5] relative left-1/2 -translate-x-1/2">
          <img
            src="/images/online-malayalam-counselling-hero-mobile.webp"
            alt={`Online therapy and mental health support in ${countryName}`}
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 70%' }}
            loading="eager"
          />
        </div>

        {/* Text content - shown below image, with improved layout */}
        <div className="pt-8 pb-8 px-4 sm:px-6">
          <div className="max-w-[280px] sm:max-w-[320px] mx-auto text-center">
            <p className="text-[10px] tracking-widest uppercase text-[#43C6AC] mb-3">
              Online Therapy for {countryName}
            </p>

            <h1 className="text-2xl font-serif leading-snug text-[#1a3c34] mb-3">
              Wellness meets{" "}
              <span className="italic text-[#43C6AC]">purposeful</span> care.
            </h1>

            <p className="text-sm text-[#1a3c34]/80 mb-5">
              Thoughtful, confidential mental health support designed for people
              navigating life in {countryName}.
            </p>

            <Link
              href="/services"
              className="
          inline-flex items-center gap-2
          px-5 py-3
          bg-[#2FB9A3] text-white
          rounded-full text-sm font-semibold
          shadow-md
        "
            >
              Get Therapy →
            </Link>
          </div>
        </div>
      </div>


      {/* DESKTOP HERO */}

      <div className="hidden md:flex md:flex-col md:h-full md:relative">
        {/* Smooth transition gradient from navbar - desktop */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/50 via-white/20 to-transparent pointer-events-none z-10" />
        
        <img
          src="/images/online-malayalam-counselling-hero-desktop.webp"
          alt={`Online therapy and mental health support in ${countryName}`}
          className="sr-only"
        />

        {/* Background image (right aligned globe) - full coverage */}
        <div
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: `url('/images/online-therapy-global-psyra.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            backgroundRepeat: 'no-repeat',
          }}
        />
        
        {/* Fallback background color to prevent any white gaps */}
        <div className="absolute inset-0 bg-[#EAF7F5] -z-10" />

        {/* Content container */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
            {/* Badge */}
            <div className="inline-block px-5 py-2 mb-6 lg:mb-8 rounded-full border border-[#43C6AC]/40 bg-[#43C6AC]/10 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] font-bold text-[#1a3c34]">
                Online Therapy for{" "}
                <span className="text-[#43C6AC]">{countryName}</span> Residents
              </p>
            </div>

            {/* Heading */}
            <h1
              className="text-[4.75rem] lg:text-[5.25rem]
                 font-serif leading-[1.05] tracking-tight
                 mb-6 lg:mb-8 text-balance text-left max-w-2xl"
            >
              Wellness meets <br />
              <span className="italic text-[#43C6AC]">purposeful</span> care.
            </h1>

            {/* Content + CTA */}
            <div className="flex flex-row items-end justify-between gap-12 max-w-5xl">
              <div className="max-w-xl text-left space-y-4">
                <p className="text-base leading-relaxed text-[#1a3c34]/70 text-pretty max-w-md">
                  Thoughtful, confidential mental health support designed for
                  people navigating life in {countryName}.
                </p>
                <div className="flex justify-start">
                  <Link
                    href="/services"
                    className="
            group inline-flex items-center gap-3
            px-6 py-3
            bg-[#2FB9A3] text-white
            rounded-full
            text-sm font-semibold uppercase tracking-wide
            hover:bg-[#259E8C]
            transition-all duration-300
            shadow-md
          "
                  >
                    Get Therapy
                    <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
