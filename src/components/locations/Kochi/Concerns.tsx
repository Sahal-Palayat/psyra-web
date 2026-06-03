import {
  Brain,
  BatteryLow,
  HeartHandshake,
  Frown,
  Home,
  School,
  Scale,
  Star,
} from "lucide-react";

const concerns = [
  {
    icon: Brain,
    title: "Anxiety & Overthinking",
    description:
      "Support for persistent worrying, racing thoughts, panic, fear, and emotional stress that affect daily life and peace of mind.",
  },
  {
    icon: BatteryLow,
    title: "Stress & Burnout",
    description:
      "Online counselling support for emotional exhaustion, work pressure, mental fatigue, and overwhelming responsibilities.",
  },
  {
    icon: HeartHandshake,
    title: "Relationship Issues",
    description:
      "Guidance for communication problems, emotional distance, conflicts, trust concerns, and relationship challenges.",
  },
  {
    icon: Frown,
    title: "Depression & Loneliness",
    description:
      "Compassionate emotional support for sadness, hopelessness, isolation, low motivation, and emotional disconnection.",
  },
  {
    icon: Home,
    title: "Family Conflicts",
    description:
      "Counselling support for misunderstandings, emotional tension, parenting stress, and difficult family situations.",
  },
  {
    icon: School,
    title: "Student Mental Health",
    description:
      "Therapy support for academic pressure, exam stress, career confusion, anxiety, and emotional struggles faced by students.",
  },
  {
    icon: Scale,
    title: "Work-Life Balance",
    description:
      "Support for managing emotional stress caused by career pressure, personal responsibilities, and daily life imbalance.",
  },
  {
    icon: Star,
    title: "Self-Esteem & Confidence",
    description:
      "Guidance to improve self-worth, confidence, emotional resilience, and personal growth through supportive therapy.",
  },
];

export default function Concerns() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[10.5px] font-medium tracking-[.12em] uppercase text-[#008C95] mb-4">
            Mental Health Support
          </p>

          <h2 className="font-serif text-[30px] lg:text-[38px] font-semibold leading-[1.25] tracking-tight text-[#1a2e2e] mb-2.5">
            Online Counselling Support for Different Emotional Challenges
          </h2>

          
          <p className="text-[15px] leading-[1.8] text-[#5c6e6e] font-light">
            Our online Malayalam counselling sessions in Kochi provide emotional
            support for individuals facing anxiety, stress, relationship
            challenges, emotional burnout, family conflicts, and other mental
            health concerns.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3.5">
          {concerns.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#F8F8F8] border border-[#EFEFEF] rounded-2xl p-6 hover:shadow-[0_4px_20px_rgba(0,140,149,0.09)] hover:border-[#C8E6E6] transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-[#E8F4F4] flex items-center justify-center mb-5">
                <Icon size={20} className="text-[#008C95]" strokeWidth={1.6} />
              </div>

              <h3 className="text-[14.5px] font-medium text-[#1a2e2e] mb-2 leading-snug">
                {title}
              </h3>

              <p className="text-[13px] leading-[1.75] text-[#6b7f7f] font-light">
                {description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}