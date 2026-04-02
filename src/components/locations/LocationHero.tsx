import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";

interface LocationHeroProps {
  countryName: string;
}

export default function LocationHero({ countryName }: LocationHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#EAF7F5] text-[#1a3c34]">

      {/* ================= MOBILE ================= */}
      <div className="md:hidden flex flex-col">
        
        <div className="relative w-full h-[360px]">
          <Image
            src="/images/online-malayalam-counselling-hero-mobile.webp"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#EAF7F5]/70 via-[#EAF7F5]/40 to-transparent" />
        </div>

        <div className="py-8 px-5 text-center">
          <p className="text-[10px] tracking-widest uppercase text-[#43C6AC] mb-3">
            Online Therapy for {countryName}
          </p>

          <h1 className="text-2xl font-serif mb-3">
            Wellness meets{" "}
            <span className="italic text-[#43C6AC]">purposeful</span> care.
          </h1>

          <p className="text-sm mb-5">
            Thoughtful, confidential mental health support designed for people
            navigating life in {countryName}.
          </p>

          <Link
            href="/online-counselling-services"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#2FB9A3] text-white rounded-full"
          >
            Get Therapy →
          </Link>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:block relative min-h-screen">

        {/* Background Image */}
        <Image
          src="/images/online-malayalam-counselling-hero-desktop.webp"
          alt=""
          fill
          className="object-cover"
          priority
        />

  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20">

          {/* Badge */}
          <div className="inline-block px-5 py-2 mb-8 rounded-full border border-[#43C6AC]/40 bg-[#43C6AC]/10">
            <p className="text-xs uppercase tracking-widest font-bold">
              Online Therapy for{" "}
              <span className="text-[#43C6AC]">{countryName}</span> Residents
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-[4rem] leading-tight font-serif mb-6 max-w-2xl">
            Wellness meets <br />
            <span className="italic text-[#43C6AC]">purposeful</span> care.
          </h1>

          {/* Description */}
          <p className="text-lg max-w-md mb-8 text-[#1a3c34]/70">
            Thoughtful, confidential mental health support designed for people
            navigating life in {countryName}.
          </p>

          {/* CTA */}
          <Link
            href="/online-counselling-services"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#2FB9A3] text-white rounded-full"
          >
            Get Therapy
            <MoveRight className="w-4 h-4" />
          </Link>

        </div>
      </div>
    </section>
  );
}