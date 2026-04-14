import Link from "next/link";
import { LOCATIONS } from "@/constants/locations";

interface OtherLocationsProps {
  currentSlug: string;
}

export default function OtherLocations({
  currentSlug,
}: OtherLocationsProps) {
  const filteredLocations = LOCATIONS.filter(
    (loc) => loc.slug !== currentSlug
  );

  return (
    <section className="px-6 py-12 bg-[#f8faf9]">
      <div className="max-w-5xl mx-auto text-center">

        <h3 className="text-xl md:text-2xl font-serif mb-6 text-[#1a3c34]">
          Explore Online Malayalam Counselling in Other Countries
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {filteredLocations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/locations/${loc.slug}`}
              className="px-4 py-2 rounded-full bg-white border border-[#1a3c34]/10 text-sm font-medium text-[#1a3c34] hover:bg-[#00989D] hover:text-white transition"
            >
              Online Therapy in {loc.name}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}