"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, AlertTriangle, AlertCircle, Share2, Download, TrendingUp, Heart, Brain } from "lucide-react"

interface ResultsModalProps {
  isOpen: boolean
  onClose: () => void
  answers: Record<number, number>
  totalQuestions: number
}

interface ScoreRange {
  min: number
  max: number
  title: string
  description: string
  recommendations: string[]
  icon: React.ReactNode
  color: string
  bgColor: string
  borderColor: string
  progressColor: string
}

export function ResultsModal({ isOpen, onClose, answers, totalQuestions }: ResultsModalProps) {
  const [score, setScore] = useState(0)
  const [animatedScore, setAnimatedScore] = useState(0)
  const [showDetails, setShowDetails] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const maxScore = totalQuestions * 10

  // Calculate total score based on answers
  useEffect(() => {
    if (isOpen && Object.keys(answers).length > 0) {
      const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0)
      setScore(totalScore)
      setIsAnimating(true)

      // Animate score counting
      let current = 0
      const increment = totalScore / 60
      const timer = setInterval(() => {
        current += increment
        if (current >= totalScore) {
          setAnimatedScore(totalScore)
          setIsAnimating(false)
          clearInterval(timer)
          // Show details after animation completes
          setTimeout(() => setShowDetails(true), 500)
        } else {
          setAnimatedScore(Math.floor(current))
        }
      }, 25)

      return () => clearInterval(timer)
    }
  }, [isOpen, answers])

  const scoreRanges: ScoreRange[] = [
    {
      min: Math.floor(maxScore * 0.8),
      max: maxScore,
      title: "Excellent Mental Well-Being",
      description:
        "You demonstrate strong emotional resilience, positive coping strategies, and overall life satisfaction. Your mental health appears to be in excellent condition.",
      recommendations: [
        "Continue your current self-care practices",
        "Consider mentoring others in mental wellness",
        "Maintain your support network",
        "Keep up regular exercise and healthy habits",
      ],
      icon: <CheckCircle className="h-8 w-8" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      progressColor: "bg-emerald-500",
    },
    {
      min: Math.floor(maxScore * 0.6),
      max: Math.floor(maxScore * 0.79),
      title: "Good Mental Well-Being",
      description:
        "You show positive mental health indicators with room for some improvement. You're managing well but could benefit from additional support strategies.",
      recommendations: [
        "Develop consistent self-care routines",
        "Practice mindfulness or meditation",
        "Strengthen social connections",
        "Consider stress management techniques",
      ],
      icon: <TrendingUp className="h-8 w-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      progressColor: "bg-blue-500",
    },
    {
      min: Math.floor(maxScore * 0.4),
      max: Math.floor(maxScore * 0.59),
      title: "Moderate Mental Well-Being",
      description:
        "You may be experiencing some challenges with emotional balance or stress management. There are opportunities to enhance your mental wellness.",
      recommendations: [
        "Establish regular sleep patterns",
        "Engage in physical activity",
        "Seek support from friends or family",
        "Consider professional counseling",
      ],
      icon: <AlertTriangle className="h-8 w-8" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      progressColor: "bg-amber-500",
    },
    {
      min: 0,
      max: Math.floor(maxScore * 0.39),
      title: "Needs Attention",
      description:
        "Your responses suggest you may be experiencing significant challenges with mental well-being. Professional support could be very beneficial.",
      recommendations: [
        "Reach out to a mental health professional",
        "Connect with trusted friends or family",
        "Consider crisis support resources if needed",
        "Focus on basic self-care needs",
      ],
      icon: <AlertCircle className="h-8 w-8" />,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      progressColor: "bg-red-500",
    },
  ]

  const getCurrentRange = (): ScoreRange => {
    return scoreRanges.find((range) => score >= range.min && score <= range.max) || scoreRanges[3]
  }

  const currentRange = getCurrentRange()
  const scorePercentage = (score / maxScore) * 100

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Mental Health Assessment Results",
          text: `I scored ${score}/${maxScore} on my mental health assessment. ${currentRange.title}`,
          url: window.location.href,
        })
      } catch (error) {
        console.log("Error sharing:", error)
      }
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(
        `I scored ${score}/${maxScore} on my mental health assessment. ${currentRange.title}`,
      )
    }
  }

  const handleDownload = () => {
    const reportContent = `
Mental Health Assessment Report
==============================

Score: ${score}/${maxScore} (${Math.round(scorePercentage)}%)
Category: ${currentRange.title}

Description:
${currentRange.description}

Recommendations:
${currentRange.recommendations.map((rec) => `• ${rec}`).join("\n")}

Assessment Date: ${new Date().toLocaleDateString()}

Note: This assessment is for informational purposes only and does not replace professional medical advice.
    `

    const blob = new Blob([reportContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `mental-health-assessment-${new Date().toISOString().split("T")[0]}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-b from-white to-gray-50 border-gray-200 sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center space-y-6">
          <div className="flex justify-center">
            <div
              className={`${currentRange.bgColor} ${currentRange.borderColor} border-2 rounded-full p-6 shadow-lg transition-all duration-500 ${showDetails ? "scale-100" : "scale-95"}`}
            >
              <div className={`${currentRange.color} transition-colors duration-500`}>{currentRange.icon}</div>
            </div>
          </div>

          <DialogTitle className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
            <Brain className="h-8 w-8 text-teal-600" />
            Your Mental Health Score
          </DialogTitle>

          <div className="space-y-4">
            <div className="text-7xl font-bold text-gray-800 transition-all duration-300">
              {animatedScore}
              <span className="text-3xl text-gray-500">/{maxScore}</span>
            </div>

            <div className="space-y-2">
              <Progress value={scorePercentage} className="h-3 bg-gray-200" />
              <div className="text-lg text-gray-600">{Math.round(scorePercentage)}% Overall Score</div>
            </div>
          </div>
        </DialogHeader>

        <div
          className={`space-y-6 mt-6 transition-all duration-700 ${showDetails ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {/* Current Score Range */}
          <div
            className={`${currentRange.bgColor} ${currentRange.borderColor} border-2 rounded-xl p-6 transition-all duration-300 hover:shadow-lg`}
          >
            <div className="flex items-start space-x-4">
              <div className={currentRange.color}>{currentRange.icon}</div>
              <div className="flex-1">
                <h3 className={`text-xl font-semibold ${currentRange.color} mb-3 flex items-center gap-2`}>
                  <Heart className="h-5 w-5" />
                  {currentRange.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">{currentRange.description}</p>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">Recommendations:</h4>
                  <ul className="space-y-1">
                    {currentRange.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Score Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {scoreRanges.map((range, index) => (
              <div
                key={index}
                className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 hover:scale-105 ${
                  score >= range.min && score <= range.max
                    ? `${range.bgColor} ${range.borderColor} border-2 shadow-md`
                    : "bg-gray-50 border border-gray-200 hover:bg-gray-100"
                }`}
              >
                <div className={score >= range.min && score <= range.max ? range.color : "text-gray-400"}>
                  {range.icon}
                </div>
                <div className="flex-1">
                  <div className="font-medium text-gray-800 text-sm">{range.title}</div>
                  <div className="text-xs text-gray-500">
                    {range.min} - {range.max} points
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-200">
            <Button
              onClick={onClose}
              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white transition-all duration-300 hover:scale-105"
            >
              Continue
            </Button>
            <Button
              variant="outline"
              onClick={handleShare}
              className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share Results
            </Button>
            <Button
              variant="outline"
              onClick={handleDownload}
              className="flex-1 border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>
        </div>

        <DialogDescription className="text-center text-sm text-gray-500 mt-6 p-4 bg-gray-50 rounded-lg border">
          <AlertTriangle className="h-4 w-4 inline mr-2" />
          This assessment is for informational purposes only and does not replace professional medical advice. If you're
          experiencing mental health concerns, please consult with a qualified healthcare provider.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  )
}
