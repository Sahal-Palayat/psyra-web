import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ToastContainer } from "@/components/ui/toast"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ToastContainer />
      <div id="modal-root" />
    </>
  )
}
