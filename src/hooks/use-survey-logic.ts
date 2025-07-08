"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  basicQuestions,
  studentQuestions,
  profQuestions,
} from "@/components/Survey/data/survey-questions";
import {
  SurveyAnswers,
  SurveyQuestion,
} from "@/components/Survey/types/survey";

export const useSurveyLogic = () => {
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
  }, [router]);

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
      if (answers?.occupation === "Student") {
        setSurveyQuestions((prev) => [...prev, ...studentQuestions]);
      } else {
        setSurveyQuestions((prev) => [...prev, ...profQuestions]);
      }
    }
    if (
      currentQuestion !== basicQuestions.length &&
      surveyQuestions?.length === currentQuestion
    ) {
      return;
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

  return {
    value,
    setValue,
    surveyQuestions,
    showCompletionModal,
    setShowCompletionModal,
    currentQuestion,
    answers,
    isTransitioning,
    handleOptionSelect,
    handlePrevious,
    router,
  };
};
