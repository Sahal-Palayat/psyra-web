import TherapistsCard from "@/components/Psychologist/Therapists/TherapiComp";
import LandingTherapistsCard from "../online-counselling/components/therapist_card";
import { Loader } from "@/components/Psychologist/Therapists/TherapistLoder";
import TherapistHero from "@/components/Psychologist/TherapistHero";
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
      {/* <TherapistsCard/> */}
      <TherapistHero/>
      <LandingTherapistsCard/>
    </Suspense>
  );
}
