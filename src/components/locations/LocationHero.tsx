import Link from "next/link";
import Image from "next/image";
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
    text-[#1a3c34]
  "
    >
      {/*  MOBILE HERO  */}
      <div className="md:hidden flex flex-col">
        {/* Smooth transition gradient from navbar */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white/40 via-[#EAF7F5]/60 to-transparent pointer-events-none z-10" />
        
        {/* Image - shown first, full-width edge-to-edge */}
        <div className="w-screen h-[320px] sm:h-[360px] overflow-hidden bg-[#EAF7F5] relative left-1/2 -translate-x-1/2">
          <Image
            src="/images/online-malayalam-counselling-hero-mobile.webp"
            alt={`Online therapy and mental health support in ${countryName}`}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 70%' }}
            priority
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
              href="/online-counselling-services"
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

      <div className="hidden md:flex md:flex-col md:h-full md:relative bg-[#EAF7F5]">
        {/* Smooth transition gradient from navbar - desktop */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-white/50 via-white/20 to-transparent pointer-events-none z-10" />

        {/* Desktop hero background image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/online-malayalam-counselling-hero-desktop.webp"
            alt={`Online therapy and mental health support in ${countryName}`}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
            quality={90}
          />
        </div>

        {/* Content container */}
        <div className="flex-1 flex items-center relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-16">
            {/* Badge */}
            <div className="inline-block px-5 py-2 mb-6 lg:mb-8 rounded-full border border-[#43C6AC]/40 bg-[#43C6AC]/10 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.35em] font-bold text-[#1a3c34]">
                Online Therapy for{" "}
                <span className="text-[#43C6AC]">{countryName}</span> Residents
              </p>
              <div className="flex justify-center md:justify-start">
                <Link
                  href="/online-counselling-services"
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
    </section>
  );
}
