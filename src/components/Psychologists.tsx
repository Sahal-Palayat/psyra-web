"use client";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const data = [
  {
    title: "Anxiety Relief",
    image: "/therapy1.jpg",
    description: "Techniques to manage stress and anxiety.",
  },
  {
    title: "Relationship Support",
    image: "/therapy2.jpg",
    description: "Build stronger emotional connections.",
  },
  {
    title: "RAFNAS",
    image: "/Raf 2.png",
    description: "Consultant Psychologists",
  },
  {
    title: "Anxiety Relief",
    image: "/therapy1.jpg",
    description: "Techniques to manage stress and anxiety.",
  },
  {
    title: "Relationship Support",
    image: "/therapy2.jpg",
    description: "Build stronger emotional connections.",
  },
  {
    title: "RAFNAS",
    image: "/Raf 2.png",
    description: "Consultant Psychologists",
  },{
    title: "Anxiety Relief",
    image: "/therapy1.jpg",
    description: "Techniques to manage stress and anxiety.",
  },
  {
    title: "Relationship Support",
    image: "/therapy2.jpg",
    description: "Build stronger emotional connections.",
  },
  {
    title: "RAFNAS",
    image: "/Raf 2.png",
    description: "Consultant Psychologists",
  },{
    title: "Anxiety Relief",
    image: "/therapy1.jpg",
    description: "Techniques to manage stress and anxiety.",
  },
  {
    title: "Relationship Support",
    image: "/therapy2.jpg",
    description: "Build stronger emotional connections.",
  },
  {
    title: "RAFNAS",
    image: "/Raf 2.png",
    description: "Consultant Psychologists",
  },
];

export default function LoopingCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % data.length);
  };

  const getPosition = (index: number) => {
    const position = index - activeIndex;
    if (position === 0) return "center";
    if (position === -1 || position === data.length - 1) return "left";
    if (position === 1 || position === -(data.length - 1)) return "right";
    return "hidden";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E8F9FC] overflow-hidden">
      <div className="relative w-[320px] h-[440px] perspective-1000">
        {data.map((item, index) => {
          const position = getPosition(index);
          const baseStyle =
            "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out transform rounded-xl p-6 flex flex-col items-center justify-center text-center";

          let transformStyle = "";
          let zIndex = 0;
          let scale = "scale-100 opacity-100";

          if (position === "center") {
            transformStyle = "translate-x-0 rotate-y-0";
            zIndex = 30;
            scale = "scale-105 opacity-100";
          } else if (position === "left") {
            transformStyle = "-translate-x-24 rotate-y-40";
            zIndex = 10;
            scale = "scale-90 opacity-60";
          } else if (position === "right") {
            transformStyle = "translate-x-24 -rotate-y-40";
            zIndex = 10;
            scale = "scale-90 opacity-60";
          } else {
            transformStyle = "scale-75 opacity-0";
            zIndex = 0;
          }

          return (
            <div
              key={index}
              className={`${baseStyle} bg-[#9EE0D6] shadow-xl ${transformStyle} ${scale}`}
              style={{ zIndex }}
            >
              <div className="flex flex-col items-center justify-center w-full h-full text-center">
                <div className="relative w-50 h-60 mb-4 flex items-center justify-center">
                  {/* Circular glow behind the image */}
                  <div className="absolute w-42 h-40 rounded-full bg-[#00989D] backdrop-blur-md shadow-2xl z-0  mt-[33px]"></div>
                  <img
                    src={data[index].image}
                    alt={data[index].title}
                    className="w-40 h-50 object-cover rounded-full relative z-10"
                  />

                  {/* Image in the front */}
                </div>

                <h2 className="text-xl font-bold text-blue-700 mb-2">
                  {data[index].title}
                </h2>
                <p className="text-gray-600 text-sm">
                  {data[index].description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-4 mt-6 z-50">
        <button
          onClick={prevSlide}
          className="bg-white p-3 rounded-full border shadow hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="bg-white p-3 rounded-full border shadow hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
