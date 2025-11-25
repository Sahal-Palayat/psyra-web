
import Link from "next/link"
import { blogs } from "@/constants/blog"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}

      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#EEF0FF] to-[#F7F8FF] border-b border-[#DADFFF] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2E2E3A] mb-4">Therapy & Mental Health Blog</h1>
          <p className="text-lg text-gray-600">Expert insights on therapy, mental wellness, and emotional growth</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blogs/${blog.name}`}>
              <div className="bg-white border border-[#E0E2FF] rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="grid md:grid-cols-3">
                  <div className="md:col-span-1 overflow-hidden">
                    <img
                      src={blog.thumbnail || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="md:col-span-2 p-8 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-[#6C63FF] font-semibold uppercase tracking-wide mb-2">
                        {blog.category}
                      </p>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E3A] mb-3 group-hover:text-[#6C63FF] transition-colors">
                        {blog.title}
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">{blog.shortDescription}</p>
                    </div>
                    <div className="text-sm text-gray-500">
                      Published:{" "}
                      {new Date(blog.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
