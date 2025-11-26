import Link from "next/link";
import { blogs } from "@/constants/blog";
import { ArrowLeft } from "lucide-react";
import { MobileTherapyCta } from "@/components/blogs/mobileTherapyCta";
import { MobileQuickCheckin } from "@/components/blogs/mobileQuickIn";
import { TherapyCtaSidebar } from "@/components/blogs/therapy-cta";

export default async function BlogDetail({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;

  const blog = blogs.find((b) => b.name === name);

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

  // Split by first CTA
  if (part1.includes(CTA1)) {
    const split1 = part1.split(CTA1);
    part1 = split1[0];
    part2 = split1[1] || "";
  }

  // Split by second CTA (inside part2)
  if (part2.includes(CTA2)) {
    const split2 = part2.split(CTA2);
    part2 = split2[0];
    part3 = split2[1] || "";
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#005657] via-[#00989D] to-[#00B5B8] pt-32 pb-12">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-3">
  <span className="text-xs sm:text-sm text-white font-semibold uppercase tracking-wide">
    {blog.category}
  </span>
</div>


         <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3">
  {blog.title}
</h1>

<p className="text-base sm:text-lg text-white/80 max-w-2xl">
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

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10">

            {/* Part 1 */}
            <div dangerouslySetInnerHTML={{ __html: part1 }} />

            {/* CTA 1 - only mobile */}
            <div className="md:hidden">
              <MobileTherapyCta />
            </div>

            {/* Part 2 */}
            <div dangerouslySetInnerHTML={{ __html: part2 }} />

            {/* CTA 2 - only mobile */}
            <div className="md:hidden">
              <MobileQuickCheckin />
            </div>

            {/* Part 3 */}
            <div dangerouslySetInnerHTML={{ __html: part3 }} />

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 hidden lg:block">
            <TherapyCtaSidebar />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="border-t border-gray-200 pt-8">
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
