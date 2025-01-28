import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-white/70">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <section className="prose prose-invert max-w-none prose-p:text-white/70 prose-li:text-white/70 prose-headings:text-white">
            <h2>1. Introduction</h2>
            <p>
              Welcome to PoE Item Checker. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we handle your data when you use our website.
            </p>

            <h2>2. Information We Collect</h2>
            <p>When you use our website, we may collect:</p>
            <ul>
              <li>Usage Data (pages visited, time spent, etc.)</li>
              <li>Device Information (browser type, operating system)</li>
              <li>IP Address</li>
              <li>Cookie Data</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Analyze website performance</li>
              <li>Personalize user experience</li>
              <li>Display relevant advertising</li>
            </ul>

            <h2>4. Advertising</h2>
            <p>
              We use Google AdSense to display advertisements. AdSense uses cookies to personalize ads and analyze traffic. This helps us keep our service free while providing relevant content.
            </p>
            <p>
              You can learn more about Google&apos;s practices by visiting their{' '}
              <Link
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 no-underline"
              >
                privacy & terms page
              </Link>
              .
            </p>

            <h2>5. Cookies</h2>
            <p>We use cookies for:</p>
            <ul>
              <li>Essential website functionality</li>
              <li>Analytics (understanding how you use our site)</li>
              <li>Advertising (showing relevant ads)</li>
            </ul>
            <p>
              You can control cookie preferences through our cookie consent banner or your browser settings.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your data. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request data deletion</li>
              <li>Object to data processing</li>
              <li>Withdraw consent</li>
            </ul>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              Our service is not intended for children under 13. We do not knowingly collect data from children under 13.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally. We will notify you of any changes by posting the new policy on this page.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              For questions about this policy, contact us at:{' '}
              <Link
                href="mailto:privacy@poe-item-check.vercel.app"
                className="text-blue-400 hover:text-blue-300 no-underline"
              >
                privacy@poe-item-check.vercel.app
              </Link>
            </p>
          </section>

          <div className="border-t border-white/10 pt-8">
            <Link
              href="/"
              className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 px-4 text-sm font-medium text-white shadow-lg transition-colors hover:from-blue-500 hover:to-cyan-500"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
