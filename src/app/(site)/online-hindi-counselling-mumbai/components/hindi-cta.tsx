import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HindiCta() {
  return (
    <section className="mx-4 sm:mx-8 lg:mx-16 mb-12 rounded-3xl bg-gradient-to-br from-teal-700 to-teal-800 py-20 px-4 shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl font-normal text-white leading-tight mb-4"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Connect with Hindi-Speaking{" "}
          <em className="italic text-teal-200">Psychologists</em> Online in
          Mumbai
        </h2>

        {/* Subtext */}
        <p className="text-[14px] sm:text-[15px] text-teal-100 leading-relaxed mb-8 max-w-xl mx-auto">
          Psyra offers confidential online Hindi counselling sessions for
          individuals, couples, students, working professionals, and families
          seeking emotional support across Mumbai.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/individual-therapy">
            <Button className="bg-white text-teal-700 px-6 py-3 rounded-[14px] text-[13px] sm:text-[14px] font-medium hover:bg-teal-50 transition-colors duration-200">
              Book Online Session
            </Button>
          </Link>
          <Link href="/psychologists">
            <Button className="border border-white/30 bg-white/10 text-white px-6 py-3 rounded-[14px] text-[13px] sm:text-[14px] font-medium hover:bg-white/20 transition-colors duration-200">
              Talk to a Psychologist
            </Button>
          </Link>
        </div>

        {/* Trust line */}
        <p className="mt-6 text-[12px] text-teal-200/70 tracking-wide">
          Confidential · Hindi Sessions · Qualified Psychologists
        </p>
      </div>
    </section>
  );
}