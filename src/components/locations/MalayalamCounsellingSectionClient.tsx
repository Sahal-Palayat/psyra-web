"use client";

import Link from "next/link";
import {
  ArrowRight,
} from "lucide-react";

interface MalayalamCounsellingSectionProps {
  countryName: string;
  displayName: string;
}

export default function MalayalamCounsellingSectionClient({
  countryName,
}: MalayalamCounsellingSectionProps) {
 
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* CULTURAL CONTEXT & STEPS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="p-8 md:p-16 bg-[#00989D] text-white">
              <h3 className="text-2xl md:text-3xl font-serif mb-6 leading-snug">
                Why language matters in therapy.
              </h3>

              <p className="text-sm md:text-lg text-white/80 leading-relaxed font-sans mb-6">
                Speaking in your first language makes therapy more effective.
                Our Malayalam speaking psychologists understand the emotional,
                cultural, and family contexts that are important to Malayalis
                living in {countryName}.
              </p>

              <div className="flex items-center gap-3 group cursor-pointer mt-4">
                <Link href="/psychologists">
                  <span className="text-xs uppercase tracking-widest font-bold border-b border-white/20 pb-1 group-hover:border-white transition-all cursor-pointer">
                    Talk to a Malayalam Therapist
                  </span>
                </Link>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </div>
              <p className="mt-4 text-sm text-[#0F3D3E]">
                Learn more about our{" "}
                <Link
                  href="/services"
                  className="font-semibold text-[#0F3D3E] underline underline-offset-4 decoration-[#0F3D3E]/60 hover:decoration-[#0F3D3E]"
                >
                  Malayalam online counselling services
                </Link>
                .
              </p>
            </div>
          </div>

          <div className="space-y-8 py-6 md:py-8">
            <h3 className="text-xl md:text-2xl font-serif text-[#1a3c34] pb-4 border-b border-[#1a3c34]/10">
              Your Journey
            </h3>

            <div className="space-y-6">
              {[
                "Book your session online with an experienced Malayalam counsellor.",
                "Connect comfortably in Malayalam via video, chat, or phone.",
                "Receive personalised, culturally sensitive guidance.",
              ].map((step, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start 
                   bg-[#43C6AC]/5 
                   border border-[#43C6AC]/10 
                   rounded-xl p-4"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#43C6AC]/15 text-xs font-bold text-[#43C6AC] shrink-0">
                    {i + 1}
                  </span>

                  <p className="text-sm md:text-base text-[#1a3c34]/80 leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="mt-12 rounded-xl bg-[#f4f8f7] p-6">
          <h3 className="text-lg font-semibold text-[#1a3c34] mb-2">
            Related reading
          </h3>

          <p className="text-sm text-gray-700 mb-3">
            Understanding how the nervous system responds to stress and
            emotional overload can help make sense of anxiety, burnout, and
            emotional exhaustion experienced while living abroad.
          </p>

          <Link
            href="/blogs/why-trauma-triggers-the-body-nervous-system-healing"
            className="text-[#00989D] font-medium hover:underline"
          >
            Read about how trauma and stress affect the body
          </Link>
        </section>
      </div>
    </section>
  );
}
