"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageS3 from "../../public/Web Site A (2).jpg"; // Desktop Image
import MobileHero from "../../public/HERO-hand.webp"; // Mobile Image
import Modal from "./Modal";
import EventModal from "./EventModal";
import Services from "./Services";

const HeroMob = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size on mount & window resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
    { text: "Psyra", lang: "English", size: "text-[32px]" },
    { text: "साइरा", lang: "Hindi", size: "text-[32px]" },
    { text: "സൈറ", lang: "Malayalam", size: "text-[30px]" },
    { text: "ಸೈರಾ", lang: "Kannada", size: "text-[30px]" },
    { text: "சைரா", lang: "Tamil", size: "text-[30px]" },
    { text: "सायरा", lang: "Marathi", size: "text-[30px]" },
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
      <section className="mb-10 relative bg-teal-600 text-white">
        {/* Background Image Animation */}
        <div className="px-2 pb-10 pt-24">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="container relative z-10 text-left"
          >
            <motion.p
              className="max-w-[314px] mx-auto font-bold text-[#9EE0D6] text-[32px] md:text-2xl leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              You are not alone,
              <br />
              <span className="text-white inline-block">
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
                    className={`${languages[currentIndex].size}`}
                  >
                    {languages[currentIndex].text}
                  </motion.span>
                </AnimatePresence>
              </span>{" "}
              here for you
            </motion.p>
          </motion.div>
          <div className="mt-8 flex justify-center">
            <button
              className="bg-white px-6 py-2 text-black text-[12px] font-bold rounded-[50px] border border-gray-300 hover:bg-gray-100 transition"
              // onClick={() => handleWhatsAppRedirect(item)}
              onClick={() => {
                window.location.href = "/how-is-mind";
              }}
            >
              How's your mind today?
            </button>
            {/* <button
                      className="bg-white px-6 py-2 text-black text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition"
                      onClick={() => handleWhatsAppRedirect(item)}
                    >
                      Book Now
                    </button> */}
          </div>
        </div>
        {/* <Services /> */}

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type={"getStarted"}
        />
        <EventModal isOpen={eventModal} onClose={() => setEventModal(false)} />
      </section>
      <Services />
    </>
  );
};

export default HeroMob;
