"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function StepOne({ onNext }: { onNext: () => void }) {
  const [showBubble, setShowBubble] = useState(false);
  const bobRef = useRef<HTMLDivElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);
  const bubbleRef = useRef<HTMLDivElement | null>(null);
  const ctx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {
      if (!bobRef.current || !shadowRef.current) return;

      // set initial position offscreen right
      gsap.set([bobRef.current, shadowRef.current], { x: "100vw" });

      gsap.set(shadowRef.current, {
        transformOrigin: "50%",
        opacity: 0.25,
        scaleX: 1.1,
        scaleY: 1,
      });

      // looping animation timeline
      const loop = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        repeat: -1, // 🔁 infinite loop
      });

      loop
        // from right → center
        .to([bobRef.current, shadowRef.current], { x: 0, duration: 3 })
        // center → left
        .to([bobRef.current, shadowRef.current], { x: "-100vw", duration: 3 })
        // reset instantly to right (offscreen) without flashing
        .set([bobRef.current, shadowRef.current], { x: "100vw" })
        // and continue loop
        .to([bobRef.current, shadowRef.current], { x: 0, duration: 3 });

      // shadow idle breathing effect
      gsap.to(shadowRef.current, {
        scaleX: 0.85,
        opacity: 0.3,
        duration: 0.9,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
    });

    return () => ctx.current?.revert();
  }, []);

  useEffect(() => {
    if (showBubble && bubbleRef.current) {
      gsap.fromTo(
        bubbleRef.current,
        { autoAlpha: 0, scale: 0.9, y: 8 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [showBubble]);

  return (
    <div className="max-w-2xl mx-auto text-center space-y-8">
      <div className="mt-6 p-4">
        <h1 className="text-5xl md:text-6xl lg:text-6xl font-black leading-tight text-center">
          <span className="text-white">BE </span>
          <span className="text-[#005657]">OPEN </span>
          <span className="text-white">UP!!</span>
        </h1>
      </div>

      <div className="relative flex flex-col items-center">
        <div className="relative w-full h-48">
          <div
            ref={shadowRef}
            className="pointer-events-none absolute left-0 right-0 bottom-0 mx-auto h-6 w-56 rounded-full bg-black/30 blur-md"
            aria-hidden="true"
          />
          {/* green bob */}
          {/* <h1 className="text-3xl md:text-3xl lg:text-3xl font-black leading-tight text-center">
            <span className="text-white">YOU ARE NOT ALONE</span>
            <br />
            <span className="text-white">PSYRA IS HERE FOR YOU</span>
          </h1> */}
          <div
            // ref={bobRef}
            className="absolute top-1/2 -translate-y-1/2 bg-[#489C50] h-48 w-full rounded-full flex items-center"
          >
            <div className="flex flex-col items-center w-full ">
              <div className="flex gap-6 animate-emotion-eyes">
                <div className="w-3 h-3 bg-white rounded-full" />
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div className="w-10 h-10 border-b-4 border-white rounded-full border-t-0 mt-2" />
            </div>
            {/* {showBubble && (
              <div
                ref={bubbleRef}
                className="pointer-events-none absolute left-full -translate-y-1/2 ml-4 z-10"
              >
                <div className="relative w-56 md:w-64">
                  <img
                    src="/new_ballon-removebg-preview.png"
                    alt="Speech balloon"
                    className="w-full h-auto select-none"
                    draggable="false"
                  />

                  <div className="absolute p-6 inset-0 flex items-center justify-center px-4 py-3">
                    <p className="text-[#0B332E] text-sm md:text-base p-6 mb-8 font-semibold text-center text-pretty">
                      {"You are not alone — Psyra is here for you."}
                    </p>
                  </div>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>

      <Button
        onClick={onNext}
        size="lg"
        className="text-lg h-14 px-8 bg-[#005657] hover:bg-[#004546] mt-8"
      >
        Get Started
        <ArrowRight className="ml-2 w-5 h-5" />
      </Button>
    </div>
  );
}
