"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InputSurvey from "@/components/Survey/InputSurvey";
import DynamicSelect from "@/components/Survey/DynamicSelect";

// Mental health focused survey questions

type SurveyQuestion = {
  id: number | string;
  question: string;
  options: string[];
  type: string;
};

const profQuestions = [
  {
    id: 1,
    question: "How often do you feel stressed or overwhelmed?",
    options: ["Never", "Rarely", "Sometimes", "Always"],
    type: "option",
  },
  {
    id: 2,
    question: "How often do you feel stressed or overwhelmed?",
    options: ["Never", "Rarely", "Sometimes", "Always"],
    type: "option",
  },
  {
    id: 3,
    question:
      "Do you feel comfortable talking about mental health with others?",
    options: ["Very Comfortable", "Comfortable", "Neutral", "Uncomfortable"],
    type: "option",
  },
  {
    id: 4,
    question:
      "How important do you think mental health support is in your community?",
    options: [
      "Extremely Important",
      "Very Important",
      "Moderately Important",
      "Not Important",
    ],
    type: "option",
  },
  {
    id: 5,
    question:
      "Have you ever sought professional help for mental health concerns?",
    options: [
      "Yes, currently",
      "Yes, in the past",
      "Considering it",
      "No, not interested",
    ],
    type: "option",
  },
  {
    id: 6,
    question: "What prevents you most from seeking mental health support?",
    options: [
      "Cost/Affordability",
      "Stigma/Shame",
      "Lack of Time",
      "Don't Know Where to Go"
    ],
    type: "option",
  },
  {
    id: 7,
    question: "How would you prefer to receive mental health support?",
    options: [
      "In-Person Counseling",
      "Online Therapy",
      "Self-Help Resources",
      "Mobile Apps",
    ],
    type: "option",
  },
  {
    id: 8,
    question: "How often do you practice self-care activities?",
    options: ["Daily", "Weekly", "Monthly", "Never"],
    type: "option",
  },
  {
    id: 9,
    question: "Do you feel your workplace/school supports mental health?",
    options: [
      "Strongly Agree",
      "Agree",
      "Neutral",
      "Disagree",
      "Strongly Disagree",
    ],
    type: "option",
  },
  {
    id: 10,
    question:
      "How likely are you to recommend mental health services to a friend?",
    options: ["Very Likely", "Neutral", "Unlikely", "Very Unlikely"],
    type: "option",
  },
];

const studentQuestions = [
  {
    id: 2,
    question: "How often do you feel stressed or overwhelmed? STUDNET",
    options: ["Never", "Rarely", "Sometimes", "Always"],
    type: "option",
  },
];

export default function SurveyQuestions() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [surveyQuestions, setSurveyQuestions] = useState<SurveyQuestion[]>([
    {
      id: "occupation",
      question: "Are you??",
      options: ["Proffession", "Student"],
      type: "options",
    },
    {
      id: "age",
      question: "age",
      options: ["1", "2", "3"],
      type: "dropDown",
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
      options: ["Male", "Female", "Binary", "Prefer Not to say"],
      type: "dropDown",
    },
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  console.log(answers, "ANSERSSSSS");

  useEffect(() => {
    const userInfo = sessionStorage.getItem("surveyUser");
    // if (!userInfo) {
    //   router.push("/survey");
    // }

    setProgress(((currentQuestion + 1) / surveyQuestions.length) * 100);

    if (answers[currentQuestion + 1]) {
      setSelectedOption(answers[currentQuestion + 1]);
    } else {
      setSelectedOption(null);
    }
  }, [currentQuestion, router, answers]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);

    // Save the answer
    setAnswers((prev) => ({
      ...prev,
      [surveyQuestions[currentQuestion].id]: option,
    }));

    if (
      surveyQuestions[currentQuestion].id === "state" &&
      surveyQuestions?.length < 5
    ) {
      setSurveyQuestions((prev) => [...prev, ...profQuestions]);
    }

    // Auto-advance after a short delay
    setTimeout(() => {
      if (currentQuestion < 20) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentQuestion((prev) => prev + 1);
          setIsTransitioning(false);
        }, 300);
      } else {
        // Complete survey
        sessionStorage.setItem(
          "surveyAnswers",
          JSON.stringify({
            ...answers,
            [surveyQuestions[currentQuestion].id]: option,
          })
        );
      }
    }, 300);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion((prev) => prev - 1);
        setIsTransitioning(false);
      }, 100);
    }
  };

  const question = surveyQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
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

        {/* Gradient overlays for depth */}
      </div>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-teal-500/10 border border-white/50 w-full max-w-2xl min-h-[550px] p-8">
          {/* <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-teal-500/10 border border-white/50 w-full max-w-2xl h-[600px] p-8 flex flex-col justify-between"> */}

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
              {question?.id !== "Personol" && (
                <div className="px-4 py-2 rounded-full bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-700 font-medium text-sm border border-teal-200/50">
                  {currentQuestion + 1} / {surveyQuestions.length}
                </div>
              )}
            </div>
          </header>

          {/* Enhanced Progress Bar */}
          {/* <div className="mb-8">
            <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-500 transition-all duration-700 ease-out rounded-full shadow-sm"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="mt-2 text-right">
              <span className="text-sm text-gray-500 font-medium">
                {Math.round(progress)}% Complete
              </span>
            </div>
          </div> */}
          <>
            {/* Question Content */}
            <div
              className={`transition-all duration-500 ${
                isTransitioning
                  ? "opacity-0 transform translate-y-4"
                  : "opacity-100 transform translate-y-0"
              }`}
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 leading-relaxed">
                {question.question}
              </h2>

              <div className="space-y-4">
                {question?.type === "dropDown" ? (
                  <div className="">
                    <DynamicSelect
                      value={value}
                      onChange={setValue}
                      handle={(e: any) => {
                        console.log(e, question?.id, "hhhhhhhhh");
                        handleOptionSelect(e);
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
                          onClick={() => handleOptionSelect(option)}
                          // disabled={selectedOption !== null}
                          className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 transform hover:scale-[1.02] group ${
                            selectedOption === option
                              ? "bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-300 text-gray-800 shadow-lg shadow-teal-500/20"
                              : "bg-white/60 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-emerald-50/50 hover:border-teal-200 hover:shadow-md"
                          } disabled:cursor-not-allowed`}
                          style={{
                            animationDelay: `${index * 100}ms`,
                          }}
                        >
                          <span className="text-base font-medium">
                            {option}
                          </span>
                          {/* {selectedOption === option && (
                    <div className="mt-3 flex items-center space-x-2">
                      <div className="w-8 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full"></div>
                      <span className="text-xs text-teal-600 font-medium">Selected</span>
                    </div>
                  )} */}
                        </button>
                      ))}
                  </>
                )}
              </div>
            </div>
          </>
        </div>
      </main>
    </div>
  );
}
