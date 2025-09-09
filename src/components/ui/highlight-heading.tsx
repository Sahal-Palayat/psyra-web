import React from "react";

interface HighlightHeadingProps {
  highlight: string;
  color?: string;
}

export const HighlightHeading: React.FC<HighlightHeadingProps> = ({
  highlight,
  color = "text-teal-800",
}) => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
      <span
        className={`${color} relative font-semibold italic`}
        style={{ fontFamily: "'Workbench', cursive" }} // try with a script font
      >
        {highlight}
        {/* underline stroke */}
        <span className="absolute left-0 bottom-0 w-full h-[6px] bg-orange-400 rounded-full transform translate-y-2 -z-10"></span>
      </span>
    </h2>
  );
};
