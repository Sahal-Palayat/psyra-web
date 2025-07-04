import { Star } from "lucide-react";
import { useState } from "react";

const StarRating = ({
  onRatingSelect,
  currentRating,
}: {
  onRatingSelect: (rating: number) => void;
  currentRating?: number;
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [selectedRating, setSelectedRating] = useState(currentRating || 0);

  const handleClick = (rating: number) => {
    setSelectedRating(rating);
    onRatingSelect(rating);
  };

  // Helper function to get rating descriptions
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
    <div className="flex flex-col items-center space-y-6">
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
          <button
            key={star}
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            className="group relative transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50 rounded-full p-1"
          >
            <Star
              className={`w-8 h-8 transition-all duration-200 ${
                star <= (hoverRating || selectedRating)
                  ? "fill-yellow-400 text-yellow-400 drop-shadow-lg"
                  : "fill-gray-200 text-gray-300 hover:fill-yellow-200 hover:text-yellow-300"
              }`}
            />
            {/* Number label */}
            <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-500 group-hover:text-teal-600 transition-colors">
              {star}
            </span>
          </button>
        ))}
      </div>

      {/* Rating description */}
      <div className="text-center">
        {(hoverRating || selectedRating) > 0 && (
          <div className="flex flex-col items-center space-y-2">
            <div className="px-4 py-2 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full border border-teal-200">
              <span className="text-lg font-semibold text-teal-700">
                {hoverRating || selectedRating}/10
              </span>
            </div>
            <p className="text-sm text-gray-600 max-w-md">
              {getRatingDescription(hoverRating || selectedRating)}
            </p>
          </div>
        )}
      </div>

      {selectedRating > 0 && (
        <button
          onClick={() => handleClick(selectedRating)}
          className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl font-medium hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          Confirm Rating: {selectedRating}/10
        </button>
      )}
    </div>
  );
};
