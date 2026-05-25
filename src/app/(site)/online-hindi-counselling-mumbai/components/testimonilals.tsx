import SlideLeft from "./motion/slide-left";
import SlideRight from "./motion/slide-right";

export default function Testimonials(){
    const comments=[
        {
            content:'"Managing work pressure and constant stress in Mumbai had become emotionally exhausting for me. Speaking to a Hindi-speaking psychologist helped me express my thoughts more comfortably and feel emotionally lighter after every session." '
        },
        {
            content:'"I was struggling with overthinking, academic stress, and low confidence. Online counselling sessions gave me a safe space to openly talk about my emotions and helped me understand myself better."'
        },
        {
            content:'"The online couples counselling sessions helped us improve communication and understand each other’s emotions better. The sessions felt supportive, comfortable, and easy to attend from home."'
        }
    ]
    return(
        <section className="bg-[#f0faf8] py-16 sm:py-20 lg:py-28 rounded-2xl px-4 sm:px-8 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
                    <SlideRight>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-gray-900 mb-4 sm:mb-5"
                    style={{ fontFamily: "'DM Serif Display', serif" }}>
                        What People Say About Online Counselling with <span className="italic text-teal-600"> Psyra</span>
                    </h3>
                    </SlideRight>
                </div>
                <div className="md:grid md:grid-cols-3 gap-4 mb-22 md:mb-0">
                    {comments.map((comment,index)=>(
                        <SlideLeft delay={index*0.1} key={comment.content}>
                        <TestimonialCard key={comment.content} content={comment.content}/>
                        </SlideLeft>
                    ))}
                </div>
            </div>
        </section>
    )
}
interface testimonial{
    content:string;
}
export function TestimonialCard({content}:testimonial){
    return(
        <div className="group relative overflow-hidden rounded-[22px] border border-teal-100 bg-white p-6 sm:p-7 flex flex-col gap-3 transition-all duration-500 ease-out
        hover:-translate-y-1 hover:border-teal-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] mb-6 md:mb-0">
            <span className="text-5xl leading-none text-teal-200 font-serif select-none">&ldquo;</span>
            <p className="text-[13px] sm:text-[14px] leading-relaxed text-gray-600 -mt-2">{content}</p>
            <div className="mt-auto pt-4 border-t border-teal-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                <span className="text-[11px] text-teal-600 font-medium tracking-wide uppercase">Verified Session</span>
              </div>
            </div>
        </div>
    )
}