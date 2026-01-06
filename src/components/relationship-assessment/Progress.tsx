"use client";

interface ProgressProps {
  current: number;
  total: number;
}

export default function Progress({ current, total }: ProgressProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full max-w-xl mx-auto px-4 mb-8">
      {/* Progress text */}
      <div className="flex justify-between text-sm text-gray-500 mb-2">
        <span>
          Question {current} of {total}
        </span>
        <span>{percentage}%</span>
      </div>

      {/* Progress bar */}
      <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#00989D] transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
