"use client";
import { motion } from "framer-motion";
import type { PsychologistBookingData } from "./types";

interface TherapyTypeSelectionProps {
  bookingData: PsychologistBookingData;
  onUpdate: (data: Partial<PsychologistBookingData>) => void;
}

export function TherapyTypeSelection({
  bookingData,
  onUpdate,
}: TherapyTypeSelectionProps) {
  const therapyTypes = [
    {
      id: "individual",
      title: "Individual Therapy",
      description: "One-on-one sessions with a licensed therapist",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      ),
    },
    {
      id: "couple",
      title: "Couple Therapy",
      description: "Joint sessions for couples and partners",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
  ];

  const handleTypeSelect = (type: string) => {
    console.log(typeof(type),"TYPEeeeeeeeeeeeeeeeeeeee");
    
    onUpdate({ therapyType: type });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#005657] mb-2">
          Choose Your Therapy Type
        </h3>
        <p className="text-gray-600">
          Select the type of therapy that best suits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {therapyTypes.map((type) => (
          <motion.div
            key={type.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              bookingData.therapyType === type.id
                ? "border-[#005657] bg-[#B6E5DF]/10 shadow-lg"
                : "border-gray-200 hover:border-[#B6E5DF] hover:shadow-md"
            }`}
            onClick={() => handleTypeSelect(type.id)}
          >
            {/* Selection indicator */}
            {bookingData.therapyType === type.id && (
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-[#005657] rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 mb-4">
              <div
                className={`p-3 rounded-lg ${
                  bookingData.therapyType === type.id
                    ? "bg-[#005657] text-white"
                    : "bg-[#B6E5DF]/20 text-[#005657]"
                }`}
              >
                {type.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#005657]">
                  {type.title}
                </h4>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {bookingData.therapyType && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-[#B6E5DF]/20 rounded-lg flex items-center gap-3"
        >
          <div className="w-8 h-8 bg-[#005657] rounded-full flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <p className="font-medium text-[#005657]">
              {
                therapyTypes.find((t) => t.id === bookingData.therapyType)
                  ?.title
              }{" "}
              Selected
            </p>
            <p className="text-sm text-gray-600">
              You can proceed to select your package
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
