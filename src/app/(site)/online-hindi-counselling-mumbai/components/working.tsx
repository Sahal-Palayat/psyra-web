import { ArrowRight } from "lucide-react";
import SlideLeft from "./motion/slide-left";
import SlideUp from "./motion/slide-up";
import SlideRight from "./motion/slide-right";

const steps = [
  {
    number: "1",
    description:
      "Choose a psychologist based on your emotional needs and therapy preferences.",
  },
  {
    number: "2",
    description:
      "Book a convenient online counselling session based on your availability.",
  },
  {
    number: "3",
    description:
      "Attend confidential online video therapy sessions from anywhere in Mumbai.",
  },
  {
    number: "4",
    description:
      "Continue your emotional wellness journey with ongoing online support and guidance.",
  },
];

export default function Working() {
  return (
    <div className="py-16 sm:py-20 lg:py-28 rounded-lg px-4 sm:px-8 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <SlideRight>
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <h3
            className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-gray-900 mb-4 sm:mb-5"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            How Online Hindi Counselling in{" "}
            <span className="italic text-teal-600">Mumbai</span> Works with{" "}
            <span className="italic text-teal-600">Psyra</span>
          </h3>
        </div>
        </SlideRight>

        {/* Steps */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center w-full lg:w-auto"
            >
              {/* Card */}
              <SlideUp delay={index * 0.1}>
              <div
                className="
                  group relative overflow-hidden rounded-[22px]
                  border border-teal-200
                  bg-white
                  p-5 sm:p-6
                  flex flex-col gap-4
                  transition-all duration-500 ease-out
                  hover:-translate-y-1
                  hover:border-teal-300
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                  w-full sm:max-w-md lg:w-[260px]
                  mb-4
                "
              >
                {/* Number */}
                <div className="bg-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-medium flex-shrink-0">
                  {step.number}
                </div>

                {/* Description */}
                <div className="relative z-10 flex-1 transition-transform duration-500 group-hover:-translate-y-1">
                  <p className="text-[12px] sm:text-[13px] leading-relaxed text-gray-500">
                    {step.description}
                  </p>
                </div>
              </div>
              </SlideUp>

              {/* Arrow */}
              {index !== steps.length - 1 && (
                <div className="my-4 lg:my-0 lg:mx-2 flex items-center justify-center">
                  <ArrowRight className="text-teal-600 rotate-90 lg:rotate-0" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}