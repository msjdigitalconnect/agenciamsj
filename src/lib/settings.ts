// Centralized client-side settings & portfolio storage (localStorage)
import { useSyncExternalStore } from "react";

const WA_KEY = "msj:whatsapp_number";
const PORTFOLIO_KEY = "msj:portfolio";

const DEFAULT_WA = "5516993820879";
const DEFAULT_MSG =
  "Olá, gostaria de saber mais sobre a consultoria.";

export type PortfolioItem = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string; // url or dataURL
  tag?: string;
};

const DEFAULT_PORTFOLIO: PortfolioItem[] = [
  {
    id: "p1",
    title: "Site de Vendas - E-commerce",
    description: "Loja completa integrada com checkout otimizado e tráfego pago.",
    url: "https://exemplo.com",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tag: "E-commerce",
  },
  {
    id: "p2",
    title: "Landing Page de Conversão",
    description: "Página focada em captação de leads qualificados.",
    url: "https://exemplo.com",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tag: "Landing Page",
  },
  {
    id: "p3",
    title: "App Institucional",
    description: "Aplicativo mobile com painel administrativo personalizado.",
    url: "https://exemplo.com",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    tag: "App",
  },
];

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = () => cb();
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

// --- WhatsApp number ---
export function getWhatsAppNumber(): string {
  if (typeof window === "undefined") return DEFAULT_WA;
  return localStorage.getItem(WA_KEY) || DEFAULT_WA;
}
export function setWhatsAppNumber(n: string) {
  const cleaned = n.replace(/\D/g, "");
  localStorage.setItem(WA_KEY, cleaned);
  emit();
}
export function buildWhatsAppUrl(message = DEFAULT_MSG) {
  const num = getWhatsAppNumber();
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
export function useWhatsAppNumber() {
  return useSyncExternalStore(subscribe, getWhatsAppNumber, () => DEFAULT_WA);
}
export function useWhatsAppUrl(message?: string) {
  const num = useWhatsAppNumber();
  return `https://wa.me/${num}?text=${encodeURIComponent(message || DEFAULT_MSG)}`;
}

// --- Portfolio ---
export function getPortfolio(): PortfolioItem[] {
  if (typeof window === "undefined") return DEFAULT_PORTFOLIO;
  const raw = localStorage.getItem(PORTFOLIO_KEY);
  if (!raw) return DEFAULT_PORTFOLIO;
  try {
    return JSON.parse(raw);
  } catch {
    return DEFAULT_PORTFOLIO;
  }
}
export function savePortfolio(items: PortfolioItem[]) {
  localStorage.setItem(PORTFOLIO_KEY, JSON.stringify(items));
  emit();
}
export function usePortfolio() {
  return useSyncExternalStore(
    subscribe,
    getPortfolio,
    () => DEFAULT_PORTFOLIO,
  );
}
