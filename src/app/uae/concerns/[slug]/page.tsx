import { getConcernBySlug } from "@/lib/api"
import ConcernPage from "@/components/concerns/ConcernPage"

interface PageProps {
  params: { slug: string }
}

export default async function Page({ params }: PageProps) {
  const region = "uae"

  const concern = await getConcernBySlug(params.slug, region)

  return <ConcernPage concern={concern} region={region} />
}
