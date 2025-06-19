"use client";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Individual from "../../public/individual.jpg";
import Couple from "../../public/couple.jpg";
import Coffe from "../../public/Coffee.png";
// import { useRouter } from "next/navigation";

export interface TherapyCardType {
  type: string;
  subTitle: string;
  img: StaticImageData;
  route: string;
}
const Services = () => {
  // const router = useRouter();
  const obj = [
    {
      type: "Individual therapy",
      subTitle: "Starts from ₹999",
      img: Individual,
      route: "individual",
    },
    {
      type: "Couple therapy",
      subTitle: "Starts from ₹1499",
      img: Couple,
      route: "couple-therapy",
    },
    {
      type: "Coffee with Psychologist",
      subTitle: "Starts from ₹2749",
      img: Coffe,
      route: "coffe-with",
    },
  ];

  // Function to handle WhatsApp redirection
  const handleWhatsAppRedirect = (item: TherapyCardType) => {
    // router.push(`/${item?.route}`);
    console.log(item?.route);

    // const phoneNumber = "+918891724199";
    /* The code snippet you provided is handling the redirection to WhatsApp when a user clicks on the
   "Get Started" button for a specific service type. Here's what the code is doing: */
    // const message = encodeURIComponent(
    //   `Hi, I'm interested in the "${item?.type}" package. Can you provide more details?`
    // );
    // window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 px-8 sm:px-6 md:px-16" id="services">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {obj?.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-[#B6E5DF] rounded-2xl overflow-hidden shadow-md flex flex-col"
            >
              {/* Top Image */}
              <div className="w-full h-[200px] relative">
                <Image
                  src={item?.img || "/placeholder.svg"}
                  alt={`Feature ${item?.type}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-black flex flex-col flex-grow text-center">
                <h3 className="font-bold text-xl mb-1">{item?.type}</h3>
                <p className="italic mb-3">{item?.subTitle}</p>

                {/* This wrapper pushes price + button to bottom */}
                <div className="mt-auto">
                  <div className="flex justify-center">
                    <button
                      className="bg-white px-6 py-2 text-black text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition"
                      onClick={() => handleWhatsAppRedirect(item)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
