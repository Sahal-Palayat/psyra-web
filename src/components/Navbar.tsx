"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../../public/Psyra Logo Color-05.svg";
import Modal from "./Modal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleWhatsAppRedirect = (serviceType: string) => {
    const phoneNumber = "+918891724199"; // Replace with your WhatsApp number (e.g., "911234567890")
    const message = encodeURIComponent(`Hi , How can i start?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1200px] h-[60px] md:h-[74px] z-50 transition-all duration-300 rounded-[50px] backdrop-blur-sm ${
          isScrolled ? "bg-[rgba(255,255,255,0.5)] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-8 md:px-6 h-full">
          {/* Logo */}
          <Link href="/" className="z-20">
            <Image
              src={Logo}
              alt="Psyra Logo"
              width={120}
              height={40}
              className="w-[60px] md:w-[80px]"
            />
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="#hero" className="text-[#005657] hover:text-white">
              Home
            </Link>
            <Link href="#about" className="text-[#005657] hover:text-white">
              About us
            </Link>
            <Link href="#services" className="text-[#005657] hover:text-white">
              Services
            </Link>

            <Link href="#contact" className="text-[#005657] hover:text-white">
              Contact us
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleWhatsAppRedirect}
            className="hidden md:inline-block bg-white text-[#00989D] max-w-[120px] md:max-w-[152px] w-[120px] md:w-[152px] h-[36px] md:h-[40px] flex items-center justify-center rounded-full text-sm md:text-base font-medium hover:bg-gray-100 transition-all"
          >
            Get Started
          </button>

          {/* Hamburger Menu - Mobile */}
          <button
            className="md:hidden ml-4 z-20 text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full bg-[#9EE0D6] z-40 flex flex-col p-6 pt-24"
          >
            <div className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-white text-lg font-medium hover:text-white"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-white text-lg font-medium hover:text-white"
                onClick={toggleMenu}
              >
                About us
              </Link>
              <Link
                href="#services"
                className="text-white text-lg font-medium hover:text-white"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-white text-lg font-medium hover:text-white"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              <Link
                href="#contact"
                className="text-white text-lg font-medium hover:text-white"
                onClick={toggleMenu}
              >
                Contact us
              </Link>
            </div>
            <div className="mt-auto">
              <button
                onClick={() => handleWhatsAppRedirect}
                className="bg-white text-[#00989D] w-full h-[40px] flex items-center justify-center rounded-full font-medium hover:bg-gray-100 transition-all"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        type={"getStarted"}
      />
    </>
  );
};

export default Navbar;
