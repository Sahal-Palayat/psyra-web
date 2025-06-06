"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function InputSurvey() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {
      name: "",
      age: "",
      gender: "",
      location: "",
      mobile: "",
    };
    let hasError = false;

    if (!name.trim()) {
      newErrors.name = "Required";
      hasError = true;
    }

    if (!age.trim()) {
      newErrors.age = "Required";
      hasError = true;
    } else if (isNaN(Number(age)) || Number(age) < 13 || Number(age) > 120) {
      newErrors.age = "Please enter a valid age (13-120)";
      hasError = true;
    }

    if (!gender) {
      newErrors.gender = "Required";
      hasError = true;
    }

    if (!location.trim()) {
      newErrors.location = "Required";
      hasError = true;
    }

    if (!mobile.trim()) {
      newErrors.mobile = "Required";
      hasError = true;
    } else if (!/^\d{10}$/.test(mobile.trim())) {
      newErrors.mobile = "Enter valid 10-digit number";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    sessionStorage.setItem(
      "surveyUser",
      JSON.stringify({ name, age, gender, location, mobile })
    );

    setTimeout(() => {
      router.push("/survey/questions");
    }, 300);
  };

  return (
    <div className="min-h-[450px] relative">
      {/* Main Content */}
      <main className="relative ">
        <div className="max-w-lg mx-auto">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-fade-in-slow"
          >
            <div className="space-y-6">
              {/* Age Field */}
              <div className="space-y-3">
                <Label
                  htmlFor="age"
                  className="text-sm font-medium text-gray-800 flex items-center gap-2"
                >
                  <span className="text-lg">🎂</span>
                  Your age
                </Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Enter your age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="bg-white/70 backdrop-blur-sm border-emerald-200/60 focus:border-primary-500 focus:ring-primary-500/20 rounded-xl py-6 px-4 text-base placeholder:text-gray-500 transition-all duration-300"
                />
                {errors.age && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <span>⚠️</span> {errors.age}
                  </p>
                )}
              </div>

              {/* Gender Dropdown */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-800 flex items-center gap-2">
                  <span className="text-lg">🌈</span>
                  Gender identity
                </Label>
                <Select value={gender} onValueChange={setGender}>
                  <SelectTrigger className="bg-white/70 backdrop-blur-sm border-emerald-200/60 focus:border-primary-500 focus:ring-primary-500/20 rounded-xl py-6 px-4 text-base transition-all duration-300 h-auto">
                    <SelectValue
                      placeholder="Select your gender identity"
                      className="text-gray-500"
                    />
                  </SelectTrigger>
                  <SelectContent className="bg-white/95 backdrop-blur-md border-emerald-200/60 rounded-xl shadow-xl">
                    <SelectItem
                      value="male"
                      className="py-3 px-4 hover:bg-emerald-50/80 focus:bg-emerald-50/80 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">👨</span>
                        <span>Male</span>
                      </div>
                    </SelectItem>
                    <SelectItem
                      value="female"
                      className="py-3 px-4 hover:bg-emerald-50/80 focus:bg-emerald-50/80 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">👩</span>
                        <span>Female</span>
                      </div>
                    </SelectItem>
                    <SelectItem
                      value="non-binary"
                      className="py-3 px-4 hover:bg-emerald-50/80 focus:bg-emerald-50/80 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🌟</span>
                        <span>Non-binary</span>
                      </div>
                    </SelectItem>
                    <SelectItem
                      value="prefer-not-to-say"
                      className="py-3 px-4 hover:bg-emerald-50/80 focus:bg-emerald-50/80 rounded-lg transition-all duration-200 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🤐</span>
                        <span>Prefer not to say</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <span>⚠️</span> {errors.gender}
                  </p>
                )}
              </div>

              {/* Location Field */}
              <div className="space-y-3">
                <Label
                  htmlFor="location"
                  className="text-sm font-medium text-gray-800 flex items-center gap-2"
                >
                  <span className="text-lg">📍</span>
                  Your location
                </Label>
                <Input
                  id="location"
                  placeholder="City, State/Country"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-white/70 backdrop-blur-sm border-emerald-200/60 focus:border-primary-500 focus:ring-primary-500/20 rounded-xl py-6 px-4 text-base placeholder:text-gray-500 transition-all duration-300"
                />
                {errors.location && (
                  <p className="text-sm text-red-500 flex items-center gap-1">
                    <span>⚠️</span> {errors.location}
                  </p>
                )}
              </div>
            </div>

            <div className="pt-8">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00989D] hover:bg-primary-600 text-white rounded-full py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Continue to Survey</span>
                    <span className="text-lg">✨</span>
                  </div>
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
