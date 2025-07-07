"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import DynamicSelect from "@/components/Survey/DynamicSelect";
import CompletionModal from "@/components/Survey/CompletionModal";
import { StarRating } from "@/components/Survey/StarRating";

// Mental health focused survey questions
type SurveyQuestion = {
  id: number | string;
  question: string;
  options: string[];
  type: string;
};

const studentQuestions = [
  {
    id: "emotional_balance",
    question: "I feel emotionally balanced and stable most of the time",
    options: [],
    type: "rating",
  },
  {
    id: "stress_coping",
    question: "I am able to cope well with stress in daily life",
    options: [],
    type: "rating",
  },
  {
    id: "pressure_handling",
    question:
      "I have healthy ways to deal with pressure or difficult emotions.",
    options: [],
    type: "rating",
  },
  {
    id: "self_value",
    question: "I believe I have value and something to offer",
    options: [],
    type: "rating",
  },
  {
    id: "support_system",
    question: "I have someone I can talk to when I feel down or anxious.",
    options: [],
    type: "rating",
  },
  {
    id: "ask_for_help",
    question: "I am comfortable asking for help when I need it",
    options: [],
    type: "rating",
  },
  {
    id: "support_access",
    question: "I know where to find support for my mental health.",
    options: [],
    type: "rating",
  },
  {
    id: "resilience",
    question: "I bounce back quickly after setbacks or failures.",
    options: [],
    type: "rating",
  },
  {
    id: "express_emotions",
    question: "I can express my feelings in a healthy and respectful way.",
    options: [],
    type: "rating",
  },
  {
    id: "goal_setting",
    question: "I set goals for myself and work towards them steadily.",
    options: [],
    type: "rating",
  },
  {
    id: "daily_joy",
    question: "I feel a sense of joy or fulfillment in daily life",
    options: [],
    type: "rating",
  },
  {
    id: "responsibility_confidence",
    question: "I feel confident handling responsibilities in my daily life",
    options: [],
    type: "rating",
  },
  {
    id: "academic_pressure",
    question:
      "I don't feel that expectations from teachers and parents are too high",
    options: [],
    type: "rating",
  },
  {
    id: "safe_environment",
    question:
      "My school/college provides a safe and respectful environment for learning.",
    options: [],
    type: "rating",
  },
  {
    id: "teacher_support",
    question:
      "Teachers are approachable and supportive when I face academic difficulties.",
    options: [],
    type: "rating",
  },
  {
    id: "mental_health_services",
    question:
      "My school/college offers mental health support or counseling services.",
    options: [],
    type: "rating",
  },
  {
    id: "peer_support",
    question: "I feel supported by my peers during stressful academic times",
    options: [],
    type: "rating",
  },
  {
    id: "empathy_towards_others",
    question:
      "I always try to understand others' mental health condition and help them.",
    options: [],
    type: "rating",
  },
];

const profQuestions = [
  {
    id: "emotional_balance",
    question: "I feel emotionally balanced and stable most of the time",
    options: [],
    type: "rating",
  },
  {
    id: "stress_coping",
    question: "I am able to cope well with stress in daily life",
    options: [],
    type: "rating",
  },
  {
    id: "emotion_handling",
    question:
      "I have healthy ways to deal with pressure or difficult emotions.",
    options: [],
    type: "rating",
  },
  {
    id: "self_value",
    question: "I believe I have value and something to offer",
    options: [],
    type: "rating",
  },
  {
    id: "support_system",
    question: "I have someone I can talk to when I feel down or anxious.",
    options: [],
    type: "rating",
  },
  {
    id: "help_comfort",
    question: "I am comfortable asking for help when I need it",
    options: [],
    type: "rating",
  },
  {
    id: "support_access",
    question: "I know where to find support for my mental health.",
    options: [],
    type: "rating",
  },
  {
    id: "resilience",
    question: "I bounce back quickly after setbacks or failures.",
    options: [],
    type: "rating",
  },
  {
    id: "emotion_expression",
    question: "I can express my feelings in a healthy and respectful way.",
    options: [],
    type: "rating",
  },
  {
    id: "goal_setting",
    question: "I set goals for myself and work towards them steadily.",
    options: [],
    type: "rating",
  },
  {
    id: "daily_joy",
    question: "I feel a sense of joy or fulfillment in daily life",
    options: [],
    type: "rating",
  },
  {
    id: "responsibility_confidence",
    question: "I feel confident handling responsibilities in my daily life",
    options: [],
    type: "rating",
  },
  {
    id: "manager_approach",
    question:
      "I can approach my manager or team leader if I’m feeling overwhelmed",
    options: [],
    type: "rating",
  },
  {
    id: "org_support",
    question:
      "My mental well-being is respected and supported by my organization.",
    options: [],
    type: "rating",
  },
  {
    id: "stress_management_promo",
    question: "My workplace promotes healthy ways to manage stress.",
    options: [],
    type: "rating",
  },
  {
    id: "deadline_pressure",
    question:
      "I don't feel constant pressure to meet unrealistic deadlines or expectations",
    options: [],
    type: "rating",
  },
  {
    id: "sleep_disturbance",
    question:
      "I have never experienced sleep disturbances or fatigue due to work stress.",
    options: [],
    type: "rating",
  },
  {
    id: "workplace_recommendation",
    question:
      "I would recommend my workplace to others based on its atmosphere",
    options: [],
    type: "rating",
  },
];

const basicQuestions = [
  {
    id: "occupation",
    question: "Are you??",
    options: ["Proffession", "Student"],
    type: "options",
  },
  {
    id: "age",
    question: "age",
    options: Array.from({ length: 109 }, (_, i) => (i + 12).toString()),
    type: "multi-select",
  },
  {
    id: "gender",
    question: "gender",
    options: ["Male", "Female", "Binary", "Prefer Not to say"],
    type: "options",
  },
  {
    id: "state",
    question: "State",
    options: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
    type: "multi-select",
  },
];

type SurveyAnswers = {
  [questionId: string]: string | number | boolean;
};

export default function SurveyQuestions() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [surveyQuestions, setSurveyQuestions] =
    useState<SurveyQuestion[]>(basicQuestions);
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userInfo") || "{}");
    if (!savedUser.username || !savedUser.mobile) {
      router.push("/survey");
    }
  }, []);

  const submitSurvey = async (finalAnswers: SurveyAnswers) => {
    console.log("finalAnswers", finalAnswers);
    try {
      const response = await fetch("https://kochimetrocalc.me/psyra-survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalAnswers),
      });
      const data = await response.json();
      console.log("Survey submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting survey:", error);
    }
  };

  const handleOptionSelect = (option: string | number) => {
    // Save the answer
    setAnswers((prev) => ({
      ...prev,
      [surveyQuestions[currentQuestion].id]: option,
    }));

    if (
      currentQuestion + 1 === basicQuestions.length &&
      surveyQuestions?.length === basicQuestions?.length
    ) {
      console.log(
        surveyQuestions?.length,
        "surveyquestions",
        basicQuestions.length,
        "basicQuestions.length"
      );
      if (answers?.occupation === "Student") {
        setSurveyQuestions((prev) => [...prev, ...studentQuestions]);
      } else {
        setSurveyQuestions((prev) => [...prev, ...profQuestions]);
      }
    }

    if (
      currentQuestion + 1 === surveyQuestions?.length &&
      surveyQuestions?.length !== basicQuestions?.length
    ) {
      const finalAnswers = {
        ...answers,
        [surveyQuestions[currentQuestion].id]: option,
      };
      console.log(finalAnswers, "FINKKKKKKKKK");
      submitSurvey(finalAnswers);
      // Optionally save locally
      sessionStorage.setItem("surveyAnswers", JSON.stringify(finalAnswers));
      setTimeout(() => {
        setShowCompletionModal(true);
      }, 500);
      return;
    }

    setTimeout(() => {
      if (currentQuestion < surveyQuestions?.length) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1);
          setIsTransitioning(false);
        }, 300);
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion((prev) => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const question = surveyQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 ">
        {/* Floating geometric shapes with better colors */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-emerald-200/20 to-teal-300/20 animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-200/25 to-blue-300/20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-20 h-20 rounded-full bg-gradient-to-br from-teal-200/15 to-emerald-300/15 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-300/20 to-teal-400/15 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Content */}
      <main className="p-14 flex items-center justify-center min-h-screen px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-teal-500/10 border border-white/50 w-full max-w-4xl min-h-[600px] p-8">
          {/* Header with Back Arrow */}
          <header className="mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {currentQuestion > 0 && (
                  <button
                    onClick={handlePrevious}
                    disabled={isTransitioning}
                    className="p-3 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 text-white hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 disabled:opacity-50 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                )}
              </div>
              {surveyQuestions?.length > basicQuestions.length && (
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 font-medium text-sm border border-teal-200/50">
                  {currentQuestion + 1} / {surveyQuestions.length}
                </div>
              )}
            </div>
          </header>

          {/* Question Content */}
          <div
            className={`transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 transform translate-y-4"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 leading-relaxed text-center">
              {question.question}
            </h2>

            <div className="space-y-4">
              {question?.type === "rating" ? (
                <div className="flex justify-center py-8">
                  <StarRating
                    onRatingSelect={(rating) => handleOptionSelect(rating)}
                    currentRating={answers[question.id] as number}
                  />
                </div>
              ) : question?.type === "multi-select" ? (
                <div className="">
                  <DynamicSelect
                    value={value}
                    onChange={setValue}
                    handle={(value: string) => {
                      handleOptionSelect(value);
                      setValue("");
                    }}
                    options={question?.options}
                  />
                </div>
              ) : (
                <>
                  {question.options &&
                    question.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          handleOptionSelect(option);
                        }}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] group ${
                          answers[question.id] === option
                            ? "bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-300 text-gray-800 shadow-lg shadow-teal-500/20"
                            : "bg-white/60 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-emerald-50/50 hover:border-teal-200 hover:shadow-md"
                        } disabled:cursor-not-allowed`}
                        style={{
                          animationDelay: `${index * 100}ms`,
                        }}
                      >
                        <span className="text-base font-medium">{option}</span>
                      </button>
                    ))}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      <CompletionModal
        isOpen={showCompletionModal}
        onClose={() => {
          router.push("/");
          setShowCompletionModal(false);
        }}
      />
    </div>
  );
}
