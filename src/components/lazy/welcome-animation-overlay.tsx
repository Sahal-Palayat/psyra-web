"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WelcomeAnimationOverlay() {
  const [isVisible, setIsVisible] = useState(true); // Always start visible
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Set a timeout to trigger the fade-out animation
    const animationTimer = setTimeout(() => {
      setHasAnimated(true); // Trigger fade-out animation
      // After fade-out, fully hide the component
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Duration of fade-out animation (matches CSS transition)
      return () => clearTimeout(hideTimer);
    }, 2000); // Show animation for 3 seconds before starting to fade out (adjust as needed for video length)

    return () => clearTimeout(animationTimer);
  }, []); // Empty dependency array means this runs once on mount

  if (!isVisible) {
    return null; // Don't render if not visible
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#FBF7F8] transition-opacity duration-1000 ease-out ${
        hasAnimated ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* This container now takes full width and uses flexbox for responsive layout */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-full max-w-7xl mx-auto py-16 md:pl-56">
        {/* Text Column - takes up half width on desktop, centered on mobile, with left padding */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-[#008080]"
          >
            Your trusted <br /> Mental wellness <br /> Partner
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-2/3 md:w-1/2 border-b-2 border-[#008080] mx-auto md:mx-0 pt-2 pb-0"
          />
        </div>
        {/* Image Column - takes up half width on desktop, no right padding */}
        {/* <div className="w-full md:w-1/2 flex justify-center items-center pl-20 md:py-30 md:pl-20">
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="w-full h-auto" // Video fills its container, no extra borders/shadows
          >
            <source src="/floweranim.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        </div> */}
      </div>
    </div>
  );
}
