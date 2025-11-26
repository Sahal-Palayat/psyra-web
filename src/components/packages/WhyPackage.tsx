"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { Lightbulb, RefreshCcw, Handshake, TrendingUp, MessageCircle } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    text: "Better clarity with structured support",
  },
  {
    icon: RefreshCcw,
    text: "Regular, consistent check-ins",
  },
  {
    icon: Handshake,
    text: "Build trust with your therapist",
  },
  {
    icon: TrendingUp,
    text: "Supports long-term progress and growth",
  },
  {
    icon: MessageCircle,
    text: "Anytime guidance when you need it",
  },
];


const WhyPackage = () => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPos({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 12,
      });
    }
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        btnRef.current &&
        !btnRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("sidebar-open", handler);
    return () => window.removeEventListener("sidebar-open", handler);
  }, []);

  return (
    <>
      <motion.button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="
    inline-flex items-center
    px-3 py-2
    bg-white
    text-teal-700 font-medium
    border border-gray-200
    rounded-lg
    shadow-sm hover:shadow-md
    transition-all duration-300
    text-sm
    whitespace-nowrap
  "
      >
        <div className="w-4 h-4 text-accent group-hover:rotate-12 transition-transform duration-300" />
        <span>Why Package?</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-1"
        >
          <svg
            className="w-3.5 h-3.5 text-primary/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.span>
      </motion.button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="
                  fixed
                  bg-popover border border-border rounded-2xl p-6 
                  shadow-xl shadow-primary/5
                  w-80 md:w-[340px]
                  -translate-x-1/2
                  z-[100]
                  overflow-hidden
                "
                style={{
                  left: pos.x,
                  top: pos.y,
                }}
              >
                {/* Decorative gradient orb */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-center mb-4">
                    <h3 className="font-semibold text-popover-foreground text-base">
                      Why Choose a Package?
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08 + 0.1 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-0.5 p-1 bg-secondary rounded-lg group-hover/item:bg-primary/10 transition-colors">
                          <benefit.icon className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm leading-relaxed group-hover/item:text-popover-foreground transition-colors">
                          {benefit.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      Invest in your mental wellness journey
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};

export default WhyPackage;
