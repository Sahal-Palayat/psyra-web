"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

const WhyPackage = () => {
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  /**  Position dropdown under the button */
  useEffect(() => {
    if (open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setPos({
        x: rect.left + rect.width / 2,
        y: rect.bottom + 10,
      });
    }
  }, [open]);

  /** Close on click outside */
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

  /**  Close when scrolling */
  useEffect(() => {
    if (!open) return;
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  /**  Close dropdown whenever sidebar opens */
  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener("sidebar-open", handler); // custom event
    return () => window.removeEventListener("sidebar-open", handler);
  }, []);

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-white text-teal-700 border border-teal-600 rounded-lg shadow hover:bg-teal-50 transition text-sm"
      >
        Why Package?
      </button>

      {open &&
        createPortal(
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="
              fixed
              bg-white border border-gray-200 rounded-xl p-5 shadow-xl
              w-72 md:w-80
              -translate-x-1/2
              z-[100]
            "
            style={{
              left: pos.x,
              top: pos.y,
            }}
          >
            <h3 className="font-semibold text-teal-700 text-md mb-2">
              Why Choose a Counselling Package?
            </h3>

            <ul className="text-gray-700 text-sm space-y-2">
              <li>Consistency improves therapy results.</li>
              <li>More affordable than single sessions.</li>
              <li>Supports deeper emotional progress.</li>
              <li>Helps build trust with the same therapist.</li>
            </ul>
          </motion.div>,
          document.body
        )}
    </>
  );
};

export default WhyPackage;
