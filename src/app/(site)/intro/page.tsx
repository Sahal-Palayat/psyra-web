"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IntroModal } from "@/components/HowIsMyMind/intro-modal";
import { useRouter } from "next/navigation";

export default function Home() {
  const [showIntroModal, setShowIntroModal] = useState(false);
  const router = useRouter();

  const handleStartAssessment = () => {
    router.push("/how-is-mind");
  };

  return (
    <div className="bg-gradient-to-b from-[#F7F8F2] to-white min-h-screen pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#00989D]/10 to-[#005657]/10 rounded-full blur-3xl"
          initial={{ x: -200, y: -200 }}
          animate={{ x: 100, y: 100 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-[#005657]/10 to-[#00989D]/10 rounded-full blur-3xl bottom-0 right-0"
          initial={{ x: 200, y: 200 }}
          animate={{ x: -100, y: -100 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      {/* Intro Modal */}
      <IntroModal
        isOpen={showIntroModal}
        onClose={() => setShowIntroModal(false)}
        onStart={handleStartAssessment}
      />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 py-8 lg:py-12 gap-6 lg:gap-12 max-w-7xl mx-auto">
        
        {/* Desktop Video Card */}
        <motion.div
          className="hidden lg:flex flex-1 justify-center items-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="relative group w-full max-w-md"
            whileHover={{ scale: 1.02 }}
          >
            {/* Decorative border glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00989D] to-[#005657] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            
            {/* Card content */}
            <div className="relative bg-white rounded-2xl p-4 shadow-xl">
              <div className="bg-gradient-to-br from-[#00989D]/10 via-[#005657]/5 to-transparent p-3 rounded-xl">
                <div className="relative w-full overflow-hidden rounded-lg aspect-[4/5] bg-gradient-to-br from-[#005657] to-[#00989D]">
                  <video
                    src="/assess.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005657]/20 to-transparent rounded-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex-1 space-y-6 max-w-2xl lg:max-w-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          {/* Mobile Video Card */}
          <motion.div
            className="lg:hidden bg-white rounded-2xl p-4 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div
              onClick={() => (window.location.href = "/how-is-mind")}
              className="flex flex-col gap-4 cursor-pointer"
            >
              <div className="bg-gradient-to-br from-[#00989D]/10 via-[#005657]/5 to-transparent p-2 rounded-xl">
                <div className="relative w-full overflow-hidden rounded-lg aspect-[4/5] bg-gradient-to-br from-[#005657] to-[#00989D]">
                  <video
                    src="/assess.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#005657]/20 to-transparent rounded-lg"></div>
                </div>
              </div>

              <p className="font-bold text-[#005657] text-[18px] md:text-2xl leading-tight">
                Take Your Free Assessment
              </p>

              <p className="text-gray-600 text-[12px] md:text-base leading-tight">
                Hey, take our quick assessment and get personalized insights about your mental well-being in just 3 minutes.
              </p>
            </div>
          </motion.div>

          {/* Desktop Headline */}
          <motion.div
            className="hidden lg:flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-bold text-[#005657] text-4xl leading-tight">
              Take Your Free Assessment
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Hey, take our quick assessment and get personalized insights about your mental well-being in just 3 minutes.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row lg:flex-col gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Start Assessment */}
            <Link href="/how-is-mind" className="w-full">
              <motion.button
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00989D] to-[#005657] text-white rounded-xl font-semibold shadow-lg shadow-[#00989D]/30 hover:shadow-xl hover:shadow-[#00989D]/40 transition-all w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            {/* Learn More */}
            <motion.button
              onClick={() => setShowIntroModal(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#00989D] text-[#005657] rounded-xl font-semibold hover:bg-[#00989D]/5 transition-all w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}