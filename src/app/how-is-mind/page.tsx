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
import { SurveyAnswers, SurveyQuestion } from "@/components/Survey/types/survey";
import { ResultsModal } from "@/components/Survey/completion-modal";

export default function SurveyQuestions() {
  const [surveyQuestions, setSurveyQuestions] =
    useState<SurveyQuestion[]>(howIsMindQues);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [value, setValue] = useState("");
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // 🧠 New: AI loading + response state
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

  // Function to simulate typing effect (like ChatGPT)
  const typeText = (text: string) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setTypedResponse((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);
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

  const submitSurvey = async (finalAnswers: SurveyAnswers) => {
    console.log("finalAnswers", finalAnswers);
    try {
      const response = await fetch("https://kochimetrocalc.me/psyra-survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalAnswers),
      });
      const data = await response.json();
      console.log("Survey submitted successfully:", data);

      // 🧠 New: simulate 3 seconds of AI thinking before showing results
      setIsAiLoading(true);
      const randomMsg =
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
      setLoadingMessage(randomMsg);

      setTimeout(() => {
        setIsAiLoading(false);
        const aiText =
          data?.suggestion ||
          "Here’s something for you today — take a deep breath, slow down, and focus on one good thing that makes you smile. You’re doing better than you think 💚";
        setAiResponse(aiText);
        setTypedResponse("");
        typeText(aiText);
      }, 3000);
    } catch (error) {
      console.error("Error submitting survey:", error);
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
      sessionStorage.setItem("surveyAnswers", JSON.stringify(finalAnswers));
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

  // 🧘‍♀️ Loading screen
  const AiTherapistLoading = () => (
    <div className="flex flex-col items-center justify-center text-center p-10 space-y-6">
      <motion.div
        className="w-12 h-12 border-4 border-teal-300 border-t-transparent rounded-full animate-spin"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.p
        className="text-gray-700 text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {loadingMessage}
      </motion.p>
    </div>
  );

  // 💬 AI response view
  const AiResponseDisplay = () => (
    <div className="flex flex-col items-center justify-center text-center p-10 space-y-6">
      <motion.h2
        className="text-2xl font-semibold text-emerald-700"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Mindful Tip 💚
      </motion.h2>
      <motion.p
        className="text-gray-700 text-lg max-w-2xl leading-relaxed whitespace-pre-line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {typedResponse}
      </motion.p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 relative overflow-hidden">
      <BackgroundElements />

      <main className="p-14 flex items-center justify-center min-h-screen px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-teal-500/10 border border-white/50 w-full max-w-4xl min-h-[600px] p-8">
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
