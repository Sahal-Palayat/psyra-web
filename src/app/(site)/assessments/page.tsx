import Link from "next/link"
import { assessments } from "@/lib/assessments"
import { ArrowRight } from "lucide-react"

export default function AssessmentsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#005C5C] via-[#00A099] to-[#F4FBFB] selection:bg-[#00A099]/20 selection:text-[#005C5C]">

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-20">
        {/* Header */}
        <header className="max-w-3xl mb-16 sm:mb-20 md:mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl
            font-serif font-medium tracking-tight text-white
            text-balance leading-tight drop-shadow-md">
            How are you <span className="italic opacity-90">really</span> feeling?
          </h1>

          <p className="text-base sm:text-lg md:text-xl
            text-white/90 mt-5 sm:mt-6 md:mt-10
            leading-relaxed text-pretty max-w-2xl font-light">
            Take a short, private assessment to better understand what you’re experiencing and explore your next steps.
          </p>
        </header>

        {/* Assessments Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {assessments.map((assessment) => (
            <div
              key={assessment.id}
              className="group relative bg-white
                p-6 sm:p-8 md:p-12
                rounded-[1.75rem] sm:rounded-[2rem] md:rounded-[2.5rem]
                shadow-[0_20px_50px_rgba(0,0,0,0.1)]
                border border-white
                transition-all duration-500
                hover:shadow-[0_40px_80px_rgba(0,160,153,0.15)]
                hover:-translate-y-2
                flex flex-col justify-between overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0
                w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32
                bg-[#00A099]/5
                rounded-bl-full
                -mr-4 -mt-4 sm:-mr-6 sm:-mt-6 md:-mr-8 md:-mt-8
                transition-transform duration-700
                group-hover:scale-150"
              />

              <div className="relative">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl
                  font-serif font-medium text-[#005C5C]
                  group-hover:text-[#00A099]
                  transition-colors duration-300">
                  {assessment.title}
                </h2>

                <p className="text-[#005C5C]/60
                  mt-3 sm:mt-4 md:mt-6
                  text-sm sm:text-base md:text-lg
                  leading-relaxed text-pretty font-normal">
                  {assessment.description}
                </p>
              </div>

              <div className="relative mt-8 sm:mt-10 md:mt-16
                flex items-center justify-between gap-4">
                <Link
                  href={`/how-is-mind?concern=${assessment.concern}`}
                  className="inline-flex items-center gap-3
                    px-5 sm:px-6 md:px-8
                    py-3 sm:py-3.5 md:py-4
                    bg-[#00A099] text-white
                    rounded-xl sm:rounded-2xl
                    font-bold text-sm sm:text-base md:text-lg
                    shadow-lg shadow-[#00A099]/20
                    hover:bg-[#005C5C]
                    hover:shadow-[#005C5C]/20
                    transition-all duration-300 group/link"
                >
                  {assessment.cta}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                </Link>

                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
                  rounded-full border-2 border-[#00A099]/20
                  flex items-center justify-center text-[#00A099]
                  group-hover:bg-[#00A099]/5
                  group-hover:border-[#00A099]
                  transition-all duration-500">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 -rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <footer className="mt-16 sm:mt-20 text-center">
          <p className="text-xs sm:text-sm text-[#005C5C]/60 max-w-xl mx-auto leading-relaxed">
            These assessments are for self-understanding and awareness. They are not a substitute for professional
            medical advice or diagnosis.
          </p>
        </footer>
      </div>
    </div>
  )
}
