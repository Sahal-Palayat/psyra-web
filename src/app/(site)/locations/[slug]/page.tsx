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

export const getLocationFaqs = (countryName: string, displayName: string) => [
  {
    question: `Can I get online Malayalam counselling anywhere in ${countryName}?`,
    answer: `Yes. Psyra offers online Malayalam counselling services across ${displayName}, allowing you to attend sessions conveniently from anywhere in ${countryName}.`,
  },
  {
    question: `Are the psychologists familiar with the experiences of Malayalis living in ${countryName}?`,
    answer: `Yes. Our Malayalam-speaking psychologists understand the emotional and cultural challenges faced by Malayalis living in ${countryName}.`,
  },
  // {
  //   question: `Is online Malayalam counselling legal in ${countryName}?`,
  //   answer: `Yes. Online counselling services are permitted in ${countryName}, and all sessions are conducted ethically by qualified professionals.`,
  // },
  {
    question: `Are online counselling sessions private and confidential in ${countryName}?`,
    answer: `Absolutely. All sessions are encrypted, secure, and strictly confidential.`,
  },
  // {
  //   question: `Can teenagers in ${countryName} attend Malayalam counselling?`,
  //   answer: `Yes. Teenagers aged 13–17 can attend therapy with guardian consent.`,
  // },
  {
    question: `What issues do Malayalis in ${countryName} commonly seek counselling for?`,
    answer: `Common concerns include work stress, anxiety, relationship issues, homesickness, parenting challenges, academic stress, and emotional adjustment.`,
  },
  {
    question: `Can I attend counselling if I work night shifts in ${countryName}?`,
    answer: `Yes. Flexible appointment timings are available to suit different work schedules.`,
  },
  {
    question: `Do I need local ID or insurance for counselling in ${countryName}?`,
    answer: `No. You can book sessions directly without local ID or insurance.`,
  },
  // {
  //   question: `Can I attend counselling if my family lives in India while I live in ${countryName}?`,
  //   answer: `Yes. Many people living abroad use counselling to cope with separation and migration-related stress.`,
  // },
  {
    question: `How do I book Malayalam counselling in ${countryName}?`,
    answer: `You can book through our website, select a Malayalam-speaking psychologist, and begin therapy online.`,
  },
];


function extractCountryFromSlug(slug: string): string | null {
  if (!slug) return null;

  const match = slug.match(/-in-([a-zA-Z-]+)$/);
  return match ? match[1] : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
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

export default async function OnlineMalayalamCounsellingPage({
  params,
}: PageProps) {
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
  const faqs = getLocationFaqs(
  locationData.countryName,
  locationData.displayName
);

  return (
    <main className="min-h-screen bg-[#f8faf9] font-sans selection:bg-primary/10">
      {/* HERO SECTION  */}
      <section className="relative pt-36 md:pt-40 pb-28 px-6 overflow-hidden bg-linear-to-b from-[#43C6AC]/20 via-[#43C6AC]/10 to-transparent text-[#1a3c34]">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern.png')] mix-blend-multiply" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div
            className="inline-block px-5 py-2 mb-10 rounded-full 
              border border-[#43C6AC]/40 
              bg-[#43C6AC]/10 
              backdrop-blur-sm"
          >
            <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] font-bold text-[#1a3c34]">
              Online Therapy for{" "}
              <span className="text-[#43C6AC]">{locationData.countryName}</span>{" "}
              Residents
            </p>
          </div>

          <h1 className="text-6xl md:text-[8.5rem] font-serif leading-[0.9] tracking-tighter mb-14 text-balance">
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
                href="/services"
                className="group flex items-center gap-4 px-8 py-4 bg-[#43C6AC] text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#1a3c34] transition-all duration-300 shadow-xl shadow-[#43C6AC]/20"
              >
                Get Therapy
                <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* UAE CONTEXT */}
      <section className="px-6 py-16 md:py-24 bg-linear-to-r from-[#eef4f1] to-[#e4ede8]">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10 md:gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6 text-[#00989D]">
                Online therapy support for people living in{" "}
                {locationData.countryName}
              </h2>

              <div className="space-y-5 text-base md:text-lg text-[#1a3c34]/70 leading-relaxed">
                <p>
                  Living in {locationData.countryName} can be challenging. Work
                  pressure, distance from family, and adjusting to a new
                  lifestyle can affect mental health over time.
                </p>

                <p>
                  Psyra provides online therapy designed for people living in {locationData.countryName}, making mental health support
                  accessible, confidential, and easy to fit into daily life.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 grid grid-cols-1 gap-8">
              {[
                {
                  icon: ShieldCheck,
                  label: "Confidential Therapy",
                  desc: "Private online sessions",
                },
                {
                  icon: Globe,
                  label: `${locationData.countryName}-Focused`,
                  desc: "Support that understands your lifestyle",
                },
                {
                  icon: Clock,
                  label: "Flexible Scheduling",
                  desc: "Therapy that fits your time",
                },
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

      <section className="px-6 py-10 bg-[#f8faf9]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-sm md:text-base text-[#1a3c34]/70">
            Not sure where to begin? A quick assessment can help you understand
            your current mental wellbeing.
          </p>

          <Link
            href="/assessments"
            className="text-xs uppercase tracking-widest font-bold text-[#00989D] border-b border-[#00989D]/30 pb-1 hover:border-[#00989D] transition"
          >
            Take a moment for yourself
          </Link>
        </div>
      </section>

      <DynamicPsychologistCarousel />

      <section className="px-6 py-16 md:py-24 bg-[#eef4f1]">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl md:text-4xl font-serif text-[#1a3c34]">
            Get Started Today - Take Care of Your Mental Health
          </h2>

          <p className="text-base md:text-lg text-[#1a3c34]/70 leading-relaxed">
            Whether you’re living in major cities or smaller communities across{" "}
            {locationData.countryName}, Psyra offers online Malayalam
            counselling you can access from the comfort of your home. Taking the
            first step can help you build emotional clarity, resilience, and a
            healthier relationship with yourself.
          </p>

          <div className="pt-4 md:pt-6">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#43C6AC] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#1a3c34] transition"
            >
              Start Online Therapy
            </Link>
          </div>
        </div>
      </section>

      <LocationFaq faqs={faqs} />
    </main>
  );
}
