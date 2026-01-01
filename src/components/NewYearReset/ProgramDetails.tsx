import React from "react";
import { MoveRight } from "lucide-react";

interface ProgramDetailsProps {
  onPrimaryCtaClick?: () => void;
}

const ProgramDetails: React.FC<ProgramDetailsProps> = ({
  onPrimaryCtaClick,
}) => {
  return (
    <section className="w-full mb-10 px-2">
      <div className="bg-white/95 rounded-3xl shadow-xl border border-teal-50 px-5 py-6 md:px-8 md:py-8">
        <p className="text-xs md:text-sm font-semibold tracking-[0.18em] uppercase text-teal-700 mb-2">
          This program runs as one carefully structured 21-day batch with
          limited seats.
        </p>
        <h1 className="text-2xl md:text-3xl font-bold text-teal-900 mb-3 leading-snug">
          A space shaping the new you.
        </h1>
        <p className="text-sm md:text-base text-teal-800/90 mb-4">
          SPACE is Psyra&apos;s structured 21-day life reset journey. you learn
          how your mind works so habits stick, decisions feel clearer, and life
          feels less overwhelming. It&apos;s designed to help you build a
          stronger, more self-aware version of yourself, based on proven
          psychological principles, not motivation or hype.
        </p>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
          <div className="rounded-2xl bg-teal-50/80 border border-teal-100 p-4">
            <p className="text-xs font-semibold text-teal-800 mb-1 uppercase tracking-wide">
              What you experience daily
            </p>
            <ul className="text-xs md:text-sm text-teal-900 space-y-1 list-disc list-inside">
              <li>Morning mindset videos to start the day with clarity</li>
              <li>Evening life-skill lessons for real-life change</li>
              <li>
                Interactive journaling, mood tracking &amp; reflection games
              </li>
              <li>Simple habit tasks that build new patterns step by step</li>
              <li>1:1 personal session</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-emerald-50/80 border border-emerald-100 p-4">
            <p className="text-xs font-semibold text-emerald-900 mb-1 uppercase tracking-wide">
              Who SPACE is for
            </p>
            <ul className="text-xs md:text-sm text-emerald-900 space-y-1 list-disc list-inside">
              <li>Anyone wanting a fresh start and a clearer direction</li>
              <li>
                People ready to build better habits and a stronger mindset
              </li>
              <li>
                Individuals looking for guidance, structure, and daily growth
              </li>
              <li>
                Those who want to understand themselves better and upgrade their
                life
              </li>
              <li>Anyone seeking calm, balance, and emotional stability</li>
              <li>
                People who know they can become more — and want a system to get
                there
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-teal-900 text-teal-50 p-4 flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold mb-1 uppercase tracking-wide">
                Investment
              </p>
              <p className="text-lg md:text-xl font-bold mb-1">₹ 2,999</p>
              <p className="text-[11px] md:text-xs text-teal-100/90">
                Complete 21-day SPACE journey with daily videos, tools, and 1:1
                support. Optional physical SPACE Kit:{" "}
                <span className="font-semibold">+ ₹ 500</span>
                &nbsp;(habit tracker, cards, planner &amp; more).
              </p>
            </div>
            <button
              onClick={onPrimaryCtaClick}
              className="mt-4 inline-flex items-center justify-center gap-1 rounded-full bg-white text-teal-900 px-4 py-2 text-xs md:text-sm font-semibold hover:bg-teal-50 transition-all"
            >
              Book Now
              <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <p className="text-[11px] md:text-xs text-teal-700/80">
          After payment, a Psyra team member will connect with you. For any
          queries, contact +91 8129724199.
        </p>
      </div>
    </section>
  );
};

export default ProgramDetails;
