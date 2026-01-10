"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  getRelationshipQuestions,
  submitRelationshipAssessment,
} from "@/services/relationship-assessment-api";
import { RelationshipQuestion } from "@/types/relationship-assessment.types";
import { submitCoupleAssessmentToSheet } from "@/services/couple-assessment-sheet";


type Step = "questions" | "personalDetails" | "result";

export function useRelationshipAssessment() {
  const router = useRouter();

  const [questions, setQuestions] = useState<RelationshipQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [questionAnswers, setQuestionAnswers] = useState<
    Record<string, string>
  >({});

  const [personalDetails, setPersonalDetails] = useState({
    name: "",
    mobile: "",
  });

  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [step, setStep] = useState<Step>("questions");

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIndex];

  // 1️⃣ Fetch questions
  useEffect(() => {
    async function fetchQuestions() {
      try {
        const data = await getRelationshipQuestions();
        setQuestions(data);
      } catch (error) {
        console.error("Failed to fetch relationship questions", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  // 2️⃣ Handle answer selection
  function handleAnswerSelect(answerLabel: string) {
    if (!currentQuestion) return;

    setQuestionAnswers((prev) => ({
      ...prev,
      [currentQuestion.questionText]: answerLabel,
    }));

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setStep("personalDetails");
    }
  }

  // 3️⃣ Go back
  function goBack() {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }

  // 4️⃣ Go next
  function goNext() {
    if (!currentQuestion) return;

    const hasAnswered =
      questionAnswers[currentQuestion.questionText] !== undefined;

    if (!hasAnswered) return;

    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setStep("personalDetails");
    }
  }

  // 5️⃣ Submit assessment
async function submitAssessment() {
  setSubmitting(true);

  
  const orderedAnswers = questions.map(
    (q) => questionAnswers[q.questionText] ?? ""
  );

  try {
   
    console.log("➡️ Starting backend submit");

    const result = await submitRelationshipAssessment({
      responses: {
        personalDetails,
        questionAnswers: Object.entries(questionAnswers).map(
          ([question, answer]) => ({ question, answer })
        ),
      },
    });

    console.log("✅ Backend submit success", result);

    try {
      console.log("➡️ Submitting to Google Sheet");

      await submitCoupleAssessmentToSheet({
        name: personalDetails.name,
        mobile: personalDetails.mobile,
        riskLevel: result.riskLevel,
        normalizedScore: result.normalizedScore,
        resultLabel: result.resultLabel,
        answers: orderedAnswers,
      });

      console.log("✅ Sheet submission success");
    } catch (sheetError) {
     
      console.warn("⚠️ Sheet submission failed", sheetError);
    }

    sessionStorage.setItem(
      "relationshipResult",
      JSON.stringify(result)
    );

    router.push("/relationship-wellness-check/result");
  } catch (error) {
    console.error(" Assessment submission failed", error);
    alert("Something went wrong. Please try again.");
  } finally {
    setSubmitting(false);
  }
}


  return {
    loading,
    submitting,
    step,

    questions,
    currentIndex,
    currentQuestion,
    totalQuestions,

    questionAnswers,
    personalDetails,
    setPersonalDetails,

    handleAnswerSelect,
    goBack,
    goNext,
    submitAssessment,
  };
}
