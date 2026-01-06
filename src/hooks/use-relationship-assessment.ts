    "use client";

    import { useEffect, useState } from "react";
    import { useRouter } from "next/navigation";
    import {
    getRelationshipQuestions,
    submitRelationshipAssessment,
    } from "@/services/relationship-assessment-api";
    import {
    RelationshipQuestion,
    RelationshipAnswerPayload,
    } from "@/types/relationship-assessment.types";

    export function useRelationshipAssessment() {
    const router = useRouter();

    const [questions, setQuestions] = useState<RelationshipQuestion[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, number>>({});
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    const totalQuestions = questions.length;
    const currentQuestion = questions[currentIndex];

    // 1️⃣ Fetch questions on mount
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
    async function handleAnswerSelect(score: number) {
        if (!currentQuestion) return;

        setAnswers((prev) => ({
        ...prev,
        [currentQuestion._id]: score,
        }));

        // Auto move to next question
        if (currentIndex < totalQuestions - 1) {
        setCurrentIndex((prev) => prev + 1);
        } else {
        await submitAssessment();
        }
    }

    // 3️⃣ Go back (optional)
    function goBack() {
        if (currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
        }
    }

    // 4️⃣ Submit assessment
    async function submitAssessment() {
        setSubmitting(true);

        const payload: RelationshipAnswerPayload = {
        answers: Object.entries(answers).map(([questionId, selectedScore]) => ({
            questionId,
            selectedScore,
        })),
        };

        try {
       await submitRelationshipAssessment(payload);


        // Redirect to result page with data
       router.push("/relationship-wellness-check/result");

        } catch (error) {
        console.error("Failed to submit assessment", error);
        } finally {
        setSubmitting(false);
        }
    }

    return {
        loading,
        submitting,
        questions,
        currentIndex,
        currentQuestion,
        totalQuestions,
        handleAnswerSelect,
        goBack,
    };
    }
