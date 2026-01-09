"use client";

export default function Transition() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center
                    bg-white/70 backdrop-blur-sm px-4">
      <div className="text-center space-y-4">
        {/* Loader */}
        <div className="mx-auto h-10 w-10 rounded-full border-4
                        border-gray-300 border-t-[#00989D]
                        animate-spin" />

        {/* Text */}
        <p className="text-gray-600 text-sm sm:text-base">
          Understanding your responses…
        </p>
      </div>
    </div>
  );
}
