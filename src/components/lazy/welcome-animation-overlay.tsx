"use client";

import { useState, useEffect } from "react";

export default function WelcomeAnimationOverlay() {
  const [isVisible, setIsVisible] = useState(true); // Always start visible
  const [hasAnimated, setHasAnimated] = useState(false);
  const [breathePhase, setBreathePhase] = useState<"in" | "hold" | "out">("in");
  const [breatheText, setBreatheText] = useState("Breathe in");

  useEffect(() => {
    const phases = ["in", "hold", "out"];
    const texts = ["Breathe in", "Hold", "Breathe out"];
    let currentPhaseIndex = 0;

    // Cycle breathing phases and text
    const phaseCycleTimer = setInterval(() => {
      currentPhaseIndex = (currentPhaseIndex + 1) % phases.length;
      setBreathePhase(phases[currentPhaseIndex] as "in" | "hold" | "out");
      setBreatheText(texts[currentPhaseIndex]);
    }, 2000); // Change phase/text every 2 seconds (6s total cycle / 3 phases)

    // Set a timeout to trigger the fade-out animation for the entire overlay
    const fadeOutTimer = setTimeout(() => {
      setHasAnimated(true); // Trigger fade-out animation
      // After fade-out, fully hide the component
      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1000); // Duration of fade-out animation (matches CSS transition)
      return () => clearTimeout(hideTimer);
    }, 7000); // Show animation for 7 seconds before starting to fade out (a bit longer than one full breath cycle)

    return () => {
      clearInterval(phaseCycleTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);

  if (!isVisible) {
    return null; // Don't render if not visible
  }

  // SVG paths for eyes and mouth based on phase
  const eyesPath =
    breathePhase === "out"
      ? `M10 5C10 5 12 4 14 5C16 6 18 5 18 5 M30 5C30 5 32 4 34 5C36 6 38 5 38 5` // Slightly open eyes
      : `M10 5C10 5 12 2 14 5C16 8 18 5 18 5 M30 5C30 5 32 2 34 5C36 8 38 5 38 5`; // Closed eyes (current)

  const mouthPath =
    breathePhase === "out"
      ? `M24 15C24 15 26 17 28 15` // Relaxed smile
      : `M24 15C24 15 26 15 28 15`; // Neutral line

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF5EA] transition-opacity duration-1000 ease-out ${
        hasAnimated ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative w-[200px] h-[200px] flex items-center justify-center">
        {/* Outer blue/purple ring */}
        <div className="absolute w-full h-full rounded-full bg-[#7B68EE]"></div>

        {/* Loader dot on the border */}
        <div className="absolute w-6 h-6 rounded-full bg-[#DAA520] animate-loader-spin"></div>

        {/* White inner ring */}
        <div className="absolute w-[85%] h-[85%] rounded-full bg-[#F0F0F0] flex items-center justify-center">
          {/* Pink breathing character circle */}
          <div className="relative w-[80%] h-[80%] rounded-full bg-[#FFC0CB] animate-breathe flex items-center justify-center">
            {/* Character Face */}
            <svg
              width="50"
              height="25"
              viewBox="0 0 50 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute"
            >
              {/* Eyes */}
              <path
                d={eyesPath}
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Mouth */}
              <path
                d={mouthPath}
                stroke="#2C3E50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <p className="mt-8 text-3xl font-semibold text-white">{breatheText}</p>

      <div className="flex space-x-2 mt-8">
        <div className="w-4 h-4 rounded-full bg-[#FFC0CB]"></div>
        <div className="w-4 h-4 rounded-full bg-[#DAA520]"></div>
        <div className="w-4 h-4 rounded-full bg-[#7B68EE]"></div>
      </div>
    </div>
  );
}
