import Hero from "@/components/locations/Kochi/Hero";
import EmotionalConnection from "@/components/locations/Kochi/EmotionalConnection";
import Concerns from "@/components/locations/Kochi/Concerns";
import Services from "@/components/locations/Kochi/Services";
import WhyOnlineTherapy from "@/components/locations/Kochi/WhyOnlineTherapy";
import NativeLanguageBenefits from "@/components/locations/Kochi/NativeLanguageBenefits";
import HowItWorks from "@/components/locations/Kochi/HowItWorks";
import Testimonials from "@/components/locations/Kochi/Testimonials";
import FAQ from "@/components/locations/Kochi/FAQ";
import CTA from "@/components/locations/Kochi/CTA";

export const metadata = {
  title: "Online Malayalam Counselling in Kochi | Online Therapy in Kerala",

  description:
    "Get confidential online Malayalam counselling in Kochi with experienced psychologists. Online therapy support for anxiety, stress, relationships, depression, and emotional wellbeing.",

  keywords: [
    "online malayalam counselling kochi",
    "online therapy kerala",
    "psychologist in kochi",
    "malayalam psychologist online",
    "online counselling kerala",
    "therapist in kochi",
    "counselling in malayalam",
    "online psychologist kochi",
  ],
};

// FAQ SCHEMA
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is online Malayalam counselling in Kochi effective?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Online Malayalam counselling can be highly effective for anxiety, stress, depression, relationship concerns, emotional wellbeing, and personal challenges when guided by experienced psychologists.",
      },
    },
    {
      "@type": "Question",
      name: "Can I speak to a psychologist in Malayalam?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Psyra offers online counselling sessions in Malayalam to help individuals communicate emotions more comfortably and openly during therapy.",
      },
    },
    {
      "@type": "Question",
      name: "How do online counselling sessions work with Psyra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "After booking a session, individuals can attend confidential online video counselling sessions from the comfort of their home using a secure online platform.",
      },
    },
    {
      "@type": "Question",
      name: "Are online therapy sessions confidential?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All online counselling sessions are conducted privately and confidentially to provide a safe and supportive environment for emotional conversations.",
      },
    },
    {
      "@type": "Question",
      name: "Who can attend online counselling sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Individuals, couples, students, working professionals, and families across Kochi and Kerala can attend online Malayalam counselling sessions based on their emotional and mental health needs.",
      },
    },
    {
      "@type": "Question",
      name: "What issues are commonly addressed in online counselling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online counselling sessions commonly support anxiety, stress, overthinking, depression, relationship issues, family conflicts, emotional burnout, and self-esteem concerns.",
      },
    },
  ],
};

export default function KochiPage() {
  return (
    <main className="w-full overflow-hidden bg-white">
      <Hero />

      <EmotionalConnection />

      <Concerns />

      <Services />

      <WhyOnlineTherapy />

      <NativeLanguageBenefits />

      <HowItWorks />

      <Testimonials />

      <FAQ />

      <CTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  );
}
