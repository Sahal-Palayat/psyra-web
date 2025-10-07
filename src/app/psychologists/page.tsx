import TherapistsCard from "@/components/Psychologist/Therapists/TherapiComp";
import { Loader } from "@/components/Psychologist/Therapists/TherapistLoder";
import { Suspense } from "react";

export default function PsychologistsPage() {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />{" "}
        </div>
      }
    >
      <TherapistsCard />
    </Suspense>
  );
}
