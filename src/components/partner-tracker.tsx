'use client';

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

export const PARTNER_COOKIE_NAME = 'inhubflow_partner_code';
export const PARTNER_LOCALSTORAGE_KEY = 'inhubflow_partner_code';

export function getStoredPartnerCode(): string | null {
  if (typeof window === 'undefined') return null;

  try {
    const fromStorage = localStorage.getItem(PARTNER_LOCALSTORAGE_KEY);
    if (fromStorage && fromStorage.trim()) {
      return fromStorage.trim().toUpperCase();
    }
  } catch {}

  try {
    const match = document.cookie.match(new RegExp('(^|;\\s*)' + PARTNER_COOKIE_NAME + '=([^;]+)'));
    if (match && match[2]) {
      return decodeURIComponent(match[2]).trim().toUpperCase();
    }
  } catch {}

  return null;
}

function PartnerTrackerInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    // Detect format ?25-OFF=SE7GH or ?25-off=SE7GH or ?partner=SE7GH
    const rawCode =
      searchParams.get('25-OFF') ||
      searchParams.get('25-off') ||
      searchParams.get('partner');

    if (rawCode && rawCode.trim()) {
      const code = rawCode.trim().toUpperCase();

      try {
        localStorage.setItem(PARTNER_LOCALSTORAGE_KEY, code);
      } catch {}

      try {
        // Persist for 60 days
        const maxAge = 60 * 24 * 60 * 60;
        document.cookie = `${PARTNER_COOKIE_NAME}=${encodeURIComponent(code)}; path=/; max-age=${maxAge}; SameSite=Lax`;
      } catch {}

      console.log(`[InHubFlow Partner] 🤝 Partner link detected and recorded: ${code}`);
    }
  }, [searchParams]);

  return null;
}

export function PartnerTracker() {
  return (
    <Suspense fallback={null}>
      <PartnerTrackerInner />
    </Suspense>
  );
}
