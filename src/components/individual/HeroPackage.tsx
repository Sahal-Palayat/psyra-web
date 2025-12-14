"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BookingModal } from "../BookingModal/bookingModal";
import PackageServices from "./PackagesServices";
import WhyPackage from "@/components/packages/WhyPackage";

interface PackageItem {
  type: string;
  title: string;
  tagline: string;
  list: string[];
  price: string;
  cta: string;
}

interface PackagesProps {
  data: PackageItem[];
}

const HeroPackages = ({ data }: PackagesProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");
  const [packagePrice, setPackagePrice] = useState<string>("");

  return (
    <div className="mb-12">
      <div className="relative bg-teal-600 text-white flex items-center">
        {/* Background Image Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full min-h-[500px]"
          id="home"
        >
          {/* <Image
            src={isMobile ? MobileHero : ImageS3} // Conditionally show images
            alt="Background"
            fill
            className="object-cover"
            priority
          /> */}
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="container mx-auto px-4 py-24 md:py-24 relative z-0 text-center"
        >
          <div className="relative w-full max-w-6xl mx-auto mb-16 mt-6 px-4 text-center">
            {/* Psyra Logo */}
            {/* <motion.div
              className="flex justify-center mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image src={Logo} alt="Psyra Logo" width={200} height={150} />
            </motion.div> */}

            <motion.p
              className="font-bold text-[#9EE0D6] text-3xl md:text-[42px] leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Choose The <span className="text-white"> Package</span> for you
            </motion.p>

            {/* Button */}
            <div className="w-full flex justify-center mt-4">
              <WhyPackage />
            </div>
          </div>
        </motion.div>

        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          packageTitle={selectedPackage}
          price={packagePrice}
        />
      </div>
      <div className="relative z-10 -mt-34 md:-mt-28">
        <PackageServices
          setIsModal={setIsModalOpen}
          setSelectedPackage={setSelectedPackage}
          setSelectedPrice={setPackagePrice}
          PackagesObj={data}
        />
      </div>
    </div>
  );
};

export default HeroPackages;
