import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./motion/fade-in";
import StaggerContainer from "./motion/stagger-container";
import SlideLeft from "./motion/slide-left";
import SlideRight from "./motion/slide-right";
export default function HindiHero(){
    return (
        <section className="relative overflow-hidden max-w-full bg-[#e6f7f5] max-h-full">
            {/* Container */}
            <div className="max-w-7xl mx-auto px-3 md:grid md:grid-cols-2 justify-between gap-8 pt-24 pb-8">
                {/* Left section */}
                <StaggerContainer>
                    <SlideLeft>
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-normal leading-tight text-gray-900 mb-4 lg:mb-5" style={{ fontFamily: "'DM Serif Display', serif" }}>
                        Online
                        <span className="italic text-teal-600"> Hindi </span>
                        <span className="block md:hidden"></span>
                        <span className="text-3xl sm:text-4xl lg:text-6xl font-normal leading-tight text-gray-900 mb-4 lg:mb-5" style={{ fontFamily: "'DM Serif Display', serif" }}>Counselling in</span>
                        <span className="italic text-teal-600"> Mumbai </span>
                  
                    </h1>
                    </SlideLeft>
                    <FadeIn>
                    <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-5 lg:mb-6">Connect with experienced Hindi-speaking psychologists online for anxiety, stress, depression, emotional wellbeing,
                         relationship concerns, and personal growth from the comfort of your home in Mumbai.
                    </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                    <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed mb-5 lg:mb-6">
                        Psyra provides confidential online counselling sessions in Hindi for individuals, couples, students, working professionals,
                         and families across Mumbai and Maharashtra through secure online video sessions.
                    </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                    <div className="flex flex-wrap gap-3 mt-16">
                        <Link href="/individual-therapy">
                            <Button className="bg-teal-700 text-white px-5 py-2.5 lg:px-6 lg:py-3 rounded-[14px] text-[13px] lg:text-[14px] font-medium hover:bg-teal-800 transition-colors duration-200">
                                Book Online Session
                            </Button>
                        </Link>
                        <Link href="/psychologists">
                            <Button className="border border-[#d4ece4] bg-white/50 px-5 py-2.5 lg:px-6 lg:py-3 rounded-[14px] text-[13px] lg:text-[14px] font-medium text-gray-700 hover:border-teal-400 hover:bg-white transition-colors duration-200">
    
                                Talk to a Psychologist
                            </Button>
                        </Link>
                    </div>
                    </FadeIn>
                </StaggerContainer>
                {/* Right section */}
                <SlideRight>
                <div className=" rounded-[24px] lg:rounded-[32px] overflow-hidden border border-[#d4ece4] bg-white p-2 lg:p-3 sm:pb-0 mt-4 md:mt-0">
                    <Image
                                  src="/images/online-hindi-counselling-mumbai-safe-space.png"
                                  alt="Calm and comfortable home space for online Hindi counselling in Mumbai"
                                  width={1200}
                                  height={900}
                                  priority
                                  className="w-full h-[260px] sm:h-[340px] lg:h-[460px] object-cover rounded-[18px] lg:rounded-[24px] brightness-[1.05] contrast-[0.92]"
                                />
                </div>
                </SlideRight>
            </div>
        </section>
    )
}