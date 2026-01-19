type Testimonial = {
  _id: string;
  name: string;
  message: string;
};

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

export default function TestimonialCard({ name, message }: Testimonial) {
  return (
  <div
      data-card
      className="
        snap-center snap-always
        relative
        flex-shrink-0

        w-[300px]
        sm:w-[300px]
        md:w-[340px]

        h-[280px]
        sm:h-[300px]
        md:h-[340px]

        rounded-3xl
        p-8 sm:p-10
        flex flex-col justify-center
        bg-gradient-to-br
        from-[#f2fbfa]
        via-[#e6f6f4]
        to-[#dff1f3]
      "
    >

      <QuoteIcon className="absolute top-5 left-5 w-10 h-10 text-[#00989D] opacity-80" />

      <p className="text-sm sm:text-base text-[#1a3c34] leading-relaxed text-center">
        {message}
      </p>

      <p className="mt-4 text-center text-sm font-semibold text-[#0F3D3E]">
        {name}
      </p>

      <QuoteIcon className="absolute bottom-5 right-5 w-10 h-10 rotate-180 text-[#00989D] opacity-80" />
    </div>
  );
}
