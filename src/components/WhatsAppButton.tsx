import { MessageCircle } from "lucide-react";
import { useWhatsAppUrl } from "@/lib/settings";
import { trackEvent } from "@/lib/tracking";

const WhatsAppButton = () => {
  const WHATSAPP_URL = useWhatsAppUrl();
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("WhatsApp", { source: "floating" })}
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
    >
      <MessageCircle className="w-7 h-7 text-white" fill="white" strokeWidth={0} />
    </a>
  );
};

export default WhatsAppButton;
