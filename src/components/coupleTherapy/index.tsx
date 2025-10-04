"use client";
import React from "react";
// import HeroIndividual from "../individual/HeroIndividual";
// import sampleImage from "../../../public/Couple Packages 1.jpg";
// import sampleImage2 from "../../../public/Couple Packages 2 (1).jpg";
// import sampleImage3 from "../../../public/Couple Packages 3 (2).jpg";
import Faq from "../Faq";
import HeroPackages from "../individual/HeroPackage";

const CoupleIndex = () => {
  const couplePackages = [
    {
      type: "couple",
      title: "Single Session (1 Session - ₹1499)",
      tagline: "Space to begin together",
      list: [
        "Duration: 50–60 minutes",
        "Personalized guidance for couples",
        "Address relationship challenges",
        "Gain clarity and understanding together",
      ],
      price: "1499",
      cta: "Strengthen Your Bond Today",
    },
    {
      type: "couple",
      title: "8-Session Package",
      tagline: "Build a Stronger Connection",
      list: [
        "₹750 per session",
        "Valid for 8 months",
        "1 Exclusive Offline Event entry",
        "Anytime Chat Support",
      ],
      price: "6000",
      cta: "Invest in Your Relationship",
    },
    {
      type: "couple",
      title: "24-Session Annual Wellness Plan",
      tagline: "A Full Year of Mindful Living",
      list: [
        "₹600 per session",
        " 1 year validity",
        " 3 Free Entries to exclusive Psyra Events",
        " Unlimited Access to all Online Programs",
        " Continuous Support & Care",
      ],
      price: "14400",
      cta: "Create Lasting Love",
    },
  ];

  return (
    <div>
      {/* <HeroIndividual /> */}
      <HeroPackages data={couplePackages} />
      <Faq />
    </div>
  );
};

export default CoupleIndex;
