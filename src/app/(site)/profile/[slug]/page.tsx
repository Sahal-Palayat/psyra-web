import TherapistDetailClient from "./TherapistDetailClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/psychologists/${slug}`,
      {
        cache: "no-store",
      }
    );

    const therapist = await res.json();

    return {
      title: `${therapist.name} — ${therapist.designation} | Psyra`,
      description:
        therapist.description?.slice(0, 155).trimEnd() + "…" ||
        `Book a session with ${therapist.name}, ${therapist.designation}, on Psyra.`,
    };
  } catch {
    return {
      title: "Find a Psychologist | Psyra",
      description: "Connect with licensed psychologists and therapists on Psyra. Book a session today.",
    };
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  return <TherapistDetailClient params={resolvedParams} />;
}