"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../../public/2Psyra Logo Color-05.svg";
// import { useRouter } from "next/navigation";
import Logo1 from "../../public/Psyra Logo White-04.svg";
import CallbackModal from "../components/RequestCallModal"; 
// import Modal from "./Modal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  // Hide navbar if route includes survey/questions
  const shouldHideNavbar = pathname.includes("survey/questions");

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

  // Function to handle WhatsApp redirection
  // const handleWhatsAppRedirect = () => {
    // const phoneNumber = "+918891724199";
    // const message = encodeURIComponent(`Hi, How can i connect with you?`);
    // window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  //   router.push(`/services`);
  // };

  // Don't render navbar if on survey/questions pages
  if (shouldHideNavbar) {
    return null;
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1200px] h-[60px] md:h-[74px] z-30 transition-all duration-300 rounded-[20px] backdrop-blur-sm ${
          isScrolled ? "bg-[rgba(255,255,255,0.5)] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-8 md:px-6 h-full">
          {/* Logo */}
          <Link href="/" className="z-20">
            <Image
              src={isScrolled ? Logo : Logo1 || "/placeholder.svg"}
              alt="Psyra Logo"
              width={120}
              height={40}
              className="w-[60px] md:w-[80px]"
            />
          </Link>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex space-x-6">
            <Link
              href="/#hero"
              className={`transition-all duration-200
                    ${
                      isScrolled
                        ? "text-[#005657] hover:text-[#00989D] hover:drop-shadow-[0_1px_4px_#00989D50]"
                        : "text-white hover:drop-shadow-[0_1px_4px_#ffffff50]"
                    }
                  `}
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className={`transition-all duration-200
                    ${
                      isScrolled
                        ? "text-[#005657] hover:text-[#00989D] hover:drop-shadow-[0_1px_4px_#00989D50]"
                        : "text-white hover:drop-shadow-[0_1px_4px_#ffffff50]"
                    }
                  `}
            >
              About us
            </Link>
            <Link
              href="/services"
              className={`transition-all duration-200
                    ${
                      isScrolled
                        ? "text-[#005657] hover:text-[#00989D] hover:drop-shadow-[0_1px_4px_#00989D50]"
                        : "text-white hover:drop-shadow-[0_1px_4px_#ffffff50]"
                    }
                  `}
            >
              Services
            </Link>
            <Link
              href="/psychologists"
              className={`transition-all duration-200
                    ${
                      isScrolled
                        ? "text-[#005657] hover:text-[#00989D] hover:drop-shadow-[0_1px_4px_#00989D50]"
                        : "text-white hover:drop-shadow-[0_1px_4px_#ffffff50]"
                    }
                  `}
            >
              Therapists
            </Link>

            <Link
              href="/concerns"
              className={`transition-all duration-200
                    ${
                      isScrolled
                        ? "text-[#005657] hover:text-[#00989D] hover:drop-shadow-[0_1px_4px_#00989D50]"
                        : "text-white hover:drop-shadow-[0_1px_4px_#ffffff50]"
                    }
                  `}
            >
              Concerns
            </Link>

            <Link
              href="/contact-us"
              className={`transition-all duration-200
                    ${
                      isScrolled
                        ? "text-[#005657] hover:text-[#00989D] hover:drop-shadow-[0_1px_4px_#00989D50]"
                        : "text-white hover:drop-shadow-[0_1px_4px_#ffffff50]"
                    }
                  `}
            >
              Contact us
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            // onClick={() => handleWhatsAppRedirect()}
            className="hidden md:inline-block bg-white text-[#00989D] max-w-[120px] md:max-w-[152px] w-[120px] md:w-[152px] h-[36px] md:h-[40px] flex items-center justify-center rounded-full text-sm md:text-base font-medium hover:bg-gray-100 transition-all"
          >
            Request a Callback
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
            className="fixed top-0 right-0 h-full w-full bg-teal-600 z-40 flex flex-col p-6 pt-24"
          >
            {/* ❌ Close Icon */}
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white hover:text-gray-200 transition"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-6">
              <Link
                href="/"
                className="text-white text-lg font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="text-white text-lg font-medium"
                onClick={toggleMenu}
              >
                About us
              </Link>
              <Link
                href="/services"
                className="text-white text-lg font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/psychologists"
                className="text-white text-lg font-medium"
                onClick={toggleMenu}
              >
                Therapists
              </Link>
              <Link
                href="/concerns"
                className="text-white text-lg font-medium"
                onClick={toggleMenu}
              >
                Concerns
              </Link>
              <Link
                href="/contact-us"
                className="text-white text-lg font-medium"
                onClick={toggleMenu}
              >
                Contact us
              </Link>
            </div>

            {/* CTA Button */}
            <div className="mt-auto">
              <button
                // onClick={() => handleWhatsAppRedirect()}
                onClick={() => {
                  setIsModalOpen(true);
                  toggleMenu();
                }}
                className="bg-white text-[#00989D] w-full h-[40px] flex items-center justify-center rounded-full font-medium hover:bg-gray-100 transition-all"
              >
                Request a Callback
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isModalOpen && (
        <CallbackModal open={isModalOpen} setOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default Navbar;
