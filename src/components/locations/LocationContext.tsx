import { ShieldCheck, Globe, Clock } from "lucide-react";

interface LocationContextSectionProps {
  countryName: string;
}

export default function LocationContextSection({
  countryName,
}: LocationContextSectionProps) {
  return (
    <section className="px-6 py-16 md:py-24 bg-linear-to-r from-[#eef4f1] to-[#e4ede8]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 md:gap-12">
          
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6 text-[#00989D]">
              Online therapy support for people living in {countryName}
            </h2>

            <div className="space-y-5 text-base md:text-lg text-[#1a3c34]/70 leading-relaxed">
              <p>
                Living in {countryName} can be challenging. Work pressure,
                distance from family, and adjusting to a new lifestyle can
                affect mental health over time.
              </p>

              <p>
                Psyra provides online therapy designed for people living in{" "}
                {countryName}, making mental health support accessible,
                confidential, and easy to fit into daily life.
              </p>
            </div>
          </div>

          {/* RIGHT FEATURES */}
          <div className="w-full md:w-1/3 grid grid-cols-1 gap-8">
            {[
              {
                icon: ShieldCheck,
                label: "Confidential Therapy",
                desc: "Private online sessions",
              },
              {
                icon: Globe,
                label: `${countryName}-Focused`,
                desc: "Support that understands your lifestyle",
              },
              {
                icon: Clock,
                label: "Flexible Scheduling",
                desc: "Therapy that fits your time",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
                  <item.icon className="w-5 h-5 text-[#2d5a4e]" />
                </div>

                <div>
                  <p className="font-bold text-sm uppercase tracking-wider text-[#1a3c34]">
                    {item.label}
                  </p>
                  <p className="text-xs text-[#2d5a4e]/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
