"use client";
import { motion } from "framer-motion";
import { PsychologistBookingData } from "./types";
import { useEffect, useState } from "react";

interface PackageSelectionProps {
  bookingData: PsychologistBookingData;
  onUpdate: (data: Partial<PsychologistBookingData>) => void;
}

type Package = {
  id: string;
  title: string;
  price: string;
  originalPrice: string | null;
  sessions: number;
  popular: boolean;
  savings: string | null;
};

export function PackageSelection({
  bookingData,
  onUpdate,
}: PackageSelectionProps) {
  const [packages, setPackages] = useState<Package[]>([
    {
      id: "",
      title: "",
      price: "",
      originalPrice: null,
      sessions: 1,
      popular: false,
      savings: null,
    },
  ]);
  const individualPackage = [
    {
      id: "single",
      title: "Single Session",
      price: "₹999",
      originalPrice: null,
      sessions: 1,
      popular: false,
      savings: null,
    },
    {
      id: "package-5",
      title: "5 Sessions Package",
      price: "₹4,495",
      originalPrice: "₹4,995",
      sessions: 5,
      popular: true,
      savings: "Save ₹500",
    },
    {
      id: "package-10",
      title: "10 Sessions Package",
      price: "₹8,490",
      originalPrice: "₹9,990",
      sessions: 10,
      popular: false,
      savings: "Save ₹1,500",
    },
  ];

  const couplePackage = [
    {
      id: "single",
      title: "Single Session",
      price: "1499",
      originalPrice: null,
      sessions: 1,
      popular: false,
      savings: null,
    },
    {
      id: "package-5",
      title: "5 Sessions Package",
      price: "6995",
      originalPrice: "₹7,495",
      sessions: 5,
      popular: true,
      savings: "Save ₹500",
    },
    {
      id: "package-10",
      title: "10 Sessions Package",
      price: "12490",
      originalPrice: "₹14,990",
      sessions: 10,
      popular: false,
      savings: "Save ₹2,500",
    },
  ];

  useEffect(() => {
    const data =
      bookingData?.therapyType === "individual"
        ? individualPackage
        : couplePackage;
    setPackages(data);
  }, [bookingData]);

  const handlePackageSelect = (packageId: string) => {
    onUpdate({ packageTitle: packageId });
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-[#005657] mb-2">
          Choose Your Package
        </h3>
        <p className="text-gray-600">
          Select the package that works best for your therapy journey
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
              bookingData.packageTitle === pkg.id
                ? "border-[#005657] bg-[#B6E5DF]/10 shadow-lg"
                : "border-gray-200 hover:border-[#B6E5DF] hover:shadow-md"
            } ${pkg.popular ? "ring-2 ring-[#005657]/20" : ""}`}
            onClick={() => handlePackageSelect(pkg.id)}
          >
            {/* Popular badge */}
            {pkg.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#005657] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
            )}

            {/* Selection indicator */}
            {bookingData.packageTitle === pkg.id && (
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

            <div className="text-center mb-4">
              <h4 className="text-xl font-semibold text-[#005657] mb-2">
                {pkg.title}
              </h4>

              <div className="mb-2">
                <span className="text-3xl font-bold text-[#005657]">
                  {pkg.price}
                </span>
                {pkg.originalPrice && (
                  <span className="text-lg text-gray-400 line-through ml-2">
                    {pkg.originalPrice}
                  </span>
                )}
              </div>

              {pkg.savings && (
                <div className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium mb-2">
                  {pkg.savings}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {bookingData.packageTitle && (
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
              {packages.find((p) => p.id === bookingData.packageTitle)?.title}{" "}
              Selected
            </p>
            <p className="text-sm text-gray-600">
              You can now proceed to schedule your session
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
