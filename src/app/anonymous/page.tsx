"use client";

import type React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Heart, Sparkles, ArrowRight } from "lucide-react";
import Confetti from "react-confetti";
import { FlipTextDemo } from "@/components/lazy/blurtext";

const Anonymous = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOfferDialog, setShowOfferDialog] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  // const { width, height } = useWindowSize()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    setIsSubmitting(true);

    // Simulate submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setStep(3);
    setShowConfetti(true);
    setShowOfferDialog(true);
    setMessage("");

    // Stop confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleTakeTherapy = () => {
    // Redirect to therapy booking page or handle therapy signup
    window.location.href = "/therapy";
  };

  if (step === 1) {
    return (
      <div className="min-h-screen bg-[#B1DFAE]  flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          {/* Main Content */}
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {/* Headline */}

            {/* Animated character with snake movement and emotion changes */}
            <div className="">
              {/* Character container with snake animation */}
              <motion.div
                className="bg-[green] h-48 w-full rounded-full flex items-center"
                animate={{ x: ["100vw", "10vw", "-120vw"]}}
                transition={{
                  duration: 9,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                {/* Face with animated emotions */}
                <div className="ml-21 flex  flex-col items-center">
                  {/* Eyes with emotion animation */}
                  <div className="flex gap-6 animate-emotion-eyes">
                    <div className="w-3 h-3 bg-white rounded-full" />
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>

                  {/* Mouth */}
                  <div className="w-10 h-10 border-b-4 border-white rounded-full border-t-0"></div>
                </div>
              </motion.div>

              {/* Get Started Button */}
              <Button
                onClick={() => setStep(2)}
                size="lg"
                className="text-lg h-14 px-8 bg-[#005657] hover:bg-[#004546] mt-8"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#005657]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#005657]/5 rounded-full blur-3xl" />
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <Card className="border shadow-lg bg-white">
        <CardHeader className="space-y-4 text-center pb-8">
          <div className="mx-auto w-16 h-16 bg-[#005657] rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold text-balance leading-tight">
            Hey There
          </CardTitle>
          <CardDescription className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance max-w-2xl mx-auto">
            Is there something you have been wanting to share for a very long
            time but couldn't? Because you were scared that people would judge
            you? Or maybe you didn't have someone to share with?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-3">
              <label
                htmlFor="message"
                className="text-sm font-medium text-muted-foreground"
              >
                Share your thoughts anonymously. This is a safe space.
              </label>
              <Textarea
                id="message"
                placeholder="Write whatever is on your mind... No one will know it's you."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[200px] text-base resize-none"
                required
              />
              <p className="text-xs text-muted-foreground">
                Your submission is completely anonymous. We don't collect any
                identifying information.
              </p>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full text-lg h-12 bg-[#005657] hover:bg-[#004546]"
              disabled={isSubmitting || !message.trim()}
            >
              {isSubmitting ? (
                <>
                  <span className="animate-pulse">Submitting...</span>
                </>
              ) : (
                <>
                  Share Anonymously
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      {/* Celebration confetti */}
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}

      <div className="flex flex-col items-center justify-center min-h-[70vh] space-y-8">
        <div className="text-center space-y-6 max-w-2xl">
          <div className="mx-auto w-20 h-20 bg-[#005657] rounded-full flex items-center justify-center animate-bounce-in">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            Thank You for Sharing
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            We're proud of you for taking this step. Sharing your feelings is
            the first step towards healing.
          </p>
        </div>
      </div>

      <Dialog open={showOfferDialog} onOpenChange={setShowOfferDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="space-y-4 text-center">
            <div className="mx-auto w-16 h-16 bg-[#005657] rounded-full flex items-center justify-center animate-bounce-in">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold">
              Special Offer Just for You
            </DialogTitle>
            <DialogDescription className="text-base leading-relaxed">
              Continue your healing journey with professional support
            </DialogDescription>
          </DialogHeader>

          <div className="bg-[#005657]/5 rounded-lg p-6 space-y-4 border-2 border-[#005657]/20">
            <div className="text-center">
              <div className="inline-block bg-[#005657] text-white px-4 py-1 rounded-full text-sm font-bold mb-3">
                Special Offer
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                10% OFF
              </h3>
              <p className="text-lg font-semibold text-foreground/90">
                Take Therapy Now
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Start your healing journey with professional support
              </p>
            </div>

            <div className="space-y-2">
              <Button
                onClick={handleTakeTherapy}
                size="lg"
                className="w-full text-base h-12 bg-[#005657] hover:bg-[#004546]"
              >
                Claim Your 10% Discount
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={() => setShowOfferDialog(false)}
                variant="ghost"
                className="w-full"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default Anonymous;
