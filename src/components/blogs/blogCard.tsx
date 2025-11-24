"use client";
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <div className="rounded-xl shadow-md bg-white overflow-hidden hover:shadow-lg transition">
      <Image
        src={blog.thumbnail}
        alt={blog.title}
        width={600}
        height={400}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-blue-600 font-semibold">{blog.category}</p>

        <h2 className="text-xl font-bold mt-1 line-clamp-2">{blog.title}</h2>

        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
          {blog.shortDescription}
        </p>

        <Link
          href={`/blogs/${blog.name}`}
          className="text-blue-500 mt-3 inline-block font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
