  "use client";

  import { Calendar1, Heart, Search } from "lucide-react";
  import { useEffect, useState, Suspense } from "react";
  import { useRouter, useSearchParams } from "next/navigation";
  import { motion } from "framer-motion";

  interface Psychologist {
    expertise: string[];
  }

  const HeroContent = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [concerns, setConcerns] = useState<string[]>([]);
    
    const activeConcern = searchParams.get("concern") || "";

    useEffect(() => {
      const fetchConcerns = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/psychologists`);
          const data = await response.json();
          if (data.status) {
            const allExpertise = data.psychologists.flatMap((p: Psychologist) => p.expertise);
            const uniqueExpertise = Array.from(new Set(allExpertise)) as string[];
            setConcerns(uniqueExpertise);
          }
        } catch (error) {
          console.error("Error fetching concerns:", error);
        }
      };
      fetchConcerns();
    }, []);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      const params = new URLSearchParams(window.location.search);
      
      if (!value) {
        params.delete("concern");
      } else {
        params.set("concern", value);
      }
      
      router.push(`?${params.toString()}`, { scroll: false });
    };

    return (
      <div className="w-full max-w-7xl mx-auto py-10 md:py-20 px-6">
        {/* Grid: 1 column on mobile, 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Always Visible */}
          <div className="space-y-10 md:space-y-14">
            <div className="text-left">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.1] mb-6"
              >
                Your Safe <span className="text-teal-600 italic">Space</span> <br className="" /> to Talk
              </motion.h1>
              <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg">
                Confidential online-counselling with trusted psychologists
              </p>
            </div>

            {/* Stepper */}
            <div className="relative border-l-2 border-teal-100 ml-4 pl-10 space-y-8">
              {[
                { icon: <Search size={18} />, text: "Choose therapist" },
                { icon: <Calendar1 size={18} />, text: "Book your link" },
                { icon: <Heart size={18} />, text: "Start healing" },
              ].map((step, idx) => (
                <div key={idx} className="relative flex items-center gap-4">
                  <span className="absolute -left-[59px]">
                    <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-teal-50 text-teal-500">
                      {step.icon}
                    </div>
                  </span>
                  <p className="text-slate-700 font-semibold text-lg md:text-xl">{step.text}</p>
                </div>
              ))}
            </div>

            {/* CTA  */}
            <motion.div
              initial={{opacity:0,y:10}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.5}}
              className='pt-4'
            >
              <button
                onClick={()=>{
                  document.getElementById('therapist_card')?.scrollIntoView({behavior:'smooth'});
                }}
                className='bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-slate-900/20 transition-all active:scale-95 flex items-center gap-2'
              >
                Talk to a Therapist
              </button>
            </motion.div>

          </div>

          {/* Right Column: Hidden on mobile/tablet, shown on desktop (lg) */}
          <div className="hidden lg:block relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10 rounded-[5rem] overflow-hidden shadow-2xl rotate-2"
            >
              <img 
                src="/images/Landing_hero.png" 
                alt="Therapy session" 
                className="w-full h-[650px] object-cover"
              />
            </motion.div>
            
            <div className="absolute -bottom-6 -left-10 z-20 bg-white p-7 rounded-[2rem] shadow-xl border border-slate-50 flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-500">
                <Heart fill="currentColor" size={24} />
              </div>
              <div>
                <p className="text-slate-900 font-bold">100% Confidential</p>
                <p className="text-slate-500 text-sm">Privacy is our priority</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  const LandingHero = () => {
    return (
      <section className="relative w-full pt-16 md:pt-24 mb-10 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -z-10 w-72 h-72 bg-teal-100/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-0 -z-10 w-96 h-96 bg-orange-50/40 rounded-full blur-[100px]" />

        <Suspense fallback={<div className="h-[600px] w-full animate-pulse bg-slate-50/50" />}>
          <HeroContent />
        </Suspense>
      </section>
    );
  };

  export default LandingHero;