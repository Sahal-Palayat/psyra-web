"use client";

interface ResultProps {
  totalScore: number;
  toxicityScore: number;
  label: string;
  onCtaClick: () => void;
}

export default function Result({
  totalScore,
  toxicityScore,
  label,
  onCtaClick,
}: ResultProps) {
  const isHighRiskLabel = label.includes("High Risk");
  const isModerateLabel =
    label.includes("Unhealthy") || label.includes("Concerns");

  // Subtle score-based interpretation (no numbers shown)
  const isHighToxicity = toxicityScore >= 10;
  const isLowOverallScore = totalScore < 50;

  let title = "Your relationship wellness check";
  let description =
    "Thank you for taking a moment to reflect on your relationship.";
  let ctaText = "Explore Support";

  if (isHighRiskLabel || isHighToxicity || isLowOverallScore) {
    title = "Your relationship may be causing emotional strain";
    description =
      "Your responses suggest patterns that could be affecting your emotional safety and well-being. Reaching out for support can be an important step forward.";
    ctaText = "Talk to a Counsellor";
  } else if (isModerateLabel) {
    title = "Some areas may need attention";
    description =
      "Your relationship shows both strengths and challenges. With the right guidance, things can feel more balanced and supportive.";
    ctaText = "Get Relationship Support";
  } else {
    title = "Your relationship shows healthy signs";
    description =
      "Your responses suggest emotional balance and mutual respect. Continuing to check in and grow together can help maintain this wellbeing.";
    ctaText = "Learn How to Strengthen Your Relationship";
  }

  return (
    <section className="flex justify-center px-4 py-16">
      <div className="w-full max-w-xl text-center space-y-6">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#1a3c34]">
          {title}
        </h1>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
          {description}
        </p>

        {/* Gentle reassurance */}
        <p className="text-sm text-gray-500">
          You’re not alone. Many people feel this way, and support is available.
        </p>

        {/* CTA */}
        <button
          onClick={onCtaClick}
          className="mt-6 w-full sm:w-auto px-8 py-3 rounded-xl
                     bg-[#00989D] text-white font-medium
                     hover:bg-[#007C80] transition-colors"
        >
          {ctaText}
        </button>

        {/* Small note */}
        <p className="text-xs text-gray-400 mt-2">
          This check is not a diagnosis, but a step toward awareness.
        </p>
      </div>
    </section>
  );
}
