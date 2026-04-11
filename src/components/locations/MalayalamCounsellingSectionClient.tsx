"use client";

import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";

interface MalayalamCounsellingSectionProps {
  title: string;
  description: string;
  steps: string[];
  related: {
    title: string;
    description: string;
    linkText: string;
    link: string;
  };
}


export default function MalayalamCounsellingSectionClient({
  title,
  description,
  steps,
  related,
}: MalayalamCounsellingSectionProps) {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* LEFT */}
          <div className="lg:col-span-2"> 
            <div className="p-8 md:p-16 bg-[#00989D] text-white">
              
              <h3 className="text-2xl md:text-3xl font-serif mb-6 leading-snug">
                {title}
              </h3>

              <p className="text-sm md:text-lg text-white/80 leading-relaxed mb-6">
                {description}
              </p>

              <div className="flex items-center gap-3 group cursor-pointer mt-4">
                <Link href="/psychologists">
                  <span className="text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-1 group-hover:border-white transition-all">
                    Talk to a Malayalam Therapist
                  </span>
                </Link>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </div>

              <p className="mt-4 text-sm text-[#0F3D3E]">
                Learn more about our{" "}
                <Link
                  href="/online-counselling-services"
                  className="font-semibold underline underline-offset-4"
                >
                  Malayalam online counselling services
                </Link>
                .
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-serif text-[#1a3c34] pb-4 border-b border-[#1a3c34]/10">
              Your Journey
            </h3>

            <div className="space-y-5">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 items-center bg-[#43C6AC]/5 border border-[#43C6AC]/10 rounded-xl p-5">
                  <span className="flex items-center justify-center w-10 h-10 min-w-[40px] min-h-[40px] rounded-full bg-[#43C6AC]/15 text-sm font-bold text-[#43C6AC] shrink-0 leading-none">
                    {i + 1}
                  </span>
                  <p className="text-sm md:text-base text-[#1a3c34]/80">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RELATED */}
        <section className="mt-12 rounded-xl bg-[#f4f8f7] p-6">
          <h3 className="text-lg font-semibold text-[#1a3c34] mb-2">
            {related.title}
          </h3>

          <p className="text-sm text-gray-700 mb-3">
            {related.description}
          </p>

          <Link href={related.link} className="text-[#00989D] font-medium hover:underline">
            {related.linkText}
          </Link>
        </section>

      </div>
    </section>
  );
}
