"use client";

import type React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function StepTwo({
  message,
  onMessageChange,
  onSubmit,
  isSubmitting,
}: {
  message: string;
  onMessageChange: (v: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(rootRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power2.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="max-w-2xl mx-auto text-center space-y-8 bg-[#F7F8F2] p-6 rounded-lg"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-balance leading-tight text-[#0B332E]">
        Hey There
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-balance max-w-2xl mx-auto text-[#0B332E]/80">
        {
          "Is there something you’ve wanted to share for a long time but couldn’t? This is a safe, anonymous space."
        }
      </p>

      <form
        onSubmit={onSubmit}
        className="space-y-6 text-left max-w-2xl mx-auto"
      >
        <div className="space-y-3">
          <label
            htmlFor="message"
            className="text-sm font-medium text-[#0B332E]/80"
          >
            Share your thoughts anonymously.
          </label>
          <Textarea
            id="message"
            placeholder="Write whatever is on your mind... No one will know it's you."
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            className="min-h-[200px] text-base resize-none"
            required
          />
          <p className="text-xs text-[#0B332E]/70">
            Your submission is completely anonymous. We don’t collect any
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
            <span className="animate-pulse">Submitting...</span>
          ) : (
            <>
              Share Anonymously
              <ArrowRight className="ml-2 w-5 h-5" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
