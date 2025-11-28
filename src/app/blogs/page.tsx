import type { Blog } from "@/types/blog";
import BlogCard from "@/components/blogs/blogCard";

async function fetchBlogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      cache: "no-store",
    });
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);


    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data = await res.json();
    return data.blogs || []; 
  } catch (error) {
    console.error("BLOG_FETCH_ERROR:", error);
    return [];
  }
}

export default async function BlogsPage() {
  const blogs = await fetchBlogs(); 

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-[#005657] via-[#00989D] to-[#00B5B8] pt-32 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3">
            Psyra Mental Health Blog
          </h1>

          <p className="text-base sm:text-lg text-white/80 max-w-2xl">
            Expert insights on therapy, mental wellness, and emotional growth.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog: Blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </section>
    </div>
  );
}
