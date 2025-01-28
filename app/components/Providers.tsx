'use client';

import { Analytics } from '@vercel/analytics/react';
import { GoogleAdsense } from "./GoogleAdsense";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { CookieConsent } from "./CookieConsent";
import { Footer } from "./Footer";

export function Providers({ children }: { children: React.ReactNode }) {
  function handleAcceptCookies() {
    if (typeof window !== 'undefined') {
      (window as Window).gtag('consent', 'update', {
        'ad_storage': 'granted',
        'analytics_storage': 'granted'
      });
    }
  }

  function handleDeclineCookies() {
    if (typeof window !== 'undefined') {
      (window as Window).gtag('consent', 'update', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied'
      });
    }
  }

  return (
    <>
      <GoogleAdsense clientId={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? ''} />
      <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''} />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      <Analytics mode="production" debug={false} />
      <CookieConsent onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />
    </>
  );
}
