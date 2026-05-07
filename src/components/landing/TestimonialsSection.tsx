const testimonials = [
  {
    text: "The sessions really helped us open up to each other. Our therapist was so patient and understanding. Highly recommend Psyra to any couple going through a rough patch.",
    location: "Thiruvananthapuram",
    rating: 5,
    via: "Google Review",
  },
  {
    text: "Being able to speak in Malayalam made such a difference. I felt completely at ease from the very first session. The counsellor really understood our cultural context.",
    location: "Kochi",
    rating: 5,
    via: "Google Review",
  },
  {
    text: "We were skeptical about online therapy at first, but it turned out to be incredibly convenient and effective. Our communication has improved so much.",
    location: "Dubai",
    rating: 5,
    via: "Google Review",
  },
  {
    text: "Psyra gave us a safe space to talk about things we had been avoiding for years. The therapist was professional, warm, and non-judgmental throughout.",
    location: "Bangalore",
    rating: 5,
    via: "Google Review",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill={i < count ? "#0F6E56" : "none"}
          stroke="#0F6E56"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
        </svg>
      ))}
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
             <h2 className="font-serif text-3xl font-normal leading-snug text-gray-900 mb-2">
              What our clients{" "}
              <em className="italic text-teal-700">say about us</em>
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              Real experiences shared by couples and individuals who attended
              therapy sessions at Psyra.
            </p>
          </div>

          {/* Google badge */}
          <div className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl px-4 py-3 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" aria-label="Google" role="img">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-medium text-gray-900">4.9</span>
                <StarRating count={5} />
              </div>
              <p className="text-xs text-gray-400">Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:border-gray-200 transition-colors"
            >
              <StarRating count={item.rating} />

              <p className="text-sm text-gray-600 leading-relaxed flex-1">
                "{item.text}"
              </p>

              <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                      <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-700">Anonymous</p>
                    <p className="text-xs text-gray-400">{item.location}</p>
                  </div>
                </div>
                <span className="text-xs text-gray-400">{item.via}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}