"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";
import EventModal from "./EventModal";
import { MoveRight } from "lucide-react";

const HeroMob = () => {
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
    { text: "Psyra", lang: "English", size: "text-[22px]" },
    { text: "साइरा", lang: "Hindi", size: "text-[22px]" },
    { text: "സൈറ", lang: "Malayalam", size: "text-[20px]" },
    { text: "ಸೈರಾ", lang: "Kannada", size: "text-[20px]" },
    { text: "சைரா", lang: "Tamil", size: "text-[20px]" },
    { text: "सायरा", lang: "Marathi", size: "text-[20px]" },
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
      <section className="mb-4 relative bg-teal-600 text-white rounded-lg m-2">
        {/* Background Image Animation */}
        <div className="px-2 pb-10 pt-24 ">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="container relative z-10 text-left "
          >
            <motion.p
              className="max-w-[314px] mx-auto font-bold text-[#9EE0D6] text-[22px] md:text-2xl leading-none"
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
            <div className="flex gap-2 w-full max-w-2xl">
              {/* Online Therapy Card */}
              <motion.div
                className="flex-1 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 1 }}
              >
                <div
                  onClick={() => {
                    window.location.href = "/services";
                  }}
                  className="flex flex-col gap-4 justify-between"
                >
                  <div className="bg-gradient-to-br p-2 from-teal-100 to-teal-50 rounded-lg">
                    <img
                      src="/Online-Counselling-Malayalam-Take-Your-Online-Therapy.webp"
                      alt="Take your online counselling Malayalam session for emotional wellness"
                      className="h-full w-full"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-bold text-teal-600 text-[18px] md:text-2xl leading-tight">
                    Take Your Online Therapy
                  </p>
                  <p className="text-black text-[12px] md:text-2xl leading-tight">
                    Get your online session heal your mind
                  </p>
                  <div className="flex flex-row items-center text-teal-800 text-[14px] gap-1">
                    <span>Book Now</span>
                    <MoveRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>

              {/* Find Your Therapist Card */}
              <motion.div
                className="flex-1 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow shimmer-card"
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
                      src="/Online-Counselling-Malayalam-Free-Assessment.webp"
                      alt="Free mental health assessment with online counseling Malayalam support"
                      className="h-full w-full"
                      loading="lazy"
                    />
                  </div>

                  <p className="font-bold text-teal-600 text-[18px] md:text-2xl leading-tight">
                    Take Your Free Assessment
                  </p>

                  <p className="text-black text-[12px] md:text-2xl leading-tight">
                    Know your mental health status quickly
                  </p>

                  <div className="flex flex-row items-center text-teal-800 text-[14px] gap-1">
                    <span>Start Now</span>
                    <MoveRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* <CarouselStats /> */}
          <div
            onClick={() => (window.location.href = "/psychologists")}
            className="flex-1 mt-4 bg-gradient-to-br from-[#F0FDF9] to-[#D1FAE5] text-black rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex mb-2 flex-row items-center text-teal-800 text-[14px] gap-1">
              <p className="font-bold text-teal-800 text-[18px] md:text-2xl leading-tight">
                Find Your Right Therapist
              </p>
              <MoveRight className="w-4 h-4" />
            </div>

            <p className="text-black text-[12px] md:text-2xl leading-tight">
              Choose your therapist and start your session.
            </p>
          </div>
        </div>

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

export default HeroMob;
