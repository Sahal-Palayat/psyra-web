"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionTitle";
import {
  ArrowRight,
  Globe2,
  HeartHandshake,
  ShieldCheck,
  Users2,
} from "lucide-react";
import { Card } from "@/components/ui/card";

interface MalayalamCounsellingSectionProps {
  countryName: string;
  displayName: string;
}

export default function MalayalamCounsellingSectionClient({
  countryName,
}: MalayalamCounsellingSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  const supportAreas = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Stress & Anxiety Therapy",
      description: `Online Malayalam counselling for stress and anxiety faced by Malayalis in ${countryName}.`,
      bg: "bg-[#eef4f1]",
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Relationship & Marriage Counselling",
      description:
        "Malayalam therapy support for couples and relationship concerns.",
      bg: "bg-white",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Family Counselling",
      description:
        "Guidance for family-related emotional challenges while living abroad.",
      bg: "bg-white",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Malayali Mental Health Support",
      description: `Mental health support for Malayalis adjusting to life in ${countryName}.`,
      bg: "bg-[#eef4f1]",
    },
  ];

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* HERO INTRO */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 md:mb-20 rounded-3xl
             bg-gradient-to-br from-[#f4fcfa] via-[#e1f4ef] to-[#c6ebe3]
             px-6 py-12 md:px-14 md:py-18
             border border-[#00989D]/20
             shadow-[0_10px_30px_rgba(0,152,157,0.08)]"
        >
          {/* subtle glow accent */}
          <div
            className="pointer-events-none absolute -top-20 -right-20 h-72 w-72
                  rounded-full bg-[#00989D]/15 blur-3xl"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] font-semibold text-[#00989D] mb-4">
              Malayalam Online Therapy
            </p>

            <SectionHeader className="relative mb-6 leading-snug md:leading-[1.1]">
              <span className="relative z-10">
                Online Malayalam Counselling for Malayalis in {countryName}
              </span>
            </SectionHeader>

            <p className="text-sm md:text-lg text-[#1a3c34]/75 leading-relaxed font-sans mb-6">
              Many Malayalis living in {countryName} feel more comfortable
              speaking in Malayalam when discussing personal and emotional
              concerns. Psyra connects you with trained Malayalam-speaking
              psychologists who understand both the language and cultural
              background.
            </p>

            <p className="mt-4 text-sm text-[#0F3D3E] leading-relaxed">
              From{" "}
              <Link
                href="/concerns/work-related-challenges"
                className="font-medium text-[#007C80] hover:underline underline-offset-4"
              >
                work stress
              </Link>{" "}
              and{" "}
              <Link
                href="/concerns/stress"
                className="font-medium text-[#007C80] hover:underline underline-offset-4"
              >
                homesickness
              </Link>{" "}
              to{" "}
              <Link
                href="/concerns/relationship-issues"
                className="font-medium text-[#007C80] hover:underline underline-offset-4"
              >
                relationships
              </Link>{" "}
              and{" "}
              <Link
                href="/blogs/hidden-signs-of-depression-that-dont-look-like-sadness"
                className="font-medium text-[#007C80] hover:underline underline-offset-4"
              >
                identity concerns
              </Link>
              , you’ll find a safe, culturally sensitive space to talk and heal.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full
                   bg-[#00989D] px-8 py-3 text-white text-sm font-semibold
                   shadow-[0_6px_20px_rgba(0,152,157,0.35)]
                   hover:bg-[#007f84] hover:shadow-[0_8px_26px_rgba(0,152,157,0.45)]
                   transition"
              >
                Book a Session
              </a>

              <a
                href="/psychologists"
                className="inline-flex items-center justify-center rounded-full
                   border-2 border-[#00989D]/50 px-8 py-3 text-[#00989D]
                   text-sm font-semibold
                   hover:bg-[#00989D]/10 transition"
              >
                Find your therapist
              </a>
            </div>
          </div>
        </motion.section>

        {/* SUPPORT GRID */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h3 className="text-2xl md:text-4xl font-serif tracking-tight text-[#00989D]">
              How Malayalam counseling supports you.
            </h3>
            <p className="text-sm text-[#1a3c34]/60 max-w-xs font-sans">
              Expert guidance tailored to the specific emotional experiences of
              the Malayali community living in {countryName}.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a3c34]/5 border border-[#1a3c34]/5 overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {supportAreas.map((area, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <Card
                  className={`border-none rounded-none shadow-none p-8 h-full md:p-12 min-h-[260px] md:min-h-[320px] transition-colors duration-500 hover:bg-[#00989D] group ${area.bg}`}
                >
                  <div className="w-12 h-12 rounded-full border border-[#1a3c34]/10 flex items-center justify-center mb-10 group-hover:border-white/20 transition-colors">
                    <div className="text-[#1a3c34] group-hover:text-white transition-colors">
                      {area.icon}
                    </div>
                  </div>
                  <h4 className="text-2xl font-serif text-[#1a3c34] mb-4 group-hover:text-white transition-colors">
                    {area.title}
                  </h4>
                  <p className="text-sm text-[#1a3c34]/60 leading-relaxed group-hover:text-white/60 transition-colors">
                    {area.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CULTURAL CONTEXT & STEPS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div className="p-8 md:p-16 bg-[#00989D] text-white">
              <h3 className="text-2xl md:text-3xl font-serif mb-6 leading-snug">
                Why language matters in therapy.
              </h3>

              <p className="text-sm md:text-lg text-white/80 leading-relaxed font-sans mb-6">
                Speaking in your first language makes therapy more effective.
                Our Malayalam-speaking psychologists understand the emotional,
                cultural, and family contexts that are important to Malayalis
                living abroad.
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
