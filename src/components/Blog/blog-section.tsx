"use client"

import Link from "next/link"
import BlogCard from "./blog-card"

const BLOG_POSTS = [
  {
    id: 1,
    title: "Understanding Gender Dysphoria",
    subtitle: "Understanding gender dysphoria",
    image: "/diverse-people-mirror-reflection-illustration.jpg",
    gradient: "from-orange-400 via-pink-300 to-yellow-200",
    date: "October 18, 2025",
    readTime: "10 min read",
    excerpt: "Gender Dysphoria and Mental Health in Kerala: How Therapy Can Help",
    category: "Mental Health",
  },
  {
    id: 2,
    title: "Overcoming Erectile Dysfunction",
    subtitle: "Overcoming Erectile Dysfunction with Confidence and Care",
    image: "/couple-in-bed-intimate-moment-illustration.jpg",
    gradient: "from-purple-500 via-purple-400 to-pink-400",
    date: "October 16, 2025",
    readTime: "5 min read",
    excerpt: "Sexual Health Matters: Understanding Erectile Dysfunction and Finding Solutions",
    category: "Sexual Health",
  },
  {
    id: 3,
    title: "Mismatched Libido",
    subtitle: "Mismatched Libido? Understanding the Intimacy Gap",
    image: "/couple-relaxing-together-in-bedroom-illustration.jpg",
    gradient: "from-blue-400 via-purple-400 to-cyan-300",
    date: "October 30, 2025",
    readTime: "9 min read",
    excerpt: "Mismatched Libido in Relationships: Causes, Signs, and How to Rebuild Intimacy",
    category: "Relationships",
  },
]

export default function BlogSection() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8 bg-[#F7F8F2]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2 text-balance">
            Read our <span className="italic font-serif">Blog</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Discover insights and stories about health, wellness, and relationships
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <BlogCard post={post} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

