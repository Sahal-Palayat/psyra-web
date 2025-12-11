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
        "Duration: 1 hour 30 minutes",
        "Personalized guidance for couples",
        "Address relationship challenges",
        "Gain clarity and understanding together",
      ],
      price: "1499",
      cta: "Strengthen Your Bond Today",
    },
    {
      type: "couple",
      title: " 4-Couple Session Plan ( 4-Session - ₹1200 per session)",
      tagline: "Build a Stronger Connection",
      list: [
        "4 months validity",
        "1 Free Entry to exclusive Psyra Event",
        "Unlimited Access to all Online Webinars",
        "Continuous Support & Care",
        "Strengthen your emotional bond",
      ],
      price: "4800",
      cta: "Invest in Your Relationship",
    },
    {
      type: "couple",
      title: " 8-Couple Session Plan ( 8-Session - ₹1000 per session)",
      tagline: "Grow together deeply.",
      list: [
        "8 months validity",
        "2 Free Entry to exclusive Psyra Event",
        "Unlimited Access to all Online Webinars",
        "Continuous Support & Care",
        "In depth work on deeper relationship patterns",
      ],
      price: "8000",
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
