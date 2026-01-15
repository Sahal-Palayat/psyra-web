"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export default function TestimonialsScroller({
  children,
}: {
  children: ReactNode;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const total = Array.isArray(children) ? children.length : 0;

  const isDesktop = () => window.innerWidth >= 768;

  /* ---------------- DESKTOP AUTO SCROLL ---------------- */
  const startAutoScroll = () => {
    if (!isDesktop()) return;

    const track = trackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    if (!cards.length) return;

    const cardWidth = cards[0].clientWidth;
    const gap = 32; // md:gap-8
    const step = cardWidth + gap;
    const originalCount = cards.length / 2;

    intervalRef.current = setInterval(() => {
      indexRef.current += 1;

      track.style.transition = "transform 700ms ease-in-out";
      track.style.transform = `translateX(-${indexRef.current * step}px)`;

      if (indexRef.current >= originalCount) {
        setTimeout(() => {
          track.style.transition = "none";
          indexRef.current = 0;
          track.style.transform = "translateX(0)";
        }, 700);
      }
    }, 4500);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  /* ---------------- MOBILE DOT TRACKING ---------------- */
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const onScroll = () => {
      const card = viewport.querySelector<HTMLElement>("[data-card]");
      if (!card) return;

      const gap = 24; // gap-6
      const index = Math.round(
        viewport.scrollLeft / (card.offsetWidth + gap)
      );

      setActiveIndex(index);
    };

    viewport.addEventListener("scroll", onScroll, { passive: true });
    return () => viewport.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    startAutoScroll();

    const onResize = () => {
      stopAutoScroll();
      startAutoScroll();
    };

    window.addEventListener("resize", onResize);
    return () => {
      stopAutoScroll();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      {/* VIEWPORT */}
      <div
        ref={viewportRef}
        className="
          mx-auto
       
          overflow-x-auto md:overflow-hidden
          scrollbar-hide 
          

          w-full md:w-[1084px]
          px-4 md:px-0

          snap-x snap-mandatory md:snap-none
          overscroll-x-contain
          scroll-smooth
        "
      >
        <div
          ref={trackRef}
          className="flex gap-6 md:gap-8 will-change-transform"
        >
          {children}

          <div className="flex-shrink-0 w-4 md:hidden" />

          {/* DESKTOP LOOP DUPLICATION */}
          <div className="hidden md:contents">{children}</div>
        </div>
      </div>

      {/* DOT INDICATORS (mobile only) */}
      {total > 1 && (
        <div className="mt-6 flex justify-center gap-2 md:hidden">
          {Array.from({ length: total }).map((_, i) => (
            <span
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-4 bg-[#00989D]"
                  : "w-2 bg-[#cfe8e6]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
