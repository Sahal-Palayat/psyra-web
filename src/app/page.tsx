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
      <WhatsAppTestimonials />
      {/* <TestimonialsSlider /> */}

{/* Blog Section */}
<section className="px-6 py-12">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-3xl font-bold text-[#005657]">Latest Articles</h2>

    <Link
      href="/blogs"
      className="text-[#005657] font-semibold underline hover:opacity-80 transition"
    >
      View All →
    </Link>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogs.slice(0, 3).map((blog) => (
      <BlogCard key={blog.id} blog={blog} />
    ))}
  </div>
</section>



      {/* FAQ Section with themed loading */}
      <DynamicFaq />
      <WhatsAppChat />
    </main>
  );
}
