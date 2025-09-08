"use client";
import { useState, useEffect } from "react";
import BlurText from "./blurtext";

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
    }, 3000); // Show animation for 3 seconds before starting to fade out (adjust as needed for video length)

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
      <BlurText
        text="Your trusted mental wellness partner"
        className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white"
        delay={290}
        direction="top"
        animateBy="words"
      />
    </div>
  );
}
