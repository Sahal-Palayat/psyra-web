import type { Blog } from "@/types/blog";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MobileTherapyCta } from "@/components/blogs/mobileTherapyCta";
import { MobileQuickCheckin } from "@/components/blogs/mobileQuickIn";
import { TherapyCtaSidebar } from "@/components/blogs/therapy-cta";

function getReadingTime(html: string) {
  const text = html.replace(/<[^>]*>/g, "");
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return minutes;
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs/${name}`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const data = await res.json();
  const blog: Blog = data.blog;
  const readingTime = getReadingTime(blog.content);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl">Blog not found.</p>
      </div>
    );
  }

  /* ---------------------------
     CTA markers
  ---------------------------- */
  const CTA1 = "<!-- CTA_BREAK_1 -->";
  const CTA2 = "<!-- CTA_BREAK_2 -->";

  const content = blog.content;
  let part1 = content;
  let part2 = "";
  let part3 = "";

  if (content.includes(CTA1)) {
    const split = content.split(CTA1);
    part1 = split[0];
    part2 = split[1] || "";
  }

  if (part2.includes(CTA2)) {
    const split = part2.split(CTA2);
    part2 = split[0];
    part3 = split[1] || "";
  }

  /* ---------------------------
     Extract first image
  ---------------------------- */
  const IMAGE_END = "</div>";
  let firstImage = "";
  let remainingContent = part1;

  if (part1.includes(IMAGE_END)) {
    const split = part1.split(IMAGE_END);
    firstImage = split[0] + IMAGE_END;
    remainingContent = split.slice(1).join(IMAGE_END);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#005657] via-[#00989D] to-[#00B5B8] pt-24 pb-10">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
    
    {/* Match blog content column */}
    <div className="lg:w-8/12">
      <span className="inline-flex items-center px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs sm:text-sm text-white uppercase tracking-wide">
        {blog.category}
      </span>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">
        {blog.title}
      </h1>

      <p className="text-white/80 text-sm sm:text-base mt-2 max-w-2xl">
        {blog.shortDescription}
      </p>

      <p className="text-white/70 text-xs sm:text-sm mt-5 flex flex-wrap gap-2 items-center">
        <span>
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span className="opacity-60">•</span>
        <span>{readingTime} min read</span>
      </p>
    </div>

  </div>
</section>


      {/* Content + Sidebar */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-10">
          {/* First image */}
          {firstImage && (
            <div dangerouslySetInnerHTML={{ __html: firstImage }} />
          )}

          {/* Author block */ }
          {blog.author && (
            <Link
              href={`/profile/${blog.author._id}`}
              className="block my-6 group"
            >
              <div className="flex items-start gap-5 p-6 rounded-xl bg-gray-50/50 border-l-4 border-[#00989D] transition hover:bg-gray-50">
                <img
                  src={blog.author.imageUrl || "/placeholder.svg"}
                  alt={`${blog.author.name}, ${blog.author.designation}`}
                  className="w-20 h-20 rounded-full object-cover shadow-lg"
                />

                <div className="flex-1 pt-1">
                  <span className="text-xs font-semibold text-[#00989D] uppercase tracking-wider">
                    Author
                  </span>

                  <h3 className="font-bold text-xl text-gray-900 mt-1 group-hover:text-[#00989D] transition">
                    {blog.author.name}
                  </h3>

                  <p className="text-gray-600">{blog.author.designation}</p>
                </div>
              </div>
            </Link>
          )}

          {/* Remaining content before CTA */}
          {remainingContent && (
            <div dangerouslySetInnerHTML={{ __html: remainingContent }} />
          )}

          <div className="md:hidden">
            <MobileTherapyCta />
          </div>

          {part2 && <div dangerouslySetInnerHTML={{ __html: part2 }} />}

          <div className="md:hidden">
            <MobileQuickCheckin />
          </div>

          {part3 && <div dangerouslySetInnerHTML={{ __html: part3 }} />}
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
            View All Blogs
          </Link>
        </div>
      </section>
    </div>
  );
}
