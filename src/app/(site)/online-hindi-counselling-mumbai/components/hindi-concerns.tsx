import  { BatteryWarning, CloudRain, Heart, HeartHandshake, Scale, Sparkle, UserCheck,Home, GraduationCap } from "lucide-react";
import SlideLeft from "./motion/slide-left";
import SlideRight from "./motion/slide-right";
import FadeIn from "./motion/fade-in";
import SlideUp from "./motion/slide-up";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function HindiConcerns(){
    const concerns = [
        {
            title:"Anxiety & Overthinking",
            description:'Break free from the endless loop of "what-ifs." Learn practical strategies to calm your mind, ground yourself in the present, and manage racing thoughts.',
            icon:<Sparkle className="text-teal-600"/>
        },
        {
            title:"Stress & Burnout",
            description:'When daily pressures drain your battery, simple survival isn’t enough. Discover how to set boundaries, process chronic stress, and restore your mental well-being.',
            icon:<BatteryWarning className="text-teal-600"/>
        },
        {
            title:"Depression & Loneliness",
            description:'Feeling heavy, isolated, or disconnected from the things you used to love can be exhausting. Navigate through the fog in a safe, judgment-free space.',
            icon:<CloudRain className="text-teal-600"/> 
        },
        {
            title:"Relationship Issues",
            description:"Communication gaps and emotional distance can strain any bond. Navigate dating, marriage, or breakups while learning to express your needs clearly.",
            icon:<HeartHandshake className="text-teal-600"/>
        },
        {
            title:"Family Conflicts",
            description:"Managing expectations, cultural pressures, and boundaries with parents or relatives can be deeply complicated. Find peace amidst the noise.",
            icon:<Home className="text-teal-600"/>
        },
        {
            title:"Student Mental Health",
            description:"From academic stress and career uncertainty to peer pressure and identity crises, learn to navigate the unique challenges of student life.",
            icon:<GraduationCap className="text-teal-600"/>
        },
        {
            title:"Work-Life Balance",
            description:"Stop letting your job dictate your identity. Learn to untangle your self-worth from your productivity and make actual time for the life you want to live.",
            icon:<Scale className="text-teal-600"/>
        },
        {
            title:"Self-Esteem Issues",
            description:"If you constantly doubt your capabilities or feel like an imposter, work on building a resilient, compassionate relationship with yourself.",
            icon:<UserCheck className="text-teal-600"/>
        },
        {
            title:"Emotional Trauma",
            description:"Past experiences shouldn't have a permanent hold on your future. Process difficult, deeply rooted memories safely to begin moving forward.",
            icon:<Heart className="text-teal-600"/>
        }
        
    ]


    return (
        <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#f4fbfb] to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
                <SlideLeft>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-gray-900 mb-4 sm:mb-5"
                    style={{ fontFamily: "'DM Serif Display', serif" }}>
                    Online Counselling Support for Different
                    <span className="italic text-teal-600"> Emotional </span> Challenges
                </h2>
                </SlideLeft>
            </div>
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
                <SlideRight>
                <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
                    Online Hindi counselling sessions in Mumbai support individuals facing 
                    emotional stress, anxiety, depression, burnout, relationship conflicts, family concerns, and personal struggles affecting mental wellbeing.
                </p>
                </SlideRight>
            </div>
            {/* Cards */}
            <div className = "grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 px-5 md:px-10">
                {concerns.map((item, index) => (
            <HindiConcernsCard 
              key={index} 
              title={item.title} 
              description={item.description} 
              icon={item.icon} 
            />
          ))}
            </div>
            </div>
        </section>
    )
}
interface ConcernItem{
    title:string;
    description:string;
    icon:any;
}
export function HindiConcernsCard({
  title,
  description,
  icon,
}: ConcernItem) {
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
            href="/psychologists"
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
            Talk to a Hindi Psychologist →
          </Link>
        </div>
      </div>
    </SlideUp>
  )
}