import { CircleHelp } from "lucide-react";

const benefits = [
  {
    title: "Comfort of Speaking in Malayalam",
    description:
      "Speaking in your native language can make emotional conversations feel more natural, comfortable, and easier to express during therapy sessions.",
  },
  {
    title: "Support from Your Own Space",
    description:
      "Online counselling allows individuals to attend therapy sessions comfortably from home, creating a more relaxed and emotionally safe environment.",
  },
  {
    title: "Flexible Online Scheduling",
    description:
      "Online therapy sessions offer flexible scheduling options for students, working professionals, couples, and individuals with busy daily routines.",
  },
  {
    title: "Accessible Emotional Support",
    description:
      "Online Malayalam counselling makes emotional support more accessible for individuals across Kochi and Kerala without the need for travel.",
  },
];

export default function NativeLanguageBenefits() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="w-[320px] h-[320px] lg:w-[620px] lg:h-[620px] rounded-full overflow-hidden border-4 border-[#00A3AD]">
              <img
                src="/images/kochi/benefits.webp"
                alt="Benefits of online Malayalam counselling in Kochi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div>

            <p className="text-sm uppercase tracking-[0.2em] text-[#008C95] mb-4">
              Online Therapy Benefits
            </p>

            <h2 className="text-3xl lg:text-5xl font-semibold leading-tight text-[#1E1E1E] mb-6">
              Benefits of Online Malayalam Counselling in Kochi
            </h2>

            <p className="text-[17px] leading-8 text-[#5F5F5F] mb-10">
              Online counselling provides accessible and flexible emotional
              support for individuals, couples, students, and working
              professionals seeking mental health support in Kochi and Kerala.
            </p>

            {/* BENEFITS */}
            <div className="space-y-8">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-5"
                >
                  {/* ICON */}
                  <div className="shrink-0 mt-1">
                    <CircleHelp
                      size={28}
                      className="text-[#006B95]"
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-xl font-medium text-[#1E1E1E] mb-3">
                      {item.title}
                    </h3>

                    <p className="text-[16px] leading-8 text-[#5F5F5F]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}