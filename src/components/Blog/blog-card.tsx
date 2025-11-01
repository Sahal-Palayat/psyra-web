"use client"

import { Clock, Calendar } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

interface BlogPost {
  id: number
  title: string
  subtitle: string
  image: string
  gradient: string
  date: string
  readTime: string
  excerpt: string
  category: string
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="cursor-pointer group h-full">
      {/* Image Container with Gradient */}
      <div
        className={`relative h-48 rounded-2xl overflow-hidden mb-4 bg-gradient-to-br ${post.gradient} shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
      >
        <div className="absolute inset-0 flex items-end justify-start p-4 bg-gradient-to-t from-black/40 to-transparent">
          <h3 className="text-white font-bold text-lg leading-tight text-balance">{post.subtitle}</h3>
        </div>
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover opacity-60 mix-blend-overlay"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime}
          </span>
        </div>

        <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
          {post.excerpt}
        </h2>

        <p className="text-sm font-semibold text-blue-600">{post.category}</p>
      </div>
    </motion.div>
  )
}

