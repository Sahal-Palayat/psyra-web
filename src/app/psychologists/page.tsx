import TherapistsCard from "@/components/Psychologist/Therapists/TherapiComp";
import { SkeletonCard } from "@/components/Psychologist/Therapists/TherapistLoder";
import { Suspense } from "react";

export default function PsychologistsPage() {
  return (
    <Suspense
      fallback={
        <div>
          <SkeletonCard />{" "}
        </div>
      }
    >
      <TherapistsCard />
    </Suspense>
  );
}
