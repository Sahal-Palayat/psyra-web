"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Result from "@/components/relationship-assessment/Result";

export default function RelationshipResultPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const totalScore = Number(searchParams.get("score"));
  const toxicityScore = Number(searchParams.get("toxicity"));
  const label = searchParams.get("label");

  // Fallback safety
  if (!label || isNaN(totalScore)) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-sm">
          Unable to load your result. Please try again.
        </p>
      </div>
    );
  }

  function handleCtaClick() {
    // You can change this later (login, booking, whatsapp, etc.)
    router.push("/services");
  }

  return (
    <Result
      totalScore={totalScore}
      toxicityScore={toxicityScore}
      label={decodeURIComponent(label)}
      onCtaClick={handleCtaClick}
    />
  );
}
