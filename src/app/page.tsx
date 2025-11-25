"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
// import AboutUs from "@/components/AboutUs";
import MentalHealthLoader from "@/components/lazy/mental-health-loader";
// import WelcomeAnimationOverlay from "@/components/lazy/welcome-animation-overlay";
import Concerns from "@/components/Concerns";
import { CarouselStats } from "@/components/Psychologist/SimpleCarousel/carousel-stats";
// import { TestimonialsSlider } from "@/components/Testimonals";
import { WhatsAppTestimonials } from "@/components/WhatsAppTestimonals";
import { WhatsAppChat } from "@/components/WhatsappChat/whatsapp-chat";
import { CommunityEvents } from "@/components/EventSection";
// import BlogSwiper from "@/components/Blog/blog-swiper";
import BlogCard from "@/components/blogs/blogCard";
import { blogs } from "@/constants/blog";
import Link from "next/link";

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
  return (
    <main className="min-h-screen bg-[#F7F8F2]">
      {/* Welcome Animation Overlay - This will appear only on the first visit */}
      {/* <WelcomeAnimationOverlay /> */}
      {/* <OnamOfferModal isOpen={showModal} onClose={() => setShowModal(false)} /> */}
      {/* Hero Section */}
      <Hero />

      {/* Why Psyra Section */}
      {/* <AboutUs /> */}

      {/* Psychologist Carousel with themed loading */}
      <CarouselStats />
      <Concerns />
      <DynamicPsychologistCarousel />

      {/* <BlogSwiper /> */}
      {/* Our Specialties with themed loading */}
      {/* <DynamicOurSpecials /> */}

      {/* Contact Form with themed loading */}
      {/* <DynamicGetInTouch /> */}
      <CommunityEvents />

       {/* Blog Section */}
      <section className="px-6 py-14 bg-white">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#005657] text-center mb-3">
          Latest Articles
        </h2>

        {/* Subheading */}
        <p className="text-center text-[#4A4A4A] text-sm md:text-base max-w-2xl mx-auto mb-10">
          Gentle guidance and expert insights on therapy, healing, and emotional
          wellbeing.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {/* view all link */}
        <div className="text-center">
          <Link
            href="/blogs"
            className="text-[#00989D] font-semibold hover:text-[#005657] underline transition text-lg"
          >
            View All Articles
          </Link>
        </div>
      </section>

      <WhatsAppTestimonials />
      {/* <TestimonialsSlider /> */}

      {/* FAQ Section with themed loading */}
      <DynamicFaq />
      <WhatsAppChat />
    </main>
  );
}
