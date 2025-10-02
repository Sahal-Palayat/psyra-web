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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    console.log(message, "MESSSSSSSSSSSSSSSSSSSS");
    try {
      const url =
        "https://script.google.com/macros/s/AKfycby43JZLQzf96G8sqX0jIj55eIAK5g3Bs42XeDotAkOXGJRm2ZxvfmsPQiFepQFLJi36Gw/exec";
      const submitData = new URLSearchParams();
      submitData.append("Openup", message);

      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: submitData.toString(),
      });

      const result = await response.text();
      console.log("Response from Google Apps Script:", result);

      if (response.ok) {
        console.log("LOGGED INN NN NN NN NNN");

        // Reset form after successful submission
      } else {
        throw new Error("Failed to submit application");
      }
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
    window.location.href = "/psychologists?claim-offer=true";
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
        />
      )}
      {step === 3 && <StepThree onTakeTherapy={handleTakeTherapy} />}
    </Background>
  );
};

export default Anonymous;
