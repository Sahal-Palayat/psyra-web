"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

// Mental health focused survey questions
const surveyQuestions = [
  {
    id: 1,
    question: "How would you rate your overall mental well-being currently?",
    options: ["Excellent", "Good", "Fair", "Poor", "Very Poor"],
  },
  {
    id: 2,
    question: "How often do you feel stressed or overwhelmed?",
    options: ["Never", "Rarely", "Sometimes", "Often", "Always"],
  },
  {
    id: 3,
    question: "Do you feel comfortable talking about mental health with others?",
    options: ["Very Comfortable", "Comfortable", "Neutral", "Uncomfortable", "Very Uncomfortable"],
  },
  {
    id: 4,
    question: "How important do you think mental health support is in your community?",
    options: ["Extremely Important", "Very Important", "Moderately Important", "Slightly Important", "Not Important"],
  },
  {
    id: 5,
    question: "Have you ever sought professional help for mental health concerns?",
    options: ["Yes, currently", "Yes, in the past", "Considering it", "No, but interested", "No, not interested"],
  },
  {
    id: 6,
    question: "What prevents you most from seeking mental health support?",
    options: ["Cost/Affordability", "Stigma/Shame", "Lack of Time", "Don't Know Where to Go", "Nothing Prevents Me"],
  },
  {
    id: 7,
    question: "How would you prefer to receive mental health support?",
    options: ["In-Person Counseling", "Online Therapy", "Support Groups", "Self-Help Resources", "Mobile Apps"],
  },
  {
    id: 8,
    question: "How often do you practice self-care activities?",
    options: ["Daily", "Weekly", "Monthly", "Rarely", "Never"],
  },
  {
    id: 9,
    question: "Do you feel your workplace/school supports mental health?",
    options: ["Strongly Agree", "Agree", "Neutral", "Disagree", "Strongly Disagree"],
  },
  {
    id: 10,
    question: "How likely are you to recommend mental health services to a friend?",
    options: ["Very Likely", "Likely", "Neutral", "Unlikely", "Very Unlikely"],
  },
]

export default function SurveyQuestions() {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const userInfo = sessionStorage.getItem("surveyUser")
    if (!userInfo) {
      router.push("/survey/questions")
    }

    setProgress(((currentQuestion + 1) / surveyQuestions.length) * 100)

    if (answers[currentQuestion + 1]) {
      setSelectedOption(answers[currentQuestion + 1])
    } else {
      setSelectedOption(null)
    }
  }, [currentQuestion, router, answers])

  const handleNext = () => {
    if (selectedOption) {
      setAnswers((prev) => ({
        ...prev,
        [surveyQuestions[currentQuestion].id]: selectedOption,
      }))

      if (currentQuestion < surveyQuestions.length - 1) {
        setIsTransitioning(true)
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1)
          setIsTransitioning(false)
        }, 300)
      } else {
        sessionStorage.setItem(
          "surveyAnswers",
          JSON.stringify({
            ...answers,
            [surveyQuestions[currentQuestion].id]: selectedOption,
          }),
        )
        router.push("/survey/complete")
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentQuestion((prev) => prev - 1)
        setIsTransitioning(false)
      }, 300)
    }
  }

  const question = surveyQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-md px-6 py-5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-xl font-light tracking-tight text-primary-800">psyra</div>
            <div className="text-sm text-gray-500">
              {currentQuestion + 1} / {surveyQuestions.length}
            </div>
          </div>
        </div>
      </header> */}

      {/* Progress Bar */}
      {/* <div className="fixed top-[60px] left-0 right-0 h-0.5 bg-gray-100">
        <div
          className="h-full bg-primary-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div> */}

      {/* Main Content */}
      <main className="pt-12 pb-32 px-6">
        <div className="max-w-2xl mx-auto">
          <div className={`transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
            <h2 className="text-2xl font-light text-gray-900 mb-10">{question.question}</h2>

            <RadioGroup value={selectedOption || ""} onValueChange={setSelectedOption} className="space-y-5">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 border border-gray-200 rounded-xl p-5 transition-all hover:border-primary-300 cursor-pointer"
                >
                  <RadioGroupItem value={option} id={`option-${index}`} className="border-gray-300 text-primary-500" />
                  <Label htmlFor={`option-${index}`} className="flex-grow cursor-pointer text-gray-700 font-normal">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-5">
        <div className="max-w-2xl mx-auto flex justify-between">
          <Button
            variant="ghost"
            onClick={handlePrevious}
            disabled={currentQuestion === 0 || isTransitioning}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          >
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={!selectedOption || isTransitioning}
            className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8"
          >
            {currentQuestion === surveyQuestions.length - 1 ? "Complete" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  )
}
