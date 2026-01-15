import Link from "next/link";
import { MoveRight } from "lucide-react";

interface LocationHeroProps {
  countryName: string;
}

export default function LocationHero({ countryName }: LocationHeroProps) {
  return (
    <section
      className="
    relative overflow-hidden isolate
    md:min-h-[100vh]
    pt-0 md:pt-40
    pb-0 md:pb-28
    text-[#1a3c34]
    bg-[#EAF7F5]
  "
    >
      {/*  MOBILE HERO  */}
      <div className="relative md:hidden w-full h-[420px] overflow-hidden">
        {/* Background image */}
        <img
          src="/images/online-therapy-global-psyra.webp"
          alt={`Online therapy and mental health support in ${countryName}`}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Soft blend overlay  */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF7F5]/95 via-[#EAF7F5]/80 to-transparent" />

        {/* Text */}
        <div className="relative z-10 h-full flex items-center">
          <div className="px-6 max-w-[260px]">
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

      <div className="hidden md:block">
        <img
          src="/images/online-therapy-global-psyra.webp"
          alt={`Online therapy and mental health support in ${countryName}`}
          className="sr-only"
        />

        {/* Background image (right aligned globe) */}
        <div
          className="
    absolute inset-0
    bg-no-repeat bg-cover bg-center
  "
          style={{
            backgroundImage: `url('/images/online-therapy-global-psyra.webp')`,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-block px-5 py-2 mb-10 rounded-full border border-[#43C6AC]/40 bg-[#43C6AC]/10 backdrop-blur-sm">
            <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold text-[#1a3c34]">
              Online Therapy for{" "}
              <span className="text-[#43C6AC]">{countryName}</span> Residents
            </p>
          </div>

          {/* Heading */}
          <h1
            className="text-4xl md:text-[4.75rem] lg:text-[5.25rem]
               font-serif leading-[1.05] tracking-tight
               mb-8 text-balance md:text-left text-center max-w-2xl"
          >
            Wellness meets <br />
            <span className="italic text-[#43C6AC]">purposeful</span> care.
          </h1>

          {/* Content + CTA */}
          <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-12 max-w-5xl">
            <div className="max-w-xl text-center md:text-left space-y-4">
              <p className="text-sm md:text-base leading-relaxed text-[#1a3c34]/70 text-pretty max-w-md">
                Thoughtful, confidential mental health support designed for
                people navigating life in {countryName}.
              </p>
              <div className="flex justify-center md:justify-start">
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
    </section>
  );
}
