"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import ProfileHeader from "@/components/psychologistProfile/header-profile";
import AboutSection from "@/components/psychologistProfile/aboutSection";
import QuickInfo from "@/components/psychologistProfile/quickInfo";
import Specializations from "@/components/psychologistProfile/specializations";
import NextAvailableSlot from "@/components/psychologistProfile/nextAvailableSlot";
import TestimonialSection from "@/components/psychologistProfile/testimonialSection";
import CTASection from "@/components/psychologistProfile/CTA-section";
// import {PsychologistExpertise} from "@/components/psychologistProfile/expertise";

import type { PsychologistProfile } from "@/types/psychologist";

import { toast } from "@/lib/toast";
import axios from "axios";

export default function TherapistDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [therapist, setTherapist] = useState<PsychologistProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadTherapistDetails() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/psychologists/${id}`
        );

        setTherapist(response.data);
      } catch (error) {
        console.log(error);
        toast.error("Technical issue");
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadTherapistDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#00989D] border-t-transparent"></div>
      </div>
    );
  }

  if (error || !therapist) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <ProfileHeader
        name={therapist.name}
        designation={therapist.designation}
        imageUrl={therapist.imageUrl}
      />

      {/* Quick Info */}
      <QuickInfo therapist={therapist} />

      <div className="mx-auto max-w-4xl px-4 pb-20 space-y-12 md:space-y-20">
        <AboutSection description={therapist.description} />

        <Specializations specialization={therapist.specializations} />

        <NextAvailableSlot
          monthlySlots={therapist.monthlySlots}
          psychologist={therapist}
        />
        
        {/* <PsychologistExpertise expertise={therapist.expertise} /> */}

        <TestimonialSection/>

        <CTASection psychologist={therapist} />
      </div>
    </main>
  );
}
