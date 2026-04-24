interface Blog {
  title: string;
  name: string;
  shortDescription?: string;
  thumbnail?: string;
  date?: string;
  readTime?: string;
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
              className="group block"
            >
              {/* Image */}
              {blog.thumbnail && (
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Meta (Date + Read time) */}
              <div className="flex justify-between text-sm text-gray-500 mt-3">
                <span>{blog.date || "February 11, 2026"}</span>
                <span>{blog.readTime || "6 min read"}</span>
              </div>

              {/* Title */}
              <h3 className="mt-2 text-lg font-medium text-[#1a3c34] leading-snug group-hover:text-[#00989D] transition">
                {blog.title}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}