"use client";
import Packages from "./Packages";
import HeroIndividual from "./HeroIndividual";
import sampleImage from "../../../public/couple.jpg";

export default function Individual() {
  const individualTypes = [
    {
      img: sampleImage, // Replace with actual image import
      title: "Single Session (1 Session - ₹649)",
      tagline: "Discover Clarity",
      list: [
        "Duration: 50–60 minutes",
        "One-on-one personalized guidance",
        "Address your immediate concerns",
        "Take the first step toward mental wellness",
      ],
      price: "₹649",
      cta: "Start Your Journey Today",
    },
    {
      img: sampleImage, // Replace with actual image import
      title: "Growth Package (5 Sessions - ₹599 per session)",
      tagline: "Deepen Your Healing",
      list: [
        "5 guided therapy sessions",
        "Build rapport with your therapist",
        "Explore your thoughts and emotions",
        "Develop practical coping strategies",
      ],
      price: "₹2,995", // 599 x 5
      cta: "Invest in Your Well-Being",
    },
    {
      img: sampleImage, // Replace with actual image import
      title: "Transformation Package (10 Sessions - ₹549 per session)",
      tagline: "Transform Your Mindset",
      list: [
        "10 comprehensive therapy sessions",
        "Holistic approach to long-term well-being",
        "Set and achieve personal goals",
        "Ongoing support for sustainable change",
      ],
      price: "₹5,490", // 549 x 10
      cta: "Commit to a Better You",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen bg-9EE0D6">
      <HeroIndividual />
      <Packages data={individualTypes} />
    </div>
  );
}
