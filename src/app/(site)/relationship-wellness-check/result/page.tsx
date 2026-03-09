"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Result from "@/components/relationship-assessment/Result";

type ResultData = {
  normalizedScore: number;
  riskLevel: "healthy" | "moderate" | "high";
};

export default function RelationshipResultPage() {
  const router = useRouter();

  const [data, setData] = useState<ResultData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchResult() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/relationship-assessment/latest`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Failed to fetch result");

        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Result fetch failed:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchResult();
  }, []);

  function handleCtaClick() {
    router.push("/online-counselling-services");
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-sm">Loading your result…</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p className="text-gray-500 text-sm">
          Unable to load your result. Please try again.
        </p>
      </div>
    );
  }

  return (
    <Result
      normalizedScore={data.normalizedScore}
      riskLevel={data.riskLevel}
      onCtaClick={handleCtaClick}
    />
  );
}
