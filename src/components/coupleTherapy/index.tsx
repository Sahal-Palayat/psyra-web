"use client";
import React from "react";

import Faq from "../Faq";
import HeroPackages from "../individual/HeroPackage";

const CoupleIndex = () => {
  const couplePackages = [
    {
      id: "single", 
      type: "couple",
      title: "Starter Plan",
      sessions: 1,
      tagline: "Space to understand each other.",
      list: [
        "1 hour 30 minutes of guided couple conversation",
        "Personalised support to help you understand each other better",
        "Address immediate emotional concerns together",
        "Improve how you both express feelings in difficult moments",
        "A safe, neutral space to improve communication.",
        "A great first step toward mutual understanding.",
      ],
      price: "1499",
      cta: "Get Started",
    },
    {
      id: "pack4", 
      type: "couple",
      title: " Basic Growth Plan",
      sessions: "4",
      // pricePerSession: "₹1200 per session",
      tagline: "Build a Stronger Connection",
      discountNote: "Save 20%",
      list: [
        "Work on communication, trust, and emotional bonding",
        "Unlimited access to all Online Psyra webinars",
        "Continuous support and care between sessions",
        "Guided discussions to rebuild understanding and partnership",
        "Strengthen your emotional foundation as a couple",
        "1 FREE Entry to an Exclusive Psyra Event",
      ],
      price: "4800",
      cta: "Strengthen Your Relationship",
    },
    {
      id: "pack8", 
      type: "couple",
      title: " Deep Healing Plan",
      sessions: "8",
      // pricePerSession: "₹1000 per session",
      tagline: "Grow together deeply.",
      discountNote: "Save 33%",
      list: [
        "Unpack deeper relationship patterns and behaviours",
        "Unlimited access to all Online Psyra Webinars",
        "Continuous support and care throughout the journey",
        "In-depth work on communication, trust, and emotional safety",
        "Build long-term relationship clarity and understanding",
        "2 FREE Entries to Exclusive Psyra Events",
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
