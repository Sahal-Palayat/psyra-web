"use client";

import React from 'react'

const AboutSection = ({ description }: { description: string }) => {
  return (
    <div>
      <section className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#085B5D] mb-4 md:mb-6">
              Description
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-lg mb-4">
              {description || "No description available."}
            </p>
          </div>
        </section>
    </div>
  )
}

export default AboutSection
