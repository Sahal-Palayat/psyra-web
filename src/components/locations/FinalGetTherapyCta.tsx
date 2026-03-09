import Link from "next/link";

interface FinalCTAProps {
  countryName: string;
}

export default function FinalCTA({ countryName }: FinalCTAProps) {
  return (
    <section className="px-6 py-16 md:py-24 bg-[#eef4f1]">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <h2 className="text-2xl md:text-4xl font-serif text-[#1a3c34]">
          Get Started Today – Take Care of Your Mental Health
        </h2>

        <p className="text-base md:text-lg text-[#1a3c34]/70 leading-relaxed">
          Whether you’re living in major cities or smaller communities across{" "}
          {countryName}, Psyra offers online Malayalam counselling you can access
          from the comfort of your home. Taking the first step can help you build
          emotional clarity, resilience, and a healthier relationship with
          yourself.
        </p>

        <div className="pt-4 md:pt-6">
          <Link
            href="/online-counselling-services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#43C6AC] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#1a3c34] transition"
          >
            Start Online Therapy
          </Link>
        </div>
      </div>
    </section>
  );
}
