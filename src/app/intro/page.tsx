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
    // setShowIntroModal(false);
    router.push("/how-is-mind");
  };

  return (
    <div className="bg-[#F7F8F2] pt-12">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl"
          initial={{ x: -200, y: -200 }}
          animate={{ x: 100, y: 100 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute w-96  bg-gradient-to-r from-teal-300/20 to-cyan-300/20 rounded-full blur-3xl bottom-0 right-0"
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

      {/* Main Content - Responsive two-column layout for desktop */}
      <main className="relative z-10 flex flex-col lg:flex-row items-center lg:justify-center px-4 py-12 gap-8 lg:gap-16">
        <motion.div
          className="hidden lg:flex flex-1 justify-center items-center"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow w-full max-w-md"
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-gradient-to-br p-2 from-teal-100 to-teal-50 rounded-lg">
              <img
                src="/Assesmentimage.jpg"
                alt="Illustration representing supportive mental health therapy"
                className="h-100 w-full rounded"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 space-y-6 lg:space-y-8 max-w-2xl lg:max-w-lg lg:pr-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Headline - mobile version with card, desktop without */}
          <motion.div
            className="lg:hidden bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow shimmer-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div
              onClick={() => (window.location.href = "/how-is-mind")}
              className="flex flex-col gap-4 cursor-pointer"
            >
              <div className="bg-gradient-to-br p-2 from-teal-100 to-teal-50 rounded-lg">
                <img
                  src="/Assesmentimage.jpg"
                  alt="Illustration representing supportive mental health therapy"
                  className="h-120 w-full"
                  loading="lazy"
                />
              </div>

              <p className="font-bold text-teal-600 text-[18px] md:text-2xl leading-tight">
                A Quick Check on your mind
              </p>

              <p className="text-black text-[12px] md:text-base leading-tight">
                Know your mental health status quickly with our
                scientifically-backed assessment. Get personalized insights in
                just 5 minutes.{" "}
              </p>
            </div>
          </motion.div>

          {/* Desktop headline - text only */}
          <motion.div
            className="hidden lg:flex flex-col gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <p className="font-bold text-teal-600 text-4xl leading-tight">
              A Quick Check on your mind
            </p>

            <p className="text-gray-700 text-lg leading-relaxed">
              Know your mental health status quickly with our
              scientifically-backed assessment. Get personalized insights in
              just 5 minutes.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 lg:flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {/* Start Assessment — NOW the Primary Button */}
            <Link href="/how-is-mind" className="w-full">
              <motion.button
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Try now</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            {/* Learn More — NOW the Outline Button */}
            <motion.button
              onClick={() => setShowIntroModal(true)}
              className="flex items-center justify-center gap-2 px-8 py-4 border-1 border-emerald-500 text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all w-full"
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
