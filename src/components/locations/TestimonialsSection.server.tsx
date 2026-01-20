import TestimonialsScroller from "./TestimonialsScroller.client";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  _id: string;
  name: string;
  message: string;
};

type Props = {
  testimonials: Testimonial[];
  countryName: string;
};

export default function TestimonialsSection({
  testimonials,
  countryName,
}: Props) {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* CENTERED HEADING */}
        <div className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0F3D3E]">
            Stories from our community
          </h2>
          <p className="mt-2 text-sm text-[#5f6f6b] max-w-xl mx-auto">
            Real experiences from people who chose online Malayalam counselling
            in {countryName}.
          </p>
        </div>

        {/* CENTERED SCROLLER */}
        <TestimonialsScroller>
          {testimonials.map((t) => (
            <TestimonialCard
              key={t._id}
              _id={t._id}
              name={t.name}
              message={t.message}
            />
          ))}
        </TestimonialsScroller>
      </div>
    </section>
  );
}
