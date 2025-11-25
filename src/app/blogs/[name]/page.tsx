import { blogs } from "@/constants/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TherapyCtaSidebar } from "@/components/blogs/therapy-cta";

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const blog = blogs.find((b) => b.name === name);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#005657] via-[#00989D] to-[#00B5B8] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Blog not found</h1>
          <Link
            href="/blogs"
            className="text-white/80 hover:text-white underline"
          >
            Back to all blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Dark Hero Section for Navbar Visibility */}
      <section className="relative bg-gradient-to-br from-[#005657] via-[#00989D] to-[#00B5B8] pt-32 pb-12 overflow-hidden">
        {/* Static blob background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>

        {/* Static geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-64 h-64 border border-white/10 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/10 rounded-full"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3">
            <span className="text-sm text-white font-semibold uppercase tracking-wide">
              {blog.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            {blog.title}
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg max-w-3xl">
            {blog.shortDescription}
          </p>

          {/* Published date */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 mt-6">
            <span className="text-white/80 text-sm">
              Published:{" "}
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Article Content */}
          <div className="lg:col-span-8">
            <div
              className="prose prose-lg max-w-none text-[#3A3A3A] text-left"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 hidden lg:block">
            <TherapyCtaSidebar />
          </div>
        </div>
      </section>

      {/* Back to Blogs CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="border-t border-gray-200 pt-8">
          <div className="px-2 sm:px-0">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-[#00989D] hover:text-[#005657] font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              View all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
