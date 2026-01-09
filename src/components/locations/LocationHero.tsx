import Link from "next/link";
import { MoveRight } from "lucide-react";

interface LocationHeroProps {
  countryName: string;
}

export default function LocationHero({
  countryName,
}: LocationHeroProps) {
  return (
    <section className="relative pt-36 md:pt-40 pb-28 px-6 overflow-hidden bg-linear-to-b from-[#43C6AC]/20 via-[#43C6AC]/10 to-transparent text-[#1a3c34]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] mix-blend-multiply" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-block px-5 py-2 mb-10 rounded-full border border-[#43C6AC]/40 bg-[#43C6AC]/10 backdrop-blur-sm">
          <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold text-[#1a3c34]">
            Online Therapy for{" "}
            <span className="text-[#43C6AC]">{countryName}</span> Residents
          </p>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-[8.5rem] font-serif leading-[0.9] tracking-tighter mb-14 text-balance">
          Wellness meets <br />
          <span className="italic text-[#43C6AC]">purposeful</span> care.
        </h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
          <div className="flex-1 text-center md:text-left space-y-4">
            <p className="text-xl leading-relaxed text-[#1a3c34]/80 text-pretty">
              Thoughtful, confidential mental health support designed for people
              navigating life in {countryName}.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <Link
              href="/services"
              className="group flex items-center gap-4 px-8 py-4 bg-[#43C6AC] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#1a3c34] transition-all duration-300 shadow-xl shadow-[#43C6AC]/20"
            >
              Get Therapy
              <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
