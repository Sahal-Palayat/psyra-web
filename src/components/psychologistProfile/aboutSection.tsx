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
            {/* <p className="text-gray-700 leading-relaxed text-sm md:text-lg mb-4">
              With years of experience in mental health counseling, I provide a
              safe, non-judgmental space where clients can explore their
              thoughts and feelings openly. My approach is collaborative and
              tailored to each individual's unique needs and goals.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
              I believe in empowering clients with practical tools and
              strategies that they can use in their daily lives. Together, we'll
              work towards sustainable change and improved emotional wellbeing.
            </p> */}
          </div>
        </section>
    </div>
  )
}

export default AboutSection
