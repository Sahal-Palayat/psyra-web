
import Link from "next/link";
import type { Blog } from "@/types/blog";


export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      href={`/blogs/${blog.name}`}
      className="rounded-2xl overflow-hidden border border-[#E4EFEF] bg-white hover:shadow-lg transition-shadow group cursor-pointer"
    >
      <div className="overflow-hidden">
        <img
          src={blog.thumbnail}
          className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-300"
          alt={blog.title}
        />
      </div>

      <div className="p-6 space-y-3">
        <p className="text-xs font-semibold uppercase text-[#00989D] tracking-wide">
          {blog.category}
        </p>

        <h3 className="text-xl font-bold text-[#1A1A1A] group-hover:text-[#00989D] transition-colors">
          {blog.title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {blog.shortDescription}
        </p>

        <p className="text-xs text-gray-500 pt-2">
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </Link>
  );
}
