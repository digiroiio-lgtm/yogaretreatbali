import { whatsappDefaultMessage, whatsappPhone } from "@/lib/config";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(whatsappDefaultMessage)}`}
      className="fixed bottom-5 right-5 z-40 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-700"
      aria-label="Chat on WhatsApp"
    >
      Book via WhatsApp
    </a>
  );
}
