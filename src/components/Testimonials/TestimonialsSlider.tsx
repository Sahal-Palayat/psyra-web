// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Star, Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Sara Thomas",
//     role: "Marketing Professional",
//     text: "I struggled with overthinking and low confidence. The sessions helped me rebuild my routine and mindset step by step.",
//     rating: 5,
//   },
//   {
//     name: "Arjun Menon",
//     role: "Software Engineer",
//     text: "I was burnt out for months. These sessions helped me gain clarity and set healthier boundaries at work.",
//     rating: 5,
//   },
//   {
//     name: "Rithu Simon",
//     role: "Teacher",
//     text: "Talking to a professional helped me process things I had pushed aside for years. I feel lighter and more stable now.",
//     rating: 5,
//   },
//   {
//     name: "Anandhu",
//     role: "Engineering student",
//     text: "I never realized how much stress I was holding until therapy helped me slow down. It genuinely changed how I approach my daily life.",
//     rating: 5,
//   },
// ];

// export default function TestimonialsSlider() {
//   const [visibleCount, setVisibleCount] = useState(1);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const trackRef = useRef<HTMLDivElement>(null);
//   const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

//   const TOTAL = testimonials.length;
//   const LOOPED = [...testimonials, ...testimonials, ...testimonials];

//   const SPEED = 4000;
//   const [isPaused, setIsPaused] = useState(false);

//   const MAX_LENGTH = 100; // Characters before truncation

//   const toggleExpand = (index: number) => {
//     setExpandedCards((prev) => {
//       const newSet = new Set(prev);
//       if (newSet.has(index)) {
//         newSet.delete(index);
//       } else {
//         newSet.add(index);
//       }
//       return newSet;
//     });
//   };

//   useEffect(() => {
//     const updateVisible = () => {
//       setVisibleCount(window.innerWidth < 768 ? 1 : 3);
//     };
//     updateVisible();
//     window.addEventListener("resize", updateVisible);
//     return () => window.removeEventListener("resize", updateVisible);
//   }, []);

//   useEffect(() => {
//     const slider = trackRef.current;
//     if (!slider) return;

//     const handleScroll = () => {
//       const cardWidth = slider.scrollWidth / LOOPED.length;
//       const scrollPos = slider.scrollLeft;
//       const index = Math.round(scrollPos / (cardWidth * visibleCount)) % TOTAL;
//       setCurrentIndex(index);
//     };

//     slider.addEventListener("scroll", handleScroll);
//     return () => slider.removeEventListener("scroll", handleScroll);
//   }, [visibleCount, TOTAL, LOOPED.length]);

//   useEffect(() => {
//     if (!trackRef.current) return;

//     const slider = trackRef.current;
//     const scrollAmount = (slider.scrollWidth / LOOPED.length) * visibleCount;

//     const interval = setInterval(() => {
//       if (!isPaused) {
//         slider.scrollLeft += scrollAmount;

//         if (slider.scrollLeft >= (slider.scrollWidth / 3) * 2) {
//           slider.scrollLeft = slider.scrollWidth / 3;
//         }
//       }
//     }, SPEED);

//     return () => clearInterval(interval);
//   }, [visibleCount, isPaused, LOOPED.length]);

//   return (
//     <div
//       className="relative py-8 px-4"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <button
//         onClick={() => (trackRef.current!.scrollLeft -= 300)}
//         className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 md:p-4 z-10 text-xl md:text-2xl hover:bg-gray-50 transition-colors"
//       >
//         ‹
//       </button>

//       <button
//         onClick={() => (trackRef.current!.scrollLeft += 300)}
//         className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-3 md:p-4 z-10 text-xl md:text-2xl hover:bg-gray-50 transition-colors"
//       >
//         ›
//       </button>

//       <div
//         ref={trackRef}
//         className="flex overflow-x-scroll scroll-smooth"
//         style={{
//           scrollBehavior: "smooth",
//           scrollbarWidth: "none",
//           msOverflowStyle: "none",
//         }}
//       >
//         {LOOPED.map((item, i) => {
//           const isExpanded = expandedCards.has(i);
//           const shouldTruncate = item.text.length > MAX_LENGTH;
//           const displayText =
//             isExpanded || !shouldTruncate
//               ? item.text
//               : `${item.text.slice(0, MAX_LENGTH)}...`;

//           return (
//             <div key={i} className="min-w-[100%] md:min-w-[33.333%] p-3">
//               {/* HIGHLIGHTED OUTLINE CARD */}
//               <div className="p-6 bg-white border-2 border-[#00989D]/30 hover:border-[#00989D] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-[320px] group flex flex-col">
//                 <div className="flex gap-1 mb-3">
//                   {[...Array(item.rating)].map((_, j) => (
//                     <Star
//                       key={j}
//                       size={18}
//                       className="fill-amber-400 text-amber-400"
//                     />
//                   ))}
//                 </div>

//                 <Quote
//                   size={32}
//                   className="text-[#00989D]/30 group-hover:text-[#00989D]/50 transition-colors mb-3"
//                 />

//                 <div
//                   className="flex-1 overflow-y-auto mb-2 pr-2"
//                   style={{
//                     scrollbarWidth: "none",
//                     msOverflowStyle: "none",
//                   }}
//                 >
//                   <p className="text-gray-700 text-sm md:text-base leading-relaxed">
//                     {`"${displayText}"`}
//                   </p>
//                 </div>

//                 {shouldTruncate && (
//                   <button
//                     onClick={() => toggleExpand(i)}
//                     className="text-[#00989D] hover:text-[#007a7e] text-sm font-medium transition-colors mb-3 text-left"
//                   >
//                     {isExpanded ? "Read less" : "Read more"}
//                   </button>
//                 )}

//                 <div className="border-t border-gray-200 pt-3 mt-4">
//                   <p className="font-semibold text-gray-900">{item.name}</p>
//                   <p className="text-xs text-gray-600">{item.role}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex justify-center gap-2 mt-6">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               const slider = trackRef.current;
//               if (slider) {
//                 const cardWidth = slider.scrollWidth / LOOPED.length;
//                 slider.scrollLeft = (TOTAL + index) * cardWidth * visibleCount;
//               }
//             }}
//             className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//               currentIndex === index
//                 ? "bg-[#00989D] scale-125"
//                 : "bg-gray-300 hover:bg-gray-400"
//             }`}
//             aria-label={`Go to testimonial ${index + 1}`}
//           />
//         ))}
//       </div>

//       <style jsx>{`
//         .overflow-x-scroll::-webkit-scrollbar {
//           display: none;
//         }
//         .overflow-y-auto::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }
