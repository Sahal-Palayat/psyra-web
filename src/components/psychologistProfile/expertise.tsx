// "use client"

// interface PsychologistExpertiseProps {
//   expertise: string[] | Array<{ id: string; name: string }>
//   title?: string
// }

// export function PsychologistExpertise({
//   expertise,
//   title = "Areas of Expertise",
// }: PsychologistExpertiseProps) {
//   if (!expertise || expertise.length === 0) return null

//   return (
//     <section className="w-full space-y-6">
//       {/* Section Title */}
//       <div className="space-y-2">
//         <h2 className="text-2xl font-semibold text-[#00989D] tracking-tight">
//           {title}
//         </h2>
//         <div className="h-1 w-16 bg-[#00989D] rounded-full" />
//       </div>

//       {/* Expertise Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {expertise.map((item, index) => {
//           const itemName = typeof item === "string" ? item : item.name
//           const itemId = typeof item === "string" ? index : item.id

//           return (
//             <div
//               key={itemId}
//               className="
//                 group relative rounded-xl px-5 py-4 
//                 bg-[#F7FFFF]
//                 border border-[#E1F2F2]
//                 transition-all duration-200 
//                 hover:shadow-md 
//                 hover:border-[#00989D]/60 
//               "
//             >
             

//               {/* Expertise text */}
//               <p className="text-[#1A1A1A] font-medium text-base leading-relaxed pt-1">
//                 {itemName}
//               </p>
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }
