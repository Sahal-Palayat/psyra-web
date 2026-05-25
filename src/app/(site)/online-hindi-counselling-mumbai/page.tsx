import Benefits from "./components/benefits";
import EmotionalConnection from "./components/emotional-connection";
import HindiConcerns from "./components/hindi-concerns";
import HindiHero from "./components/hindi-hero";
import HindiServices from "./components/hindi-services";
import PsychologistCarouselHindi from "./components/psychologist-carouset-hindi";
import WhyPsyra from "./components/why_psyra";
import DynamicPsychologistCarousel from "@/components/Psychologist/SimpleCarousel/psychologist-carousel";
import Working from "./components/working";
import Testimonials from "./components/testimonilals";
import HindiFaq from "./components/hindi-faq";
import HindiCta from "./components/hindi-cta";
import { Metadata } from "next";
export const metadata = {
  title:
    "Online Hindi Counselling in Mumbai | Online Therapy with Psyra",

  description:
    "Get confidential online Hindi counselling in Mumbai with experienced psychologists. Online therapy support for anxiety, stress, relationships, depression, and emotional wellbeing.",

  alternates: {
    canonical:
      "https://psyra.in/online-hindi-counselling-mumbai",
  },
};

export default function HindiCounselling(){
    return (
        <>
            <HindiHero/>
            <EmotionalConnection/>
            <HindiConcerns/>
            <HindiServices/>
            <WhyPsyra/>
            <PsychologistCarouselHindi/>
            <Benefits/>
            <Working/>
            <Testimonials/>
            <HindiFaq/>
            <HindiCta/>
        </>
    )
}