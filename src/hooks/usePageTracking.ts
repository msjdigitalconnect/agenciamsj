import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/lib/tracking";

export function usePageTracking() {
  const location = useLocation();
  useEffect(() => {
    // Skip admin routes from public analytics
    if (location.pathname.startsWith("/admindev")) return;
    trackEvent("PageView", { path: location.pathname });
  }, [location.pathname]);
}
