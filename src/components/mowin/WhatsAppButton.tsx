import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="WhatsApp"
    >
      <div className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.3)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.4)] hover:scale-105 active:scale-95 transition-all duration-300">
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </div>
    </a>
  );
}
