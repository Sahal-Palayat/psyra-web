import { notFound } from "next/navigation";
import ConcernContent from "@/components/concerns/ConcernContent";
import PsyraSupportJourney from "@/components/concerns/PsyraSupportJourney";
import MobileTherapyCTA from "@/components/concerns/MobileTherapyCTA";
import FAQSection from "@/components/concerns/FAQSection";
import StickyTherapyCTA from "@/components/concerns/StickyTherapyCTA";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) notFound();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/concerns/${slug}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const concern = await res.json();

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#00BEA5] to-[#00989D] text-white px-6 pt-20 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="lg:max-w-3xl">
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-white/15 text-xs md:text-sm tracking-wide">
              Mental Health Support
            </span>

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

              <div className="container mx-auto max-w-6xl">
                <PsyraSupportJourney />
              </div>

              {concern.faqs?.length > 0 && (
                <FAQSection faqs={concern.faqs} />
              )}
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-32">
                <StickyTherapyCTA />
              </div>
            </div>

            <MobileTherapyCTA />
          </div>
        </div>
      </section>
    </div>
  );
}
