interface Props {
  content: {
    whatIs: string
    causes: readonly string[]
    symptoms: readonly string[]
    howToOvercome: readonly string[]
  }
}

export default function ConcernContent({ content }: Props) {
  return (
    <section className="space-y-10">
      <div>
        <h2 className="text-2xl font-semibold mb-3 text-[#005657]">
          What is this concern?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {content.whatIs}
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3 text-[#005657]">
          Common Causes
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {content.causes.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3 text-[#005657]">
          Common Symptoms
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {content.symptoms.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3 text-[#005657]">
          How Therapy Can Help
        </h2>
        <ul className="list-disc list-inside space-y-2">
          {content.howToOvercome.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
