import { ArrowRightCircle } from "lucide-react";

const benefits = [
  {
    title: "Convenient Online Sessions",
    description:
      "Online counselling allows individuals in Kochi to access emotional support from the comfort of their home without the stress of travel, traffic, or waiting rooms.",
  },
  {
    title: "Private & Confidential Support",
    description:
      "We provide a safe and confidential space where individuals can openly discuss emotions, personal struggles, relationships, stress, and mental health concerns comfortably.",
  },
  {
    title: "Experienced Psychologists",
    description:
      "Our Malayalam-speaking psychologists support individuals dealing with anxiety, stress, emotional burnout, relationship challenges, depression, and personal struggles.",
  },
  {
    title: "Flexible Therapy Scheduling",
    description:
      "Online therapy sessions offer flexible appointment timings for students, working professionals, couples, and individuals managing busy daily routines.",
  },
];

export default function WhyOnlineTherapy() {
  return (
    <section className="w-full bg-[#EAF6F6] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-[#008C95] mb-4">
            Why Choose Psyra
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E1E1E]">
            Why Choose Online Malayalam Counselling in Kochi with Psyra?
          </h2>
        </div>

        {/* CONTENT BOX */}
        <div className="bg-[#F9F5EE] rounded-[36px] p-8 lg:p-14">
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">

            {benefits.map((item, index) => (
              <div key={index}>
                
                {/* ICON + TITLE */}
                <div className="flex items-start gap-4 mb-5">
                  <ArrowRightCircle
                    size={36}
                    className="text-[#006B95] shrink-0 mt-1"
                    strokeWidth={1.8}
                  />

                  <h3 className="text-2xl font-medium text-[#1E1E1E] leading-snug">
                    {item.title}
                  </h3>
                </div>

                {/* DESCRIPTION */}
                <p className="text-[16px] leading-8 text-[#5F5F5F] pl-[52px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}