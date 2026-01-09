import { SectionHeader } from "@/components/SectionTitle";
import AnimatedConcernGrid from "./ConcernsClient";

const concerns = [
  {
    title: "Depression",
    slug: "depression",
    description:
      "Finding light and purpose through compassionate, evidence-based support.",
    color: "bg-[#eef4f1]",
  },
  {
    title: "Panic Attacks",
    slug: "panic-attacks",
    description:
      "Regaining control and calm through specialized anxiety management.",
    color: "bg-white",
  },
  {
    title: "Personality Disorders",
    slug: "personality-disorders",
    description:
      "Understanding complex emotional patterns for a more stable tomorrow.",
    color: "bg-white",
  },
  {
    title: "Anxiety Disorders",
    slug: "anxiety-disorders",
    description:
      "Quietening the noise and navigating life with newfound confidence.",
    color: "#e4ede8",
  },
  {
    title: "Stress",
    slug: "stress",
    description:
      "Developing resilience and coping skills for everyday life stress.",
    color: "bg-white",
  },
  {
    title: "Sexual Issues",
    slug: "sexual-issues",
    description:
      "Private, professional guidance for intimate emotional wellbeing.",
    color: "bg-[#eef4f1]",
  },
  {
    title: "Relationship Issues",
    slug: "relationship-issues",
    description:
      "Fostering deeper connections and navigating interpersonal transitions.",
    color: "bg-white",
  },
  {
    title: "Work Related Issues",
    slug: "work-related-issues",
    description:
      "Navigating career challenges and expat professional transitions.",
    color: "bg-[#eef4f1]",
  },
];

export default function Concerns() {
  return (
    <section className="pt-16 pb-24 px-6 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#43C6AC] mb-4">
              Specialized Care
            </p>
            <SectionHeader className="mb-0">
              What we can help you overcome.
            </SectionHeader>
          </div>

          <p className="hidden md:block text-lg text-[#1a3c34]/60 max-w-sm font-sans leading-relaxed">
            Professional, culturally sensitive mental health support for
            everyday life challenges.
          </p>
        </div>

        {/* Animation handled in client component */}
        <AnimatedConcernGrid concerns={concerns} />
      </div>
    </section>
  );
}
