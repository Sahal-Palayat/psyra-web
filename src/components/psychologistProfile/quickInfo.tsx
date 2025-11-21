"use client";
import React from 'react';
import { Globe, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Psychologist } from "@/types/psychologist";

interface QuickInfoProps {
  therapist: Psychologist;
}

const QuickInfo = ({ therapist }: QuickInfoProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 mt-6 md:-mt-8 relative z-20 mb-8 md:mb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-4 md:p-8">
        
        {/* Mobile View */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-4 mb-4">
            
            {/* Languages */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00989D]/10 flex items-center justify-center flex-shrink-0">
                <Globe className="text-[#00989D]" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold">
                  Languages
                </p>
                <p className="font-bold text-sm text-gray-900">
                  {therapist.languages.join(", ")}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00989D]/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="text-[#00989D]" size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide font-semibold">
                  Price
                </p>
                <p className="font-bold text-sm text-gray-900">
                  ₹{therapist.price}
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Button className="w-full bg-[#00989D] hover:bg-[#007a7e] text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-200 text-sm">
            Get Therapy
          </Button>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between gap-8">
          
          <div className="flex items-center gap-12 flex-1">
            
            {/* Languages */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#00989D]/10 flex items-center justify-center flex-shrink-0">
                <Globe className="text-[#00989D]" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                  Languages
                </p>
                <p className="font-bold text-lg text-gray-900">
                  {therapist.languages.join(", ")}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-[#00989D]/10 flex items-center justify-center flex-shrink-0">
                <DollarSign className="text-[#00989D]" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                  Price
                </p>
                <p className="font-bold text-lg text-gray-900">
                  ₹{therapist.price}
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Button className="bg-[#00989D] hover:bg-[#007a7e] text-white font-semibold py-4 px-10 rounded-xl transition-colors duration-200 whitespace-nowrap">
            Get Therapy
          </Button>
        </div>

      </div>
    </div>
  );
};

export default QuickInfo;