"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AnimatedConcernGrid({
  concerns,
}: {
  concerns: {
    title: string;
    slug: string;
    description: string;
    color: string;
  }[];
}) {
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

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a3c34]/5 border border-[#1a3c34]/5 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {concerns.map((concern, index) => (
        <motion.div key={index} variants={itemVariants} className="h-full">
          <Link href={`/concerns/${concern.slug}`} className="group block h-full">
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
  );
}
