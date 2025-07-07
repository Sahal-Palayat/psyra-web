"use client";

import { Star } from "lucide-react";
import { useState, useEffect } from "react";

export const StarRating = ({
  onRatingSelect,
  currentRating,
  answers,
  questionId,
}: {
  onRatingSelect: (rating: number) => void;
  currentRating?: number;
  answers: Record<string, string | number>;
  questionId?: string | number;
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(0);

  useEffect(() => {
    const existingAnswer = questionId && answers ? answers[questionId] : null;
    const initialRating = existingAnswer || currentRating || 0;
    setSelectedRating(initialRating);
    setHoverRating(0);
  }, [questionId, answers, currentRating]);

  const handleClick = (rating: number) => {
    setSelectedRating(rating);
    onRatingSelect(rating);
  };

  const getRatingDescription = (rating: number): string => {
    const descriptions = {
      1: "Extremely Poor",
      2: "Very Poor",
      3: "Poor",
      4: "Below Average",
      5: "Average",
      6: "Above Average",
      7: "Good",
      8: "Very Good",
      9: "Excellent",
      10: "Outstanding",
    };
    return descriptions[rating as keyof typeof descriptions] || "";
  };

  return (
    <div className="flex flex-col items-center space-y-4 sm:space-y-6 w-full max-w-full">
      <div className="flex items-center justify-center space-x-1 sm:space-x-2 px-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <button
            key={star}
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="group relative transition-all duration-200 transform hover:scale-110 focus:outline-none rounded-full p-0.5 sm:p-1 flex-shrink-0"
          >
            <Star
              className={`w-6 h-6 sm:w-8 sm:h-8 transition-all duration-200 ${
                star <= (hoverRating || selectedRating)
                  ? "fill-yellow-400 text-yellow-400 drop-shadow-lg"
                  : "fill-gray-200 text-gray-300 hover:fill-yellow-200 hover:text-yellow-300"
              }`}
            />
            <span className="absolute -bottom-4 sm:-bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500 group-hover:text-teal-600 transition-colors">
              {star}
            </span>
          </button>
        ))}
      </div>

      <div className="text-center mt-2 sm:mt-0">
        {(hoverRating || selectedRating) > 0 && (
          <div className="flex flex-col items-center space-y-2">
            <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full border border-teal-200">
              <span className="text-base sm:text-lg font-semibold text-teal-700">
                {hoverRating || selectedRating}/10
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md px-2">
              {getRatingDescription(hoverRating || selectedRating)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
