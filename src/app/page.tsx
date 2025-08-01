"use client";
import AboutUs from "@/components/AboutUs";
// import Event from "@/components/Event";
import OurSpecials from "@/components/OurSpecials";
import GetInTouch from "@/components/GetInTouch";
import Faq from "@/components/Faq";
import PsychologistCarousel from "@/components/Psychologist/SimpleCarousel/psychologist-carousel";
// import { ChevronDown } from "lucide-react"

import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Why Psyra Section */}
      <AboutUs />

      {/* <Carousel3DMinimal /> */}

      <PsychologistCarousel />

      {/* <CarouselCardFlip /> */}
      {/* Meet New Faces */}
      {/* <Event /> */}
      {/* <EventGallery /> */}

      {/* Our Specialties */}
      <OurSpecials />

      {/* CTA Section */}

      {/* Contact Form */}
      <GetInTouch />

      {/* FAQ Section */}
      <Faq />

      {/* Footer */}
    </main>
  );
}
