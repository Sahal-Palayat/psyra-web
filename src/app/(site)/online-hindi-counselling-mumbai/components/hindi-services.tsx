import  { BrainCircuit, GraduationCap, HeartHandshake, HomeIcon, Sparkle, User } from "lucide-react";
import SlideLeft from "./motion/slide-left";
import SlideRight from "./motion/slide-right";
import FadeIn from "./motion/fade-in";
import SlideUp from "./motion/slide-up";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function HindiServices(){
    const services = [
        {
            title:"Individual Counselling",
            description:'Online therapy support for anxiety, emotional stress, depression, overthinking, confidence issues, and personal growth.',
            icon:<User className="text-teal-600"/>,
            button_text:"Book Online Hindi Individual Session",
            button_link:"/individual-therapy"
        },
        {
            title:"Couples Counselling",
            description:'Relationship counselling support for communication problems, emotional distance, trust concerns, and recurring conflicts.',
            icon:<HeartHandshake className="text-teal-600"/>,
            button_text:"Book Online Hindi Couple Session",
            button_link:"/couple-therapy"
        },
        {
            title:"Family Counselling",
            description:'Supportive therapy sessions for parenting stress, family conflicts, emotional misunderstandings, and healthy relationship building.',
            icon:<HomeIcon className="text-teal-600"/>,
            button_text:"Book Online Hindi Session",
            button_link:"/psychologists"
        },
        {
            title:"Student Counselling",
            description:"Therapy support for academic pressure, exam stress, emotional struggles, low confidence, and career-related anxiety.",
            icon:<GraduationCap className="text-teal-600"/>,
            button_text:"Book Online Hindi Session",
            button_link:"/psychologists"
        },
        {
            title:"Stress & Anxiety Therapy",
            description:"Online counselling support for panic, overthinking, emotional burnout, anxiety, and daily stress management.",
            icon:<BrainCircuit className="text-teal-600"/>,
            button_text:"Book Online Hindi Session",
            button_link:"/psychologists"
        },
        {
            title:"Emotional Wellness Support",
            description:"Supportive therapy sessions focused on emotional wellbeing, self-awareness, resilience, and maintaining mental wellness.",
            icon:<Sparkle className="text-teal-600"/>,
            button_text:"Book Online Hindi Session",
            button_link:"/psychologists"
        },
        
        
    ]


    return (
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#f4fbfb] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
                <SlideLeft>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-gray-900 mb-4 sm:mb-5"
                    style={{ fontFamily: "'DM Serif Display', serif" }}>
                    Online Counselling Services Available in 
                    <span className="italic text-teal-600"> Mumbai </span>
                </h2>
                </SlideLeft>
            </div>
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
                <SlideRight>
                <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
                    Psyra offers online Hindi counselling sessions for individuals, couples, students, families,
                     and working professionals seeking emotional support and mental wellbeing in Mumbai.
                </p>
                </SlideRight>
            </div>
            {/* Cards */}
            <div className = "grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 px-5 md:px-10">
                {services.map((item, index) => (
            <HindiConcernsCard 
              key={index} 
              title={item.title} 
              description={item.description} 
              icon={item.icon} 
              button_text={item.button_text}
              button_link={item.button_link}
            />
          ))}
            </div>
            </div>
        </section>
    )
}
interface ServiceItem{
    title:string;
    description:string;
    icon: React.ReactNode;
    button_text: string;
    button_link: string;
}
export function HindiConcernsCard({
  title,
  description,
  icon,
  button_text,
  button_link
}: ServiceItem) {
  return (
    <SlideUp>
      <div
        className="
        group
        relative
        overflow-hidden
        rounded-[22px]
        border
        border-[#d4ece4]
        bg-white
        p-5
        sm:p-6
        flex
        flex-col
        gap-4
        transition-all
        duration-500
        ease-out
        hover:-translate-y-1
        hover:border-teal-300
        hover:bg-[#fafdfe]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]
      "
      >
        {/* Ambient hover glow */}
        <div
          className="
          pointer-events-none
          absolute
          inset-0
          rounded-[22px]
          bg-gradient-to-br
          from-teal-100/40
          to-transparent
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        />

        {/* Icon */}
        <div
          className="
          relative
          z-10
          flex
          h-10
          w-10
          flex-shrink-0
          items-center
          justify-center
          rounded-lg
          border
          border-teal-400/20
          bg-teal-50/80
          p-2
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:bg-teal-100
        "
        >
          {icon}
        </div>

        {/* Content */}
        <div
          className="
          relative
          z-10
          flex-1
          transition-transform
          duration-500
          group-hover:-translate-y-1
        "
        >
          <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-900 leading-snug">
            {title}
          </h3>

          <p className="mt-2 text-[12px] sm:text-[13px] leading-relaxed text-gray-500">
            {description}
          </p>
        </div>

        {/* CTA Reveal */}
        <div
          className="
          relative
          z-10
          overflow-hidden
          max-h-0
          opacity-0
          translate-y-2
          transition-all
          duration-500
          ease-out
          group-hover:max-h-16
          group-hover:translate-y-0
          group-hover:opacity-100
        "
        >
          <Link
            href={button_link}
            className="
            inline-flex
            items-center
            text-sm
            font-medium
            text-teal-700
            transition-colors
            hover:text-teal-800
          "
          >
            {button_text} →
          </Link>
        </div>
      </div>
    </SlideUp>
  )
}