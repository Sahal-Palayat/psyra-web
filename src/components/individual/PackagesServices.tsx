"use client";
import { StaticImageData } from "next/image";
import React from "react";

export interface TherapyCardType {
  type: string;
  subTitle: string;
  img: StaticImageData;
  route: string;
}

export interface PackageItem {
  id: string;
  type: string;
  title: string;
  tagline: string;
  list: string[];
  price: string;
  cta: string;
  discountNote?: string;
  sessions?: number;
  pricePerSession?: string;
}

interface PackageServicesCard {
  PackagesObj: PackageItem[];
  setSelectedPackage: React.Dispatch<React.SetStateAction<string>>;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedPrice: React.Dispatch<React.SetStateAction<string>>;
  setSelectedPackageId: React.Dispatch<React.SetStateAction<string>>;
}
const PackageServices = ({
  PackagesObj,
  setSelectedPackage,
  setIsModal,
  setSelectedPrice,
  setSelectedPackageId,
}: PackageServicesCard) => {
  const handleBookNow = (
    packageTitle: string,
    packageType: string,
    packagePrice: string,
    packageId: string,
  ) => {
    setSelectedPackage(`${packageTitle} - ${packageType}`);
    setSelectedPrice(packagePrice);
    setSelectedPackageId(packageId);
    setIsModal(true);
  };

  return (
    <section className="py-2 px-4 md:px-14" id="services">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PackagesObj.map((item, index) => (
            <div
              key={index}
              className="
                  bg-[#B6E5DF] rounded-2xl overflow-hidden shadow-md flex flex-col
                  max-w-[380px] w-full mx-auto
                  md:max-w-none md:mx-0
                "
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
              <div className="p-4 md:p-5 text-black flex flex-col flex-grow">
                <div className="flex items-start justify-between gap-3 mb-1">
                  <h3 className="font-bold text-xl">{item.title}</h3>

                  {item.discountNote && (
                    <span className="bg-[#00989D]/15 text-[#005657] text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                      {item.discountNote}
                    </span>
                  )}
                </div>

                {item.sessions && (
                  <div className="flex items-center gap-3 mb-2">
                    <p className="text-sm font-medium text-[#005657]">
                      {item.sessions}{" "}
                      {item.sessions === 1 ? "Session" : "Sessions"}
                    </p>
                  </div>
                )}

                <p className="italic mb-3">{item.tagline}</p>

                <ul className="list-disc pl-5 text-sm leading-relaxed space-y-2 mb-4 text-gray-800">
                  {item.list.map((point: string, i: number) => {
                    const isLast = i === item.list.length - 1;

                    return (
                      <li
                        key={i}
                        className={isLast ? "font-semibold text-[#005657]" : ""}
                      >
                        {point}
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-auto">
                  <div className="mb-4">
                    <span className="text-md text-black mr-2">
                      Starts from
                    </span>
                    <span className="text-2xl font-bold text-black">
                      ₹{item.price}
                    </span>
                  </div>
                  <div className="flex justify-center">
                    <button
                      className="bg-white px-6 py-2 text-black text-sm font-semibold rounded-full border border-gray-300 hover:bg-gray-100 transition"
                      onClick={() =>
                        handleBookNow(
                          item.title,
                          item?.type,
                          item?.price,
                          item.id,
                        )
                      }
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageServices;
