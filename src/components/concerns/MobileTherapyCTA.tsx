"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MobileTherapyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");

    const onScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // show CTA after some scroll
      if (scrollY < 180) {
        setVisible(false);
        return;
      }

      // hide CTA when footer is near
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;

        if (footerTop < viewportHeight + 40) {
          setVisible(false);
          return;
        }
      }

      setVisible(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`
    fixed bottom-0 left-0 right-0 z-40 md:hidden
    transition-all duration-300 ease-in-out
    ${
      visible
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 translate-y-6 pointer-events-none"
    }
  `}
    >
      <div className="mx-4 mb-4 rounded-2xl bg-gradient-to-br from-teal-600 via-cyan-600 to-teal-700 shadow-xl">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          {/* Text */}
          <div className="text-white">
            <p className="text-sm font-medium leading-tight">
              You’re not alone
            </p>
            <p className="text-xs text-white/90">
              Professional support can help
            </p>
          </div>

          {/* Button */}
          <Link
            href="/psychologists"
            className="flex-shrink-0 inline-flex items-center gap-1.5 bg-white text-teal-700 px-4 py-2 rounded-xl text-sm font-semibold"
          >
            Get help
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
