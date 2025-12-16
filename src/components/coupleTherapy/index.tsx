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
      title: "Starter Plan (1 Session - ₹1499)",
      tagline: "Space to understand each other.",
      list: [
        "1 hour 30 minutes of guided couple conversation",
        "Personalised support to help you understand each other better",
        "Address immediate emotional concerns together",
        "Gain clarity on what’s happening beneath the surface",
        "Improve how you both express feelings in difficult moments",
        "A safe, neutral space to reset communication and reduce tension",
        "A great first step for couples who want to understand each other better",
      ],
      price: "1499",
      cta: "Get Started",
    },
    {
      type: "couple",
      title: " Basic Growth Plan ( 4 Sessions - ₹1200 per session)",
      tagline: "Build a Stronger Connection",
      discountNote: "You save 20% per session",
      list: [
        "Work on communication, trust, and emotional bonding",
        "1 free entry to an Exclusive Psyra Event",
        "Unlimited access to all Online Psyra webinars",
        "Continuous support and care between sessions",
        "Strengthen your emotional foundation as a couple",
        "Guided discussions to rebuild understanding and partnership",
      ],
      price: "4800",
      cta: "Strengthen Your Relationship",
    },
    {
      type: "couple",
      title: " Deep Healing Plan ( 8 Sessions - ₹1000 per session)",
      tagline: "Grow together deeply.",
      discountNote: "You save 33% per session",
      list: [
        "Unpack deeper relationship patterns and behaviours",
        "2 free entries to Exclusive Psyra Events",
        "Unlimited access to all Online Psyra Webinars",
        "Continuous support and care throughout the journey",
        "In-depth work on communication, trust, and emotional safety",
        "Build long-term relationship clarity and understanding",
      ],
      price: "8000",
      cta: "Deepen Your Connection",
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
