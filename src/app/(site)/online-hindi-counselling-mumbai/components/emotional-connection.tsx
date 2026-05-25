import FadeIn from "./motion/fade-in"
import SlideLeft from "./motion/slide-left"
import SlideRight from "./motion/slide-right"
import SlideUp from "./motion/slide-up"
import StaggerContainer from "./motion/stagger-container"

export default function EmotionalConnection(){
    return (
        <section className="py-16 lg:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 md:grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Left heading */}
                
                <div className="flex justify-center items-center"> 
                    <SlideUp>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-gray-900 mb-6"
                    style={{ fontFamily: "'DM Serif Display', serif" }}>
                        Sometimes It Feels Easier to Express 
                        <span className="italic text-teal-600"> Emotions in Hindi</span>
                    </h2>
                    </SlideUp>
                </div>
                
                <StaggerContainer>
                    <FadeIn>
                <div className="space-y-6 lg:space-y-8">
                    <div className="bg-teal-50/30 border border-teal-100 p-8 rounded-2xl">
                    <SlideLeft>
                    <div className="border-l-2 border-[#3dbf7a] pl-5 mb-8">
                        <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
                            Mental health conversations are deeply personal, and many individuals feel emotionally more comfortable speaking in a familiar language.
                            Hindi counselling sessions can help people express emotions naturally without hesitation or emotional disconnect.
                        </p>
                    </div>
                    </SlideLeft>
                    <SlideRight>
                    <div className="border-l-2 border-[#3dbf7a] pl-5">
                        <p className="text-[14px] sm:text-[15px] text-gray-500 leading-relaxed">
                            Our Hindi-speaking psychologists understand the emotional, cultural, family, and lifestyle pressures commonly experienced by individuals
                            living in Mumbai, helping therapy conversations feel more relatable and supportive.
                        </p>
                    </div>
                    </SlideRight>
                    </div>
                </div>
                </FadeIn>
                </StaggerContainer>
            </div>
        </section>
    )
}