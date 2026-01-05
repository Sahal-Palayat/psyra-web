import Link from "next/link";

export default function AssessmentCTA() {
  return (
    <section className="px-6 py-10 bg-[#f8faf9]">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <p className="text-sm md:text-base text-[#1a3c34]/70">
          Not sure where to begin? A quick assessment can help you understand
          your current mental wellbeing.
        </p>

        <Link
          href="/assessments"
          className="text-xs uppercase tracking-widest font-bold text-[#00989D] border-b border-[#00989D]/30 pb-1 hover:border-[#00989D] transition"
        >
          Take a moment for yourself
        </Link>
      </div>
    </section>
  );
}
