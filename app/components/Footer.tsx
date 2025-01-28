import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-card/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} PoE Item Checker. All rights reserved.
        </p>
        <nav className="flex gap-4">
          <Link
            href="/privacy"
            className="text-sm text-white/60 hover:text-white/80 transition-colors"
          >
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
