import { MetadataRoute } from "next"
import { concernsData } from "@/lib/concerns-data"

type BlogForSitemap = {
  name: string
  updatedAt?: string
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://psyra.in"

  let blogs: BlogForSitemap[] = []

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs`,
      { cache: "no-store" }
    )

    if (res.ok) {
      const responseData = await res.json()

      
      if (Array.isArray(responseData)) {
        blogs = responseData
      } else if (Array.isArray(responseData.blogs)) {
        blogs = responseData.blogs
      }
    }
  } catch (error) {
    console.error("BLOG SITEMAP FETCH ERROR", error)
  }

  const concernSlugs = Object.keys(concernsData)

  return [
    // --- static pages ---
    { url: `${baseUrl}`, priority: 1 },
    { url: `${baseUrl}/about-us` },
    { url: `${baseUrl}/services` },
    { url: `${baseUrl}/concerns` }, // concerns page currently uses static data
    { url: `${baseUrl}/contact-us` },

    // --- dynamic pages ---
    { url: `${baseUrl}/therapists` },
    { url: `${baseUrl}/blogs` },

    // --- seo critical pages ---
    ...concernSlugs.map((slug) => ({
      url: `${baseUrl}/concerns/${slug}`,
      priority: 0.8,
    })),

    ...blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.name}`,
      lastModified: blog.updatedAt
        ? new Date(blog.updatedAt)
        : new Date(),
      priority: 0.7,
    })),
  ]
}
