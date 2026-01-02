"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionTitle";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const concerns = [
  {
    title: "Depression",
    slug: "depression",
    description:
      "Finding light and purpose through compassionate, evidence-based support.",
    color: "bg-[#eef4f1]",
  },
  {
    title: "Panic Attacks",
    slug: "panic-attacks",
    description:
      "Regaining control and calm through specialized anxiety management.",
    color: "bg-white",
  },
  {
    title: "Personality Disorders",
    slug: "personality-disorders",
    description:
      "Understanding complex emotional patterns for a more stable tomorrow.",
    color: "bg-white",
  },
  {
    title: "Anxiety Disorders",
    slug: "anxiety-disorders",
    description:
      "Quietening the noise and navigating life with newfound confidence.",
    color: "#e4ede8",
  },
  {
    title: "Stress",
    slug: "stress",
    description:
      "Developing resilience and coping skills for everyday life stress.",
    color: "bg-white",
  },
  {
    title: "Sexual Issues",
    slug: "sexual-issues",
    description:
      "Private, professional guidance for intimate emotional wellbeing.",
    color: "bg-[#eef4f1]",
  },
  {
    title: "Relationship Issues",
    slug: "relationship-issues",
    description:
      "Fostering deeper connections and navigating interpersonal transitions.",
    color: "bg-white",
  },
  {
    title: "Work Related Issues",
    slug: "work-related-issues",
    description:
      "Navigating career challenges and expat professional transitions.",
    color: "bg-[#eef4f1]",
  },
];

export default function Concerns() {
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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="pt-16 pb-24 px-6 bg-[#f8faf9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4 md:gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#43C6AC] mb-4">
              Specialized Care
            </p>
            <SectionHeader className="mb-0">
              What we can help you overcome.
            </SectionHeader>
          </div>

          {/* Desktop-only support text */}
          <p className="hidden md:block text-lg text-[#1a3c34]/60 max-w-sm font-sans leading-relaxed">
            Professional, culturally sensitive mental health support for
            everyday life challenges.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a3c34]/5 border border-[#1a3c34]/5 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {concerns.map((concern, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Link
                href={`/concerns/${concern.slug}`}
                className="group block h-full"
              >
                <Card
                  className={`h-full border-none rounded-none shadow-none flex flex-col p-6 transition-colors duration-500 hover:bg-[#00989D] group/card md:p-8 min-h-[280px] md:min-h-[360px] ${
                    concern.color.startsWith("#") ? "" : concern.color
                  }`}
                  style={
                    concern.color.startsWith("#")
                      ? { backgroundColor: concern.color }
                      : {}
                  }
                >
                  <div className="mb-auto">
                    <div className="w-12 h-12 rounded-full border border-[#1a3c34]/10 flex items-center justify-center mb-12 group-hover/card:border-white/20 transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-[#1a3c34] group-hover/card:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl md:text-3xl font-serif tracking-tight text-[#1a3c34] mb-6 group-hover/card:text-white transition-colors">
                      {concern.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    <p className="text-sm text-[#1a3c34]/60 leading-relaxed group-hover/card:text-white/60 transition-colors">
                      {concern.description}
                    </p>
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#1a3c34] border-b border-[#1a3c34]/20 pb-1 group-hover/card:text-white group-hover/card:border-white/20 transition-all">
                      Understand this concern
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
