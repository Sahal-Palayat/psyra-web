import { Sparkles } from "lucide-react" // Using Sparkles icon for a gentle, positive feel

export default function MentalHealthLoader() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md text-center space-y-4">
      <Sparkles className="h-12 w-12 text-[#005657] animate-pulse" /> {/* Themed color and pulse animation */}
      <p className="text-lg font-medium text-gray-700">Taking a moment to load...</p>
      <p className="text-sm text-gray-500">Your journey to wellness is important to us.</p>
    </div>
  )
}
