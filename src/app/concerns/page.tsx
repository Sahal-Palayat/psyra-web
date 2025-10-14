import { Card, CardContent } from "@/components/ui/card";

const concerns = [
  { title: "Depression" },
  { title: "Obsessive-compulsive" },
  { title: "Panic attacks" },
  { title: "Personality disorders" },
  { title: "Anxiety disorders" },
  { title: "Stress" },
  { title: "Sexual issues" },
  { title: "Relationship issues" },
  { title: "Work related issues" },
];

// WhatsApp expects numbers only (no '+')
const PHONE_NUMBER = "918891724199";

export default function Concerns() {
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
            {concerns?.map((concern, index) => {
              const href = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                `Hi, I need help with ${concern.title}`
              )}`;
              return (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`WhatsApp us about ${concern.title}`}
                  className="block"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-[#9EE0D6]">
                    <CardContent className="text-center">
                      <h3 className="text-xl text-[#00989D] font-semibold text-foreground group-hover:text-primary transition-colors">
                        {concern.title}
                      </h3>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
