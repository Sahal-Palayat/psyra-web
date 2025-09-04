"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import MentalHealthLoader from "@/components/lazy/mental-health-loader";
import WelcomeAnimationOverlay from "@/components/lazy/welcome-animation-overlay";
import Concerns from "@/components/Concerns";
import { CarouselStats } from "@/components/Psychologist/SimpleCarousel/carousel-stats";
import { OnamOfferModal } from "@/components/OnamOffer/onam-offer-modal";
import { useEffect, useState } from "react";
// import BlogSwiper from "@/components/Blog/blog-swiper";

// Dynamically import components with the themed loader
const DynamicPsychologistCarousel = dynamic(
  () =>
    import("@/components/Psychologist/SimpleCarousel/psychologist-carousel"),
  {
    loading: () => <MentalHealthLoader />,
  }
);

// const DynamicOurSpecials = dynamic(() => import("@/components/OurSpecials"), {
//   loading: () => <MentalHealthLoader />,
// });

// const DynamicGetInTouch = dynamic(() => import("@/components/GetInTouch"), {
//   loading: () => <MentalHealthLoader />,
// });

const DynamicFaq = dynamic(() => import("@/components/Faq"), {
  loading: () => <MentalHealthLoader />,
});

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <OnamOfferModal isOpen={showModal} onClose={() => setShowModal(false)} />
      {/* Welcome Animation Overlay - This will appear only on the first visit */}
      <WelcomeAnimationOverlay />

      {/* Hero Section */}
      <Hero />

      {/* Why Psyra Section */}
      <AboutUs />

      {/* Psychologist Carousel with themed loading */}
      <DynamicPsychologistCarousel />

      <CarouselStats />
      <Concerns />

      {/* <BlogSwiper /> */}
      {/* Our Specialties with themed loading */}
      {/* <DynamicOurSpecials /> */}

      {/* Contact Form with themed loading */}
      {/* <DynamicGetInTouch /> */}

      {/* FAQ Section with themed loading */}
      <DynamicFaq />
    </main>
  );
}
