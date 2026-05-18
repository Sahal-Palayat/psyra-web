import { notFound } from "next/navigation";
import { Metadata } from "next";

import LocationHero from "@/components/locations/LocationHero";
import LocationContextSection from "@/components/locations/LocationContext";
import AssessmentCTA from "@/components/locations/LocationAssessCta";
import FinalCTA from "@/components/locations/FinalGetTherapyCta";
import DynamicPsychologistCarousel from "@/components/Psychologist/SimpleCarousel/psychologist-carousel";
import ConcernHero from "@/components/locations/ConcernHero";
import MalayalamCounsellingSection from "@/components/locations/MalayalamCounsellingSectionServer";
import LocationFaq from "@/components/locations/LocationFaq";
import { HowItWorks } from "@/components/HowTherapyWorks";
import TestimonialsSection from "@/components/locations/TestimonialsSection.server";
import { getLocationData } from "@/lib/getLocationData";
// import { getLocationFaqs } from "@/constants/locationFaq";
import { getTestimonialsByLocation } from "@/lib/getLocationData";
import OtherLocations from "@/components/locations/OtherLocations";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const locationData = await getLocationData(slug);

  if (!locationData) {
    return {
      title: "Online Therapy | Psyra",
      description:
        "Confidential online therapy and mental health support with Psyra.",
    };
  }

  return {
    title: locationData.meta?.title || locationData.hero?.title,
    description:
      locationData.meta?.description || locationData.hero?.description,

    alternates: {
      canonical: `https://psyra.in/locations/${slug}`,
    },

    openGraph: {
      title: locationData.meta?.title,
      description: locationData.meta?.description,
      type: "website",
      url: `https://psyra.in/locations/${slug}`,
    },
  };
}

export default async function OnlineMalayalamCounsellingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!slug) notFound();

  const locationData = await getLocationData(slug);

  if (!locationData) notFound();

  const testimonials = await getTestimonialsByLocation(slug);

  const faqs = locationData.faqs || [];

  return (
    <main className="min-h-screen bg-[#f8faf9] font-sans selection:bg-primary/10">
      <LocationHero
        title={locationData.hero.title}
        description={locationData.hero.description}
      />
      <LocationContextSection
        title={locationData.context.title}
        paragraphs={locationData.context.paragraphs}
      />
      <HowItWorks bgColor="bg-[#eef4f1]" />

      <MalayalamCounsellingSection
        title={locationData.counsellingSection.title}
        description={locationData.counsellingSection.description}
        steps={locationData.counsellingSection.steps}
        related={locationData.counsellingSection.related}
      />

      <TestimonialsSection
        testimonials={testimonials}
        countryName={locationData.countryName}
      />
      <section className="bg-[#eef4f1] py-16">
        <DynamicPsychologistCarousel />
      </section>

      <div className="bg-[#f8faf9] border-y border-[#1a3c34]/5">
        <ConcernHero />
      </div>

      <AssessmentCTA />
      <FinalCTA countryName={locationData.countryName} />
      <OtherLocations currentSlug={slug} />
      <LocationFaq faqs={faqs} />
    </main>
  );
}
