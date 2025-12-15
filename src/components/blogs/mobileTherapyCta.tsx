import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MobileTherapyCta() {
  return (
    <div className="rounded-2xl bg-[#E8FBFA] border border-[#00B5B8]/20 p-5 space-y-3">
      <h3 className="text-lg font-semibold text-[#005657]">
        Too much on your mind?
      </h3>

      <p className="text-sm text-[#333] leading-relaxed">
        A therapist can help you untangle stress and make space for calm again.
      </p>

      <Link
        href="/psychologists"
        className="inline-flex items-center gap-1 text-sm font-semibold text-[#00989D] hover:text-[#005657]"
      >
        Talk to Our Therapist
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
