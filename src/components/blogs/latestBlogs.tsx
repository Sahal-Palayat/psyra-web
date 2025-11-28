

import BlogCard from "@/components/blogs/blogCard";
import Link from "next/link";
import type { Blog } from "@/types/blog";


async function fetchBlogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("Failed to fetch blogs");

    const data = await res.json();
    return data.blogs || [];
  } catch (error) {
    console.error("BLOG_FETCH_ERROR:", error);
    return [];
  }
}

export default async function LatestBlogs() {
  const blogs = await fetchBlogs();

  return (
    <section className="px-6 py-14 bg-white">

      <h2 className="text-3xl md:text-4xl font-bold text-[#005657] text-center mb-3">
        Latest Articles
      </h2>

      <p className="text-center text-[#4A4A4A] text-sm md:text-base max-w-2xl mx-auto mb-10">
        Gentle guidance and expert insights on therapy, healing, and emotional wellbeing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {blogs.slice(0, 3).map((blog: Blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/blogs"
          className="text-[#00989D] font-semibold hover:text-[#005657] underline transition text-lg"
        >
          View All Articles
        </Link>
      </div>

    </section>
  );
}
