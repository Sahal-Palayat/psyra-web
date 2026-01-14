export type Testimonial = {
  _id: string;
  name: string;
  message: string;
};


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


export async function getTestimonialsByLocation(
  locationSlug: string
): Promise<Testimonial[]> {
  if (!locationSlug) return [];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/testimonial?location=${locationSlug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    // fail silently – testimonials should never break the page
    return [];
  }

  return res.json();
}


