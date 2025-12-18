"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import EventModal from "./EventModal";
import HeroBox from "./Hero/HeroBox";

const HeroDesktop = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventModal, setEventModal] = useState(false);

  useEffect(() => {
    // const eventQrParam = searchParams.get("eventQr");
    // if (eventQrParam === "true") {
    //   setIsModalOpen(true);
    // }
    const eventQrparam = new URLSearchParams(window.location.search);
    const ref = eventQrparam.get("eventQr");
    if (ref === "true") {
      setEventModal(true);
    }
  }, []);

  const languages = [
    { text: "Psyra", lang: "English", size: "text-[40px]" },
    { text: "साइरा", lang: "Hindi", size: "text-[36px]" },
    { text: "സൈറ", lang: "Malayalam", size: "text-[30px]" },
    { text: "ಸೈರಾ", lang: "Kannada", size: "text-[34px]" },
    { text: "சைரா", lang: "Tamil", size: "text-[36px]" },
    { text: "सायरा", lang: "Marathi", size: "text-[36px]" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % languages.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative bg-teal-600 mb-10 text-white flex items-center">
        {/* Background Image Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full min-h-[500px]"
          id="home"
        >
          {/* <Image
            src={isMobile ? MobileHero : ImageS3} // Conditionally show images
            alt="Background"
            fill
            className="object-cover"
            priority
          /> */}
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto px-4 py-24 md:py-24 relative z-10 text-center"
        >
          <div className="max-w-3xl mx-auto mb-8 mt-6 text-center">
            <motion.p
              className="font-bold text-[#9EE0D6] text-[40px] leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              You are not alone,{" "}
              <span className="text-white inline-block min-w-[120px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className={`inline-block ${languages[currentIndex].size}`}
                  >
                    {languages[currentIndex].text}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              here for you
            </motion.p>
          </div>

          {/* Main New Year CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mx-auto mb-8 w-full max-w-6xl px-4 md:px-0"
          >
            <div className="rounded-2xl bg-white/95 text-teal-900 shadow-xl px-5 md:px-8 py-4 md:py-6 border border-white/60 backdrop-blur-sm md:flex md:items-center md:gap-8 lg:gap-10">
              {/* Left: Illustration / Image */}
              <div className="hidden md:flex md:w-2/5 items-center justify-center">
                <div className="relative w-full max-w-sm aspect-[16/10] rounded-2xl bg-gradient-to-br from-teal-50 via-white to-emerald-50 border border-teal-100 shadow-inner overflow-hidden">
                  <img
                    src="/new_year_campaign.jpg"
                    alt="Celebrate your New Year mind reset success"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Right: Copy + CTA */}
              <div className="w-full md:w-3/5 text-left mt-4 md:mt-0 flex flex-col justify-center">
                {/* New Year Program Label */}
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="
    inline-flex items-center gap-2
    px-2.5 py-[2px]            /* reduced padding */
    w-fit whitespace-nowrap    /* force content width */
    rounded-full
    bg-gradient-to-r from-teal-50 via-white to-emerald-50
    text-teal-800
    border border-teal-200/80
    text-[11px] tracking-[0.12em] uppercase
    mb-3 shadow-sm
  "
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.25)]" />
                  New Year Mind Reset Program
                </motion.span>

                <p className="text-sm md:text-base text-teal-900/90 mb-3 max-w-xl">
                  Give your mind a gentle reset for the year ahead. Release what
                  feels heavy and make space for calmer, clearer days.
                </p>
                <p className="text-xs md:text-sm text-teal-800/80 mb-4 max-w-xl">
                  A guided New Year journey with therapists to help you realign
                  your thoughts, routines, and emotional energy.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => {
                      window.location.href = "/new-year-reset";
                    }}
                    className="px-6 md:px-8 py-2.5 md:py-3 rounded-full bg-teal-600/85 text-white font-semibold text-sm md:text-base shadow-[0_10px_30px_rgba(0,0,0,0.25)] border border-white/60 backdrop-blur-md hover:bg-teal-500/95 hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-all"
                  >
                    Start Your New Year Reset
                  </motion.button>
                  <button
                    onClick={() => {
                      window.location.href = "/services";
                    }}
                    className="hidden md:inline-flex px-4 py-2 rounded-full border border-teal-200 text-teal-800 text-sm bg-white/60 hover:bg-white/90 transition-all"
                  >
                    Explore therapy options
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <HeroBox />
        </motion.div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type={"getStarted"}
        />
        <EventModal isOpen={eventModal} onClose={() => setEventModal(false)} />
      </section>
    </>
  );
};

export default HeroDesktop;
