const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getConcerns(region: string) {
  const res = await fetch(
    `${API_URL}/concerns?region=${region}`,
    { cache: "no-store" }
  )

  if (!res.ok) throw new Error("Failed to fetch concerns")
  return res.json()
}

export async function getConcernBySlug(slug: string, region: string) {
  const res = await fetch(
    `${API_URL}/concerns/${slug}?region=${region}`,
    { cache: "no-store" }
  )

  if (!res.ok) throw new Error("Concern not found")
  return res.json()
}
