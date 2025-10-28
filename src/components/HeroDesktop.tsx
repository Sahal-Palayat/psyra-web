"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import EventModal from "./EventModal";
import Services from "./Services";
import { MoveRight } from "lucide-react";
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
