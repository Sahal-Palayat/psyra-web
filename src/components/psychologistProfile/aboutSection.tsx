"use client";

import React, { useState, useEffect } from "react";

const AboutSection = ({ description }: { description: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxLength, setMaxLength] = useState(220); // default mobile

  // Set limits based on screen width
  useEffect(() => {
    const updateLimit = () => {
      if (window.innerWidth >= 1024) {
        setMaxLength(800); // Desktop
      } else if (window.innerWidth >= 768) {
        setMaxLength(400); // Tablet
      } else {
        setMaxLength(300); // Mobile
      }
    };

    updateLimit();
    window.addEventListener("resize", updateLimit);

    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const isLong = description.length > maxLength;

  const displayedText = isExpanded
    ? description
    : isLong
    ? description.slice(0, maxLength) + "..."
    : description;

  return (
    <div>
      <section className="space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#085B5D] mb-4 md:mb-6">
          Description
        </h2>

        <p className="text-gray-700 leading-relaxed text-sm md:text-lg mb-3 whitespace-pre-line">
          {displayedText}
        </p>

        {isLong && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#00989D] font-semibold text-sm md:text-base"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </section>
    </div>
  );
};

export default AboutSection;
