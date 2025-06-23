"use client";
import React from "react";
// import HeroIndividual from "../individual/HeroIndividual";
import Packages from "../individual/Packages";
import sampleImage from "../../../public/couple.jpg";
import Faq from "../Faq";

const CoupleIndex = () => {
  const couplePackages = [
    {
      type: "couple",
      img: sampleImage, // Replace with actual image import
      title: "Single Session (1 Session - ₹1499)",
      tagline: "Reconnect and Reflect",
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
      img: sampleImage, // Replace with actual image import
      title: "Harmony Package (5 Sessions - ₹1399 per session)",
      tagline: "Build a Stronger Connection",
      list: [
        "4 guided couple therapy sessions",
        "Enhance communication and mutual understanding",
        "Work through challenges as a team",
        "Strengthen your emotional bond",
      ],
      price: "₹6,995", 
      cta: "Invest in Your Relationship",
    },
    {
      type: "couple",
      img: sampleImage, // Replace with actual image import
      title: "Lasting Love Package (10 Sessions - ₹1249 per session)",
      tagline: "Deepen Your Relationship",
      list: [
        "10 comprehensive couple therapy sessions",
        "Develop lasting communication skills",
        "Address underlying issues with professional guidance",
        "Foster long-term harmony and growth",
      ],
      price: "₹12,490", 
      cta: "Create Lasting Love",
    },
  ];

  return (
    <div>
      {/* <HeroIndividual /> */}
      <Packages data={couplePackages} />
      <Faq />
    </div>
  );
};

export default CoupleIndex;
