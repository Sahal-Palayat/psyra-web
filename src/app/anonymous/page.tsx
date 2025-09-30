"use client";

import type React from "react";

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

const page = () => {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showOfferDialog, setShowOfferDialog] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    setIsSubmitting(true);

    // Simulate submission (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowOfferDialog(true);
    setMessage("");
  };

  const handleTakeTherapy = () => {
    // Redirect to therapy booking page or handle therapy signup
    window.location.href = "/psychologists";
  };

  return (
    <>
      <div className="min-h-screen bg-[#F5F5F0]">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <Card className="border shadow-lg bg-white mt-8">
              <CardHeader className="space-y-4 text-center pb-8">
                <div className="mx-auto w-16 h-16 bg-[#005657] rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-bold text-balance leading-tight">
                  Hey There
                </CardTitle>
                <CardDescription className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance max-w-2xl mx-auto">
                  Is there something you have been wanting to share for a very
                  long time but couldn't? Because you were scared that people
                  would judge you? Or maybe you didn't have someone to share
                  with?
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
                      Your submission is completely anonymous. We don't collect
                      any identifying information.
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

            <Dialog open={showOfferDialog} onOpenChange={setShowOfferDialog}>
              <DialogContent className="sm:max-w-md">
                <DialogHeader className="space-y-4 text-center">
                  <div className="mx-auto w-16 h-16 bg-[#005657] rounded-full flex items-center justify-center animate-bounce-in">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <DialogTitle className="text-2xl font-bold">
                    Thank You for Sharing
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed">
                    We're proud of you for taking this step. Sharing your
                    feelings is the first step towards healing.
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
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
