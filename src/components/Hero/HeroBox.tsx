import { MoveRight } from "lucide-react";
import React from "react";

const HeroBox = () => {
  const cards = [
    {
      title: "Take Your Online Therapy",
      subtitle: "Get your online session heal your mind",
      image: "/onlineCartoon.png",
      buttonText: "Book Now",
      link: "/services",
    },
    {
      title: "Take Your Free Assessment",
      subtitle: "Know your mental health status quickly",
      image: "/assess.png",
      buttonText: "Start Now",
      link: "/how-is-mind",
    },
    {
      title: "Find Your Therapist",
      subtitle: "Choose your right therapist and start your session",
      image: "/therapstcartoon.png",
      buttonText: "Find Now",
      link: "/psychologists",
    },
  ];

  return (
    <div className="mt-12 flex justify-center">
      <div className="flex flex-wrap md:flex-nowrap gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-1 bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow ${
              card.image === "/assess.png" ? "shimmer-card" : ""
            } `}
          >
            <div className="flex flex-col gap-4 justify-between h-full">
              <div className="bg-gradient-to-br p-2 from-teal-100 to-teal-50 justify-center rounded-lg flex">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[170px] h-[170px] object-contain"
                  loading="lazy"
                />
              </div>

              <div className="text-left">
                <p className="font-semibold text-teal-600 text-[16px] md:text-xl leading-snug">
                  {card.title}
                </p>
                <p className="text-gray-700 text-[13px] md:text-base leading-snug">
                  {card.subtitle}
                </p>
              </div>

              <div
                onClick={() => (window.location.href = card.link)}
                className="flex flex-row items-center text-teal-800 text-[14px] gap-1 cursor-pointer"
              >
                <span>{card.buttonText}</span>
                <MoveRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroBox;
