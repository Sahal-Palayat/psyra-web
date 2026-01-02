import { notFound } from "next/navigation";
import { Metadata } from "next";

import Link from "next/link";
import { MoveRight, ShieldCheck, Globe, Clock } from "lucide-react";


import DynamicPsychologistCarousel from "@/components/Psychologist/SimpleCarousel/psychologist-carousel";
// import UaeFaq from "@/components/locations/uae/LocationFaq";
import ConcernHero from "@/components/locations/ConcernHero";
import MalayalamCounsellingSection from "@/components/locations/MalayalamCounsellingSection";
import LocationFaq from "@/components/locations/LocationFaq";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}


const faqs = [
  {
    question: "What is Psyra?",
    answer:
      "Psyra provides counseling services in Malayalam and Hindi through a safe and private online platform.",
  },
  {
    question: "What makes Psyra special?",
    answer:
      "Psyra combines professional care with cultural understanding, accessibility, and a client-centered approach.",
  },
  {
    question: "Are the counseling sessions confidential?",
    answer:
      "Yes. Psyra maintains complete confidentiality and privacy in all counseling sessions.",
  },
  {
    question: "How do I schedule a session?",
    answer:
      "You can book online, select a counselor, and choose a time that works best for you.",
  },
];




function extractCountryFromSlug(slug: string): string | null {
  if (!slug) return null;

  const match = slug.match(/-in-([a-zA-Z-]+)$/);
  return match ? match[1] : null;
}


export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }>}
): Promise<Metadata> {
  try {
    const { slug } = await params;
    const countrySlug = extractCountryFromSlug(slug);

    

    if (!countrySlug) {
      return {
        title: "Online Therapy | Psyra",
        description:
          "Confidential online therapy and mental health support with Psyra.",
      };
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/locations/${countrySlug}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      return {
        title: "Online Therapy | Psyra",
        description:
          "Confidential online therapy and mental health support with Psyra.",
      };
    }

    const data = await res.json();

    return {
  title: `Online Malayalam Counselling in ${data.countryName} | Psyra`,
  description: `Professional online Malayalam counselling for residents of ${data.countryName}. Private, secure, and culturally sensitive mental health support.`,
  openGraph: {
    title: `Online Malayalam Counselling in ${data.countryName} | Psyra`,
    description: `Confidential online counselling services for Malayalam-speaking residents of ${data.countryName}.`,
    type: "website",
  },
};
  } catch {
    return {
      title: "Online Therapy | Psyra",
      description:
        "Confidential online therapy and mental health support with Psyra.",
    };
  }
}



export default async function OnlineMalayalamCounsellingPage({ params }: PageProps) {
 
   const { slug } = await params;
  if (!slug) notFound();

const countrySlug = extractCountryFromSlug(slug);
if (!countrySlug) notFound();


    const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/locations/${countrySlug}`,
    { cache: "no-store" }
  );

  if (!res.ok) notFound();

  const locationData = await res.json();
  return (
    <main className="min-h-screen bg-[#f8faf9] font-sans selection:bg-primary/10">
      {/* HERO SECTION  */}
      <section className="relative pt-60 pb-28 px-6 overflow-hidden bg-linear-to-b from-[#43C6AC]/20 via-[#43C6AC]/10 to-transparent text-[#1a3c34]">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] mix-blend-multiply" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-[#43C6AC]/30 bg-white/50 backdrop-blur-sm">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#1a3c34]/80">
              Online Therapy for {locationData.countryName} Residents
            </p>
          </div>

          <h1 className="text-7xl md:text-[11rem] font-serif leading-[0.85] tracking-tighter mb-16 text-balance">
            Wellness meets <br />
            <span className="italic text-[#43C6AC]">purposeful</span> care.
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl mx-auto">
            <div className="flex-1 text-center md:text-left space-y-4">
              <p className="text-xl leading-relaxed text-[#1a3c34]/80 text-pretty">
                Thoughtful, confidential mental health support designed for
                people navigating life in the {locationData.countryName}.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-6">
              <Link
                href="/assessments"
                className="group flex items-center gap-4 px-8 py-4 bg-[#43C6AC] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#1a3c34] transition-all duration-300 shadow-xl shadow-[#43C6AC]/20"
              >
                Start Assessment
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UAE CONTEXT */}
      <section className="px-6 py-24 bg-linear-to-r from-[#eef4f1] to-[#e4ede8]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-serif leading-tight mb-8 text-[#00989D]">
                Supporting the <br /> modern expat journey.
              </h2>
              <div className="space-y-6 text-lg text-[#1a3c34]/70 leading-relaxed">
                <p>
                  Life in the {locationData.countryName} often comes with fast-paced work environments,
                  high expectations, and long periods away from familiar support
                  systems - all of which can quietly affect emotional wellbeing.
                </p>

                <p>
                  Psyra offers online therapy tailored for the {locationData.countryName} lifestyle,
                  making professional support accessible, private, and flexible
                  - without the need for travel.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 grid grid-cols-1 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  label: "Confidential",
                  desc: "Private & secure",
                },
                { icon: Globe, label: "UAE-Focused", desc: "Cultural nuance" },
                { icon: Clock, label: "Flexible", desc: "Your schedule" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
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

      <MalayalamCounsellingSection
  countryName={locationData.countryName}
  displayName={locationData.displayName}
/>


      <div className="bg-[#f8faf9] border-y border-[#1a3c34]/5">
        <ConcernHero />
      </div>

      <DynamicPsychologistCarousel />

      <section className="px-6 py-24 bg-[#eef4f1]">
  <div className="max-w-4xl mx-auto text-center space-y-8">
    <h2 className="text-3xl md:text-4xl font-serif text-[#1a3c34]">
      Get Started Today - Take Care of Your Mental Health
    </h2>

    <p className="text-lg text-[#1a3c34]/70 leading-relaxed">
      Whether you’re in Dubai, Abu Dhabi, Sharjah, or anywhere in the UAE, Psyra brings
      professional online counseling in Malayalam to the comfort of your home.
      You don’t have to wait - taking the first step can help you build emotional clarity,
      resilience, and a healthier relationship with yourself.
    </p>

    <div className="pt-6">
      <Link
        href="/assessments"
        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#43C6AC] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#1a3c34] transition"
      >
        Take a moment for yourself
      </Link>
    </div>
  </div>
</section>


      <LocationFaq faqs={faqs} />
    </main>
  );
}
