import { blogs } from "@/constants/blog";
import BlogCard from "@/components/blogs/blogCard";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Section for Navbar Visibility */}
      <section className="relative bg-gradient-to-br from-[#005657] via-[#00989D] to-[#00B5B8] pt-32 pb-16 overflow-hidden">
        {/* Static blob background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-6 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-10 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute -bottom-10 left-24 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        {/* Geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 right-10 w-64 h-64 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-12 w-48 h-48 border border-white/10 rounded-full"></div>
        </div>

        {/* Main Text */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 text-center sm:text-left">
            Psyra Mental Health Blog
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-md sm:max-w-2xl text-center sm:text-left mx-auto sm:mx-0">
            Expert insights on therapy, mental wellness, and emotional growth.
          </p>
        </div>
      </section>

      {/* Blog Grid */}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
}
