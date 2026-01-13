type Testimonial = {
  _id: string;
  name: string;
  message: string;
};

type Props = {
  testimonials: Testimonial[];
  countryName: string;
};

/* Large decorative quote SVG */
function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M26 16C18 20 14 28 14 38C14 46 18 50 24 50C28 50 32 47 32 42C32 38 29 35 25 35C23 35 22 36 21 37C22 30 26 24 34 20L26 16ZM46 16C38 20 34 28 34 38C34 46 38 50 44 50C48 50 52 47 52 42C52 38 49 35 45 35C43 35 42 36 41 37C42 30 46 24 54 20L46 16Z" />
    </svg>
  );
}

export default function TestimonialsSection({
  testimonials,
  countryName,
}: Props) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-[#fdfaf2]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F3D3E]">
            Hear out their stories
          </h2>
          <p className="mt-2 text-sm text-[#5f6f6b] max-w-xl">
            Real experiences from people who chose online Malayalam counselling
            in {countryName}.
          </p>
        </div>

        {/* Horizontal square cards (scroll hidden) */}
        <div
          className="
            flex gap-8
            overflow-x-auto
            scrollbar-hide
            pb-2
          "
        >
          {testimonials.map((t) => (
            <div
              key={t._id}
              className="
                relative
                flex-shrink-0
                w-[280px]
                h-[280px]
                md:w-[320px]
                md:h-[320px]
                rounded-3xl
                bg-[#f3f4f6]
                p-8
                flex
                flex-col
                justify-center
              "
            >
              {/* Large top-left quote */}
              <QuoteIcon className="absolute top-6 left-6 w-10 h-10 text-[#00989D]/80" />

              {/* Message */}
              <p className="text-sm text-[#1a3c34] leading-relaxed text-center px-2">
                {t.message}
              </p>

              {/* Name */}
              <p className="mt-6 text-center text-sm font-medium text-[#0F3D3E]">
                {t.name}
              </p>

              {/* Large bottom-right quote */}
              <QuoteIcon className="absolute bottom-6 right-6 w-10 h-10 text-[#00989D]/80 rotate-180" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
