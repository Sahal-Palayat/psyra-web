"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundElements } from "@/components/Survey/background-elements";
import { QuestionContent } from "@/components/Survey/question-content";
import { QuestionDisplay } from "@/components/Survey/question-display";
import { SurveyHeader } from "@/components/Survey/survey-header";
import {
  basicQuestions,
  howIsMindQues,
} from "@/components/Survey/data/survey-questions";
import type {
  SurveyAnswers,
  SurveyQuestion,
} from "@/components/Survey/types/survey";

export default function SurveyQuestions() {
  const [surveyQuestions, setSurveyQuestions] =
    useState<SurveyQuestion[]>(howIsMindQues);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [value, setValue] = useState("");

  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [typedResponse, setTypedResponse] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");

  const loadingMessages = [
    "Your AI Therapist is reflecting on your responses...",
    "Taking a mindful pause before sharing your guidance...",
    "Reading between your emotions to find the right words...",
    "Crafting personalized tips to brighten your day...",
    "Almost there — preparing your mental health insights...",
  ];

  useEffect(() => {
    if (!aiResponse || isAiLoading) return;

    let index = 0;
    const interval = setInterval(() => {
      setTypedResponse(aiResponse.slice(0, index + 1));
      index++;
      if (index >= aiResponse.length) {
        clearInterval(interval);
      }
    }, 30); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, [aiResponse, isAiLoading]);

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
    try {
      const response = await fetch("https://kochimetrocalc.me/psyra-survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalAnswers),
      });
      const data = await response.json();

      setIsAiLoading(true);
      const randomMsg =
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
      setLoadingMessage(randomMsg);

      setTimeout(() => {
        setIsAiLoading(false);
        const aiText =
          data?.data?.aiResponse ||
          "Here's something for you today — take a deep breath, slow down, and focus on one good thing that makes you smile. You're doing better than you think 💚";
        setAiResponse(aiText);
        setTypedResponse("");
      }, 3000);

      sessionStorage.setItem("surveyAnswers", JSON.stringify(finalAnswers));
    } catch (error) {
      console.error("Error submitting survey:", error);
      setIsAiLoading(false);
    }
  };

  const handleOptionSelect = (option: string | number) => {
    setAnswers((prev) => ({
      ...prev,
      [surveyQuestions[currentQuestion].question]: option,
    }));

    if (currentQuestion + 1 === surveyQuestions?.length) {
      const finalAnswers = {
        ...answers,
        [surveyQuestions[currentQuestion].id]: option,
      };
      submitSurvey(finalAnswers);
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

  const AiTherapistLoading = () => (
    <div className="flex flex-col items-center justify-center text-center p-12 space-y-8">
      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        ))}
      </motion.div>
      <motion.p
        className="text-gray-600 text-lg font-medium max-w-md"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {loadingMessage}
      </motion.p>
    </div>
  );

  const AiResponseDisplay = () => (
    <div className="flex flex-col items-center justify-center text-center p-12 space-y-8">
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <motion.h2
          className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-8"
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Mindful Insight 💚
        </motion.h2>

        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200/50 shadow-lg">
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap font-medium">
            {typedResponse}
            {typedResponse.length < aiResponse.length && (
              <span className="inline-block w-1 h-6 ml-1 bg-emerald-500 rounded-sm" />
            )}
          </p>
        </div>
      </motion.div>

      {typedResponse.length === aiResponse.length && (
        <motion.button
          onClick={() => {
            setAiResponse("");
            setTypedResponse("");
            setCurrentQuestion(0);
            setAnswers({});
          }}
          className="mt-6 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Take Survey Again
        </motion.button>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 relative overflow-hidden">
      <BackgroundElements />

      <main className="p-6 md:p-14 flex items-center justify-center min-h-screen relative z-10">
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl shadow-emerald-500/20 border border-white/60 w-full max-w-4xl min-h-[600px] p-8 md:p-12">
          {isAiLoading ? (
            <AiTherapistLoading />
          ) : aiResponse ? (
            <AiResponseDisplay />
          ) : (
            <>
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
            </>
          )}
        </div>
      </main>
    </div>
  );
}
