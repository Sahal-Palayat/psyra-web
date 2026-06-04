import { Laptop, Lock, Stethoscope, CalendarClock } from "lucide-react";

const benefits = [
  {
    icon: Laptop,
    title: "Convenient Online Sessions",
    description:
      "Online counselling allows individuals in Kochi to access emotional support from the comfort of their home without the stress of travel, traffic, or waiting rooms.",
  },
  {
    icon: Lock,
    title: "Private & Confidential Support",
    description:
      "We provide a safe and confidential space where individuals can openly discuss emotions, personal struggles, relationships, stress, and mental health concerns comfortably.",
  },
  {
    icon: Stethoscope,
    title: "Experienced Psychologists",
    description:
      "Our Malayalam-speaking psychologists support individuals dealing with anxiety, stress, emotional burnout, relationship challenges, depression, and personal struggles.",
  },
  {
    icon: CalendarClock,
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
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-[30px] lg:text-[38px] font-semibold leading-[1.25] tracking-tight text-[#1a2e2e] mb-2.5">
            Why Choose Online Malayalam Counselling in Kochi with Psyra?
          </h2>
          <div className="w-11 h-[3px] rounded-full bg-[#00A3AD] mx-auto" />
        </div>

        {/* CONTENT BOX */}
        <div className="bg-[#F9F5EE] rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2">
            {benefits.map(({ icon: Icon, title, description }, i) => {
              const isOdd = i % 2 === 0;
              const isLastRow = i >= benefits.length - 2;
              return (
                <div
                  key={title}
                  className={[
                    "py-8",
                    isOdd ? "lg:pr-10 lg:border-r border-[#E8E0D4]" : "lg:pl-10",
                    !isLastRow ? "border-b border-[#E8E0D4]" : "",
                  ].join(" ")}
                >
                  {/* Icon + Title */}
                  <div className="flex items-start gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F4F4] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#008C95]" strokeWidth={1.6} />
                    </div>
                    <h3 className="text-[15px] font-medium text-[#1a2e2e] leading-snug pt-1.5">
                      {title}
                    </h3>
                  </div>

                  {/* Description — indented to align with title */}
                  <p className="text-[13px] leading-[1.78] text-[#6b7f7f] font-light pl-[54px]">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}