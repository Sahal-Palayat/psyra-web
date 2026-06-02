import { CalendarClock, Laptop, ShieldCheck, UserCheck } from "lucide-react"

export default function WhyPsyra(){
    const points =[
        {
            title:"Convenient Online Sessions",
            description:"Online counselling allows individuals to receive emotional support comfortably from home without the stress of travel or waiting rooms.",
            icon: <Laptop className="text-teal-400"/>
        },
        {
            title:"Confidential Emotional Support",
            description:"We provide a private and supportive environment where individuals can openly discuss emotions, stress, relationships, and personal struggles.",
            icon:<ShieldCheck className="text-teal-400"/>
        },
        {
            title:"Experienced Hindi-Speaking Psychologists",
            description:"Our psychologists support individuals facing anxiety, depression, emotional burnout, stress, and relationship challenges through online Hindi counselling sessions.",
            icon:<UserCheck className="text-teal-400"/>
        },
        {
            title:"Flexible Appointment Scheduling",
            description:"Flexible online therapy timings make counselling accessible for students, working professionals, couples, and families across Mumbai.",
            icon:<CalendarClock className="text-teal-400"/>
        }
    ]
    return (
        <div className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-[#f4fbfb] to-white">
            <div className = "grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
                <div className="max-w-xl lg:sticky lg:top-28">
                    <h2 className="justify-center items-center text-2xl sm:text-3xl lg:text-4xl font-normal   text-gray-900 mb-4 sm:mb-5"
                    style={{ fontFamily: "'DM Serif Display', serif" }}>
                        Why Choose Online 
                        <span className="italic text-teal-600"> Hindi </span>
                        Counselling in <span className="italic text-teal-600"> Mumbai </span>
                        with Psyra?
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2  gap-3 sm:gap-4">
                    {points.map((point)=>(
                        <WhyPsyraCard key={point.title} title={point.title} description={point.description} icon={point.icon}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
export function WhyPsyraCard({title,description,icon}:{
    title:string;
    description:string;
    icon:any;
}){
    return (
        <div className="group p-5 sm:p-6 rounded-[20px] border border-teal-100 bg-white hover:border-teal-300 hover:shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition-all duration-500 ease-out hover:-translate-y-0.5">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-teal-400/20 bg-teal-50/80 p-2 mb-4 transition-all duration-500 group-hover:scale-110 group-hover:bg-teal-100">
                {icon}
            </div>
            <h3 className="text-[14px] sm:text-[15px] font-medium text-gray-900 leading-snug mb-2">
                {title}
            </h3>
            <p className="text-[12px] sm:text-[13px] leading-relaxed text-gray-500">
                {description}
            </p>
        </div>
    )
}