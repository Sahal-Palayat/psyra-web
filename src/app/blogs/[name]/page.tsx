import type { Blog } from "@/types/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MobileTherapyCta } from "@/components/blogs/mobileTherapyCta";
import { MobileQuickCheckin } from "@/components/blogs/mobileQuickIn";
import { TherapyCtaSidebar } from "@/components/blogs/therapy-cta";
export const dynamic = "force-dynamic";


export default async function BlogDetail({ params }: { params: Promise<{ name: string }> }) {
  console.log("🔵 BLOG DETAIL PAGE HIT");
  

  const { name } = await params;
  
  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs/${name}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const data = await res.json();
 
  const blog: Blog = data.blog;
  console.log("🔴 AUTHOR OBJECT:", JSON.stringify(blog.author, null, 2));

  

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl">Blog not found.</p>
      </div>
    );
  }

  // CTA markers
  const CTA1 = "<!-- CTA_BREAK_1 -->";
  const CTA2 = "<!-- CTA_BREAK_2 -->";

  let part1 = blog.content;
  let part2 = "";
  let part3 = "";

 

  if (part1.includes(CTA1)) {
    const [a, b] = part1.split(CTA1);
    part1 = a;
    part2 = b || "";
  } else {
    console.log(" CTA_BREAK_1 not found");
  }

  if (part2.includes(CTA2)) {
    const [b, c] = part2.split(CTA2);
    part2 = b;
    part3 = c || "";
  } else {
    console.log("CTA_BREAK_2 not found");
  }

 

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#005657] via-[#00989D] to-[#00B5B8] pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <span className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-white uppercase tracking-wide">
            {blog.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4">
            {blog.title}
          </h1>

          <p className="text-white/80 text-base mt-2 max-w-2xl">
            {blog.shortDescription}
          </p>

          <p className="text-white/80 text-sm mt-6">
            Published:{" "}
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-10">

        {blog.author && (
  <div className="max-w-7xl mx-auto px-4 mt-6 mb-10">
    <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
      <img
        src={blog.author.imageUrl}
        alt={`${blog.author.name}, ${blog.author.designation}`}
        className="w-12 h-12 rounded-full object-cover border border-gray-300"
      />

      <div className="text-sm leading-snug">
        <p className="font-medium text-[#00989D]">
          {blog.author.name}
        </p>
        <p className="text-gray-500">
          {blog.author.designation}
        </p>
      </div>
    </div>
  </div>
)}


          {part1 && (
            <div dangerouslySetInnerHTML={{ __html: part1 }} />
          )}

         

          <div className="md:hidden">
            <MobileTherapyCta />
          </div>

          <div dangerouslySetInnerHTML={{ __html: part2 }} />

          <div className="md:hidden">
            <MobileQuickCheckin />
          </div>

          <div dangerouslySetInnerHTML={{ __html: part3 }} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 hidden lg:block">
          <TherapyCtaSidebar />
        </div>
      </section>

      {/* Footer */}
      <section className="max-w-7xl mx-auto px-4 pb-16 border-t">
        <div className="pt-8">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#00989D] hover:text-[#005657]"
          >
            <ArrowLeft className="w-4 h-4" />
            View all articles
          </Link>
        </div>
      </section>
    </div>
  );
}
