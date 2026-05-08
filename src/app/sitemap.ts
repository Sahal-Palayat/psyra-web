import { MetadataRoute } from "next"


type BlogForSitemap = {
  name: string
  updatedAt?: string
}

type ConcernForSitemap = {
  slug: string
  updatedAt?: string
  status?: "active" | "inactive"
}

type LocationForSitemap = {
  slug: string
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

let concerns: ConcernForSitemap[] = []

try {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/concerns`,
    { cache: "no-store" }
  )

  if (res.ok) {
    const data = await res.json()
    concerns = Array.isArray(data) ? data : data.concerns ?? []
  }
} catch (error) {
  console.error("CONCERNS SITEMAP FETCH ERROR", error)
}

    let locations: LocationForSitemap[] = []

try {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/locations`,
    { cache: "no-store" }
  )

  if (res.ok) {
    const data = await res.json()
    locations = Array.isArray(data) ? data : data.locations ?? []
  }
} catch (error) {
  console.error("LOCATION SITEMAP FETCH ERROR", error)
}


  return [
    // --- static pages ---
    { url: `${baseUrl}`, priority: 1 },
    { url: `${baseUrl}/about-us` },
    { url: `${baseUrl}/online-counselling-services` },
    { url: `${baseUrl}/concerns` }, // concerns page currently uses static data
    { url: `${baseUrl}/contact-us` },

    // --- dynamic pages ---
    { url: `${baseUrl}/psychologists` },
    { url: `${baseUrl}/blogs` },


    // --- seo dedicated therapy pages ---
    { url: `${baseUrl}/couples-counselling`, priority: 0.9 },

    // --- seo critical pages ---
    ...concerns
  .filter((c) => c.status !== "inactive")
  .map((c) => ({
    url: `${baseUrl}/concerns/${c.slug}`,
    lastModified: c.updatedAt
      ? new Date(c.updatedAt)
      : new Date(),
    priority: 0.8,
  })),


    ...blogs.map((blog) => ({
      url: `${baseUrl}/blogs/${blog.name}`,
      lastModified: blog.updatedAt
        ? new Date(blog.updatedAt)
        : new Date(),
      priority: 0.7,
    })),



...locations.map((loc) => ({
  url: `${baseUrl}/locations/${loc.slug}`,
  lastModified: loc.updatedAt
    ? new Date(loc.updatedAt)
    : new Date(),
  priority: 0.9,
})),

  ]
}
