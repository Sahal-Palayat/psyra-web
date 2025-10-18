"use client"

function buildWhatsAppHref() {
  const phone = "+918891724199" // replace with your number in Project Settings
  const message = "Hello! I'd like to chat with you."
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export function WhatsAppChat() {
  const href = buildWhatsAppHref()

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6 h-22 w-22 bg-green text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center justify-center"
    >
   <img src="/green-whatsapp-icon-with-phone-it.png" />
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  )
}
