"use client"

import { Clock, Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Blog data with detailed content
const BLOG_DETAILS: Record<
  number,
  {
    id: number
    title: string
    category: string
    date: string
    readTime: string
    author: string
    excerpt: string
    sections: Array<{
      type: "text" | "image" | "image-left" | "image-center" | "image-right" | "quote"
      content?: string
      image?: string
      imageAlt?: string
    }>
  }
> = {
  1: {
    id: 1,
    title: "Gender Dysphoria and Mental Health in Kerala: How Therapy Can Help",
    category: "Mental Health",
    date: "October 18, 2025",
    readTime: "10 min read",
    author: "Dr. Sarah Johnson",
    excerpt: "A comprehensive guide to understanding gender dysphoria and the therapeutic approaches that can help.",
    sections: [
      {
        type: "image-center",
        image: "/diverse-people-diverse-expressions-illustration.jpg",
        imageAlt: "Understanding Gender Dysphoria",
      },
      {
        type: "text",
        content:
          "Gender dysphoria is a complex condition where individuals experience significant distress due to a mismatch between their gender identity and assigned sex at birth. In Kerala, where cultural and traditional values often intersect with modern understanding, navigating this experience requires compassion, proper support, and evidence-based therapeutic interventions.",
      },
      {
        type: "text",
        content:
          "The journey towards self-acceptance and mental well-being is deeply personal. Understanding the root causes, recognizing symptoms, and seeking appropriate mental health support can significantly improve the quality of life for those experiencing gender dysphoria.",
      },
      {
        type: "image-left",
        image: "/therapy-session-counseling-illustration.jpg",
        imageAlt: "Therapeutic Support",
      },
      {
        type: "text",
        content:
          "Therapy plays a crucial role in this journey. Cognitive-behavioral therapy, acceptance and commitment therapy, and supportive counseling have shown remarkable effectiveness. A trained therapist can help individuals explore their identity, build coping strategies, and develop a supportive network.",
      },
      {
        type: "text",
        content:
          "It's important to recognize that gender dysphoria is not a mental illness requiring a cure, but rather a condition that deserves understanding, support, and access to affirming mental health care. Many individuals have successfully navigated this path with proper support.",
      },
      {
        type: "quote",
        content:
          "\"Mental health support isn't about changing who you are; it's about helping you live authentically and peacefully.\" - Expert Perspective",
      },
    ],
  },
  2: {
    id: 2,
    title: "Sexual Health Matters: Understanding Erectile Dysfunction and Finding Solutions",
    category: "Sexual Health",
    date: "October 16, 2025",
    readTime: "5 min read",
    author: "Dr. Michael Chen",
    excerpt: "Exploring erectile dysfunction with confidence and practical solutions for couples.",
    sections: [
      {
        type: "image-center",
        image: "/couple-communication-intimate-trust-illustration.jpg",
        imageAlt: "Sexual Health",
      },
      {
        type: "text",
        content:
          "Erectile dysfunction (ED) is a common condition affecting millions of men worldwide. It's important to understand that ED is often treatable, and seeking professional help is the first step toward resolution.",
      },
      {
        type: "image-right",
        image: "/medical-consultation-healthcare-professional-illus.jpg",
        imageAlt: "Professional Help",
      },
      {
        type: "text",
        content:
          "The causes of ED can be physical, psychological, or a combination of both. Physical factors include cardiovascular issues, diabetes, and hormonal imbalances. Psychological factors may include stress, anxiety, or relationship concerns.",
      },
      {
        type: "text",
        content:
          "Modern treatments range from lifestyle modifications and counseling to medications and advanced therapies. The key is finding the right approach for your individual situation with professional guidance.",
      },
    ],
  },
  3: {
    id: 3,
    title: "Mismatched Libido in Relationships: Causes, Signs, and How to Rebuild Intimacy",
    category: "Relationships",
    date: "October 30, 2025",
    readTime: "9 min read",
    author: "Dr. Emily Roberts",
    excerpt: "Understanding mismatched libidos and practical strategies to strengthen intimacy in relationships.",
    sections: [
      {
        type: "image-center",
        image: "/couple-communication-honest-conversation-relations.jpg",
        imageAlt: "Relationship Communication",
      },
      {
        type: "text",
        content:
          "Mismatched libido is one of the most common relationship challenges couples face. It occurs when partners have significantly different sexual desires, which can lead to frustration, resentment, and disconnection.",
      },
      {
        type: "image-left",
        image: "/couple-holding-hands-intimacy-trust-illustration.jpg",
        imageAlt: "Building Intimacy",
      },
      {
        type: "text",
        content:
          "The first step in addressing this challenge is open, non-judgmental communication. Couples should create a safe space to discuss their needs, desires, and concerns without pressure or criticism.",
      },
      {
        type: "text",
        content:
          "Understanding the underlying causes—whether they're stress, health issues, medication side effects, or emotional distance—is crucial. Often, once the root cause is identified, solutions become clearer.",
      },
      {
        type: "quote",
        content:
          "\"Intimacy isn't just about sex; it's about emotional connection, vulnerability, and mutual respect.\" - Relationship Expert",
      },
    ],
  },
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blogId = Number.parseInt(params.id)
  const blog = BLOG_DETAILS[blogId]

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h1>
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2 justify-center"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Back Button */}
      <Link
        href="/"
        className="sticky top-4 z-40 inline-flex items-center gap-2 ml-4 mt-4 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-900 font-semibold"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </Link>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8"
      >
        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full mb-4">
            {blog.category}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 text-balance">{blog.title}</h1>
          <p className="text-gray-600 text-lg mb-6">{blog.excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 border-t pt-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
              <span className="font-semibold text-gray-900">{blog.author}</span>
            </div>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {blog.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {blog.readTime}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 pb-16 sm:px-6 lg:px-8">
        {blog.sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            {section.type === "text" && <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>}

            {section.type === "image-center" && section.image && (
              <div className="my-8 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={section.image || "/placeholder.svg"}
                  alt={section.imageAlt || "Blog image"}
                  width={800}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {section.type === "image-left" && section.image && (
              <div className="flex flex-col md:flex-row gap-8 items-start my-8">
                <div className="md:w-2/5 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.imageAlt || "Blog image"}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5">
                  {section.content && (
                    <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
                  )}
                </div>
              </div>
            )}

            {section.type === "image-right" && section.image && (
              <div className="flex flex-col md:flex-row gap-8 items-start my-8">
                <div className="md:w-3/5">
                  {section.content && (
                    <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
                  )}
                </div>
                <div className="md:w-2/5 flex-shrink-0">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.imageAlt || "Blog image"}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            )}

            {section.type === "quote" && section.content && (
              <blockquote className="border-l-4 border-blue-600 pl-6 py-4 my-8 bg-blue-50 rounded-r-lg italic text-lg text-gray-700">
                {section.content}
              </blockquote>
            )}
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to explore more?</h2>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore All Articles
          </Link>
        </div>
      </div>
    </article>
  )
}

