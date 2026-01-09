"use client"

interface ProgressProps {
  current: number
  total: number
}

export default function Progress({ current, total }: ProgressProps) {
  const percentage = Math.round((current / total) * 100)

  return (<div className="w-full px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-white">
            Question {current} of {total}
          </span>
          <span className="text-sm font-semibold text-white/90">{percentage}%</span>
        </div>

        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, index) => (
            <div
              key={index}
              className="flex-1 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  index < current
                    ? "rgba(255, 255, 255, 1)"
                    : index === current
                      ? "rgba(255, 255, 255, 0.6)"
                      : "rgba(255, 255, 255, 0.2)",
              }}
            />
          ))}
        </div>

        <div className="mt-3 text-xs text-white/80 font-medium">
          {percentage === 100 ? "Almost there! 🎉" : `${Math.ceil(((total - current) / total) * 100)}% remaining`}
        </div>
      </div>
    </div>
  )
}
