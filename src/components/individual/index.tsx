"use client";
// import Packages from "./Packages";
// import HeroIndividual from "./HeroIndividual";
// import individual from "../../../public/Packages 2.jpg";
// import individual1 from "../../../public/Packages 1.jpg";
// import individual2 from "../../../public/Packages 3.jpg";
import Faq from "../Faq";
import HeroPackages from "./HeroPackage";

export default function Individual() {
  const individualTypes = [
    {
      id: "pack4", 
      type: "individual",
      title: "Basic Growth Plan",
      sessions: "4",
      pricePerSession: "₹800 per session",
      tagline: "Start your journey towards clarity",
      discountNote: "Save 20%",
      list: [
        "Build deeper trust and rapport with your therapist",
        "Understand your emotional patterns with guided support",
        "Gain clarity around your thoughts, behaviours, and reactions",
        "Receive structured, personalised guidance",
        "Experience continuous support and care throughout the process",
        "FREE 4-month access to SPACE by Psyra (journaling, mood tracking, daily reflections)",
      ],
      price: "3200",
      cta: "Start Your Journey Today",
    },
    {
      id: "pack8", 
      type: "individual",
      title: "Deep Healing Plan",
      sessions: "8",
      pricePerSession: "₹750 per session",
      tagline: "Go deeper and heal stronger.",
      discountNote: "Save 25%",
      list: [
        "Work through long-standing emotional patterns with consistent guidance",
        "Identify root causes behind recurring thoughts and feelings",
        "Anytime chat support between sessions",
        "Explore emotions through structured therapeutic exercises",
        "One exclusive offline event entry",
        "FREE access to SPACE by Psyra (track progress, reflect daily, build healthier habits)",
      ],
      price: "6000", 
      cta: "Invest in Your Well-Being",
    },
    {
      id: "pack12", 
      type: "individual",
      title: "Premium Plan",
      sessions: "12",
      pricePerSession: "₹600 per session",
      tagline: "Your complete support system.",
      discountNote: "Save 30%",
      list: [
        "12 personalised therapy sessions for long-term emotional transformation",
        "Free access to all Online Psyra Events",
        "One exclusive offline event entry",
        "24/7 call & chat support for continuous emotional care",
        "Build emotional consistency with structured guidance",
        "FREE 1-year access to SPACE by Psyra (daily routines, emotional check-ins, habit building & guided growth tools)",
      ],
      price: "8400",
      cta: "Commit to a Better You",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-9EE0D6">
      {/* <HeroIndividual /> */}
      <HeroPackages data={individualTypes} />
      {/* <Packages data={individualTypes} /> */}
      <Faq />
    </div>
  );
}
