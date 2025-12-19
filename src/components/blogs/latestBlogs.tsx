"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/blogs/blogCard";
import Link from "next/link";
import type { Blog } from "@/types/blog";

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blogs`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch blogs");
        }

        const data = await res.json();
        setBlogs(data.blogs || []);
      } catch (error) {
        console.error("BLOG_FETCH_ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return null; 

  return (
    <section className="px-6 py-14 bg-[#F7F8F2]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#005657] text-center mb-3">
        Latest Blogs
      </h2>

      <p className="text-center text-[#4A4A4A] text-sm md:text-base max-w-2xl mx-auto mb-10">
        Gentle guidance and expert insights on therapy, healing, and emotional wellbeing.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {blogs.slice(0, 3).map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href="/blogs"
          className="text-[#00989D] font-semibold hover:text-[#005657] underline transition text-lg"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
}
