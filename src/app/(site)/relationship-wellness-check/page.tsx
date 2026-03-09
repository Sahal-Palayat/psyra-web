"use client";

import { useRouter } from "next/navigation";
import Intro from "@/components/relationship-assessment/Intro";




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
