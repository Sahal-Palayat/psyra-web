import Link from "next/link"

export default function CTASection() {
  return (
    <section className="px-4 sm:px-6 pb-16 sm:pb-20">
      <div className="max-w-5xl mx-auto bg-[#0F9EA8] rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16 overflow-hidden relative">

        {/* Background orbs */}
        <div className="absolute -top-16 -right-16 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-[#2BB5BE] opacity-50 pointer-events-none" />
        <div className="absolute -bottom-20 -left-10 w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-[#2BB5BE] opacity-40 pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-10">

          {/* Left copy */}
          <div className="max-w-xl">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug text-white mb-3 sm:mb-4">
              Begin your path to a{" "}
              <em className="italic text-teal-900">stronger relationship</em>
            </h2>

            <p className="text-[13px] sm:text-sm text-white/80 leading-relaxed max-w-md">
              Speak with an experienced Malayalam-speaking psychologist from the
              comfort of your home - confidential, flexible, and designed
              around you and your partner.
            </p>
          </div>

          {/* CTA button — left-aligned on mobile, right on desktop */}
          <div className="flex-shrink-0">
            <Link
              href="/couple-therapy"
              className="inline-flex items-center gap-2 bg-white text-teal-700 text-[13px] sm:text-sm font-medium px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-teal-50 transition-colors"
            >
              Book your first session
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  )
}