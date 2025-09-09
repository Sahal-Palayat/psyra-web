import React from "react";

interface HighlightHeadingProps {
  main: string;
  highlight: string;
  color?: string;
}

export const HighlightHeading: React.FC<HighlightHeadingProps> = ({
  main,
  highlight,
  color = "text-orange-500",
}) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      {main}{" "}
      <span
        className={`${color} relative font-semibold italic`}
        style={{ fontFamily: "'Pacifico', cursive" }} // try with a script font
      >
        {highlight}
        {/* underline stroke */}
        <span className="absolute left-0 bottom-0 w-full h-[6px] bg-orange-400 rounded-full transform translate-y-2 -z-10"></span>
      </span>
    </h2>
  );
};
