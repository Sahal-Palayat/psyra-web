import React from "react";
import { MoveRight } from "lucide-react";

interface ProgramDetailsProps {
  onPrimaryCtaClick?: () => void;
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({ onPrimaryCtaClick }) => {
  return (
    <section className="w-full max-w-5xl mx-auto mb-10 px-4">
      <div className="bg-white/95 rounded-3xl shadow-xl border border-teal-50 px-5 py-6 md:px-8 md:py-8">
        <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-teal-700 mb-2">
          New Year Mind Reset Program
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-teal-900 mb-3 leading-snug">
          Reset your mind. Rebuild your year.
        </h1>
        <p className="text-sm md:text-base text-teal-800/90 mb-4">
          A focused New Year journey to help you declutter your thoughts, reset emotional
          patterns, and step into the year with more clarity and confidence.
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
          <div className="rounded-2xl bg-teal-50/80 border border-teal-100 p-4">
            <p className="text-xs font-semibold text-teal-800 mb-1 uppercase tracking-wide">
              What you&apos;ll work on
            </p>
            <ul className="text-xs md:text-sm text-teal-900 space-y-1 list-disc list-inside">
              <li>Letting go of last year&apos;s mental burden</li>
              <li>Understanding your emotional patterns</li>
              <li>Building a kinder inner voice</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-emerald-50/80 border border-emerald-100 p-4">
            <p className="text-xs font-semibold text-emerald-900 mb-1 uppercase tracking-wide">
              How it helps
            </p>
            <ul className="text-xs md:text-sm text-emerald-900 space-y-1 list-disc list-inside">
              <li>More calm, less overthinking</li>
              <li>Clearer priorities for this year</li>
              <li>Healthier daily mental habits</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-teal-900 text-teal-50 p-4 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold mb-1 uppercase tracking-wide">
                Investment
              </p>
              <p className="text-lg md:text-xl font-bold mb-1">₹ 999</p>
              <p className="text-[11px] md:text-xs text-teal-100/90">
                Introductory pricing for this New Year cohort.
              </p>
            </div>
            <button
              onClick={onPrimaryCtaClick}
              className="mt-4 inline-flex items-center justify-center gap-1 rounded-full bg-white text-teal-900 px-4 py-2 text-xs md:text-sm font-semibold hover:bg-teal-50 transition-all"
            >
              Join the program
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-[11px] md:text-xs text-teal-700/80">
          Once you join, you&apos;ll share a few basic details and complete payment securely.
          A Psyra team member will then help you schedule and start your New Year reset.
        </p>
      </div>
    </section>
  );
};

export default ProgramDetails;


