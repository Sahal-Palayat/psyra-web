export async function getLocationData(countrySlug: string) {
  if (!countrySlug) return null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/locations/${countrySlug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    return res.json();
  } catch {
    return null;
  }
}