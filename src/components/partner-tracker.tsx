'use client';

import { useEffect, useState, Suspense } from 'react';
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

export function usePartnerDiscount() {
  const [partnerCode, setPartnerCode] = useState<string | null>(null);

  useEffect(() => {
    const code = getStoredPartnerCode();
    setPartnerCode(code);
  }, []);

  return {
    hasPartnerDiscount: !!partnerCode,
    partnerCode,
  };
}

function PartnerTrackerInner() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!searchParams) return;

    // Detect format ?20-OFF=SE7GH or ?25-OFF=SE7GH or ?partner=SE7GH
    const rawCode =
      searchParams.get('20-OFF') ||
      searchParams.get('20-off') ||
      searchParams.get('25-OFF') ||
      searchParams.get('25-off') ||
      searchParams.get('partner') ||
      searchParams.get('ref');

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
