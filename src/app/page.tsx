"use client";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
// import Event from "@/components/Event";
import OurSpecials from "@/components/OurSpecials";
import GetInTouch from "@/components/GetInTouch";
import Faq from "@/components/Faq";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}

      <Hero />
      <Services />

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
