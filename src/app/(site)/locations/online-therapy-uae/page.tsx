// "use client";

// import Link from "next/link";
// import dynamic from "next/dynamic";

// import Concerns from "@/components/Concerns";
// import MentalHealthLoader from "@/components/lazy/mental-health-loader";
// import { WhatsAppChat } from "@/components/WhatsappChat/whatsapp-chat";

// // Dynamic imports
// const DynamicPsychologistCarousel = dynamic(
//   () =>
//     import("@/components/Psychologist/SimpleCarousel/psychologist-carousel"),
//   { loading: () => <MentalHealthLoader /> }
// );

// const DynamicFaq = dynamic(() => import("@/components/Faq"), {
//   loading: () => <MentalHealthLoader />,
// });

// export default function UAEOnlineTherapyPage() {
//   return (
//     <main className="min-h-screen bg-[#F7F8F2]">
//       {/* HERO SECTION */}
//       <section className="bg-gradient-to-b from-[#00BEA5] to-[#00989D] text-white px-6 pt-28 pb-24">
//   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
//     {/* LEFT: Content */}
//     <div>
//       <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
//         Online Therapy for UAE Residents
//       </h1>

//       <p className="text-lg md:text-xl text-white/90 mb-6">
//         Thoughtful, confidential mental health support designed for individuals
//         living and working in the UAE — accessible wherever you are.
//       </p>

//       <p className="text-sm text-white/80 mb-8">
//         Sessions are conducted online by qualified psychologists in a safe,
//         respectful, and private environment.
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4">
//         <Link
//           href="/assessments"
//           className="bg-white text-[#00989D] font-semibold px-8 py-4 rounded-lg text-center"
//         >
//           Begin Your Assessment
//         </Link>

//         <Link
//           href="/concerns"
//           className="border border-white text-white font-semibold px-8 py-4 rounded-lg text-center"
//         >
//           Explore Concerns
//         </Link>
//       </div>
//     </div>

//     {/* RIGHT: Soft Visual */}
//     <div className="hidden md:flex justify-center">
//       <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center">
//         <span className="text-white/70 text-sm text-center px-6">
//           Supporting mental wellbeing for UAE residents
//         </span>
//       </div>
//     </div>

//   </div>
// </section>


//       {/* UAE CONTEXT SECTION */}
//       <section className="px-6 py-16">
//         <div className="max-w-5xl mx-auto space-y-6 text-gray-700">
//           <p>
//             Living in the UAE often involves balancing work pressure, cultural
//             transitions, and time away from loved ones. These experiences can
//             quietly affect emotional wellbeing, even when life appears stable.
//           </p>

//           <p>
//             Psyra offers online therapy tailored for individuals in the UAE,
//             making professional mental health support accessible, private, and
//             flexible — without the need for travel.
//           </p>

//           <p className="font-medium text-gray-800">
//             All sessions are confidential and conducted in a safe, respectful
//             environment.
//           </p>
//         </div>
//       </section>

//       {/* CONCERNS SECTION */}
//       <Concerns />

//       {/* PSYCHOLOGIST CAROUSEL */}
//       <section className="py-16">
//         <DynamicPsychologistCarousel />
//       </section>

//       {/* FAQ SECTION */}
//       <section className="py-16">
//         <DynamicFaq />
//       </section>

//       {/* WHATSAPP CHAT */}
//       <WhatsAppChat />
//     </main>
//   );
// }


"use client"

import Link from "next/link"
import { MoveRight, ShieldCheck, Globe, Clock } from "lucide-react"

import Concerns from "@/components/Concerns"
import { WhatsAppChat } from "@/components/WhatsappChat/whatsapp-chat"
import DynamicPsychologistCarousel from "@/components/Psychologist/SimpleCarousel/psychologist-carousel"
import DynamicFaq from "@/components/Faq"

export default function UAEOnlineTherapyPage() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/10">
      {/* HEADER / NAVIGATION STUB */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-xl font-serif tracking-tight">PSYRA.</div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <Link href="/assessments" className="hover:opacity-70 transition-opacity">
            Assessments
          </Link>
          <Link href="/concerns" className="hover:opacity-70 transition-opacity">
            Concerns
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </div>
        <Link href="/book" className="text-sm font-medium border-b border-white pb-1">
          Book Appointment
        </Link>
      </nav>

      {/* HERO SECTION - Inspired by Artifact & Closet Creations */}
      <section className="relative pt-44 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-9xl font-serif text-foreground leading-[0.9] tracking-tighter mb-12">
            Wellness meets <br />
            <span className="italic">purposeful</span> care.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end mt-24">
            <div className="text-left space-y-4 order-2 md:order-1">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground">The Approach</p>
              <p className="text-lg leading-relaxed text-foreground/80">
                Thoughtful, confidential mental health support designed for individuals living and working in the UAE.
              </p>
            </div>

            <div className="relative aspect-[4/5] bg-muted overflow-hidden group order-1 md:order-2">
              <img
                src="/minimalist-calm-architecture-uae.jpg"
                alt="Calm Environment"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="text-right space-y-6 order-3">
              <div className="flex flex-col items-end gap-4">
                <Link
                  href="/assessments"
                  className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors"
                >
                  Start Assessment
                  <div className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <MoveRight className="w-4 h-4" />
                  </div>
                </Link>
                <p className="text-xs text-muted-foreground max-w-[200px]">
                  Private sessions conducted by qualified psychologists in a safe environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UAE CONTEXT - Inspired by Casa Portufornia minimal layout */}
      <section className="px-6 py-32 bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-serif leading-tight mb-8">
                Supporting the <br /> modern expat journey.
              </h2>
              <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                <p>
                  Living in the UAE often involves balancing intense work pressure, cultural transitions, and distance
                  from home. These experiences can quietly affect emotional wellbeing.
                </p>
                <p>
                  Psyra offers online therapy tailored for the UAE lifestyle, making professional support accessible,
                  private, and flexible — without the need for travel.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/3 grid grid-cols-1 gap-8">
              {[
                { icon: ShieldCheck, label: "Confidential", desc: "Private & secure" },
                { icon: Globe, label: "UAE-Focused", desc: "Cultural nuance" },
                { icon: Clock, label: "Flexible", desc: "Your schedule" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-full">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-sm uppercase tracking-wider">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONCERNS SECTION - Wrapped in a cleaner container */}
      <div className="bg-background border-y border-foreground/5">
        <Concerns />
      </div>

      {/* PSYCHOLOGIST CAROUSEL */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-5xl font-serif tracking-tighter italic">The Specialists.</h2>
            <Link href="/specialists" className="text-sm font-bold uppercase border-b-2 border-primary pb-1">
              View All
            </Link>
          </div>
          <DynamicPsychologistCarousel />
        </div>
      </section>

      {/* FAQ SECTION - Styled with Artifact-like simplicity */}
      <section className="py-32 px-6 bg-foreground text-background">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-12 opacity-50">Common Questions</p>
          <DynamicFaq />
        </div>
      </section>

      {/* FOOTER STUB - Inspired by Artifact/CPF */}
      <footer className="px-6 py-20 border-t border-foreground/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-8xl font-serif tracking-tighter opacity-10 select-none">PSYRA.</h3>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest">Connect</p>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  WhatsApp
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest">Newsletter</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border-b border-foreground/20 py-2 text-sm flex-1 outline-none focus:border-primary transition-colors"
              />
              <button className="text-xs font-bold uppercase tracking-widest">Submit</button>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppChat />
    </main>
  )
}
