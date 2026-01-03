"use client";

import type React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
  className?: string;
  as?: "h2" | "h3" | "p";
}

export function SectionHeader({
  children,
  className = "",
  as = "h2",
}: SectionHeaderProps) {
  const Tag = as;

  return (
    <div className={`text-center ${className}`}>
      <Tag className="text-gray-600 italic text-md md:text-2xl">
        {children}
      </Tag>
    </div>
  );
}
