'use client';

import { Analytics } from '@vercel/analytics/react';
import { GoogleAdsense } from "./GoogleAdsense";
import { GoogleAnalytics } from "./GoogleAnalytics";
import { CookieConsent } from "./CookieConsent";
import { Footer } from "./Footer";

function updateConsent(consent: 'granted' | 'denied') {
  if (typeof window !== 'undefined' && window.gtag) {
    try {
      window.gtag('consent', 'update', {
        'ad_storage': consent,
        'analytics_storage': consent
      });
    } catch (error) {
      console.error('Failed to update consent:', error);
    }
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  function handleAcceptCookies() {
    updateConsent('granted');
  }

  function handleDeclineCookies() {
    updateConsent('denied');
  }

  return (
    <>
      <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? ''} />
      <GoogleAdsense clientId={process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID ?? ''} />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      <Analytics mode="production" debug={false} />
      <CookieConsent onAccept={handleAcceptCookies} onDecline={handleDeclineCookies} />
    </>
  );
}
