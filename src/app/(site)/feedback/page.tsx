"use client";
import { Suspense } from "react";
import {  useSearchParams } from "next/navigation";
import FeedbackForm from "@/components/feedback/feedback-form";

export const metadata = {
  title: "Share Your Feedback | Psyra",
  description:
    "Share your feedback and experience with Psyra. Your insights help us improve our mental health services and support better care.",
};

function FeedbackPageContent() {
  const searchParams = useSearchParams();
  const encodedData = searchParams.get("data");

  console.log(encodedData, "ENCODEDD DATAAAA");

  return (
    <>
      <FeedbackForm encodedData={encodedData || undefined} />
    </>
  );
}

export default function FeedbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-teal-600 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <FeedbackPageContent />
    </Suspense>
  );
}
