import { concernsData } from "../../../../lib/concerns-data";
import { notFound } from "next/navigation";
import ConcernContent from "@/components/concerns/ConcernContent";
// import { MobileQuickCheckin } from "@/components/blogs/mobileQuickIn";
import PsyraSupportJourney from "@/components/concerns/PsyraSupportJourney";
import GetTherapyCTA from "@/components/concerns/GetTherapyCTA";
import FAQSection from "@/components/concerns/FAQSection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const normalizedSlug = slug.toLowerCase().trim();
  const concern = concernsData[normalizedSlug as keyof typeof concernsData];

  if (!concern) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#00BEA5] to-[#00989D] text-white px-6 pt-20 pb-14 md:pt-24 md:pb-20">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Label */}
          <span className="inline-block mb-3 px-4 py-1 rounded-full bg-white/15 text-xs md:text-sm tracking-wide">
            Mental Health Support
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {concern.title}
          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-white/90 max-w-3xl mx-auto md:mx-0">
            {concern.description}
          </p>

          <p className="mt-4 text-xs md:text-sm text-white/80">
            Your wellbeing matters. Professional care is just a step away.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Educational Content */}
          <ConcernContent blocks={concern.content.blocks} />


          {/* Quick Check-In */}
          {/* <div className="flex justify-center">
            <div className="w-full max-w-md">
              <MobileQuickCheckin />
            </div>
          </div> */}

          {/* Support Journey */}
           <div className="container mx-auto max-w-6xl">
        <PsyraSupportJourney />
      </div>

          {/* Primary CTA */}
          <GetTherapyCTA />
          <FAQSection faqs={concern.faqs} />
        </div>
      </section>
    </div>
  );
}
