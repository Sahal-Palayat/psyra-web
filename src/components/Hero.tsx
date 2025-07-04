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
import { useRouter } from "next/navigation";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

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
    <section className="relative bg-teal-600 text-white flex items-center">
      {/* Background Image Animation */}

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto px-4 py-24 md:py-24 relative z-10 text-center"
      >
        haii
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
