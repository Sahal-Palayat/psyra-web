"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
// import { BookingModal } from "../BookingModal/bookingModal";
import { useRouter } from "next/navigation";

export interface PackageItem {
  type: string;
  img: StaticImageData;
  title: string;
  tagline: string;
  list: string[];
  price: string;
  cta: string;
}

interface PackagesProps {
  data: PackageItem[];
}

const Packages = ({ data }: PackagesProps) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [selectedPackage, setSelectedPackage] = useState<string>("");
  const router = useRouter();

  const handleBookNow = (packageTitle: string, packageType: string) => {
    // setSelectedPackage(`${packageTitle} - ${packageType}`);
    // setIsModalOpen(true);
    const phoneNumber = "+918891724199";
    const message = encodeURIComponent(
      `Hi, I'm interested in the "${packageType}-${packageTitle}" package. Can you provide more details?`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
    router.push(`https://www.psyra.in/`);
  };

  return (
    <div className="px-4 py-26">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item: PackageItem, index: number) => (
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
                src={item.img || "/placeholder.svg"}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-5 text-black flex flex-col flex-grow">
              <h3 className="font-bold text-xl mb-1">{item.title}</h3>
              <p className="italic mb-3">{item.tagline}</p>
              <ul className="list-disc pl-5 text-sm space-y-1 mb-4">
                {item.list.map((point: string, i: number) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              {/* This wrapper pushes price + button to bottom */}
              <div className="mt-auto">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-black">
                    {item.price}
                  </span>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-white px-6 py-2 text-black text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    onClick={() => handleBookNow(item.title, item?.type)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Booking Modal */}
      {/* <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageTitle={selectedPackage}
      /> */}
    </div>
  );
};

export default Packages;
