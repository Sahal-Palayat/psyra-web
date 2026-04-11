import { Location } from "@/types/location";

export type Testimonial = {
  _id: string;
  name: string;
  message: string;
};

export async function getLocationData(
  countrySlug: string
): Promise<Location | null> {
  if (!countrySlug) return null;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/locations/${countrySlug}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const data: Location = await res.json();
    return data;
  } catch {
    return null;
  }
}


export async function getTestimonialsByLocation(
  locationSlug: string
): Promise<Testimonial[]> {
  if (!locationSlug) return [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/testimonial?location=${locationSlug}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    return Array.isArray(data)
      ? data
      : data.data || data.testimonials || [];
  } catch {
    return [];
  }
}
