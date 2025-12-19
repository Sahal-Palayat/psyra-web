import Link from "next/link"

export default function GetTherapyCTA() {
  return (
    <section className="bg-[#00BEA5] text-white rounded-2xl p-10 text-center">
      <h2 className="text-3xl font-semibold mb-4">
        You don’t have to go through this alone
      </h2>

      <p className="text-white/90 max-w-2xl mx-auto mb-8">
        Our licensed psychologists are here to support you at your own pace,
        with care that feels safe and confidential.
      </p>

      <Link
        href="/psychologists"
        className="inline-block bg-white text-[#005657] px-8 py-3 rounded-lg font-semibold hover:bg-[#E6F7F5] transition"
      >
        Find a Therapist
      </Link>

      <p className="text-sm text-white/80 mt-4">
        Confidential • Compassionate • Professional
      </p>
    </section>
  )
}
