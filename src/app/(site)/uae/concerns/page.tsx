import { getConcerns } from "@/lib/api"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface Concern {
  title: string
  slug: string
}



export default async function UAEConcernsPage() {
  const region = "uae"

 const concerns: Concern[] = await getConcerns(region)


  return (
     <div className="mb-12">
      <div className="text-center mb-8 pb-10 pt-28 bg-[#00BEA5]">
        <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-white leading-tight mb-8">
          We Can Help You!!
        </h1>
      </div>

      {/* Concerns Grid Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concerns.map((concern) => (
              <Link
                key={concern.slug}
                href={`/concerns/${concern.slug}`}
                className="block"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-[#9EE0D6]">
                  <CardContent className="text-center">
                    <h3 className="text-xl text-[#00989D] font-semibold">
                      {concern.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
