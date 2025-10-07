"use client";
import { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

export interface TherapyCardType {
  type: string;
  subTitle: string;
  img: StaticImageData;
  route: string;
}

export interface PackageItem {
  type: string;
  title: string;
  tagline: string;
  list: string[];
  price: string;
  cta: string;
}

interface PackageServicesCard {
  PackagesObj: PackageItem[];
  setSelectedPackage: React.Dispatch<React.SetStateAction<string>>;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string>>;
}
const PackageServices = ({
  PackagesObj,
  setSelectedPackage,
  setIsModal,
  setSelectedPrice,
}: PackageServicesCard) => {
  const handleBookNow = (
    packageTitle: string,
    packageType: string,
    packagePrice: string
  ) => {
    setSelectedPackage(`${packageTitle} - ${packageType}`);
    setSelectedPrice(packagePrice);
    setIsModal(true);
  };

  return (
    <section className="py-2 px-14 " id="services">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PackagesObj.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-[#B6E5DF] rounded-2xl overflow-hidden shadow-md flex flex-col"
            >
              {/* Top Image */}
              {/* <div className="w-full hidden sm:block h-[200px] relative">
                <Image
                  src={item?.img || "/placeholder.svg"}
                  alt={`Feature ${item?.type}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div> */}

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
                      onClick={() =>
                        handleBookNow(item.title, item?.type, item?.price)
                      }
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

export default PackageServices;
