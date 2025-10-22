"use client";

import { BackgroundElements } from "@/components/Survey/background-elements";
import { QuestionContent } from "@/components/Survey/question-content";
import { QuestionDisplay } from "@/components/Survey/question-display";
import { SurveyHeader } from "@/components/Survey/survey-header";
import {
  basicQuestions,
  howIsMindQues,
  profQuestions,
  studentQuestions,
} from "@/components/Survey/data/survey-questions";
import { useState } from "react";
import {
  SurveyAnswers,
  SurveyQuestion,
} from "@/components/Survey/types/survey";
import { ResultsModal } from "@/components/Survey/completion-modal";

export default function SurveyQuestions() {
  const [surveyQuestions, setSurveyQuestions] =
    useState<SurveyQuestion[]>(howIsMindQues);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [value, setValue] = useState("");
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentQuestion((prev) => prev - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

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

    if (currentQuestion + 1 === surveyQuestions?.length) {
      const finalAnswers = {
        ...answers,
        [surveyQuestions[currentQuestion].id]: option,
      };
      console.log(finalAnswers, "FINKKKKKKKKK");
      submitSurvey(finalAnswers);
      sessionStorage.setItem("surveyAnswers", JSON.stringify(finalAnswers));
      setTimeout(() => {
        setShowCompletionModal(true);
        alert("HELLO DONE THE SURVEYY YY YY YY Y YY Y YY Y YY YY YY Y YY Y");
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

  const question = surveyQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 relative overflow-hidden">
      <BackgroundElements />

      <main className="p-14 flex items-center justify-center min-h-screen px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-teal-500/10 border border-white/50 w-full max-w-4xl min-h-[600px] p-8">
          <SurveyHeader
            currentQuestion={currentQuestion}
            totalQuestions={surveyQuestions.length}
            showBackButton={currentQuestion > 0}
            onPrevious={handlePrevious}
            isTransitioning={isTransitioning}
            showProgress={surveyQuestions.length > basicQuestions.length}
          />

          <QuestionDisplay
            question={question?.question}
            isTransitioning={isTransitioning}
          />

          <div className="space-y-4">
            <QuestionContent
              question={question}
              answers={answers}
              value={value}
              setValue={setValue}
              onOptionSelect={handleOptionSelect}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
