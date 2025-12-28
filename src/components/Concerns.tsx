"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { SectionHeader } from "./SectionTitle";
import Link from "next/link";

const DepressionIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="#3B82F6"
      opacity="0.1"
      stroke="#3B82F6"
      strokeWidth="2"
    />
    <circle cx="35" cy="40" r="5" fill="#3B82F6" />
    <circle cx="65" cy="40" r="5" fill="#3B82F6" />
    <path
      d="M 35 65 Q 50 55 65 65"
      stroke="#3B82F6"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const PanicIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="#EF4444"
      opacity="0.1"
      stroke="#EF4444"
      strokeWidth="2"
    />
    <circle
      cx="50"
      cy="50"
      r="30"
      fill="none"
      stroke="#EF4444"
      strokeWidth="2"
    />
    <circle
      cx="50"
      cy="50"
      r="20"
      fill="none"
      stroke="#EF4444"
      strokeWidth="2"
    />
    <circle cx="50" cy="50" r="10" fill="#EF4444" />
  </svg>
);

const PersonalityIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="#6366F1"
      opacity="0.1"
      stroke="#6366F1"
      strokeWidth="2"
    />
    <circle cx="50" cy="35" r="12" fill="#6366F1" />
    <path d="M 35 50 Q 35 60 50 65 Q 65 60 65 50" fill="#6366F1" />
    <path
      d="M 30 70 L 70 70"
      stroke="#6366F1"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const AnxietyIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="#F97316"
      opacity="0.1"
      stroke="#F97316"
      strokeWidth="2"
    />
    <path
      d="M 50 30 L 55 45 L 70 45 L 58 55 L 63 70 L 50 60 L 37 70 L 42 55 L 30 45 L 45 45 Z"
      fill="#F97316"
    />
  </svg>
);

const StressIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="#06B6D4"
      opacity="0.1"
      stroke="#06B6D4"
      strokeWidth="2"
    />
    <path
      d="M 30 50 Q 35 40 40 50 Q 45 60 50 50 Q 55 40 60 50 Q 65 60 70 50"
      stroke="#06B6D4"
      strokeWidth="3"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const SexualIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="#EC4899"
      opacity="0.1"
      stroke="#EC4899"
      strokeWidth="2"
    />
    <circle cx="40" cy="45" r="8" fill="#EC4899" />
    <path
      d="M 40 53 L 40 65 M 35 58 L 45 58"
      stroke="#EC4899"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="60"
      cy="50"
      r="10"
      fill="none"
      stroke="#EC4899"
      strokeWidth="2"
    />
  </svg>
);

const RelationshipIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="#22C55E"
      opacity="0.1"
      stroke="#22C55E"
      strokeWidth="2"
    />
    <circle cx="35" cy="40" r="8" fill="#22C55E" />
    <circle cx="65" cy="40" r="8" fill="#22C55E" />
    <path
      d="M 35 48 L 35 60 M 65 48 L 65 60 M 35 60 Q 50 70 65 60"
      stroke="#22C55E"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

const WorkIcon = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16">
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="#FBBF24"
      opacity="0.1"
      stroke="#FBBF24"
      strokeWidth="2"
    />
    <rect
      x="30"
      y="35"
      width="40"
      height="35"
      rx="3"
      fill="none"
      stroke="#FBBF24"
      strokeWidth="2"
    />
    <path
      d="M 35 35 L 35 30 Q 35 25 40 25 L 60 25 Q 65 25 65 30 L 65 35"
      stroke="#FBBF24"
      strokeWidth="2"
      fill="none"
    />
    <line x1="40" y1="50" x2="60" y2="50" stroke="#FBBF24" strokeWidth="2" />
  </svg>
);

const concerns = [
  {
    title: "Depression",
    slug: "depression",
    icon: DepressionIcon,
    color: "from-blue-50 to-blue-100",
    borderColor: "border-blue-200",
  },
  {
    title: "Panic attacks",
    slug: "panic-attacks",
    icon: PanicIcon,
    color: "from-red-50 to-red-100",
    borderColor: "border-red-200",
  },
  {
    title: "Personality disorders",
    slug: "personality-disorders",
    icon: PersonalityIcon,
    color: "from-indigo-50 to-indigo-100",
    borderColor: "border-indigo-200",
  },
  {
    title: "Anxiety disorders",
    slug: "anxiety-disorders",
    icon: AnxietyIcon,
    color: "from-orange-50 to-orange-100",
    borderColor: "border-orange-200",
  },
  {
    title: "Stress",
    slug: "stress",
    icon: StressIcon,
    color: "from-cyan-50 to-cyan-100",
    borderColor: "border-cyan-200",
  },
  {
    title: "Sexual issues",
    slug: "sexual-issues",
    icon: SexualIcon,
    color: "from-pink-50 to-pink-100",
    borderColor: "border-pink-200",
  },
  {
    title: "Relationship issues",
    slug: "relationship-issues",
    icon: RelationshipIcon,
    color: "from-green-50 to-green-100",
    borderColor: "border-green-200",
  },
  {
    title: "Work Related Challenges",
    slug: "work-related-challenges",
    icon: WorkIcon,
    color: "from-amber-50 to-amber-100",
    borderColor: "border-amber-200",
  },
];

export default function Concerns() {
  // const handleWhatsAppRedirect = (concern: string) => {
  //   const phoneNumber = "+918891724199";
  //   const message = encodeURIComponent(`Hi, I need help with ${concern}`);
  //   window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  // };

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

  return (
    <div className="mb-12 ">
      {/* Concerns Grid Section */}
      <section className="py-12 px-4 bg-[#00BEA5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeader>What We Can Help You Overcome</SectionHeader>
            <p className="text-gray-600  max-w-2xl mx-auto text-[10px] md:text-[16px]">
              We provide compassionate support for a wide range of mental health
              concerns
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {concerns?.map((concern, index) => {
              const IconComponent = concern.icon;
              return (
                <motion.div key={index}>
                  <Link
                    href={`/concerns/${concern.slug}`}
                    className="block h-full"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer border-2 border-gray-200 bg-teal-50 group overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-300" />

                      <CardContent className="px-5 text-center relative z-10 flex flex-col items-center justify-center h-full min-h-32">
                        <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent />
                        </div>

                        <h3 className="text-base font-bold text-gray-800 group-hover:text-gray-900 transition-colors leading-tight">
                          {concern.title}
                        </h3>

                        <p className="text-xs text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Learn more
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
