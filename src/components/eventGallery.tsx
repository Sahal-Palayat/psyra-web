"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface EventImage {
  id: string;
  src: string;
  alt: string;
  className?: string;
  overlay?: {
    type: "text" | "promo";
    content?: string;
    subtitle?: string;
    price?: string;
  };
}


export default function EventGallery() {
  // Sample event images - replace with your actual event images
  const eventImages: EventImage[] = [
    {
      id: "1",
      src: "/Cmmnty.png",
      alt: "Event banner with green spheres to test",
      className: "col-span-1 row-span-1",
    },
    {
      id: "2",
      src: "/24x7.png",
      alt: "Connecting Ideas & Empowering Innovations",
      className: "col-span-1 row-span-2 md:col-span-1",
      overlay: {
        type: "text",
        content: "Connecting Ideas & Empowering Innovation",
      },
    },
    {
      id: "3",
      src: "/images/event-3.jpg",
      alt: "Mobile device with apps",
      className: "col-span-1 row-span-1",
    },
    {
      id: "4",
      src: "/images/event-4.jpg",
      alt: "Phone surrounded by green spheres",
      className: "col-span-1 row-span-2",
    },
    {
      id: "5",
      src: "/images/event-5.jpg",
      alt: "Upgrade discount promotion",
      className: "col-span-1 row-span-1",
      overlay: {
        type: "promo",
        content: "Upgrade today to enable unlimited projects.",
        subtitle: "UPGRADE DISCOUNT",
        price: "$12.99",
      },
    },
    {
      id: "6",
      src: "/images/event-6.jpg",
      alt: "Water bottle on green background",
      className: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-emerald-600">
            Event Gallery
          </h2>
          <p className="max-w-[700px] text-gray-600 md:text-xl">
            Explore moments from our healing events where strangers connect
            without judgment.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {eventImages.map((image) => (
            <Link
              key={image.id}
              href={`/gallery/${image.id}`}
              className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${image.className}`}
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-full h-full"
              >
                <div className="relative aspect-square w-full h-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />

                  {image.overlay?.type === "text" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-emerald-500/80 text-white p-4">
                      <h3 className="text-xl md:text-2xl font-bold text-center leading-tight">
                        {image.overlay.content}
                      </h3>
                    </div>
                  )}

                  {image.overlay?.type === "promo" && (
                    <div className="absolute inset-0 flex flex-col items-start justify-end bg-white p-4 text-left">
                      <span className="text-emerald-500 text-sm font-semibold uppercase">
                        {image.overlay.subtitle}
                      </span>
                      <h3 className="text-gray-800 text-lg font-medium">
                        {image.overlay.content}
                      </h3>
                      <p className="text-emerald-500 text-2xl font-bold mt-2">
                        {image.overlay.price}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700 transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
