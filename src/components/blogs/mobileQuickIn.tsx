import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MobileQuickCheckin() {
  return (
    <div className="rounded-xl bg-[#FFF9E8] border border-[#F5D082] p-4">
      <h4 className="text-base font-semibold text-[#C18A00]">
        Quick Check-In
      </h4>

      <p className="text-sm text-[#5A4B2A] mt-1">
        Feeling off today? <br />Take a 1-minute emotional check-in.
      </p>

      <Link
        href="/how-is-mind"
        className="inline-flex items-center gap-1 text-sm font-medium text-[#B77900] hover:text-[#8A5C00] mt-2"
      >
        Start now
        <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  );
}
