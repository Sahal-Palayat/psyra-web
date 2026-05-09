import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Individual Counselling",
    description:
      "Online individual counselling support for anxiety, stress, depression, overthinking, emotional struggles, and personal growth.",
  },
  {
    title: "Couples Counselling",
    description:
      "Relationship counselling sessions for communication problems, trust issues, emotional distance, conflicts, and relationship healing.",
  },
  {
    title: "Child & Adolescent Counselling",
    description:
      "Emotional support for children and teenagers facing academic stress, behavioural challenges, anxiety, confidence issues, and emotional difficulties.",
  },
  {
    title: "Family Counselling",
    description:
      "Therapy support for parenting concerns, family conflicts, emotional misunderstandings, and improving healthy family relationships.",
  },
  {
    title: "Stress & Anxiety Therapy",
    description:
      "Online Malayalam counselling support for stress management, panic, emotional burnout, anxiety, and overwhelming thoughts.",
  },
  {
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
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="text-sm uppercase tracking-[0.2em] text-[#008C95] mb-4">
            Therapy Services
          </p>

          <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E1E1E] mb-6">
            Online Counselling Services Available in Kochi
          </h2>

          <p className="text-[17px] leading-8 text-[#5F5F5F]">
            We provide compassionate and confidential online Malayalam
            counselling sessions in Kochi for individuals, couples, families,
            students, and working professionals seeking emotional support and
            mental wellbeing.
          </p>
        </div>

        {/* SERVICES */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-14 gap-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center"
            >
              {/* ICON */}
              <div className="flex justify-center mb-6">
                <CheckCircle
                  className="text-[#006B95]"
                  size={42}
                  strokeWidth={1.8}
                />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-medium text-[#1E1E1E] mb-5">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-[16px] leading-8 text-[#5F5F5F]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}