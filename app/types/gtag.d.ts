interface Window {
  gtag: (
    command: 'consent',
    type: 'update',
    consentSettings: {
      ad_storage?: 'granted' | 'denied';
      analytics_storage?: 'granted' | 'denied';
    }
  ) => void;
}
