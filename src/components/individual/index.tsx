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
      title: "Single Session (1 Session - ₹999)",
      tagline: "Start your journey",
      list: [
        "Duration: 50–60 minutes",
        "Build rapport with your therapist",
        "Address your immediate concerns",
        "Take the first step toward mental wellness",
      ],
      price: "₹999",
      cta: "Start Your Journey Today",
    },
    {
      type: "individual",
      title: "Growth Package (5 Sessions - ₹899 per session)",
      tagline: "Build clarity and consistency",
      list: [
        "5 guided therapy sessions",
        "Address specific issues",
        "Explore your thoughts and emotions",
        "Develop practical coping strategies",
      ],
      price: "₹4,495", // 599 x 5
      cta: "Invest in Your Well-Being",
    },
    {
      type: "individual",
      title: "Transformation Package (10 Sessions - ₹849 per session)",
      tagline: "Deepen healing and growth-",
      list: [
        "10 comprehensive therapy sessions",
        "Holistic approach to long-term well-being",
        "Chat through assistance",
        "Sustained guidance",
      ],
      price: "₹8,490", // 549 x 10
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
