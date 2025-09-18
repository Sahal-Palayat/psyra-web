import type React from "react";
import type { Metadata } from "next";
import { Geist_Mono, Onest } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose weights as per your design
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Online Counseling Psychology",
  description:
    "Professional mental health Online services with licensed therapists and psychologists. Your trusted partner for mental wellness and therapy sessions.",
  keywords: [
    "online counseling",
    "online psychology",
    "mental health",
    "therapy",
    "online therapy",
    "counseling",
    "psychology",
    "wellness",
    "psyra",
    "online therapy",
  ],
  authors: [{ name: "Psyra Team" }],
  creator: "Psyra",
  publisher: "Psyra",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://psyra.in"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Psyra - Mental Health Support",
    description:
      "Professional mental health Online services with licensed therapists and psychologists",
    url: "https://psyra.in", // Replace with your actual domain
    siteName: "Psyra",
    images: [
      {
        url: "/og-image.png", // Create this 1200x630 image
        width: 1200,
        height: 630,
        alt: "Psyra - Your Mental Wellness Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psyra - Mental Health Support",
    description:
      "Professional mental health Online services with licensed therapists and psychologists",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Next.js 13+ automatically uses app/icon.png as favicon
  // But we can still specify additional icons for better browser support
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" }, // Fallback
    ],
    apple: "/apple-icon.png", // Create this 180x180 image
    shortcut: "/icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#005657" },
    { media: "(prefers-color-scheme: dark)", color: "#005657" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional favicon support for older browsers */}
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#005657" />
        <meta name="msapplication-TileColor" content="#005657" />

        {/* Structured data for better Google indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Psyra",
              url: "https://psyra.in", // Replace with your actual domain
              logo: "https://psyra.in/icon.png", // Replace with your actual domain
              description:
                "Professional mental health Online services with licensed therapists and psychologists",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-88917-24199",
                contactType: "customer service",
              },
            }),
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-53R46XKX4Y"
        />
        <script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-53R46XKX4Y');
          `}
        </script>
      </head>
      <body className={`${onest.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <h1>🚧 Site Under Maintenance 🚧</h1>
        {/* {children} */}
        <Footer />
      </body>
    </html>
  );
}
