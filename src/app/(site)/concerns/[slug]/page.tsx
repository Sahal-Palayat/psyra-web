import { notFound } from "next/navigation";
import ConcernContent from "@/components/concerns/ConcernContent";
import PsyraSupportJourney from "@/components/concerns/PsyraSupportJourney";
import MobileTherapyCTA from "@/components/concerns/MobileTherapyCTA";
import FAQSection from "@/components/concerns/FAQSection";
import StickyTherapyCTA from "@/components/concerns/StickyTherapyCTA";
import AssessmentCTA from "@/components/assessment/AssessmentCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

const concernSlugToAssessmentKey: Record<string, string> = {
  "anxiety-disorders": "anxiety",
  depression: "depression",
  stress: "stress",
  "work-related-challenges": "work",
  "relationship-issues": "relationship",
  "panic-attacks": "panic",
  "personality-disorders": "personality",
  "sexual-issues": "sexual",
  "ocd": "ocd",
};


export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) notFound();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/concerns/${slug}`,
    { cache: "no-store" }
  );
  const normalizedSlug = slug.toLowerCase().trim();
  const assessmentKey = concernSlugToAssessmentKey[normalizedSlug] ?? null;

  if (!assessmentKey) {
    console.warn("No assessment mapped for slug:", normalizedSlug);
  }

  // const concern = concernsData[normalizedSlug as keyof typeof concernsData];

  if (!res.ok) notFound();

  const concern = await res.json();

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#00BEA5] to-[#00989D] text-white px-6 pt-20 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="lg:max-w-3xl">
            {/* Label */}
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-white/15 text-xs md:text-sm tracking-wide">
              Mental Health Support
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {concern.title}
            </h1>

            <p className="text-base md:text-xl text-white/90 max-w-3xl">
              {concern.hero?.description}
            </p>

            <p className="mt-4 text-xs md:text-sm text-white/80">
              Your wellbeing matters. Professional care is just a step away.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 pt-8 pb-28 md:pt-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* LEFT */}
            <div className="lg:col-span-8 space-y-12">
              <ConcernContent blocks={concern.blocks} />

              

              <div className="block lg:hidden">
                {assessmentKey && (
                  <AssessmentCTA
                    title={`Assess your ${concern.title}`}
                    description="Answer a few questions to understand your current state."
                    href={`/how-is-mind?concern=${assessmentKey}`}
                    align="center"
                  />
                )}
              </div>

              <div className="container mx-auto max-w-6xl">
                <PsyraSupportJourney />
              </div>

              {/* {concern.faqs?.length > 0 && (
                <FAQSection faqs={concern.faqs} />
              )} */}
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32 space-y-8">
                <StickyTherapyCTA />
                <AssessmentCTA
                  title={`Assess your ${concern.title}`}
                  description="Answer a few questions to understand your current state."
                  href={`/how-is-mind?concern=${assessmentKey}`}
                />
              </div>
            </div>
            <MobileTherapyCTA />
          </div>
        </div>
{concern.faqs?.length > 0 && (
  <div className="mt-16">
    <FAQSection faqs={concern.faqs} />
  </div>
)}
    
      </section>
    </div>
  );
}
