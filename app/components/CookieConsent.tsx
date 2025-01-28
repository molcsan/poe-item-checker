'use client';

import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Toast from '@radix-ui/react-toast';
import Link from 'next/link';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

export function CookieConsent({ onAccept, onDecline }: CookieConsentProps) {
  const [open, setOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      setOpen(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setOpen(false);
    setShowToast(true);
    onAccept();
  }

  function handleDecline() {
    localStorage.setItem('cookie-consent', 'declined');
    setOpen(false);
    onDecline();
  }

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-card p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
            <Dialog.Title className="text-lg font-semibold">Cookie Policy</Dialog.Title>
            <Dialog.Description className="mt-3 text-sm text-white/70">
              We use cookies to enhance your browsing experience and analyze site traffic. This website uses Google AdSense for advertising purposes.
              By accepting, you consent to our use of cookies in accordance with our{' '}
              <Link href="/privacy" className="text-blue-400 hover:text-blue-300">
                privacy policy
              </Link>
              .
            </Dialog.Description>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                onClick={handleDecline}
                className="inline-flex h-9 items-center justify-center rounded-md border border-white/20 bg-transparent px-4 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-600 px-4 text-sm font-medium text-white shadow-lg transition-colors hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Accept
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <Toast.Provider>
        <Toast.Root
          open={showToast}
          onOpenChange={setShowToast}
          className="fixed bottom-4 right-4 z-50 flex items-center gap-4 rounded-lg bg-card p-4 shadow-lg"
        >
          <Toast.Title className="text-sm font-medium text-white">
            Preferences saved
          </Toast.Title>
          <Toast.Description className="text-sm text-white/70">
            Your cookie preferences have been saved.
          </Toast.Description>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </>
  );
}
