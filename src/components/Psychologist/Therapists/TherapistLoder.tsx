import { Card } from "@/components/ui/card";

export const SkeletonCard = () => (
  <Card className="w-full bg-[#00BEA5] rounded-2xl shadow-xl overflow-hidden">
    <div className="flex p-6">
      <div className="flex-shrink-0 mr-6">
        <div className="w-44 h-44 bg-white rounded-xl p-1 shadow-lg">
          <div className="w-full h-full bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="flex-1 text-white space-y-3">
        <div className="h-6 bg-gray-700/30 rounded animate-pulse w-3/4" />
        <div className="h-4 bg-gray-700/30 rounded animate-pulse w-1/2" />

        <div className="space-y-2">
          <div className="h-3 bg-gray-700/30 rounded animate-pulse w-2/3" />
          <div className="h-3 bg-gray-700/30 rounded animate-pulse w-1/3" />

          <div className="flex items-center gap-1 my-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-gray-700/30 rounded animate-pulse"
              />
            ))}
          </div>

          <div className="h-3 bg-gray-700/30 rounded animate-pulse w-4/5" />
          <div className="h-3 bg-gray-700/30 rounded animate-pulse w-3/5" />

          <div className="flex items-center gap-3">
            <div className="h-3 bg-gray-700/30 rounded animate-pulse w-20" />
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-700/30 rounded animate-pulse" />
              <div className="h-3 bg-gray-700/30 rounded animate-pulse w-10" />
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-gray-700/30 rounded animate-pulse" />
              <div className="h-3 bg-gray-700/30 rounded animate-pulse w-10" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
      <div className="text-white space-y-1">
        <div className="h-3 bg-gray-700 rounded animate-pulse w-24" />
        <div className="h-4 bg-gray-700 rounded animate-pulse w-32" />
      </div>
      <div className="h-8 bg-gray-700 rounded-full animate-pulse w-16" />
    </div>
  </Card>
);
