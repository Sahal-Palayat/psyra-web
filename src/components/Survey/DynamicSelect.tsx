"use client";

import type React from "react";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

interface DynamicSelectProps {
  value: string;
  onChange: (value: string) => void;
  handle: (value: string) => void;
  options: string[];
  placeholder?: string;
}

export default function DynamicSelect({
  value,
  onChange,
  handle,
  placeholder = "Type your answer",
}: DynamicSelectProps) {
  const [inputValue, setInputValue] = useState(value ||"");

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Handle submit
  const handleSubmit = () => {
    if (inputValue.trim()) {
      onChange(inputValue.trim());
      handle(inputValue.trim());
      setInputValue("");
    }
  };

  // Handle Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="w-full bg-white/70 backdrop-blur-sm border-emerald-200/60 focus:border-teal-500 focus:ring-teal-500/20 rounded-xl py-6 px-4 pr-12 text-base transition-all duration-300"
          autoFocus
        />
        <button
          onClick={handleSubmit}
          disabled={!inputValue.trim()}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
