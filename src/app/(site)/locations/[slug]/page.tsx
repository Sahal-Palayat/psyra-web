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
import {HowItWorks} from "@/components/HowTherapyWorks";
import TestimonialsSection from "@/components/locations/TestimonialsSection.server";



import { getLocationData } from "@/lib/getLocationData";
import { getLocationFaqs } from "@/constants/locationFaq";
import { getTestimonialsByLocation } from "@/lib/getLocationData";

function extractCountryFromSlug(slug: string): string | null {
  const match = slug.match(/-in-([a-zA-Z-]+)$/);
  return match ? match[1] : null;
}


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const countrySlug = extractCountryFromSlug(slug);
  

  if (!countrySlug) {
    return {
      title: "Online Therapy | Psyra",
      description:
        "Confidential online therapy and mental health support with Psyra.",
    };
  }

  const locationData = await getLocationData(countrySlug);

  if (!locationData) {
    return {
      title: "Online Therapy | Psyra",
      description:
        "Confidential online therapy and mental health support with Psyra.",
    };
  }

  return {
    title: `Online Malayalam Counselling in ${locationData.countryName} | Psyra`,
    description: `Professional online Malayalam counselling for residents of ${locationData.countryName}. Private, secure, and culturally sensitive mental health support.`,
    openGraph: {
      title: `Online Malayalam Counselling in ${locationData.countryName} | Psyra`,
      description: `Confidential online counselling services for Malayalam-speaking residents of ${locationData.countryName}.`,
      type: "website",
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

  const countrySlug = extractCountryFromSlug(slug);

  if (!countrySlug) notFound();

  const locationData = await getLocationData(countrySlug);

  if (!locationData) notFound();
  const testimonials = await getTestimonialsByLocation(countrySlug);


  const faqs = getLocationFaqs(
    locationData.countryName,
    locationData.displayName
  );

  return (
    <main className="min-h-screen bg-[#f8faf9] font-sans selection:bg-primary/10">
      <LocationHero countryName={locationData.countryName} />
      <LocationContextSection countryName={locationData.countryName} />
      <HowItWorks bgColor="bg-[#eef4f1]" />                                

      <MalayalamCounsellingSection
        countryName={locationData.countryName}
        displayName={locationData.displayName}
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

      <LocationFaq faqs={faqs} />
    </main>
  );
}
