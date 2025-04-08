"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageS3 from "../../public/Web Site A (2).jpg"; // Desktop Image
import MobileHero from "../../public/Web Site Phn.jpg"; // Mobile Image
import Logo from "../../public/Psyra Logo White-04.svg";
import Arrow from "../../public/Arrow right.png";
import Modal from "./Modal";
import EventModal from "./EventModal";

const Hero = () => {
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

  return (
    <section className="relative bg-teal-600 text-white min-h-screen flex items-center">
      {/* Background Image Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full min-h-[500px]"
        id="home"
      >
        <Image
          src={isMobile ? MobileHero : ImageS3} // Conditionally show images
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-24 md:py-24 relative z-10 text-center"
      >
        <div className="max-w-3xl mx-auto mt-12 text-center">
          {/* Psyra Logo */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image src={Logo} alt="Psyra Logo" width={200} height={150} />
          </motion.div>

          <motion.p
            className="max-w-[314px] mx-auto text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1 }}
          >
            Your mental wellness partner here for you, no worries
          </motion.p>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 bg-white text-[#00989D] max-w-[191px] w-[191px] h-[38px] rounded-full font-medium hover:bg-gray-100 transition-all"
          >
            Get Appointment
            <Image src={Arrow} width={15} height={20} alt="ARROW" />
          </motion.button>
        </div>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={"getStarted"}
      />
      <EventModal isOpen={eventModal} onClose={() => setEventModal(false)} />
    </section>
  );
};

export default Hero;
