"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "../../../../../public/Psyra-Logo-Online-Counselling-Malayalam-green.svg";
import Logo1 from "../../../../../public/Psyra-Logo-Online-Counselling-Malayalam-white.svg";
import CallbackModal from "../../../../components/RequestCallModal";

const LandingNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const shouldHideNavbar = pathname.includes("survey/questions");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    if (newState) {
      window.dispatchEvent(new Event("sidebar-open"));
    }
  };

  if (shouldHideNavbar) return null;

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "About us", href: "/about-us" },
    { name: "Services", href: "/online-counselling-services" },
    { name: "Therapists", href: "/psychologists" },
    { name: "Concerns", href: "/concerns" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.6, ease: "circOut" }}
        className={`fixed left-1/2 z-50 transition-all duration-500 ease-in-out px-4
          ${isScrolled ? "top-4 w-full max-w-[1200px]" : "top-1 md:top-0 w-full max-w-[1440px] md:top-6"}`}
      >
        <div 
          className={`relative flex justify-between items-center h-[64px] md:h-[74px] px-6 md:px-10 transition-all duration-500 rounded-[2rem] border
            ${isScrolled 
              ? "bg-white/90 backdrop-blur-md border-slate-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.04)]" 
              : "bg-teal-500 border-teal-400 shadow-xl shadow-teal-900/10"
            }`}
        >
          {/* Logo */}
          <Link href="/" className="z-20 shrink-0 hover:scale-105 transition-transform active:scale-95">
            <Image
              src={isScrolled ? Logo : Logo1 || "/placeholder.svg"}
              alt="Psyra logo"
              width={100}
              height={40}
              className="w-[70px] md:w-[90px] object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-[14px] font-semibold transition-all duration-300
                  ${isScrolled 
                    ? "text-slate-600 hover:text-teal-600 hover:bg-teal-50" 
                    : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className={`hidden md:flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold transition-all active:scale-95
                ${isScrolled 
                  ? "bg-teal-500 text-white shadow-lg shadow-teal-500/20 hover:bg-teal-600" 
                  : "bg-white text-teal-600 hover:bg-teal-50 shadow-md shadow-black/5"
                }`}
            >
              Request a Callback
            </button>

            <button
              className={`lg:hidden p-2 rounded-full transition-colors
                ${isScrolled ? "text-slate-600 hover:bg-slate-100" : "text-white hover:bg-white/20"}`}
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60]"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[280px] bg-white z-[70] flex flex-col p-8 shadow-2xl rounded-l-[2.5rem]"
          >
            <button onClick={toggleMenu} className="self-end p-2 text-slate-400 hover:text-slate-600 mb-8">
              <X size={28} />
            </button>

            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  className="text-slate-800 text-lg font-bold hover:text-teal-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  toggleMenu();
                }}
                className="w-full bg-teal-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-teal-500/20 active:scale-95 transition-all"
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

export default LandingNavbar;