import { getConcerns } from "@/lib/api"
import ConcernsList from "@/components/concerns/ConcernsList"

export default async function UAEConcernsPage() {
  const region = "uae"

  const concerns = await getConcerns(region)

  return <ConcernsList concerns={concerns} region={region} />
}
