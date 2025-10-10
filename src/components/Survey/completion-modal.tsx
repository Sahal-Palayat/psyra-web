"use client";

import type React from "react";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle,
  AlertTriangle,
  AlertCircle,
  Share2,
  Download,
  Brain,
} from "lucide-react";

interface ResultsModalProps {
  isOpen: boolean;
  onClose: () => void;
  answers: Record<number, number>;
  totalQuestions: number;
}

interface ScoreRange {
  min: number;
  max: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
}

export function ResultsModal({ isOpen, onClose, answers }: ResultsModalProps) {
  const [score, setScore] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);

  // Calculate total score based on numeric answers only
  useEffect(() => {
    if (isOpen && Object.keys(answers).length > 0) {
      const numericAnswers = Object.values(answers).filter(
        (value) => typeof value === "number"
      );
      const totalScore = numericAnswers.reduce((sum, value) => sum + value, 0);

      setScore(totalScore);

      // Animate score counting
      let current = 0;
      const increment = totalScore / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= totalScore) {
          setAnimatedScore(totalScore);
          clearInterval(timer);
        } else {
          setAnimatedScore(Math.floor(current));
        }
      }, 30);

      return () => clearInterval(timer);
    }
  }, [isOpen, answers]);

  const scoreRanges: ScoreRange[] = [
    {
      min: 144,
      max: 180,
      title: "Good Level of Mental Well-Being",
      description:
        "You are likely experiencing a strong sense of emotional balance, resilience, and satisfaction in various areas of life. You may have healthy coping mechanisms, supportive relationships, and a positive outlook. Keep maintaining your mental health with regular self-care and reflection.",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      min: 72,
      max: 143,
      title: "Moderate Level of Mental Well-Being",
      description:
        "You may be doing fairly well but could be facing occasional emotional stress, mood fluctuations, or a lack of consistency in self-care. This score suggests there's room for improvement in your mental well-being. Consider exploring healthy habits, therapy, or support systems to enhance your psychological wellness.",
      icon: <AlertTriangle className="h-6 w-6" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      min: 18,
      max: 71,
      title: "Poor Level of Mental Well-Being",
      description:
        "This score indicates a low level of mental well-being, possibly marked by emotional distress, anxiety, low motivation, or social withdrawal. It's important to seek support — from a mental health professional, a support group, or trusted individuals. Prioritizing your mental health is the first step toward healing and growth.",
      icon: <AlertCircle className="h-6 w-6" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
  ];

  const getCurrentRange = (): ScoreRange => {
    return (
      scoreRanges.find((range) => score >= range.min && score <= range.max) ||
      scoreRanges[2]
    );
  };

  const currentRange = getCurrentRange();
  const maxPossibleScore = 180; // Based on your scoring system
  const scorePercentage = (score / maxPossibleScore) * 100;

  const handleShare = async () => {
    const shareText = `I scored ${score}/180 on my mental health assessment. ${currentRange.title}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Mental Health Assessment Results",
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      navigator.clipboard.writeText(shareText);
    }
  };

  const handleDownload = () => {
    const reportContent = `Mental Health Assessment Report
==============================

Score: ${score}/180 (${Math.round(scorePercentage)}%)
Category: ${currentRange.title}

Description:
${currentRange.description}

Assessment Date: ${new Date().toLocaleDateString()}

Note: This assessment is for informational purposes only and does not replace professional medical advice.
`;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `mental-health-assessment-${
      new Date().toISOString().split("T")[0]
    }.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border-gray-200 sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div
              className={`${currentRange.bgColor} ${currentRange.borderColor} border-2 rounded-full p-4 shadow-lg`}
            >
              <div className={currentRange.color}>{currentRange.icon}</div>
            </div>
          </div>

          <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center justify-center gap-2">
            <Brain className="h-6 w-6 text-teal-600" />
            Your Mental Health Score
          </DialogTitle>

          <div className="space-y-3">
            <div className="text-5xl font-bold text-gray-800">
              {animatedScore}
              <span className="text-2xl text-gray-500">/180</span>
            </div>
            <Progress value={scorePercentage} className="h-2 bg-gray-200" />
            <div className="text-sm text-gray-600">
              {Math.round(scorePercentage)}% Overall Score
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          {/* Current Score Range */}
          <div
            className={`${currentRange.bgColor} ${currentRange.borderColor} border-2 rounded-lg p-4`}
          >
            <div className="flex items-start space-x-3">
              <div className={currentRange.color}>{currentRange.icon}</div>
              <div className="flex-1">
                <h3
                  className={`text-lg font-semibold ${currentRange.color} mb-2`}
                >
                  {currentRange.min} – {currentRange.max}: {currentRange.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {currentRange.description}
                </p>
              </div>
            </div>
          </div>

          {/* All Score Ranges Reference */}
          <div className="space-y-2">
            <h4 className="font-semibold text-gray-800 text-center text-sm">
              Score Reference Guide
            </h4>
            {scoreRanges.map((range, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  score >= range.min && score <= range.max
                    ? `${range.bgColor} ${range.borderColor} border-2`
                    : "bg-gray-50 border border-gray-200"
                }`}
              >
                <div
                  className={
                    score >= range.min && score <= range.max
                      ? range.color
                      : "text-gray-400"
                  }
                >
                  {range.icon}
                </div>
                <div>
                  <span className="font-medium text-gray-800 text-sm">
                    {range.min} – {range.max}: {range.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 pt-4">
            <Button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
            >
              Continue
            </Button>
            <Button
              variant="outline"
              onClick={handleShare}
              className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Results
            </Button>
            <Button
              variant="outline"
              onClick={handleDownload}
              className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>

        <DialogDescription className="text-center text-xs text-gray-500 mt-4 p-3 bg-gray-50 rounded-lg border">
          <AlertTriangle className="h-3 w-3 inline mr-1" />
          This assessment is for informational purposes only and does not
          replace professional medical advice.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
