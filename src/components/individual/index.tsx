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
      type: "individual",
      title: "Basic Growth Plan (4 Sessions - per session ₹800)",
      tagline: "Start your journey towards clarity",
      discountNote: "Save 20% per session compared to the standard ₹999 rate",
      list: [
        "Build deeper trust and rapport with your therapist",
        "Understand your emotional patterns with guided support",
        "Gain clarity around your thoughts, behaviours, and reactions",
        "Receive structured, personalised guidance",
        "Experience continuous support and care throughout the process",
        "Improve emotional stability and strengthen your sense of direction",
        "FREE 4-month access to SPACE by Psyra (journaling, mood tracking, daily reflections)",
      ],
      price: "3200",
      cta: "Start Your Journey Today",
    },
    {
      type: "individual",
      title: "Deep Healing Plan ( 8 Sessions - ₹750 per session)",
      tagline: "Go deeper and heal stronger.",
      discountNote: "Save 25% per session compared to the standard ₹999 rate",
      list: [
        "Work through long-standing emotional patterns with consistent guidance",
        "Identify root causes behind recurring thoughts and feelings",
        "Anytime chat support between sessions",
        "Explore emotions through structured therapeutic exercises",
        "One exclusive offline event entry",
        "FREE access to SPACE by Psyra (track progress, reflect daily, build healthier habits)",
      ],
      price: "6000", // 599 x 5
      cta: "Invest in Your Well-Being",
    },
    {
      type: "individual",
      title: "Premium Plan (Elite Tier) ( 12 Sessions - ₹600 per session)",
      tagline: "Your complete support system.",
      discountNote: "Save 30% per session compared to the standard ₹999 rate",
      list: [
       "12 personalised therapy sessions for long-term emotional transformation",
    "Free access to all Online Psyra Events",
    "One exclusive offline event entry",
    "24/7 call & chat support for continuous emotional care",
    "Build emotional consistency with structured guidance and follow-through",
    "FREE 1-year access to SPACE by Psyra (daily routines, emotional check-ins, habit building & guided growth tools)"
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
