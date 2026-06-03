import {
  User,
  Users,
  Smile,
  Home,
  Brain,
  Leaf,
} from "lucide-react";

const services = [
  {
    icon: User,
    title: "Individual Counselling",
    description:
      "Online individual counselling support for anxiety, stress, depression, overthinking, emotional struggles, and personal growth.",
  },
  {
    icon: Users,
    title: "Couples Counselling",
    description:
      "Relationship counselling sessions for communication problems, trust issues, emotional distance, conflicts, and relationship healing.",
  },
  {
    icon: Smile,
    title: "Child & Adolescent Counselling",
    description:
      "Emotional support for children and teenagers facing academic stress, behavioural challenges, anxiety, confidence issues, and emotional difficulties.",
  },
  {
    icon: Home,
    title: "Family Counselling",
    description:
      "Therapy support for parenting concerns, family conflicts, emotional misunderstandings, and improving healthy family relationships.",
  },
  {
    icon: Brain,
    title: "Stress & Anxiety Therapy",
    description:
      "Online Malayalam counselling support for stress management, panic, emotional burnout, anxiety, and overwhelming thoughts.",
  },
  {
    icon: Leaf,
    title: "Wellness & Emotional Support",
    description:
      "Supportive therapy sessions focused on emotional wellbeing, self-awareness, confidence building, and maintaining mental wellness.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10.5px] font-medium tracking-[.12em] uppercase text-[#008C95] mb-4">
            Therapy Services
          </p>

          <h2 className="font-serif text-[30px] lg:text-[38px] font-semibold leading-[1.25] tracking-tight text-[#1a2e2e] mb-2.5">
            Online Counselling Services Available in Kochi
          </h2>

          <div className="w-11 h-[3px] rounded-full bg-[#00A3AD] mx-auto mb-5" />

          <p className="text-[14.5px] leading-[1.8] text-[#5c6e6e] font-light">
            We provide compassionate and confidential online Malayalam
            counselling sessions in Kochi for individuals, couples, families,
            students, and working professionals seeking emotional support and
            mental wellbeing.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3.5">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#F8F8F8] border border-[#EFEFEF] rounded-2xl p-7 hover:shadow-[0_4px_20px_rgba(0,140,149,0.09)] hover:border-[#C8E6E6] transition-all duration-200"
            >
              {/* Icon + Title row */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#E8F4F4] flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#008C95]" strokeWidth={1.6} />
                </div>
                <h3 className="text-[15px] font-medium text-[#1a2e2e] leading-snug">
                  {title}
                </h3>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-[#EBEBEB] mb-4" />

              {/* Description */}
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