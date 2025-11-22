"use client";

import { Background } from "@/components/anonymous/background";
import Confetti from "@/components/anonymous/confetti";
import { StepOne } from "@/components/anonymous/step-one";
import { StepThree } from "@/components/anonymous/step-three";
import { StepTwo } from "@/components/anonymous/step-two";
import type React from "react";
import { useState } from "react";

const Anonymous = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/feedback`;

      // Build payload: static values + dynamic feedback text
      const payload = {
        name: name || "Anonymous",
        mobile: mobile || "0000000000", // static placeholder required by API
        feedback: message.trim(),
        rating: 0,
        psymateId: "anonymous",
        timestamp: new Date().toISOString(),
      };

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit feedback");
      }

      // Success
    } catch (error) {
      console.log(error);
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setShowConfetti(true);
    setMessage("");
    setStep(3);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleTakeTherapy = () => {
    window.location.href = "/psychologists?offer-claim=true";
  };

  return (
    <Background>
      {showConfetti && <Confetti count={120} duration={2.2} />}
      {step === 1 && <StepOne onNext={() => setStep(2)} />}
      {step === 2 && (
        <StepTwo
          message={message}
          onMessageChange={setMessage}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
          setName={setName}
          setMobile={setMobile}
          name={name}
          mobile={mobile}
        />
      )}
      {step === 3 && <StepThree onTakeTherapy={handleTakeTherapy} />}
    </Background>
  );
};

export default Anonymous;
