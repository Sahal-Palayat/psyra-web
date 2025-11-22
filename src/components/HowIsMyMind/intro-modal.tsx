"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface IntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStart: () => void;
}

export function IntroModal({ isOpen, onClose, onStart }: IntroModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Welcome to Your Assessment
          </DialogTitle>
          <DialogDescription className="pt-2">
            Take a scientifically-backed mental health assessment in just 5
            minutes
          </DialogDescription>
        </DialogHeader>

        <motion.div
          className="space-y-6 py-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Features List */}
          <div className="space-y-3">
            {[
              { title: "Quick", desc: "Only 5 minutes to complete" },
              { title: "Accurate", desc: "98% accuracy rate" },
              {
                title: "Private",
                desc: "Your data is completely confidential",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-3 items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={onStart}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/30 transition-all"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
