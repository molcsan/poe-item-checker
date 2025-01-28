import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      <section className="space-y-6 text-white/80">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Overview</h2>
          <p>
            This Privacy Policy describes how PoE Item Checker (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares your personal information when you visit poe-item-check.vercel.app (the &quot;Site&quot;).
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
          <p>
            When you visit the Site, we automatically collect certain information about your device, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>IP address</li>
            <li>Time and date of your visit</li>
            <li>Pages you view</li>
            <li>Time spent on pages</li>
            <li>Referral sources</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Improve and optimize our website</li>
            <li>Analyze user behavior and trends</li>
            <li>Detect and prevent fraud</li>
            <li>Provide personalized advertising</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our Site and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
          </p>
          <p>
            We use the following types of cookies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-medium text-white">Essential cookies:</span> Required for the website to function properly</li>
            <li><span className="font-medium text-white">Analytics cookies:</span> Help us understand how visitors interact with the website (Google Analytics)</li>
            <li><span className="font-medium text-white">Advertising cookies:</span> Used to deliver relevant advertisements (Google AdSense)</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
          <p>
            We use the following third-party services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium text-white">Google Analytics:</span> To analyze website traffic and user behavior.
              <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
                Privacy Policy
              </Link>
            </li>
            <li>
              <span className="font-medium text-white">Google AdSense:</span> To display personalized advertisements.
              <Link href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 ml-1">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Your Rights</h2>
          <p>
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Opt-out of cookies through our cookie consent banner</li>
            <li>Request access to your personal data</li>
            <li>Request correction of your personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p>
            For any questions about this Privacy Policy, please contact us at:
          </p>
          <Link
            href="mailto:privacy@poe-item-check.vercel.app"
            className="text-blue-400 hover:text-blue-300"
          >
            privacy@poe-item-check.vercel.app
          </Link>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
          </p>
          <p>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </section>
    </main>
  );
}
