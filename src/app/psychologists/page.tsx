import TherapistsCard from "@/components/Psychologist/Therapists/TherapiComp";
import { Suspense } from "react";

export default function PsychologistsPage() {
  return (
    <Suspense fallback={<div>Loading therapists...</div>}>
      <TherapistsCard />
    </Suspense>
  );
}
