"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Individual from "../../../public/Couple Packages 3 (2).jpg";

// import { PsychologistModal } from "./Psychologist/Modal/PsychologistModal"
import Image from "next/image";
import { SectionHeader } from "../SectionTitle";

interface BlogPost {
  id: number;
  title: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Anxiety: A Comprehensive Guide",
    image: "../public/Single Cover.jpg",
  },
  {
    id: 2,
    title: "The Power of Mindfulness in Daily Life",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Building Healthy Relationships",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Coping with Depression: Strategies That Work",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Stress Management Techniques for Professionals",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    title: "The Science of Sleep and Mental Health",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Cognitive Behavioral Therapy Explained",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Emotional Intelligence in the Workplace",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export default function BlogSwiper() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BlogPost>({
    id: 0,
    title: "Emotional Intelligence in the Workplace",
    image: "/placeholder.svg?height=200&width=300",
  });

  useEffect(() => {
    const initCarousel = () => {
      setIsLoaded(true);
      if (swiperRef.current) {
        swiperRef.current.autoplay.start();
        swiperRef.current.update();
      }
    };
    const timer = setTimeout(initCarousel, 200);
    return () => clearTimeout(timer);
  }, [blogPosts]);

  const handleBookNow = useCallback((post: BlogPost) => {
    setIsModalOpen(true);
    setSelectedPost(post);
  }, []);

  return (
    <div className="relative px-6 mt-14">
      <div className="text-center mb-12">
        <SectionHeader>Our Blogs</SectionHeader>
      </div>
      <div
        className={`max-w-260 mx-auto relative transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
            stopOnLastSlide: false,
          }}
          speed={600}
          watchSlidesProgress={true}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 110,
            modifier: 3,
            slideShadows: false,
          }}
          pagination={{
            el: ".carousel-pagination",
            clickable: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTimeout(() => {
              swiper.autoplay.start();
              swiper.update();
            }, 100);
          }}
          className="bg-white relative"
        >
          {blogPosts?.map((post: BlogPost) => (
            <SwiperSlide key={post?.id} className="">
              <div
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
              >
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  className="rounded-2xl bg-[#e4f0ef] overflow-hidden shadow-md flex flex-col h-[320px]"
                >
                  {/* Top Image */}
                  <div className="w-full h-[160px] relative flex-shrink-0">
                    <Image
                      src={Individual}
                      alt={`Feature ${post?.id}`}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-t-2xl"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 text-[#005657] flex flex-col flex-grow">
                    <h2 className="font-bold text-[20px] leading-tight mb-2 h-[48px] overflow-hidden">
                      <span className="line-clamp-2">{post?.title}</span>
                    </h2>

                    <div className="flex-grow">
                      {" "}
                      <h4 className="font-bold text-[14px] leading-tight mb-2 h-[48px] overflow-hidden">
                        <span className="line-clamp-2">{post?.title}</span>
                      </h4>
                    </div>

                    {/* This wrapper pushes button to bottom */}
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Arrow Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
          className="absolute rounded-full left-0 md:-left-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 text-teal-600 hover:text-teal-700 z-20 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
          className="absolute rounded-full right-0 md:-right-16 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-2 border-gray-200 text-teal-600 hover:text-teal-700 z-20 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      {/* Pagination */}
      <div className="carousel-pagination flex justify-center space-x-3 mt-20"></div>
      {/* <PsychologistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={selectedPost} /> */}
    </div>
  );
}
