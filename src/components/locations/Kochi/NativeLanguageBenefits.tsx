import { MessageCircle, Home, CalendarClock, MapPin } from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    title: "Comfort of Speaking in Malayalam",
    description:
      "Speaking in your native language can make emotional conversations feel more natural, comfortable, and easier to express during therapy sessions.",
  },
  {
    icon: Home,
    title: "Support from Your Own Space",
    description:
      "Online counselling allows individuals to attend therapy sessions comfortably from home, creating a more relaxed and emotionally safe environment.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Online Scheduling",
    description:
      "Online therapy sessions offer flexible scheduling options for students, working professionals, couples, and individuals with busy daily routines.",
  },
  {
    icon: MapPin,
    title: "Accessible Emotional Support",
    description:
      "Online Malayalam counselling makes emotional support more accessible for individuals across Kochi and Kerala without the need for travel.",
  },
];

export default function NativeLanguageBenefits() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* HEADING */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-[10.5px] font-medium tracking-[.12em] uppercase text-[#008C95] mb-4">
            Online Therapy Benefits
          </p>
          <h2 className="font-serif text-[30px] lg:text-[38px] font-semibold leading-[1.25] tracking-tight text-[#1a2e2e] mb-2.5">
            Benefits of Online Malayalam Counselling in Kochi
          </h2>

          <p className="text-[14.5px] leading-[1.8] text-[#5c6e6e] font-light">
            Online counselling provides accessible and flexible emotional
            support for individuals, couples, students, and working
            professionals seeking mental health support in Kochi and Kerala.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-3.5">
          {benefits.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-[#F8F8F8] border border-[#EFEFEF] rounded-2xl p-6 hover:shadow-[0_4px_20px_rgba(0,140,149,0.09)] hover:border-[#C8E6E6] transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-[38px] h-[38px] rounded-xl bg-[#E8F4F4] flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#008C95]" strokeWidth={1.6} />
                </div>
                <h3 className="text-[14.5px] font-medium text-[#1a2e2e] leading-snug">
                  {title}
                </h3>
              </div>
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