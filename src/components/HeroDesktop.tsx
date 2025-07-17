"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";
import EventModal from "./EventModal";
import Services from "./Services";

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

  return (
    <>
      <section className="relative bg-teal-600 text-white flex items-center">
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
          <div className="max-w-3xl mx-auto mb-16 mt-6 text-center">
            {/* Psyra Logo */}
            {/* <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image src={Logo} alt="Psyra Logo" width={200} height={150} />
            </motion.div> */}

            <motion.p
              className="font-bold text-[#9EE0D6] text-[42px] leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1 }}
            >
              You are not alone,
              <span className="text-white"> Psyra</span> is with you
            </motion.p>
          </div>
        </motion.div>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          type={"getStarted"}
        />
        <EventModal isOpen={eventModal} onClose={() => setEventModal(false)} />
      </section>
      <div className="relative z-10 -mt-34 md:-mt-28">
        <Services />
      </div>
    </>
  );
};

export default HeroDesktop;
