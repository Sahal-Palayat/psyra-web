"use client";

import { useRouter } from "next/navigation";
import Intro from "@/components/relationship-assessment/Intro";

export const metadata = {
  title: "Relationship Wellness Assessment | Check Your Relationship Health | Psyra",
  description:
    "Take the relationship wellness assessment to understand the health of your relationship. Answer guided questions and gain insights into emotional connection and well-being with Psyra.",
};


export default function RelationshipWellnessCheckPage() {
  const router = useRouter();

  return (
    <Intro
      onStart={() =>
        router.push("/relationship-wellness-check/questions")
      }
    />
  );
}
