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
      price: " ₹999",
      cta: "Start Your Journey Today",
    },
    {
      type: "individual",
      title: "Growth Package ( 8-Session Package - ₹750 per session)",
      tagline: "Build clarity and consistency",
      list: [
        "Valid for 8 months",
        "1 Exclusive Offline Event entry",
        "Anytime Chat Support",
        "Address specific issues",
        "Explore your thoughts and emotions",
      ],
      price: " ₹6000", // 599 x 5
      cta: "Invest in Your Well-Being",
    },
    {
      type: "individual",
      title: "Annual Wellness Plan ( 24-Session - ₹600 per session)",
      tagline: "A Full Year of Mindful Living",
      list: [
        " 1 year validity",
        " 3 Free Entries to exclusive Psyra Events",
        " Unlimited Access to all Online Programs",
        " Continuous Support & Care",
        "Holistic approach to long-term well-being",
        "Chat through assistance",
      ],
      price: " ₹14400", // 549 x 10
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
