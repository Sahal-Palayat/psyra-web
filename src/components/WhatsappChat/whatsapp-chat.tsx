"use client"

function buildWhatsAppHref() {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "15551234567" // replace with your number in Project Settings
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
      className="fixed z-50 bottom-4 right-4 md:bottom-6 md:right-6 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring flex items-center justify-center"
    >
      <svg aria-hidden="true" viewBox="0 0 32 32" width="22" height="22" className="fill-current">
        <path d="M19.11 17.18c-.3-.15-1.77-.87-2.04-.97-.27-.1-.46-.15-.66.16-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.18-.24-.59-.48-.51-.66-.52-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.51 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.17 4.55 3.04 1.3 3.04.87 3.59.84.55-.03 1.77-.72 2.02-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM16.02 3.2c-7.12 0-12.88 5.76-12.88 12.88 0 2.27.6 4.4 1.67 6.24L3.2 28.8l6.7-1.59c1.78.97 3.8 1.53 5.96 1.53 7.12 0 12.88-5.76 12.88-12.88S23.14 3.2 16.02 3.2zm7.52 20.4c-.32.9-1.9 1.81-2.66 1.93-.68.11-1.54.16-2.49-.16-2.88-1-6.07-3.03-7.91-5.77-1.18-1.72-2.34-3.86-1.47-6.1.34-.86 1.51-1.6 2.06-1.65.53-.05 1.23-.07 1.89.05.61.12.95.95 1.2 1.63.29.77.57 1.37.6 1.41.09.15.15.34.03.55-.12.2-.18.32-.36.51-.18.2-.31.34-.45.55-.15.2-.31.42-.13.78.18.36.8 1.3 1.72 2.1 1.19 1.05 2.19 1.38 2.56 1.56.38.18.61.16.84-.1.22-.26.97-1.12.97-1.12.23-.26.4-.22.66-.13.27.09 1.72.81 2.02.95.3.14.5.22.58.35.08.13.08.99-.24 1.9z" />
      </svg>
      <span className="sr-only">Chat on WhatsApp</span>
    </a>
  )
}
