"use client";

import { usePathname } from "next/navigation"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ToastContainer } from "@/components/ui/toast"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/landing-page";

  return (
    <>
      {!isLandingPage && <Navbar />}
      {children}
      <Footer />
      <ToastContainer />
      <div id="modal-root" />
    </>
  )
}
