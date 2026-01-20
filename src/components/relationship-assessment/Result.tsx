"use client";

interface ResultProps {
  normalizedScore: number;
  riskLevel: "healthy" | "moderate" | "high";
  onCtaClick: () => void;
}

export default function Result({
  normalizedScore,
  riskLevel,
  onCtaClick,
}: ResultProps) {
  let title = "Your relationship wellness check";
  let description =
    "Thank you for taking a moment to reflect on your relationship.";
  let ctaText = "Explore Support";
  let statusColor = "from-green-400 to-emerald-500";
  let statusText = "Healthy Relationship";
  let statusIcon = "✓";

  if (riskLevel === "high") {
    title = "Your relationship may need support";
    description =
      "Your responses suggest patterns that could be affecting your emotional safety and well-being. Reaching out for support can be an important step forward.";
    ctaText = "Talk to a Counsellor";
    statusColor = "from-red-400 to-orange-500";
    statusText = "High Risk";
    statusIcon = "!";
  } else if (riskLevel === "moderate") {
    title = "Some areas may need attention";
    description =
      "Your relationship shows both strengths and challenges. With the right guidance, things can feel more balanced and supportive.";
    ctaText = "Get Relationship Support";
    statusColor = "from-yellow-400 to-orange-400";
    statusText = "Moderate Concerns";
    statusIcon = "•";
  } else {
    title = "Your relationship shows healthy signs";
    description =
      "Your responses suggest emotional balance and mutual respect. Continuing to check in and grow together can help maintain this wellbeing.";
    ctaText = "Learn How to Strengthen Your Relationship";
    statusColor = "from-green-400 to-emerald-500";
    statusText = "Healthy Relationship";
    statusIcon = "✓";
  }

  let reassuranceText = "";

if (riskLevel === "high") {
  reassuranceText =
    "Support is available, and you don’t have to navigate this alone.";
} else if (riskLevel === "moderate") {
  reassuranceText =
    "Noticing these patterns early can be helpful.";
} else {
  reassuranceText =
    "It’s okay to pause and acknowledge what’s working well.";
}


  return (
    <div className="pt-20 px-4 pb-16 bg-gray-100">
      <div className="w-full max-w-xl mx-auto space-y-6 mt-6">
        <div className="flex justify-center">
          <div
            className={`bg-gradient-to-r ${statusColor} px-6 py-2 rounded-full text-white font-semibold text-sm shadow-lg`}
          >
            {statusIcon} {statusText}
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#FFF5F0] to-[#FFE8E8] rounded-3xl p-6 sm:p-8 shadow-lg shadow-gray-200/50 space-y-5">
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#2C2C2C] text-center leading-tight">
            {title}
          </h1>

          <div className="flex justify-center items-center py-6">
            <div className="relative w-28 h-28 flex items-center justify-center">
              <svg
                className="absolute inset-0 transform -rotate-90"
                width="112"
                height="112"
                viewBox="0 0 128 128"
              >
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="#F5E0E0"
                  strokeWidth="8"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="#6B9E8F"
                  strokeWidth="8"
                  strokeDasharray={`${(normalizedScore / 100) * 351.86} 351.86`}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#2C2C2C]">
                  {normalizedScore}
                </div>

                <div className="text-xs text-[#5A5A5A]">out of 100</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-center text-[#5A5A5A] text-lg leading-relaxed">
            {description}
          </p>

          <div className="bg-[#FDEFEF] rounded-2xl p-4 border border-[#F5E0E0]">
            <p className="text-center text-[#5A5A5A] text-sm leading-relaxed">
              {reassuranceText}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onCtaClick}
            className="px-8 py-4 bg-[#6B9E8F] text-white font-bold rounded-xl
                       hover:bg-[#5F8F82] hover:shadow-2xl
                       transition-all duration-300 transform hover:scale-105
                       shadow-lg"
          >
            {ctaText}
          </button>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[#5A5A5A]/70 text-xs">
          This check is not a diagnosis, but a step toward awareness and
          personal growth.
        </p>
      </div>
    </div>
  );
}
