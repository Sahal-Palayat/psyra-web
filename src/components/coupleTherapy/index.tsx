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
      price: "₹1499",
      cta: "Strengthen Your Bond Today",
    },
    {
      type: "couple",
      title: "Harmony Package (5 Sessions - ₹1399 per session)",
      tagline: "Build a Stronger Connection",
      list: [
        "4 guided couple therapy sessions",
        "Enhance communication and mutual understanding",
        "resolve conflicts",
        "Strengthen your emotional bond",
      ],
      price: "₹6,995",
      cta: "Invest in Your Relationship",
    },
    {
      type: "couple",
      title: "Lasting Love Package (10 Sessions - ₹1249 per session)",
      tagline: "Grow together deeply.",
      list: [
        "In depth work on deeper relationship pattrens",
        "10 comprehensive couple therapy sessions",
        "Develop lasting communication skills",
        "Regualr progress tracking and feedback",
      ],
      price: "₹12,490",
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
