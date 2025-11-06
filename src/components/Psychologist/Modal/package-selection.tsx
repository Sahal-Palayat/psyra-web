"use client";
import { motion } from "framer-motion";
import { PsychologistBookingData } from "./types";
import { useEffect, useState } from "react";

interface PackageSelectionProps {
  bookingData: PsychologistBookingData;
  onUpdate: (data: Partial<PsychologistBookingData>) => void;
  hasOfferClaim?: boolean;
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

// Utility function to apply 10% discount
const applyOfferDiscount = (price: number): number => {
  return Math.round(price * 0.9);
};

// Utility function to format price with rupee symbol
const formatPriceWithSymbol = (price: number): string => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export function PackageSelection({
  bookingData,
  onUpdate,
  hasOfferClaim = false,
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
      price: "₹1200",
      originalPrice: null,
      sessions: 1,
      popular: false,
      savings: null,
    },
    {
      id: "8-sessions",
      title: "8 Sessions Package",
      price: "₹6000",
      originalPrice: "",
      sessions: 8,
      popular: true,
      savings: "25% OFF",
    },
    {
      id: "24-sessions",
      title: "24 Sessions Package",
      price: "14400",
      originalPrice: "",
      sessions: 10,
      popular: false,
      savings: "40% OFF",
    },
  ];

  const couplePackage = [
    {
      id: "single",  
      title: "Single Session",
      price: "₹1499",
      originalPrice: null,
      sessions: 1,
      popular: false,
      savings: null,
    },
    {
      id: "package-4",
      title: "4-Couple Session Plan",
      price: "₹4800",
      originalPrice: "₹5996",
      sessions: 4,
      popular: true,
      savings: "20% OFF",
    },
    {
      id: "package-8",
      title: " 8-Couple Session Plan",
      price: "₹8000",
      originalPrice: "₹11992",
      sessions: 8,
      popular: false,
      savings: "34% OFF",
    },
  ];

  useEffect(() => {
    const data =
      bookingData?.therapyType === "individual"
        ? individualPackage
        : couplePackage;
    
    // Apply offer discount if hasOfferClaim is true
    if (hasOfferClaim) {
      const discountedPackages = data.map(pkg => {
        const originalPrice = parseInt(pkg.price.replace(/[₹,]/g, ''));
        const discountedPrice = applyOfferDiscount(originalPrice);
        
        return {
          ...pkg,
          price: formatPriceWithSymbol(discountedPrice),
          originalPrice: pkg.originalPrice || formatPriceWithSymbol(originalPrice),
          savings: "10% OFF", // Always show 10% OFF when offer is active
        };
      });
      setPackages(discountedPackages);
    } else {
      setPackages(data);
    }
  }, [bookingData, hasOfferClaim]);

  const handlePackageSelect = (packageId: string) => {
    const selectedPackage = packages.find(pkg => pkg.id === packageId);
    const amount = selectedPackage ? parseInt(selectedPackage.price.replace(/[₹,]/g, '')) : 0;
    onUpdate({ 
      packageTitle: packageId,
      packageAmount: amount
    });
  };

  return (
    <div className="space-y-6">
      {hasOfferClaim && (
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-lg text-center">
          <h4 className="text-lg font-bold">🎉 Special Offer Active!</h4>
          <p className="text-sm">{" You're getting 10% OFF on all packages "}</p>
        </div>
      )}
      
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
