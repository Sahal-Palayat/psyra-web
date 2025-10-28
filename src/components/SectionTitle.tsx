"use client";

import type React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
}

export function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <>
      <div className="text-center">
        <p className="text-gray-600 italic text-md md:text-2xl">{children}</p>
      </div>
    </>
  );
}
