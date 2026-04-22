interface Blog {
  title: string;
  name: string;
  shortDescription?: string;
  thumbnail?: string;
}

export default function RelatedBlogs({ blogs }: { blogs: Blog[] }) {
  return (
    <section className="mt-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-serif text-[#1a3c34] mb-8">
          Related Blogs
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <a
              key={blog.name}
              href={`/blogs/${blog.name}`}
              className="group block rounded-2xl border border-[#1a3c34]/10 bg-white p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Label */}
              <span className="text-xs font-semibold uppercase tracking-wide text-[#00989D]">
                Blog
              </span>

              {/* Title */}
              <h3 className="mt-2 text-lg font-semibold text-[#1a3c34] leading-snug group-hover:text-[#00989D] transition">
                {blog.title}
              </h3>

              {/* Description */}
              {blog.shortDescription && (
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {blog.shortDescription}
                </p>
              )}

              {/* Image */}
              {blog.thumbnail && (
                <img
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="mt-4 rounded-xl h-40 w-full object-cover"
                />
              )}

              {/* CTA */}
              <div className="mt-4 text-sm font-medium text-[#00989D] flex items-center">
                Read article
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}