// Lightweight client-side tracking stored in localStorage.
// Records PageView, ViewContent, Click, WhatsApp, Contact, Purchase, etc.
import { useSyncExternalStore } from "react";

const EVENTS_KEY = "msj:events";

export type TrackEventType =
  | "PageView"
  | "ViewContent"
  | "Click"
  | "WhatsApp"
  | "Contact"
  | "Purchase"
  | "Lead";

export interface TrackEvent {
  id: string;
  type: TrackEventType;
  timestamp: number;
  path: string;
  device: "mobile" | "tablet" | "desktop";
  language: string;
  referrer: string;
  meta?: Record<string, unknown>;
}

const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key === EVENTS_KEY) cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function detectDevice(): "mobile" | "tablet" | "desktop" {
  if (typeof window === "undefined") return "desktop";
  const w = window.innerWidth;
  if (w < 640) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

export function getEvents(): TrackEvent[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(EVENTS_KEY);
    return raw ? (JSON.parse(raw) as TrackEvent[]) : [];
  } catch {
    return [];
  }
}

export function clearEvents() {
  localStorage.removeItem(EVENTS_KEY);
  emit();
}

export function trackEvent(
  type: TrackEventType,
  meta?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;
  const ev: TrackEvent = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    type,
    timestamp: Date.now(),
    path: window.location.pathname + window.location.hash,
    device: detectDevice(),
    language: navigator.language || "pt-BR",
    referrer: document.referrer || "direct",
    meta,
  };
  const events = getEvents();
  events.push(ev);
  // cap at 5000 events
  const capped = events.slice(-5000);
  localStorage.setItem(EVENTS_KEY, JSON.stringify(capped));
  emit();
}

export function useEvents() {
  return useSyncExternalStore(subscribe, getEvents, () => []);
}

// Range filtering helpers
export type RangeKey = "today" | "7d" | "30d" | "all" | "custom";

export function filterByRange(
  events: TrackEvent[],
  range: RangeKey,
  custom?: { from: number; to: number },
): TrackEvent[] {
  const now = Date.now();
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);
  switch (range) {
    case "today":
      return events.filter((e) => e.timestamp >= startOfToday.getTime());
    case "7d":
      return events.filter((e) => e.timestamp >= now - 7 * 86400000);
    case "30d":
      return events.filter((e) => e.timestamp >= now - 30 * 86400000);
    case "custom":
      if (!custom) return events;
      return events.filter(
        (e) => e.timestamp >= custom.from && e.timestamp <= custom.to,
      );
    case "all":
    default:
      return events;
  }
}

// Aggregations
export function summarize(events: TrackEvent[]) {
  const byType: Record<string, number> = {};
  const byDevice: Record<string, number> = {};
  const byLang: Record<string, number> = {};
  const byPath: Record<string, number> = {};
  events.forEach((e) => {
    byType[e.type] = (byType[e.type] || 0) + 1;
    byDevice[e.device] = (byDevice[e.device] || 0) + 1;
    byLang[e.language] = (byLang[e.language] || 0) + 1;
    byPath[e.path] = (byPath[e.path] || 0) + 1;
  });
  const visits = byType["PageView"] || 0;
  const whatsapp = byType["WhatsApp"] || 0;
  const clicks = byType["Click"] || 0;
  const contacts = byType["Contact"] || 0;
  const conversionRate = visits > 0 ? (whatsapp / visits) * 100 : 0;
  const ctr = visits > 0 ? (clicks / visits) * 100 : 0;
  const roi = whatsapp; // placeholder
  return {
    visits,
    whatsapp,
    clicks,
    contacts,
    conversionRate,
    ctr,
    roi,
    byType,
    byDevice,
    byLang,
    byPath,
  };
}

export function dailySeries(events: TrackEvent[], days = 14) {
  const series: { date: string; PageView: number; WhatsApp: number; Click: number }[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today.getTime() - i * 86400000);
    const next = d.getTime() + 86400000;
    const slice = events.filter((e) => e.timestamp >= d.getTime() && e.timestamp < next);
    series.push({
      date: `${d.getDate()}/${d.getMonth() + 1}`,
      PageView: slice.filter((e) => e.type === "PageView").length,
      WhatsApp: slice.filter((e) => e.type === "WhatsApp").length,
      Click: slice.filter((e) => e.type === "Click").length,
    });
  }
  return series;
}
