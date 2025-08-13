import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const concerns = [
  { title: "Depression" },
  { title: "Obsessive-compulsive" },
  { title: "Panic attacks" },
  { title: "Personality disorders" },
  { title: "Anxiety disorders" },
  { title: "Stress" },
  { title: "Sexual issues" },
  { title: "Relationship issues" },
  { title: "Crisis intervention" },
  { title: "Work related issues" },
];

export default function Concerns() {
  const handleWhatsAppRedirect = (concern: string) => {
    const phoneNumber = "+918891724199";
    const message = encodeURIComponent(`Hi, I need help with ${concern}?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };
  return (
    <div className="min-h-screen">
      {/* Concerns Grid Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-teal-800 text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              What We Can Help You Overcome{" "}
            </motion.h2>
            {/* <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Click on any concern below to book a specialized session with our
              experienced therapists.
            </motion.p> */}
          </div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {concerns?.map((concern, index) => (
              <Card
                key={index}
                onClick={() => {
                  handleWhatsAppRedirect(concern?.title);
                }}
                className="h-full transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer bg-[#9EE0D6]"
              >
                <CardContent className="text-center">
                  <h3 className="text-xl text-[#00989D] font-semibold text-foreground group-hover:text-primary transition-colors ">
                    {concern?.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Take the First Step?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Our compassionate therapists are here to support you on your journey
            to better mental health.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Schedule Your Appointment
          </Link>
        </div>
      </section> */}
    </div>
  );
}
