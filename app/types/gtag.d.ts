interface GtagConsentArg {
  ad_storage?: 'granted' | 'denied';
  analytics_storage?: 'granted' | 'denied';
}

interface GtagConfigArg {
  page_path?: string;
  [key: string]: unknown;
}

type GtagArg = GtagConsentArg | GtagConfigArg | Date | string;

interface Window {
  dataLayer: Array<{
    event?: string;
    [key: string]: unknown;
  }>;
  gtag: (
    command: 'consent' | 'js' | 'config',
    type: 'update' | 'default' | Date | string,
    args?: GtagArg
  ) => void;
}
