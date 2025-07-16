"use client";
import AboutUs from "@/components/AboutUs";
// import Event from "@/components/Event";
import OurSpecials from "@/components/OurSpecials";
import GetInTouch from "@/components/GetInTouch";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Why Psyra Section */}
      <AboutUs />

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
