import { useEffect } from "react";

// Reads pixel IDs from localStorage (set in /admindev) and injects scripts.
const PIXEL_FB_KEY = "msj:pixel_fb";
const PIXEL_GA_KEY = "msj:pixel_ga";
const PIXEL_GTM_KEY = "msj:pixel_gtm";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function injectScript(id: string, src: string, inline?: string) {
  if (document.getElementById(id)) return;
  const s = document.createElement("script");
  s.id = id;
  s.async = true;
  if (src) s.src = src;
  if (inline) s.innerHTML = inline;
  document.head.appendChild(s);
}

const PixelInjector = () => {
  useEffect(() => {
    const fb = localStorage.getItem(PIXEL_FB_KEY);
    const ga = localStorage.getItem(PIXEL_GA_KEY);
    const gtm = localStorage.getItem(PIXEL_GTM_KEY);

    if (fb) {
      injectScript(
        "fb-pixel",
        "",
        `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${fb}');fbq('track','PageView');`,
      );
    }
    if (ga) {
      injectScript("ga-src", `https://www.googletagmanager.com/gtag/js?id=${ga}`);
      injectScript(
        "ga-init",
        "",
        `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${ga}');`,
      );
    }
    if (gtm) {
      injectScript(
        "gtm-init",
        "",
        `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtm}');`,
      );
    }
  }, []);
  return null;
};

export default PixelInjector;
