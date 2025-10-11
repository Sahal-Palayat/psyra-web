"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { SectionHeader } from "./SectionTitle"

type MediaType = "image" | "video"

interface EventMedia {
  id: string
  type: MediaType
  src: string
  thumbnail?: string
  location: string
  title?: string
  gridSize: "small" | "medium" | "large" | "wide" | "tall"
}

// const locations = ["All Locations", "Bangalore", "Chennai", "Coimbatore", "Ernakulam"]

// const PLACEHOLDER =
//   "https://images.unsplash.com/photo-1526779259212-939e64788e3c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"

const eventMedia: EventMedia[] = [
  { id: "1", type: "image", src: '/event_2.jpg', location: "Bangalore", title: "SIP & PAINT", gridSize: "medium" },
  {
    id: "2",
    type: "image",
    src: '/event_5.jpg',
    location: "Kochi",
    title: "Heal With Art",
    gridSize: "small",
  },
  { id: "3", type: "image", src: '/event_3.jpg', location: "Bangalore", title: "Art With Strangers", gridSize: "tall" },
  { id: "4", type: "image", src: '/event_7.jpg', location: "Kochi", title: "SIP & PAINT", gridSize: "wide" },
  {
    id: "5",
    type: "image",
    src: '/event_4.jpg',
    location: "Ernakulam",
    title: "Heal With Art",
    gridSize: "medium",
  },
  { id: "6", type: "image", src: '/event_1.jpg', location: "Banglore", title: "SIP & PAINT", gridSize: "medium" },
//   { id: "7", type: "image", src: PLACEHOLDER, location: "Bangalore", title: "Sports Day", gridSize: "small" },
//   { id: "8", type: "image", src: PLACEHOLDER, location: "Coimbatore", title: "Music Night", gridSize: "tall" },
]

export function CommunityEvents() {
//   const [activeLocation, setActiveLocation] = useState("All Locations")
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const filteredMedia = eventMedia
   

  const getGridClass = (size: EventMedia["gridSize"]) => {
    switch (size) {
      case "small":
        return "col-span-1 row-span-1"
      case "medium":
        return "col-span-1 row-span-1 md:col-span-1 md:row-span-1"
      case "large":
        return "col-span-2 row-span-2 md:col-span-2 md:row-span-2"
      case "wide":
        return "col-span-2 row-span-1 md:col-span-2 md:row-span-1"
      case "tall":
        return "col-span-1 row-span-2 md:col-span-1 md:row-span-2"
      default:
        return "col-span-1 row-span-1"
    }
  }

  return (
    <div className="w-full px-4 py-12 md:px-8 lg:px-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <SectionHeader>Bringing people together in different cities</SectionHeader>
        <p className="text-gray-600 mt-2 text-sm">
            Real moments from meetups, workshops, and wellness events across India.
        </p>

        {/* Location Tabs */}
        <div className="mx-auto mb-2 max-w-full overflow-x-auto">
          {/* <div className="inline-flex items-center gap-1 rounded-full bg-muted/60 p-1.5 ring-1 ring-border backdrop-blur-sm">
            {locations.map((location) => {
              const active = activeLocation === location
              return (
                <button
                  key={location}
                  onClick={() => setActiveLocation(location)}
                  className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs md:text-sm font-medium transition-all duration-300
                  ${
                    active
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/30 ring-1 ring-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/70"
                  }`}
                  aria-pressed={active}
                >
                  {location}
                </button>
              )
            })}
          </div> */}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-flow-dense auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[280px] grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {filteredMedia.map((item, idx) => {
          const visibilityClass = idx >= 7 ? "hidden xl:block" : idx >= 6 ? "hidden md:block" : ""

          return (
            <div
              key={item.id}
              className={`group relative overflow-hidden rounded-xl bg-muted transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${getGridClass(
                item.gridSize,
              )} ${visibilityClass}`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Media Content */}
              <div className="relative h-full w-full">
                <img
                  src={item.type === "video" ? item.thumbnail : item.src}
                  alt={item.title || "Community event"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Video Play Button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-background/90 p-3 md:p-4 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                      <Play className="h-6 w-6 md:h-8 md:w-8 fill-current text-foreground group-hover:text-primary-foreground" />
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredId === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6">
                    <div className="mb-1 md:mb-2 inline-block rounded-full bg-primary/90 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-semibold text-primary-foreground backdrop-blur-sm">
                      {item.location}
                    </div>
                    {item.title && (
                      <h3 className="text-sm md:text-xl font-bold text-white text-balance">{item.title}</h3>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Empty State */}
      {filteredMedia.length === 0 && (
        <div className="py-24 text-center">
          <p className="text-lg text-muted-foreground">No events found for All Locations. Check back soon!</p>
        </div>
      )}
    </div>
  )
}
