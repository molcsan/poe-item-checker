interface Window {
  dataLayer: any[];
  gtag: (
    command: 'consent' | 'js' | 'config',
    type: 'update' | 'default' | Date | string,
    consentSettings?: {
      ad_storage?: 'granted' | 'denied';
      analytics_storage?: 'granted' | 'denied';
      page_path?: string;
    }
  ) => void;
}
