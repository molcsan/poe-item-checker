import Script from 'next/script'

interface GoogleAdsenseProps {
  clientId: string
}

export function GoogleAdsense({ clientId }: GoogleAdsenseProps) {
  if (!clientId) return null

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${clientId}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
