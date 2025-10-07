import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import Logo from "../../public/logoFooter.png";
export default function Footer() {
  return (
    <footer className="bg-[#00989D] text-white py-12">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        {/* Left Section */}
        <div>
          {/* Logo & Links */}
          <div className="mb-12">
            {/* Replace with your actual logo path */}
            <Image src={Logo} alt="Psyra Logo" width={200} height={40} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Menu Links */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-400">Menu</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mental Health Concerns */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-400">
                Concerns
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Anxiety
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Depression
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Stress
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Trauma
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Relationships
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-400">
                Services
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Individual Therapy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Couples Therapy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Group Sessions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Online Counseling
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Us Links */}
            <div>
              <h3 className="text-lg font-semibold text-yellow-400">
                About us
              </h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Our Approach
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="hover:text-yellow-200 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-yellow-400 mb-3">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="hover:text-yellow-400 transition-colors"
              >
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/psyra.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="hover:text-yellow-400 transition-colors"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://x.com/PsyraCare"
                className="hover:text-yellow-400 transition-colors"
              >
                <Twitter size={24} />
                <span className="sr-only">X</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/psyra-care/posts/?feedView=all"
                className="hover:text-yellow-400 transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.youtube.com/@YourMentalWellnessPartner"
                className="hover:text-yellow-400 transition-colors"
              >
                <Youtube size={24} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section (Reduced Width) */}
        <div className="flex flex-col justify-center max-w-[380px]">
          <h2 className="text-xl font-bold mb-4">
            Prioritizing Your Mental Health and Well-being
          </h2>
          <p className="text-sm text-white/80 mb-4">
            Join our community and be the first to receive resources, tips, and
            updates to support your mental health journey.
          </p>
          {/* Subscription Form */}
          <div className="flex flex-col sm:flex-row border border-yellow-400 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-3 flex-grow text-black text-sm outline-none"
              aria-label="Email address"
            />
            <button className="bg-yellow-400 text-black font-semibold px-5 py-3 hover:bg-yellow-300 transition-colors">
              Join now
            </button>
          </div>

          <p className="text-xs mt-3 text-white/70">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our team.
          </p>
        </div>
      </div>
      <div className="text-center mt-4 p-2">
        <p className="text-sm md:text-lg mt-3 text-[yellow]">
          Psyra does not deal with medical or psychological emergencies. We are
          not designed to offer support in crisis situations
        </p>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto px-8 pt-6 border-t border-white/20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/80 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Psyra. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/privacy-policy"
              className="hover:text-yellow-200 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-conditions"
              className="hover:text-yellow-200 transition-colors"
            >
              Terms of Service
            </Link>

            <Link
              href="/refund-policy"
              className="hover:text-yellow-200 transition-colors"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
