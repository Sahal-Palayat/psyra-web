import TherapistsCard from "@/components/Psychologist/Therapists/TherapiComp";
import { Loader } from "@/components/Psychologist/Therapists/TherapistLoder";
import { Suspense } from "react";

export const metadata = {
  title: "Our Psychologists & Therapists | Mental Health Experts | Psyra",
  description:
    "Explore qualified psychologists and therapists at Psyra. Browse mental health professionals offering personalised therapy and counselling support.",
};

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
