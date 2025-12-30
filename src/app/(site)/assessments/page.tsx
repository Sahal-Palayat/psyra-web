// import Link from "next/link";
// import { assessments } from "@/lib/assessments";

// export default function AssessmentsPage() {
//   return (
//     <div className="min-h-screen bg-[#E8F6F0] py-16">
//       <div className="max-w-5xl mx-auto px-4">
//         {/* Header */}
//         <h1 className="text-3xl font-bold text-center text-[#0F766E]">
//           Mental Health Assessments
//         </h1>

//         <p className="text-center text-gray-600 mt-4">
//           Take a few minutes to understand your mental well-being better.
//         </p>

//         {/* Assessments Grid */}
//         <div className="mt-12 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
//           {assessments.map((assessment) => (
//             <div
//               key={assessment.id}
//               className="bg-white rounded-xl p-6 shadow-md border border-[#D1FAE5]"
//             >
//               <h2 className="text-xl font-semibold text-[#065F46]">
//                 {assessment.title}
//               </h2>

//               <p className="text-gray-600 mt-3">
//                 {assessment.description}
//               </p>

//               <Link
//                 href={`/how-is-mind?concern=${assessment.concern}`}
//                 className="inline-block mt-6 bg-[#10B981] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#059669] transition"
//               >
//                 {assessment.cta}
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from "next/link"
import { assessments } from "@/lib/assessments"
import { ArrowRight, Sparkles } from "lucide-react"

export default function AssessmentsPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#005C5C] via-[#00A099] to-[#F4FBFB] selection:bg-[#00A099]/20 selection:text-[#005C5C]">
      {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[30rem] font-bold text-white/5 select-none leading-none">ASSESS</span>
      </div> */}

      {/* Floating Header */}
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-[#005C5C] md:bg-[#005C5C]/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg">
              <div className="w-4 h-4 bg-[#00A099] rounded-sm" />
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight text-white">Psyras</span>
          </div>
          <Link
            href="/callback"
            className="text-white font-medium hover:bg-white hover:text-[#005C5C] transition-all duration-300 flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 border border-white/20 shadow-sm"
          >
            Request a Callback
          </Link>
        </div>
      </nav> */}

      <div className="relative max-w-6xl mx-auto px-6 pt-40 pb-20">
        {/* Header */}
        <header className="max-w-3xl mb-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-semibold mb-8 backdrop-blur-md border border-white/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 fill-current" />
            <span className="uppercase tracking-wider">Scientifically Validated</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight text-white text-balance leading-[1.1] drop-shadow-md">
            How are you <span className="italic opacity-90">really</span> feeling?
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mt-10 leading-relaxed text-pretty max-w-2xl font-light">
            Our private, clinical screenings help you understand your mental well-being and find the right path forward.
          </p>
        </header>

        {/* Assessments Grid */}
        <div className="grid gap-8 md:grid-cols-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {assessments.map((assessment) => (
            <div
              key={assessment.id}
              className="group relative bg-white p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,160,153,0.15)] hover:-translate-y-2 flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00A099]/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150" />

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#005C5C] group-hover:text-[#00A099] transition-colors duration-300">
                  {assessment.title}
                </h2>

                <p className="text-[#005C5C]/60 mt-6 text-lg leading-relaxed text-pretty font-normal">
                  {assessment.description}
                </p>
              </div>

              <div className="relative mt-16 flex items-center justify-between">
                <Link
                  href={`/how-is-mind?concern=${assessment.concern}`}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#00A099] text-white rounded-2xl font-bold text-lg shadow-lg shadow-[#00A099]/20 hover:bg-[#005C5C] hover:shadow-[#005C5C]/20 transition-all duration-300 group/link"
                >
                  {assessment.cta}
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                </Link>

                <div className="w-14 h-14 rounded-full border-2 border-[#00A099]/20 flex items-center justify-center text-[#00A099] group-hover:bg-[#00A099]/5 group-hover:border-[#00A099] transition-all duration-500">
                  <ArrowRight className="w-6 h-6 -rotate-45" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <footer className="mt-32 pt-16 border-t border-[#005C5C]/10 flex flex-col md:flex-row justify-between items-start gap-12">
          <p className="text-base text-[#005C5C]/60 max-w-sm leading-relaxed">
            These screenings are for educational purposes and do not replace professional medical diagnosis or
            treatment.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm font-bold tracking-widest uppercase text-[#005C5C]/40">
            <span className="hover:text-[#00A099] transition-colors cursor-default">Confidential</span>
            <span className="hover:text-[#00A099] transition-colors cursor-default">Clinical Grade</span>
            <span className="hover:text-[#00A099] transition-colors cursor-default">Immediate Results</span>
          </div>
        </footer>
      </div>
    </div>
  )
}
