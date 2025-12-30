"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { QuestionContent } from "@/components/Survey/question-content";
import { QuestionDisplay } from "@/components/Survey/question-display";
import { SurveyHeader } from "@/components/Survey/survey-header";
import { UserInfoForm } from "@/components/Survey/user-info-form";
import {
  basicQuestions,
  howIsMindQues,
} from "@/components/Survey/data/survey-questions";
import type { SurveyAnswers } from "@/components/Survey/types/survey";
import { Background } from "@/components/anonymous/background";
import { sendAssessmentToSheet } from "@/lib/sheet";
import type { AssessmentPayload } from "@/types/sheet";
import type { RawPayload } from "@/types/sheet";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

// import { anxietyQuestions } from "@/components/Survey/data/anxiety-questions";
// import { depressionQuestions } from "@/components/Survey/data/depression-questions";

type QuestionOption =
  | string
  | {
      label: string;
      score: number;
    };

type AssessmentQuestion = {
  id: string;
  text: string;
  options: QuestionOption[];
};

function getMentalHealthFeedback(score: number) {
  const maxScore = 36;
  const wellbeingPercent = Math.round(((maxScore - score) / maxScore) * 100);

  let stressLevel = "";
  let color = "";

  if (score <= 7) {
    stressLevel = "Low Stress";
    color = "from-green-500 to-emerald-500";
  } else if (score <= 14) {
    stressLevel = "Mild Stress";
    color = "from-yellow-500 to-amber-500";
  } else if (score <= 21) {
    stressLevel = "Moderate Stress";
    color = "from-orange-500 to-red-500";
  } else {
    stressLevel = "High Stress";
    color = "from-red-600 to-rose-600";
  }

  let message = "";

  if (score <= 7) message = "You seem to be managing stress well!";
  else if (score <= 14)
    message =
      "You're showing mild signs of stress — try some relaxation today.";
  else if (score <= 21)
    message =
      "You might be experiencing moderate stress. Consider taking a break or talking to someone.";
  else
    message =
      "You appear to be under high stress. It's a good time to seek emotional support or professional help.";

  return {
    score,
    wellbeingPercent,
    message,
    stressLevel,
    color,
  };
}

const formatSurveyData = (raw: RawPayload): AssessmentPayload => {
  const person = raw.personDetails ?? {};
  const qa = raw.questionAnswers ?? {};

  const name = String(person.name ?? "");
  const mobile = String(person.mobile ?? "");
  const score = Number(person.score ?? 0);

  const questionAnswers: Record<string, string | number> = {};

  for (const [key, value] of Object.entries(qa)) {
    if (typeof value === "boolean") {
      // Convert boolean → string
      questionAnswers[key] = value ? "true" : "false";
    } else if (typeof value === "number") {
      questionAnswers[key] = value;
    } else {
      questionAnswers[key] = String(value ?? "");
    }
  }

  return {
    personDetails: { name, mobile, score },
    questionAnswers,
  };
};

export default function SurveyQuestions() {
  // const surveyQuestions = howIsMindQues;
  const searchParams = useSearchParams();
  const concern = searchParams.get("concern");
  const [questions, setQuestions] = useState<AssessmentQuestion[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  useEffect(() => {
    if (!concern) {
      setLoading(false);
      return;
    }

    const fetchQuestions = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/assessments/${concern}/questions`
        );
        const data = await res.json();
        if (!res.ok || !data?.success || !data?.data?.questions) {
          router.replace("/not-found"); // 👈 YOUR CUSTOM ERROR PAGE ROUTE
          return;
        }
        setQuestions(data.data.questions);
      } catch (err) {
        console.error("Failed to fetch questions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [concern,router]);

  const surveyQuestions = concern ? questions : howIsMindQues;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string | number>>({});
  const [value, setValue] = useState("");

  const [surveyComplete, setSurveyComplete] = useState(false);

  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [typedResponse, setTypedResponse] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [score, setScore] = useState<Record<string, string | number>>({});

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
    }, 30);

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
    const isAnxiety = concern === "anxiety";

    try {
      setIsAiLoading(true);
      const randomMsg =
        loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
      setLoadingMessage(randomMsg);

      const totalScore = Object.values(score as Record<string, number>).reduce(
        (sum, val) => sum + val,
        0
      );

      const rawPayload: RawPayload = {
        personDetails: {
          name: finalAnswers.name,
          mobile: finalAnswers.contact,
          score: totalScore,
        },
        questionAnswers: Object.fromEntries(
          Object.entries(finalAnswers).filter(
            ([key]) => key !== "name" && key !== "contact"
          )
        ),
      };

      const payload = formatSurveyData(rawPayload);

      console.log(payload, "payloddddd");

      try {
        await sendAssessmentToSheet(payload);
        console.log("Sheet submission successful");
      } catch (sheetError) {
        console.error("Sheet submission failed:", sheetError);
      }

      const anxietyPayload = {
        answers: Object.entries(score).map(([questionId, selectedScore]) => ({
          questionId,
          selectedScore,
        })),
      };

      const endpoint = concern
        ? `${process.env.NEXT_PUBLIC_API_URL}/assessments/${concern}`
        : `${process.env.NEXT_PUBLIC_API_URL}/psyra-survey`;

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isAnxiety ? anxietyPayload : payload),
      });

      const data = await response.json();

      if (isAnxiety) {
        setIsAiLoading(false);

        // ✅ SAFE ACCESS
        const aiText =
          data?.data?.aiResponse ??
          "Thank you for sharing your responses. Your insights are being prepared. If you're feeling overwhelmed, you're not alone — support is available 💚";

        setAiResponse(aiText);
        setTypedResponse("");
        setSurveyComplete(true);
        return;
      }

      setTimeout(() => {
        setIsAiLoading(false);
        const aiText =
          data?.data?.aiResponse ||
          "Here's something for you today — take a deep breath, slow down, and focus on one good thing that makes you smile. You're doing better than you think 💚";
        setAiResponse(aiText);
        setTypedResponse("");
      }, 3000);

      sessionStorage.setItem("surveyAnswers", JSON.stringify(payload));
    } catch (error) {
      console.error("Error submitting survey:", error);
      setIsAiLoading(false);
    }
  };

  const handleOptionSelect = (option: string | number, index: number) => {
    setAnswers((prev) => ({
      ...prev,
      [surveyQuestions[currentQuestion].id]: option,
    }));

    if (currentQuestion !== 12) {
      setScore((prev) => ({
        ...prev,
        [surveyQuestions[currentQuestion].id]: index,
      }));
    }

    if (currentQuestion + 1 === surveyQuestions?.length) {
      setSurveyComplete(true);
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

  const handleUserInfoSubmit = (userInfo: {
    name: string;
    contact: string;
  }) => {
    const finalAnswers = {
      ...answers,
      name: userInfo.name,
      contact: userInfo.contact,
    };

    submitSurvey(finalAnswers);
  };

  if (loading) {
    return <div className="p-10 text-center">Loading assessment…</div>;
  }

  if (!surveyQuestions.length || !surveyQuestions[currentQuestion]) {
  return null; // or a small fallback UI
}

  const question = surveyQuestions[currentQuestion];

  // normalize question text
  const questionText =
    "question" in question ? question.question : question.text;

  // normalize question type
  const questionType = "type" in question ? question.type : "option";

  // normalize options to string[]
  const options = Array.isArray(question.options)
    ? question.options.map((opt) => (typeof opt === "string" ? opt : opt.label))
    : [];

  // normalize id
  const questionId = String(question.id);

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

  const AiResponseDisplay = () => {
    const totalScore = Object.values(score as Record<string, number>).reduce(
      (sum, val) => sum + val,
      0
    );

    const feedback = getMentalHealthFeedback(totalScore);

    return (
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <motion.h2
            className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Mindful Insight 💚
          </motion.h2>

          <div className="mb-4 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className=""
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                {feedback.wellbeingPercent}%
                <p className="text-sm text-gray-600 mt-1">Wellbeing</p>
              </div>
              <div
                className={`text-xl font-semibold bg-gradient-to-r ${feedback.color} bg-clip-text text-transparent`}
              >
                {feedback.stressLevel}
              </div>
              {/* <p className="text-sm text-gray-600 mt-2">
               You have the Stress: {feedback.score}/36
              </p> */}
              <p className="text-sm text-gray-700 font-medium italic mt-3">
                {feedback.message}
              </p>
              {/* <p className="text-xs text-gray-500 mt-2">
                Score Range: 0-7 (Low) | 8-14 (Mild) | 15-21 (Moderate) | 22-36
                (High)
              </p> */}
            </motion.div>
          </div>

          <div className="">
            <p className="text-gray-700 text-md md:text-lg leading-relaxed whitespace-pre-wrap font-medium">
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
              window.location.href = "/services";
            }}
            className="mt-2 px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Take your first step
          </motion.button>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 relative overflow-hidden">
      <Background>
        <main className="mt-8 flex  justify-center relative z-10">
          <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl shadow-emerald-500/20 border border-white/60 w-full max-w-4xl min-h-[600px] p-8 md:p-12">
            {isAiLoading ? (
              <AiTherapistLoading />
            ) : aiResponse ? (
              <AiResponseDisplay />
            ) : surveyComplete ? (
              <UserInfoForm
                onSubmit={handleUserInfoSubmit}
                isLoading={isAiLoading}
              />
            ) : (
              <>
                <SurveyHeader
                  currentQuestion={currentQuestion}
                  totalQuestions={surveyQuestions.length}
                  showBackButton={currentQuestion > 0}
                  onPrevious={handlePrevious}
                  // isTransitioning={isTransitioning}
                  showProgress={surveyQuestions.length > basicQuestions.length}
                />

                <QuestionDisplay
                  question={questionText}
                  isTransitioning={isTransitioning}
                />

                <div className="space-y-4">
                  <QuestionContent
                    questionText={questionText}
                    questionType={questionType}
                    questionId={questionId}
                    options={options}
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
      </Background>
    </div>
  );
}
