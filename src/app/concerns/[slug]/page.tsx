import { concernsData } from "../../../lib/concerns-data";
import { notFound } from "next/navigation";
import ConcernContent from "@/components/concerns/ConcernContent";
import { MobileQuickCheckin } from "@/components/blogs/mobileQuickIn";
import PsyraSupportJourney from "@/components/concerns/PsyraSupportJourney";
import GetTherapyCTA from "@/components/concerns/GetTherapyCTA";
import FAQSection from "@/components/concerns/FAQSection"


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const normalizedSlug = slug.toLowerCase().trim();
  const concern = concernsData[normalizedSlug as keyof typeof concernsData];

  if (!concern) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F8FAFA]">
      {/* Hero Section */}
      <section className="bg-[#00BEA5] text-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {concern.title}
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            {concern.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* ✅ Educational Content */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ConcernContent content={concern.content} />
          </div>

          {/* Quick Check-In */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <MobileQuickCheckin />
            </div>
          </div>

          {/* ✅ Support Journey */}
          <PsyraSupportJourney />

          {/* ✅ Primary CTA */}
          <GetTherapyCTA />
          <FAQSection faqs={concern.faqs} />
        </div>
      </section>
    </div>
  );
}
