import { Calendar1, House, MapPin, MessageCircle } from "lucide-react";
import SlideLeft from "./motion/slide-left";
import SlideRight from "./motion/slide-right";
import SlideUp from "./motion/slide-up";

export default function Benefits(){
    const benefit=[
        {
            title:"Emotional Comfort in Hindi",
            description:"Speaking in Hindi during therapy sessions can help individuals express emotions more naturally and comfortably.",
            icon:<MessageCircle className="text-teal-600"/>
        },
        {
            title:"Flexible Online Therapy",
            description:"Online counselling sessions offer flexible scheduling for busy daily routines and professional lifestyles in Mumbai.",
            icon:<Calendar1 className="text-teal-600"/>
        },
        {
            title:"Therapy from Home",
            description:"Attend confidential therapy sessions from a comfortable and familiar environment without needing to travel.",
            icon:<House className="text-teal-600"/>
        },
        {
            title:"Accessible Emotional Support",
            description:"Online Hindi counselling makes emotional support accessible for individuals across Mumbai and Maharashtra.",
            icon:<MapPin className="text-teal-600"/>
        }

    ]
    return(
        <div className="py-16 sm:py-20 lg:py-28 bg-[#d8e9e9] rounded-2xl px-5 sm:px-10 md:px-20">
            <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14 lg:mb-16">
                <SlideLeft>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-gray-900 mb-4 sm:mb-5"
                    style={{ fontFamily: "'DM Serif Display', serif" }}>
                    Benefits of Online 
                    
                    <span className="italic text-teal-600"> Hindi Counselling </span> in Mumbai
                    
                </h2>
                </SlideLeft>
            </div>
            <SlideUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {benefit.map((item)=>(
                    <BenefitCard key={item.title} title={item.title} description={item.description} icon={item.icon}/>
                ))}
            </div>
            </SlideUp>
        </div>
    )
}
interface benefits{
    title:string;
    description:string;
    icon:any;
}
export function BenefitCard({title,description,icon}:benefits){
    return(
        <div className="group relative overflow-hidden rounded-[22px] border border-teal-200
         bg-white p-5 sm:p-6 flex flex-col gap-4 transition-all duration-500 ease-out hover:-translate-y-1
          hover:border-teal-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
            <div >
                <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-teal-400/20 bg-teal-50/80 p-2 
                transition-all duration-500 group-hover:scale-110 group-hover:bg-teal-100">
                    {icon}
                </div>
                <div className="relative z-10 flex-1 transition-transform duration-500 group-hover:-translate-y-1 mt-4">
                    <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-900 leading-snug">{title}</h3>
                </div>
                <div>
                    <p className="mt-2 text-[12px] sm:text-[13px] leading-relaxed text-gray-500">{description}</p>
                </div>
            </div>
        </div>
    )
}