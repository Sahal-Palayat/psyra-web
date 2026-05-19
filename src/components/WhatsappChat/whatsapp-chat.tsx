"use client";

import Image from "next/image";

function buildWhatsAppHref() {
  // const phone = "918891724199";
  const phone = "+918129724199";
  const message = "Hi, I’m looking for support and would like to talk to someone.";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function WhatsAppChat() {
  const href = buildWhatsAppHref();

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Psyra on WhatsApp"
      className="
      fixed z-[9999] 
      bottom-20 right-4 md:bottom-24 md:right-6
      h-12 w-12 md:h-14 md:w-14 
      rounded-full bg-[#25D366] 
      flex items-center justify-center
      shadow-md
      "
    >
      <Image
        src="/whatsapp-logo.png"
        alt="WhatsApp"
        width={32}
        height={32}
        priority
      />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  );
}