import HeroSection from "@/components/landing/HeroSection"
import IntroductionSection from "@/components/landing/IntroductionSection"
import SignsSection from "@/components/landing/SignsSection"
import SeekHelpSection from "@/components/landing/SeekHelpSection"
import IssuesSection from "@/components/landing/IssuesSection"
import TherapyBenefitsSection from "@/components/landing/TherapyBenefitsSection"
import WhyPsyraSection from "@/components/landing/WhyPsyraSection"
import HowItWorksSection from "@/components/landing/HowItWorksSection"
import DynamicPsychologistCarousel from "@/components/Psychologist/SimpleCarousel/psychologist-carousel";
import PricingSection from "@/components/landing/PricingSection"
import TestimonialsSection from "@/components/landing/TestimonialsSection"
import FAQSection from "@/components/landing/FAQSection"
import CTASection from "@/components/landing/CTASection"

export default function CouplesCounsellingPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <IntroductionSection />
      <SignsSection />
      <SeekHelpSection />
      <IssuesSection />
      <TherapyBenefitsSection />
      <WhyPsyraSection />
      <HowItWorksSection />
      <section className="bg-[#F7F8F2] pt-4 pb-0">
        <DynamicPsychologistCarousel />
      </section>
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </main>
  )
}